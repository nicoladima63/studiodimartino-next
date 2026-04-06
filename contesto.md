# Contesto del progetto

Stai lavorando sul sito web dello **Studio Dentistico Dr. Nicola Di Martino**, dentista ad Agliana (PT).

Il sito era una **Single Page Application (SPA)** con routing hash (`/#/pagina`), che causava un problema SEO critico: i crawler di Google e i bot AI non riuscivano a leggere il contenuto perché era tutto racchiuso in un tag `<noscript>`. Il motore di ricerca indicizzava il sito come "Sito in costruzione".

La migrazione a **Next.js con App Router** risolve questo problema tramite Server Side Rendering (SSR) e generazione statica (SSG).

---

# Obiettivi SEO da raggiungere

1. Ogni pagina deve avere contenuto HTML leggibile lato server (no JavaScript richiesto)
2. Ogni pagina deve avere metadata SEO ottimizzati (title, description, canonical)
3. Dati strutturati JSON-LD già presenti nel vecchio sito vanno mantenuti e migliorati
4. URL puliti senza `#` (es. `/implantologia` invece di `/#/implantologia`)
5. Sitemap.xml generata automaticamente
6. robots.txt configurato correttamente

---

# Informazioni sul business (usa queste per contenuti e metadata)

**Nome studio:** Studio Dentistico Dr. Nicola Di Martino  
**Indirizzo:** Via Michelangelo Buonarroti, 15 - 51031 Agliana (PT)  
**Telefono:** 0574 712060  
**WhatsApp:** 346 473 1192  
**Email:** segreteria@studiodimartino.eu  
**URL canonico:** https://studiodimartino.eu  
**Coordinate:** lat 43.9015278, lon 11.0136389  

**Orari:**
- Lunedì: 9:00-13:00 / 15:00-19:00
- Martedì: 9:00-16:00 (orario continuato)
- Mercoledì: 9:00-13:00 / 15:00-19:00
- Giovedì: 9:00-13:00 / 15:00-19:00
- Venerdì: 9:00-16:00 (orario continuato)

**Team:**
- Dr. Nicola Di Martino — Odontoiatra, Health Coach (fondatore, ex odontotecnico)
- Dott. Roberto Calvisi — Chirurgo Implantologo
- Dott. Giacomo D'Orlandi — Ortodontista
- Dott.ssa Lara Armandi — Igienista Dentale
- Dott.ssa Anet Jablonvsky — Igienista Dentale
- Sig.ra Cristina Baldi — Segretaria
- Sig.ra Cristina Ponzecchi — Assistente alla poltrona

**Servizi principali:**
- Odontoiatria generale (detartrasi, otturazioni, devitalizzazioni)
- Implantologia dentale (impianti singoli, arcata completa, mini-invasiva)
- Ortodonzia (apparecchi tradizionali, ortodonzia invisibile, allineatori trasparenti)
- Estetica dentale (sbiancamento, faccette in ceramica, ricostruzioni estetiche)
- Igiene dentale e prevenzione

**USP (Unique Selling Proposition):**
- Dr. Di Martino è anche odontotecnico → segue ogni caso dalla progettazione alla realizzazione
- Health Coach certificato → approccio olistico alla salute orale
- Prima visita gratuita e senza impegno
- Approccio empatico, adatto anche a pazienti con paura del dentista

---

# Struttura pagine da creare in Next.js (App Router)

```
app/
├── layout.tsx              ← layout globale con metadata base e JSON-LD LocalBusiness
├── page.tsx                ← Homepage
├── implantologia/
│   └── page.tsx
├── ortodonzia/
│   └── page.tsx
├── estetica-dentale/
│   └── page.tsx
├── igiene-prevenzione/
│   └── page.tsx
├── odontoiatria-generale/
│   └── page.tsx
├── il-team/
│   └── page.tsx
├── contatti/
│   └── page.tsx
├── info-pazienti/
│   └── page.tsx
├── istruzioni-ortodontiche/
│   └── page.tsx
├── privacy/
│   └── page.tsx
└── sitemap.ts              ← sitemap automatica
```

---

# Requisiti tecnici per ogni pagina

## metadata export (in ogni page.tsx)
```ts
export const metadata: Metadata = {
  title: 'Titolo Pagina | Studio Dentistico Di Martino Agliana',
  description: 'Descrizione ottimizzata ~155 caratteri con keyword locale.',
  alternates: {
    canonical: 'https://studiodimartino.eu/slug-pagina',
  },
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://studiodimartino.eu/slug-pagina',
    siteName: 'Studio Dentistico Di Martino',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://studiodimartino.eu/og-image.jpg', width: 1200, height: 630 }],
  },
}
```

## JSON-LD da includere nel layout.tsx globale
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Studio Dentistico Dr. Nicola Di Martino",
  "url": "https://studiodimartino.eu",
  "telephone": "+39-0574-712060",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Michelangelo Buonarroti, 15",
    "addressLocality": "Agliana",
    "addressRegion": "PT",
    "postalCode": "51031",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.9015278,
    "longitude": 11.0136389
  },
  "openingHoursSpecification": [...],
  "medicalSpecialty": ["Dentistry", "Orthodontics", "Prosthodontics"],
  "availableService": [...]
}
```

## Sitemap (app/sitemap.ts)
```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://studiodimartino.eu'
  const routes = ['', '/implantologia', '/ortodonzia', '/estetica-dentale',
    '/igiene-prevenzione', '/odontoiatria-generale', '/il-team', '/contatti',
    '/info-pazienti', '/istruzioni-ortodontiche']
  return routes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
```

---

# Keyword target per pagina (usale in title, h1, h2, testo)

| Pagina | Keyword primaria | Keyword secondarie |
|---|---|---|
| Homepage | dentista Agliana | studio dentistico Agliana, odontoiatra Agliana PT |
| Implantologia | implantologia Agliana | impianti dentali Pistoia, costo impianto dentale |
| Ortodonzia | ortodonzia Agliana | ortodonzia invisibile Agliana, allineatori trasparenti Pistoia |
| Estetica dentale | estetica dentale Agliana | sbiancamento denti Agliana, faccette dentali Pistoia |
| Igiene e prevenzione | igiene dentale Agliana | pulizia denti professionale Agliana, prevenzione carie |
| Odontoiatria generale | dentista Agliana | otturazioni, devitalizzazione dente Pistoia |
| Il team | Dr. Nicola Di Martino dentista | odontoiatra Agliana, odontotecnico |
| Contatti | studio dentistico Agliana contatti | dentista via Buonarroti Agliana |

---

# Task da eseguire in ordine

1. **Analizza** la struttura attuale del progetto Next.js (leggi tutti i file esistenti)
2. **Crea o aggiorna** `app/layout.tsx` con metadata globali e JSON-LD
3. **Crea** ogni pagina con SSR, metadata ottimizzati e contenuto HTML ricco di keyword
4. **Crea** `app/sitemap.ts`
5. **Crea** `public/robots.txt` con riferimento alla sitemap
6. **Verifica** che nessuna pagina usi `'use client'` come componente radice (va bene per componenti figli interattivi, non per le page)
7. **Controlla** che i link interni usino `<Link href="/slug">` di Next.js e non `<a href="/#/slug">`

---

# Note finali

- Mantieni lo stile visivo esistente — l'obiettivo è solo l'ottimizzazione SEO e la struttura, non il redesign
- Se trovi componenti React già scritti nella SPA originale, riutilizzali dove possibile aggiungendo `'use client'` solo dove strettamente necessario (form, interazioni)
- Priorità assoluta: che ogni pagina abbia contenuto testuale leggibile senza JavaScript