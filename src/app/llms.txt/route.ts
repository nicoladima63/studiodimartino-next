import { absoluteUrl, sitePages, SITE_URL } from "@/lib/site-pages";

const LEGAL_PATHS = ["/cookie-policy", "/privacy"];

function formatPages(pages: (typeof sitePages)[number][]) {
  return pages
    .map((page) => `- [${page.name}](${absoluteUrl(page.path)}): ${page.description}`)
    .join("\n");
}

export function GET() {
  const services = sitePages.filter((page) => page.kind === "service");
  const legal = sitePages.filter((page) => LEGAL_PATHS.includes(page.path));
  const core = sitePages.filter(
    (page) => page.kind === "core" && !LEGAL_PATHS.includes(page.path)
  );

  const body = `# Studio Dentistico Dr. Nicola Di Martino

> Studio dentistico ad Agliana (PT), Toscana. Odontoiatria generale, implantologia, ortodonzia, estetica dentale e igiene orale, con un approccio dedicato ai pazienti con ansia dello studio dentistico.

Indirizzo: Via Michelangelo Buonarroti, 15 — 51031 Agliana (PT)
Telefono: +39 0574 712060
WhatsApp: +39 346 473 1192
Email: segreteria@studiodimartino.eu
Orari: Lun/Mer/Gio 9-13 e 15-19 · Mar/Ven 9-16 continuato · Sab/Dom chiuso
Sito: ${SITE_URL}

## Servizi

${formatPages(services)}

## Pagine

${formatPages(core)}

## Optional

${formatPages(legal)}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
