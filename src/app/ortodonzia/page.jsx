import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Ortodonzia Agliana | Invisalign & Apparecchi | Studio Di Martino",
  description:
    "Ortodonzia ad Agliana con il Dott. Giacomo D'Orlandi. Allineatori trasparenti, ortodonzia invisibile e apparecchi tradizionali per adulti e bambini. Prima visita gratuita.",
  alternates: {
    canonical: "https://studiodimartino.eu/ortodonzia",
  },
  openGraph: {
    title: "Ortodonzia Agliana | Invisalign & Apparecchi | Studio Di Martino",
    description:
      "Ortodonzia ad Agliana con il Dott. Giacomo D'Orlandi. Allineatori trasparenti, ortodonzia invisibile e apparecchi tradizionali per adulti e bambini.",
    url: "https://studiodimartino.eu/ortodonzia",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function OrtodoziaPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Ortodonzia ad Agliana"
        subtitle="Denti dritti e sorriso armonioso con allineatori invisibili e apparecchi tradizionali."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Ortodonzia ad Agliana: Apparecchi e Allineatori Trasparenti
          </h1>
          <p className="text-gray-600 mb-4">
            Lo Studio Dentistico Dr. Nicola Di Martino ad Agliana offre trattamenti di
            <strong> ortodonzia</strong> per adulti e bambini, seguiti dal Dott. Giacomo D&apos;Orlandi,
            ortodontista specializzato. L&apos;ortodonzia corregge malocclusioni, denti storti,
            problemi di morso e spazi tra i denti, migliorando sia l&apos;estetica che la funzionalità
            dell&apos;apparato masticatorio.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Ortodonzia Invisibile ad Agliana: Allineatori Trasparenti
          </h2>
          <p className="text-gray-600 mb-4">
            L&apos;<strong>ortodonzia invisibile</strong> con allineatori trasparenti è la soluzione
            più richiesta da adulti e adolescenti che desiderano raddrizzare i denti senza
            l&apos;ingombro degli apparecchi metallici tradizionali. Gli allineatori sono rimovibili,
            quasi invisibili e consentono di mangiare e lavarsi i denti normalmente.
          </p>
          <p className="text-gray-600 mb-4">
            Il trattamento prevede una serie di mascherine in materiale trasparente, cambiate ogni
            1-2 settimane, che spostano gradualmente i denti verso la posizione desiderata.
            La durata del trattamento varia da pochi mesi a oltre un anno, a seconda della
            complessità del caso.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Apparecchi Ortodontici Tradizionali
          </h2>
          <p className="text-gray-600 mb-4">
            Gli <strong>apparecchi fissi tradizionali</strong> (brackets metallici o in ceramica)
            rimangono la soluzione più efficace per correzioni complesse e per i bambini che
            necessitano di un controllo preciso dei movimenti dentali. Sono particolarmente
            indicati per trattamenti ortodontici durante lo sviluppo, quando è possibile sfruttare
            la crescita delle ossa mascellari.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Ortodonzia per Bambini a Pistoia e Agliana
          </h2>
          <p className="text-gray-600 mb-4">
            La prima valutazione ortodontica è consigliata intorno ai 7-8 anni, quando è possibile
            intercettare e correggere precocemente alcune problematiche. L&apos;ortodonzia intercettiva
            in età precoce può prevenire trattamenti più lunghi e complessi in età adulta.
          </p>
          <p className="text-gray-600 mb-4">
            I pazienti dell&apos;area di Pistoia, Prato, Montale e Quarrata scelgono il nostro studio
            per l&apos;ortodonzia grazie all&apos;esperienza del Dott. D&apos;Orlandi e alla possibilità
            di seguire l&apos;intero percorso terapeutico in un unico studio.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Contenzione Post-Ortodontica
          </h2>
          <p className="text-gray-600 mb-4">
            Al termine del trattamento ortodontico, è fondamentale mantenere i risultati ottenuti
            con l&apos;utilizzo di contenitori (retainers). Offriamo sia contenitori fissi
            (filo linguale incollato) che rimovibili (allineatori di contenzione notturni),
            per garantire la stabilità dei risultati nel tempo.
          </p>

          <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Consulenza Ortodontica Gratuita
            </h3>
            <p className="text-gray-600 mb-4">
              Scopri il trattamento ortodontico più adatto a te o al tuo bambino. Prima visita
              gratuita e senza impegno ad Agliana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/393464731192"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-200"
              >
                Scrivici su WhatsApp
              </a>
              <a
                href="tel:+390574712060"
                className="inline-flex items-center justify-center border-2 border-[#2F4F4F] text-[#2F4F4F] px-6 py-3 rounded-lg font-semibold hover:bg-[#2F4F4F] hover:text-white transition duration-200"
              >
                Chiama: 0574 712060
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
