import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ortodonzia Agliana | Invisalign e Apparecchi",
  description:
    "Ortodonzia ad Agliana con il Dott. Giacomo D'Orlandi. Allineatori trasparenti, ortodonzia invisibile e apparecchi tradizionali per adulti e bambini. Prima visita senza impegno.",
  path: "/ortodonzia",
  keywords: [
    "ortodonzia Agliana",
    "Invisalign Agliana",
    "allineatori trasparenti Agliana",
    "apparecchio denti Agliana",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ortodonzia con Allineatori Trasparenti",
    "description": "Trattamento ortodontico con allineatori trasparenti rimovibili per la correzione di malocclusioni, denti storti e problemi di morso in adulti e adolescenti.",
    "relevantSpecialty": "Dentistry",
    "recognizingAuthority": { "@type": "Organization", "name": "FNOMCEO" },
    "performer": {
      "@type": "Physician",
      "name": "Dott. Giacomo D'Orlandi",
      "jobTitle": "Ortodontista",
      "worksFor": { "@type": "Dentist", "name": "Studio Dentistico Dr. Nicola Di Martino" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto dura un trattamento con allineatori trasparenti?",
        "acceptedAnswer": { "@type": "Answer", "text": "La durata varia da 6–8 mesi per casi semplici fino a 18–24 mesi per correzioni più complesse. Il Dott. D'Orlandi stabilisce la durata esatta dopo la visita di valutazione." }
      },
      {
        "@type": "Question",
        "name": "Gli allineatori trasparenti funzionano per tutti?",
        "acceptedAnswer": { "@type": "Answer", "text": "Gli allineatori sono indicati per la maggior parte delle malocclusioni di grado lieve-moderato. Casi molto complessi possono richiedere apparecchi fissi. Solo una visita ortodontica determina l'idoneità." }
      },
      {
        "@type": "Question",
        "name": "A che età è consigliata la prima visita ortodontica per i bambini?",
        "acceptedAnswer": { "@type": "Answer", "text": "La prima valutazione ortodontica è consigliata intorno ai 7–8 anni, quando la dentizione mista permette di individuare precocemente problemi intercettabili prima del completamento della crescita." }
      },
      {
        "@type": "Question",
        "name": "Si può mangiare con gli allineatori?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Gli allineatori vanno rimossi prima di mangiare e bere (eccetto acqua). Dopo i pasti è necessario lavarsi i denti prima di reinserirli. Devono essere indossati 20–22 ore al giorno." }
      },
      {
        "@type": "Question",
        "name": "Cosa sono i contenitori di contenzione post-ortodontica?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sono dispositivi (fissi o rimovibili) che si utilizzano al termine del trattamento per mantenere la posizione dei denti. I denti hanno memoria e tendono a ricadere senza contenzione. L'uso notturno è tipicamente a lungo termine." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Ortodonzia", "item": "https://www.studiodimartino.eu/ortodonzia" }
    ]
  }
];

export default function OrtodoziaPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sull&apos;ortodonzia</h2>
            <div className="space-y-4">
              {[
                { q: "Quanto dura un trattamento con allineatori trasparenti?", a: "La durata varia da 6–8 mesi per casi semplici fino a 18–24 mesi per correzioni più complesse. Il Dott. D'Orlandi stabilisce la durata esatta dopo la visita di valutazione." },
                { q: "Gli allineatori trasparenti funzionano per tutti?", a: "Sono indicati per la maggior parte delle malocclusioni di grado lieve-moderato. Casi molto complessi possono richiedere apparecchi fissi. Solo una visita ortodontica determina l'idoneità." },
                { q: "A che età è consigliata la prima visita ortodontica per i bambini?", a: "La prima valutazione è consigliata intorno ai 7–8 anni, quando la dentizione mista permette di individuare precocemente problemi intercettabili prima del completamento della crescita ossea." },
                { q: "Si può mangiare con gli allineatori?", a: "No. Gli allineatori vanno rimossi prima di mangiare e bere (eccetto acqua). Devono essere indossati 20–22 ore al giorno per essere efficaci." },
                { q: "Cosa sono i contenitori di contenzione post-ortodontica?", a: "Sono dispositivi fissi o rimovibili usati al termine del trattamento per mantenere la posizione dei denti. I denti tendono a tornare alla posizione originale senza contenzione: il loro utilizzo è a lungo termine." },
              ].map(({ q, a }, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-semibold text-[#2F4F4F] cursor-pointer">{q}</summary>
                  <p className="text-gray-600 mt-2">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Consulenza Ortodontica Senza Impegno
            </h3>
            <p className="text-gray-600 mb-4">
              Scopri il trattamento ortodontico più adatto a te o al tuo bambino. Prima visita
              senza impegno ad Agliana.
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

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Le informazioni contenute in questa pagina hanno scopo puramente informativo e non sostituiscono il parere del medico odontoiatra. Per una valutazione personalizzata prenota una visita presso il nostro studio.
        </p>
      </div>
      <Footer />
    </div>
  );
}
