import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Studio Dentistico Di Martino | Dentista Agliana (PT)",
  description:
    "Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT). Soluzioni su misura: Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale. Prenota una visita!",
  keywords:
    "dentista, agliana, pistoia, prato, studio dentistico, implantologia, ortodonzia, estetica dentale, nicola di martino, igiene dentale, sbiancamento",
  authors: [{ name: "Dr. Nicola Di Martino" }],
  metadataBase: new URL("https://studiodimartino.eu"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://studiodimartino.eu/",
    title: "Studio Dentistico Dr. Nicola Di Martino | Dentista ad Agliana (PT)",
    description:
      "Soluzioni su misura per il tuo sorriso: Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale. Prenota una visita ad Agliana!",
    locale: "it_IT",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Dentistico Dr. Nicola Di Martino | Dentista ad Agliana",
    description:
      "Soluzioni su misura per il tuo sorriso: Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale.",
    images: ["/og-image.jpg"],
  },
};

const jsonLdDentist = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Studio Dentistico Dr. Nicola Di Martino",
  description:
    "Studio dentistico ad Agliana specializzato in odontoiatria generale, implantologia, ortodonzia ed estetica dentale.",
  url: "https://studiodimartino.eu",
  telephone: "+39-0574-712060",
  email: "segreteria@studiodimartino.eu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Michelangelo Buonarroti, 15",
    addressLocality: "Agliana",
    addressRegion: "PT",
    postalCode: "51031",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.9015278,
    longitude: 11.0136389,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Dr. Nicola Di Martino",
    jobTitle: "Odontoiatra",
  },
  medicalSpecialty: ["Dentistry", "Orthodontics", "Prosthodontics"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Implantologia" },
    { "@type": "MedicalProcedure", name: "Ortodonzia" },
    { "@type": "MedicalProcedure", name: "Estetica Dentale" },
    { "@type": "MedicalProcedure", name: "Igiene e Prevenzione" },
    { "@type": "MedicalProcedure", name: "Odontoiatria Conservativa" },
  ],
  sameAs: ["https://maps.app.goo.gl/9ssp3vWirHLUqKR2A"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDentist) }}
        />
        {/* Iubenda cookie config - inline, deve andare prima degli script iubenda */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var _iub = _iub || []; _iub.csConfiguration = {"siteId":1758615,"cookiePolicyId":43231094,"lang":"it","storage":{"useSiteId":true}};`,
          }}
        />
      </head>
      <body className={montserrat.className}>
        {children}

        {/* Iubenda */}
        <Script
          src="https://cs.iubenda.com/autoblocking/1758615.js"
          strategy="afterInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
        />
        {/* Elfsight */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
