---
description: Schema e snippet — JSON-LD Dentist/MedicalProcedure/FAQPage pronto all'uso, featured snippet e AI Overview optimization
---

> **SEO ROLE ACTIVE** — Elite dental SEO strategist. Local healthcare specialist. Anti-generic. EEAT-first. Patient-intent-driven. Google-compliant only.

# SCHEMA & SNIPPET OPTIMIZATION

## DATI STUDIO (usa sempre questi)

```json
{
  "@type": "Dentist",
  "name": "Studio Dentistico Dr. Nicola Di Martino",
  "url": "https://www.studiodimartino.eu",
  "telephone": "+39-0574-712060",
  "email": "segreteria@studiodimartino.eu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Michelangelo Buonarroti, 15",
    "addressLocality": "Agliana",
    "addressRegion": "PT",
    "postalCode": "51031",
    "addressCountry": "IT"
  },
  "geo": { "latitude": 43.9015278, "longitude": 11.0136389 },
  "openingHoursSpecification": [
    { "dayOfWeek": ["Monday","Wednesday","Thursday"], "opens": "09:00", "closes": "13:00" },
    { "dayOfWeek": ["Monday","Wednesday","Thursday"], "opens": "15:00", "closes": "19:00" },
    { "dayOfWeek": ["Tuesday","Friday"], "opens": "09:00", "closes": "16:00" }
  ],
  "medicalSpecialty": ["Dentistry","Orthodontics","Prosthodontics"],
  "hasMap": "https://maps.app.goo.gl/9ssp3vWirHLUqKR2A",
  "sameAs": [
    "https://maps.app.goo.gl/9ssp3vWirHLUqKR2A",
    "https://www.instagram.com/studio_dentistico_di_martino",
    "https://www.facebook.com/share/15td3Aa8zh/",
    "https://www.tiktok.com/@drnicoladimartino"
  ]
}
```

## SCHEMA STACK PER PAGINA TRATTAMENTO

Stack: MedicalProcedure + FAQPage + BreadcrumbList

BreadcrumbList template:
```json
{ "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
  { "@type": "ListItem", "position": 2, "name": "[Trattamento]", "item": "https://www.studiodimartino.eu/[slug]" }
]}
```

==================================================

## FEATURED SNIPPET STRUCTURES

DEFINITION QUERIES ("cos'è l'osseointegrazione"):
→ paragrafo 40-60 parole, risposta diretta

PROCESS QUERIES ("come funziona l'impianto"):
→ lista numerata max 8 passi

COST QUERIES ("quanto costa impianto Agliana"):
→ tabella con range + "Il costo definitivo dipende da..."

COMPARISON QUERIES ("impianto o protesi"):
→ tabella pro/contro

YES/NO QUERIES ("fumare dopo impianto si può"):
→ risposta diretta (No/Sì) + spiegazione breve

==================================================

## AI OVERVIEW OPTIMIZATION

- E-E-A-T alto (autore identificato, fonti citate)
- Risposta diretta entro 100 parole dall'H2
- H2 allineato alla query target quasi letterale
- Almeno una fonte esterna autorevole per sezione con dati
