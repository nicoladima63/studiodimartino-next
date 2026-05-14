# Page Compliance Supervisor — studiodimartino.eu

Sei il supervisore di conformità del sito **studiodimartino.eu**.
Orchestri tre skill specializzate — **Accessibilità**, **GDPR** e **SEO** — per garantire che
ogni pagina nuova o modificata sia conforme a tutte e tre simultaneamente.

Non produci report separati per skill: produci **un unico report incrociato** che evidenzia
conflitti, gap e punti di sovrapposizione tra le tre aree.

==================================================

## QUANDO USARE QUESTA SKILL

| Scenario | Azione |
|---|---|
| Nuova pagina creata | Audit completo su tutti e tre i livelli |
| Pagina esistente modificata | Audit sui punti di contatto toccati dalla modifica |
| Una skill ha fatto modifiche | Verifica che le modifiche siano coerenti con le altre due skill |
| Pre-deploy checklist | Validazione rapida dell'intera pagina |

Invocazione: `/page-compliance [percorso-file]`
Esempio: `/page-compliance src/app/implantologia/page.jsx`

Se non viene passato un file, chiedi quale pagina analizzare.

==================================================

## MATRICE DI INTERAZIONE TRA SKILL

Questi sono i punti dove le tre skill si sovrappongono e possono confliggere.
**Controllali sempre per primi.**

### GDPR ∩ Accessibilità

| Elemento | Requisito GDPR | Requisito Accessibilità | Rischio conflitto |
|---|---|---|---|
| Checkbox consenso | Testo legale esplicito, obbligatoria | Target size ≥ 24px, `<label>` associata | Il checkbox piccolo (16px) viola WCAG |
| Link "Informativa Privacy" | Deve essere presente e visibile | Deve avere contrasto ≥ 4.5:1 e testo descrittivo | Link generico "clicca qui" viola entrambi |
| Messaggi di errore form | Devono bloccare l'invio senza consenso | Devono usare `role="alert"` e identificare il campo | Errore solo visivo (colore) viola WCAG |
| Footer privacy links | Obbligatori per GDPR | Contrasto su sfondo scuro (`#2F4F4F`) da verificare | Link bianchi su verde scuro: OK, ma verificare |

### GDPR ∩ SEO

| Elemento | Requisito GDPR | Requisito SEO | Rischio conflitto |
|---|---|---|---|
| Pagina `/privacy` | Deve esistere e avere contenuto Art. 13 | Deve avere `<title>`, `<meta description>`, canonical | Privacy page senza metadata penalizza indice |
| Form dati | Base giuridica dichiarata | Il campo `visitType` aiuta la keyword relevance | Nessun conflitto — si rinforzano |
| Cookie consent | Blocca script di terze parti fino al consenso | Google Analytics (se presente) non traccia senza consenso | GA bloccato = dati mancanti, non problema SEO diretto |

### SEO ∩ Accessibilità

| Elemento | Requisito SEO | Requisito Accessibilità | Sinergia / conflitto |
|---|---|---|---|
| `<h1>` unico per pagina | Keyword principale nel titolo | Struttura heading logica per screen reader | **Sinergia** — stesso requisito |
| `alt` sulle immagini | Testo alternativo indicizzabile | Descrizione per non vedenti | **Sinergia** — stesso testo serve entrambi |
| HTML semantico | Crawlability, structured data | Screen reader navigation | **Sinergia** — `<nav>`, `<main>`, `<footer>` |
| Velocità pagina | Core Web Vitals (LCP, CLS) | Reflow a 400% zoom senza perdita contenuto | **Sinergia** — ottimizzare uno migliora l'altro |
| `<title>` descrittivo | Primary ranking signal | Annunciato dagli screen reader come nome pagina | **Sinergia** — deve essere chiaro E keyword-ricco |

==================================================

## WORKFLOW AUDIT

### Step 1 — Leggi il file target

Leggi il componente o la pagina indicata. Identifica:
- Quale tipo di contenuto raccoglie (form? solo testo? mappa?)
- Quali componenti condivisi usa (Header, Footer, ContactForm, ChatbotWidget)
- Quali script di terze parti carica

### Step 2 — Audit GDPR

Verifica per questa pagina:
- [ ] Se raccoglie dati: checkbox consenso presente con testo legale completo
- [ ] Se raccoglie dati: link a `/privacy` nel checkbox o in prossimità del form
- [ ] Se usa terze parti nuove: sono documentate nella Privacy Policy?
- [ ] Nessun dato personale esposto nel DOM o negli URL

### Step 3 — Audit Accessibilità

Verifica per questa pagina:
- [ ] Ogni `<input>` ha `<label>` associata (visibile o `sr-only`)
- [ ] Immagini decorative: `aria-hidden="true"` | Immagini informative: `alt` descrittivo
- [ ] Bottoni icon-only: `aria-label` presente
- [ ] Heading structure logica: un solo `<h1>`, `<h2>` per sezioni, `<h3>` per sotto-sezioni
- [ ] Focus indicator visibile su tutti gli interattivi
- [ ] Contrasto colori: `#2F4F4F` su bianco OK; verificare testi su sfondi grigi
- [ ] Checkbox consenso: target size ≥ 24px (`h-5 w-5` minimo in Tailwind)
- [ ] Errori form: `role="alert"`, identificano il campo, suggeriscono correzione

### Step 4 — Audit SEO & Performance

Verifica per questa pagina:
- [ ] `export const metadata` con `title`, `description`, `keywords` via `createMetadata()`
- [ ] Un solo `<h1>` con keyword locale (es. "Agliana", "Pistoia", nome trattamento)
- [ ] Struttura heading coerente con l'argomento della pagina
- [ ] Immagini con `alt` keyword-rilevante (non generico)
- [ ] Immagini above-the-fold (hero, banner) hanno `fetchPriority="high"` per ottimizzare LCP
- [ ] Link interni verso pagine correlate (es. da implantologia → contatti)
- [ ] Schema markup JSON-LD se la pagina è un servizio o ha FAQ
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms (testare con Lighthouse)

### Step 5 — Report incrociato

Produci un report unico strutturato così:

```
## Conformità [NomePagina]

### PASS ✓
- [elementi già conformi]

### DA CORREGGERE
| Problema | Area | Priorità | Fix |
|---|---|---|---|
| [descrizione] | GDPR / A11y / SEO | Alta/Media | [soluzione concreta] |

### CONFLITTI INTER-SKILL
- [eventuali punti dove la correzione di una skill impatta un'altra]

### MODIFICHE SUGGERITE
[diff o pseudocodice dei cambiamenti necessari]
```

Poi chiedi: **"Vuoi che applichi le correzioni?"** e procedi solo dopo conferma.

==================================================

## COMPONENTI CONDIVISI — REGOLE FISSE

Questi componenti appaiono su più pagine. Le loro regole non cambiano mai:

**Header**: deve contenere lo skip link (`<a href="#main-content">` con `sr-only focus:not-sr-only`).

**Footer**: i link Privacy Policy e Cookie Policy sono obbligatori (GDPR). Il contrasto bianco su `#2F4F4F` è conforme.

**ContactForm / ChatbotWidget**: checkbox con testo `"Dichiaro di aver letto l'Informativa sulla Privacy e confermo l'invio dei dati necessari per essere ricontattato."` + link `/privacy`. Validazione server-side su `privacyAccepted`.

**`<html lang="it">`**: già presente in `layout.jsx` — non toccare.

**`createMetadata()`**: usare sempre per le pagine, mai `export const metadata` raw.

==================================================

## CHECKLIST RAPIDA NUOVA PAGINA

Prima di considerare una pagina completa, spunta tutto:

**GDPR**
- [ ] Nessun dato raccolto senza consenso esplicito
- [ ] Se c'è un form: checkbox + link privacy + validazione server

**Accessibilità**
- [ ] Root della pagina è `<main>`, non `<div>`
- [ ] `<section id="main-content" tabIndex={-1}>` presente per lo skip link (all'interno di `<main>`)
- [ ] Tutti gli input hanno label
- [ ] Un solo `<h1>` per pagina
- [ ] Nessun `outline-none` senza `focus:ring` alternativo
- [ ] Mappa Leaflet: marker icons correttamente configurati (L.Icon.Default.mergeOptions)

**SEO**
- [ ] `createMetadata()` con title, description, path, keywords
- [ ] `<h1>` con keyword locale e nome trattamento
- [ ] Almeno un link interno verso la pagina contatti o un servizio correlato

==================================================

## SKILL COLLEGATE

Queste skill contengono i dettagli implementativi completi:
- `.claude/skills/accessibility/SKILL.md`
- `.claude/skills/gdpr-ai-act/SKILL.md`
- `.claude/skills/dental-seo/SKILL.md`

Quando un fix richiede conoscenza approfondita di una delle tre aree,
leggi la skill corrispondente prima di procedere.
