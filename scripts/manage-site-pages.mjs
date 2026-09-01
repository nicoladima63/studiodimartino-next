import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "src", "app");
const registryPath = path.join(rootDir, "src", "lib", "site-pages.ts");
const port = 4317;
const changeFrequencies = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];

async function findPageFiles(directory = appDir, files = []) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "api" && !entry.name.startsWith("_")) await findPageFiles(fullPath, files);
    } else if (/^page\.(js|jsx|ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractProperty(source, property) {
  const match = source.match(new RegExp(`${property}:\\s*(["'])([\\s\\S]*?)\\1`));
  return match?.[2]?.replace(/\s+/g, " ").trim() ?? "";
}

function titleFromPath(routePath) {
  return routePath === "/"
    ? "Home"
    : routePath.slice(1).split("/").map((segment) => segment.replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())).join(" · ");
}

async function scanPages() {
  const files = await findPageFiles();
  return Promise.all(files.map(async (filePath) => {
    const source = await fs.readFile(filePath, "utf8");
    const relativeDirectory = path.relative(appDir, path.dirname(filePath));
    const pathFromFolder = relativeDirectory ? `/${relativeDirectory.split(path.sep).join("/")}` : "/";
    const metadataPath = extractProperty(source, "path");
    const pagePath = metadataPath === "" && /path:\s*["']{2}/.test(source)
      ? "/"
      : metadataPath || pathFromFolder;

    return {
      path: pagePath,
      suggestedName: titleFromPath(pagePath),
      suggestedDescription: extractProperty(source, "description"),
      metadataTitle: extractProperty(source, "title"),
    };
  }));
}

async function readRegistry() {
  const source = await fs.readFile(registryPath, "utf8");
  const match = source.match(/export const sitePages = (\[[\s\S]*?\]) as const;/);
  if (!match) throw new Error("Impossibile leggere sitePages da src/lib/site-pages.ts.");
  return Function(`"use strict"; return (${match[1]});`)();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]);
}

function renderForm(pages) {
  const existingPages = pages.filter((page) => !page.isNew);
  const newPages = pages.filter((page) => page.isNew);
  const newCards = newPages.map((page, index) => `
    <article class="card">
      <label class="include"><input type="checkbox" name="include-${index}"> Includi in sitemap e llms.txt</label>
      <p class="path">${escapeHtml(page.path)} <span class="new">Nuova</span></p>
      <label>Nome<input name="name-${index}" value="${escapeHtml(page.name)}" required></label>
      <label>Descrizione<input name="description-${index}" value="${escapeHtml(page.description)}" required></label>
      <div class="grid">
        <label>Tipo<select name="kind-${index}"><option value="core" ${page.kind === "core" ? "selected" : ""}>Pagina principale</option><option value="service" ${page.kind === "service" ? "selected" : ""}>Servizio</option></select></label>
        <label>Priorità<input name="priority-${index}" type="number" min="0" max="1" step="0.1" value="${page.priority}"></label>
        <label>Frequenza<select name="frequency-${index}">${changeFrequencies.map((frequency) => `<option value="${frequency}" ${page.changeFrequency === frequency ? "selected" : ""}>${frequency}</option>`).join("")}</select></label>
      </div>
      <label>Descrizione del servizio <span class="hint">(richiesta se selezioni “Servizio”)</span><textarea name="serviceDescription-${index}">${escapeHtml(page.serviceDescription ?? "")}</textarea></label>
      <input type="hidden" name="path-${index}" value="${escapeHtml(page.path)}">
    </article>`).join("");
  const existingOptions = existingPages.map((page) => `<option value="${escapeHtml(page.path)}">${escapeHtml(page.name)} (${escapeHtml(page.path)})</option>`).join("");
  const existingJson = JSON.stringify(existingPages).replace(/</g, "\\u003c");
  const newPathsJson = JSON.stringify(newPages.map((page) => page.path)).replace(/</g, "\\u003c");

  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>Gestione pagine sito</title><style>
    body{font:16px system-ui,sans-serif;max-width:900px;margin:32px auto;padding:0 16px;background:#f6f8f7;color:#19312b}h1{margin-bottom:6px}.intro{color:#52635e}.card{background:#fff;border:1px solid #d5ded9;border-radius:12px;padding:18px;margin:16px 0;box-shadow:0 2px 7px #00000008}.path{font-family:monospace;margin:12px 0}.new{background:#d8f1df;color:#176331;border-radius:99px;padding:3px 8px;font:12px system-ui}.include{font-weight:700}label{display:block;margin:12px 0;font-weight:600}input,select,textarea{display:block;width:100%;box-sizing:border-box;margin-top:5px;padding:9px;border:1px solid #aebdb7;border-radius:6px;font:inherit}input[type=checkbox]{display:inline;width:auto;margin-right:6px}textarea{min-height:70px}.grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px}.hint{font-weight:400;color:#65756f;font-size:13px}button{background:#1e6950;color:#fff;border:0;border-radius:8px;padding:12px 18px;font-weight:700;font-size:16px;cursor:pointer}.status{margin-left:10px}.section{margin-top:36px}@media(max-width:650px){.grid{grid-template-columns:1fr}}
  </style></head><body><h1>Gestione pagine indicizzabili</h1><p class="intro">Le nuove route richiedono approvazione. Le pagine già registrate si modificano una alla volta.</p><section class="section"><h2>Nuove pagine rilevate</h2><form id="new-pages">${newCards || "<p>Nessuna nuova pagina da approvare.</p>"}${newCards ? '<button>Salva nuove pagine</button><span class="status" id="new-status"></span>' : ""}</form></section><section class="section"><h2>Modifica pagina esistente</h2><label>Pagina<select id="existing-select">${existingOptions}</select></label><form id="existing-form" class="card"><p class="path" id="existing-path"></p><label>Nome<input name="name" required></label><label>Descrizione<input name="description" required></label><div class="grid"><label>Tipo<select name="kind"><option value="core">Pagina principale</option><option value="service">Servizio</option></select></label><label>Priorità<input name="priority" type="number" min="0" max="1" step="0.1"></label><label>Frequenza<select name="frequency">${changeFrequencies.map((frequency) => `<option value="${frequency}">${frequency}</option>`).join("")}</select></label></div><label>Descrizione del servizio <span class="hint">(richiesta se selezioni “Servizio”)</span><textarea name="serviceDescription"></textarea></label><button>Salva modifica</button><span class="status" id="existing-status"></span></form></section><script>
    const existingPages=${existingJson};const newPaths=${newPathsJson};const select=document.querySelector('#existing-select');const existingForm=document.querySelector('#existing-form');const existingPath=document.querySelector('#existing-path');
    function selectedPage(){return existingPages.find((page)=>page.path===select.value)}
    function loadEditor(){const page=selectedPage();if(!page)return;existingPath.textContent=page.path;existingForm.name.value=page.name;existingForm.description.value=page.description;existingForm.kind.value=page.kind;existingForm.priority.value=page.priority;existingForm.frequency.value=page.changeFrequency;existingForm.serviceDescription.value=page.serviceDescription||''}
    async function save(pages,status){status.textContent='Salvataggio…';const response=await fetch('/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pages})});const result=await response.json();status.textContent=result.message;if(response.ok)setTimeout(()=>location.reload(),700)}
    select.addEventListener('change',loadEditor);loadEditor();
    existingForm.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(existingForm);const updated={path:select.value,include:true,name:data.get('name'),description:data.get('description'),kind:data.get('kind'),priority:Number(data.get('priority')),changeFrequency:data.get('frequency'),serviceDescription:data.get('serviceDescription')};save(existingPages.map((page)=>page.path===updated.path?updated:{...page,include:true}),document.querySelector('#existing-status'))});
    const newForm=document.querySelector('#new-pages');newForm.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(newForm);const pending=newPaths.map((path,index)=>({path,include:data.get('include-'+index)==='on',name:data.get('name-'+index),description:data.get('description-'+index),kind:data.get('kind-'+index),priority:Number(data.get('priority-'+index)),changeFrequency:data.get('frequency-'+index),serviceDescription:data.get('serviceDescription-'+index)}));save([...existingPages.map((page)=>({...page,include:true})),...pending],document.querySelector('#new-status'))});
  </script></body></html>`;
}

function registrySource(pages) {
  return [
    'export const SITE_URL = "https://www.studiodimartino.eu";',
    "",
    `export const sitePages = ${JSON.stringify(pages, null, 2)} as const;`,
    "",
    'export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;',
    "",
  ].join("\n");
}

function validatePages(pages) {
  if (!Array.isArray(pages)) throw new Error("Dati non validi.");
  return pages.filter((page) => page.include).map((page) => {
    const result = {
      name: String(page.name ?? "").trim(),
      path: String(page.path ?? "").trim(),
      description: String(page.description ?? "").trim(),
      kind: page.kind === "service" ? "service" : "core",
      changeFrequency: String(page.changeFrequency ?? "monthly"),
      priority: Number(page.priority),
    };
    if (!result.name || !/^\//.test(result.path) || !result.description) throw new Error(`Completa nome, URL e descrizione per ${result.path || "una pagina"}.`);
    if (!changeFrequencies.includes(result.changeFrequency) || !Number.isFinite(result.priority) || result.priority < 0 || result.priority > 1) throw new Error(`Impostazioni sitemap non valide per ${result.path}.`);
    if (result.kind === "service") {
      const serviceDescription = String(page.serviceDescription ?? "").trim();
      if (!serviceDescription) throw new Error(`Inserisci la descrizione del servizio per ${result.name}.`);
      return { ...result, serviceDescription };
    }
    return result;
  });
}

async function formPages() {
  const [scanned, registered] = await Promise.all([scanPages(), readRegistry()]);
  const byPath = new Map(registered.map((page) => [page.path, page]));
  return scanned.sort((a, b) => a.path.localeCompare(b.path)).map((page) => {
    const current = byPath.get(page.path);
    return {
      path: page.path,
      include: Boolean(current),
      isNew: !current,
      name: current?.name ?? page.suggestedName,
      description: current?.description || page.suggestedDescription || page.metadataTitle || `Pagina ${page.suggestedName}.`,
      kind: current?.kind ?? "core",
      priority: current?.priority ?? 0.8,
      changeFrequency: current?.changeFrequency ?? "monthly",
      serviceDescription: current?.serviceDescription ?? "",
    };
  });
}

const server = createServer(async (request, response) => {
  try {
    if (request.method === "GET" && request.url === "/") {
      const pages = await formPages();
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(renderForm(pages));
      return;
    }
    if (request.method === "POST" && request.url === "/save") {
      let body = "";
      for await (const chunk of request) body += chunk;
      const pages = validatePages(JSON.parse(body).pages);
      await fs.writeFile(registryPath, registrySource(pages), "utf8");
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Salvato." }));
      return;
    }
    response.writeHead(404).end();
  } catch (error) {
    response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ message: error instanceof Error ? error.message : "Errore imprevisto." }));
  }
});

server.listen(port, "127.0.0.1", () => {
  const url = `http://127.0.0.1:${port}`;
  console.log(`Gestione pagine disponibile su ${url}`);
  const command = process.platform === "win32" ? ["cmd", ["/c", "start", "", url]] : process.platform === "darwin" ? ["open", [url]] : ["xdg-open", [url]];
  execFile(command[0], command[1]).unref();
});
