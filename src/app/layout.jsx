import { Geist } from "next/font/google";
import "./globals.css";

/** @type {import('next').Metadata} */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Studio Dentistico Di Martino | Dentista Agliana (PT)",
    template: "%s | Studio Dentistico Di Martino Agliana",
  },
  description:
    "Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT). Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale. Prima visita gratuita. Prenota ora!",
  keywords: [
    "dentista Agliana",
    "studio dentistico Agliana",
    "odontoiatra Agliana",
    "dentista Pistoia",
    "implantologia Agliana",
    "ortodonzia Agliana",
    "estetica dentale Agliana",
    "igiene dentale Agliana",
    "Nicola Di Martino dentista",
  ],
  authors: [{ name: "Dr. Nicola Di Martino" }],
  creator: "Dr. Nicola Di Martino",
  metadataBase: new URL("https://studiodimartino.eu"),
  alternates: {
    canonical: "https://studiodimartino.eu/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://studiodimartino.eu/",
    siteName: "Studio Dentistico Dr. Nicola Di Martino",
    title: "Studio Dentistico Di Martino | Dentista ad Agliana (PT)",
    description:
      "Soluzioni su misura per il tuo sorriso: Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale. Prima visita gratuita ad Agliana!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Dentistico Dr. Nicola Di Martino - Agliana (PT)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Dentistico Di Martino | Dentista ad Agliana",
    description:
      "Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale ad Agliana (PT). Prima visita gratuita!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Studio Dentistico Dr. Nicola Di Martino",
  description:
    "Studio dentistico ad Agliana specializzato in odontoiatria generale, implantologia, ortodonzia ed estetica dentale.",
  url: "https://studiodimartino.eu",
  telephone: "+39-0574-712060",
  email: "segreteria@studiodimartino.eu",
  image: "https://studiodimartino.eu/og-image.jpg",
  priceRange: "$$",
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
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday"],
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  medicalSpecialty: ["Dentistry", "Orthodontics", "Prosthodontics"],
  availableService: [
    { "@type": "MedicalProcedure", "name": "Implantologia" },
    { "@type": "MedicalProcedure", "name": "Ortodonzia" },
    { "@type": "MedicalProcedure", "name": "Estetica Dentale" },
    { "@type": "MedicalProcedure", "name": "Igiene e Prevenzione" },
    { "@type": "MedicalProcedure", "name": "Odontoiatria Conservativa" },
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Nicola Di Martino",
    jobTitle: "Odontoiatra",
  },
  sameAs: ["https://maps.app.goo.gl/9ssp3vWirHLUqKR2A"],
};

/** @param {{ children: React.ReactNode }} props */
export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}