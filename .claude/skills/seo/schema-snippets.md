> **SEO ROLE ACTIVE** — Elite dental SEO strategist. Local healthcare specialist. Anti-generic. EEAT-first. Patient-intent-driven. Google-compliant only.

# SCHEMA & SNIPPET OPTIMIZATION

## OBJECTIVE
Generate technically correct schema markup and snippet-optimized
content structures for dental clinic pages. Every output must be
ready to implement — no generic suggestions.

==================================================

## PART 1 — SCHEMA MARKUP

### SCHEMA STACK PER PAGINA TIPO

Ogni pagina dello studio usa uno stack combinato.
Non uno schema — più schemi annidati o separati.

---

#### HOME PAGE SCHEMA STACK

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Studio Dentistico Dr. Nicola Di Martino",
  "url": "https://www.studiodimartino.eu",
  "logo": "https://www.studiodimartino.eu/logo.png",
  "image": "https://www.studiodimartino.eu/og-image.jpg",
  "description": "Studio dentistico ad Agliana (PT) specializzato in odontoiatria generale, implantologia, ortodonzia ed estetica dentale.",
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
  "telephone": "+39-0574-712060",
  "email": "segreteria@studiodimartino.eu",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday", "Thursday"],
      "opens": "15:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Friday"],
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Contanti, Carta, Bonifico, Finanziamento",
  "medicalSpecialty": ["Dentistry", "Orthodontics", "Prosthodontics"],
  "hasMap": "https://maps.app.goo.gl/9ssp3vWirHLUqKR2A",
  "sameAs": [
    "https://maps.app.goo.gl/9ssp3vWirHLUqKR2A"
  ]
}
```

---

#### PAGINA TRATTAMENTO SCHEMA STACK

```json
[
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Impianto Dentale",
    "procedureType": "https://schema.org/SurgicalProcedure",
    "description": "Inserimento di una radice artificiale in titanio
      nella mandibola o mascella per sostituire un dente mancante.",
    "bodyLocation": "Mandibola / Mascella",
    "preparation": "Visita di valutazione con CBCT tridimensionale,
      piano di trattamento digitale personalizzato.",
    "followup": "Controlli a 1 settimana, 1 mese, 3 mesi,
      6 mesi e annuali.",
    "howPerformed": "In anestesia locale. Posizionamento della fixture
      in titanio, periodo di osseointegrazione 2-4 mesi,
      applicazione corona definitiva.",
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "FNOMCEO"
    },
    "relevantSpecialty": "Dentistry"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto fa male l'impianto dentale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'intervento viene eseguito in anestesia locale
            completa: durante la procedura non si avverte dolore.
            Nelle 24-48 ore successive è normale un fastidio moderato,
            gestibile con antidolorifici da banco."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.studiodimartino.eu"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Implantologia",
        "item": "https://www.studiodimartino.eu/implantologia"
      }
    ]
  }
]
```

---

#### PAGINA GEO (CITTÀ) SCHEMA STACK

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Studio Dentistico Dr. Nicola Di Martino — Impianti ad Agliana",
  "areaServed": [
    {
      "@type": "City",
      "name": "Agliana"
    },
    {
      "@type": "City",
      "name": "Pistoia"
    },
    {
      "@type": "City",
      "name": "Prato"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.9015278,
      "longitude": 11.0136389
    },
    "geoRadius": "20000"
  }
}
```

---

#### PHYSICIAN SCHEMA (author bio pagine trattamento)

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Nicola Di Martino",
  "url": "https://www.studiodimartino.eu/il-team",
  "image": "https://www.studiodimartino.eu/og-image.jpg",
  "description": "Odontoiatra, Health Coach e odontotecnico. Fondatore dello Studio Dentistico Di Martino ad Agliana (PT). Specializzato in implantologia e odontoiatria estetica.",
  "medicalSpecialty": ["Dentistry", "Orthodontics", "Prosthodontics"],
  "worksFor": {
    "@type": "Dentist",
    "name": "Studio Dentistico Dr. Nicola Di Martino"
  }
  // alumniOf: da aggiungere quando disponibile il dato università
}
```

==================================================

## PART 2 — FEATURED SNIPPET OPTIMIZATION

### QUERY TYPES E STRUTTURE VINCENTI

---

**DEFINITION QUERIES** ("cos'è l'osseointegrazione")
Struttura vincente: paragrafo 40-60 parole, risposta diretta