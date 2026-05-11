import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Implantologia Agliana | Impianti Dentali",
  description:
    "Implantologia ad Agliana con il Dott. Roberto Calvisi, chirurgo implantologo. Impianti dentali singoli e arcata completa, tecnica mini-invasiva. Prenota ora.",
  path: "/implantologia",
  keywords: [
    "implantologia Agliana",
    "impianti dentali Agliana",
    "impianti dentali Pistoia",
    "chirurgo implantologo Agliana",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Implantologia Dentale",
    "procedureType": "https://schema.org/SurgicalProcedure",
    "description": "Inserimento di una radice artificiale in titanio nell'osso mascellare per sostituire denti mancanti, ripristinando funzione masticatoria ed estetica.",
    "bodyLocation": "Mandibola / Mascella",
    "preparation": "Visita di valutazione con radiografie panoramiche e CBCT tridimensionale per pianificazione digitale del posizionamento.",
    "followup": "Controlli a 1 settimana, 1 mese, 3 mesi e annuali. Igiene professionale ogni 6 mesi.",
    "howPerformed": "In anestesia locale. Posizionamento della fixture in titanio, osseointegrazione 2–4 mesi, applicazione abutment e corona definitiva.",
    "recognizingAuthority": { "@type": "Organization", "name": "FNOMCEO" },
    "relevantSpecialty": "Dentistry",
    "performer": {
      "@type": "Physician",
      "name": "Dott. Roberto Calvisi",
      "jobTitle": "Chirurgo Implantologo",
      "worksFor": { "@type": "Dentist", "name": "Studio Dentistico Dr. Nicola Di Martino" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "L'intervento di impianto dentale fa male?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. L'intervento viene eseguito in anestesia locale completa: durante la procedura non si avverte dolore. Nelle 24–48 ore successive è normale un fastidio moderato, gestibile con antidolorifici da banco come ibuprofene." }
      },
      {
        "@type": "Question",
        "name": "Quanto costa un impianto dentale ad Agliana?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo varia in base al numero di impianti, al tipo di protesi e alla complessità del caso. Offriamo un preventivo dettagliato dopo la visita di valutazione, senza impegno." }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo dura l'osseointegrazione?",
        "acceptedAnswer": { "@type": "Answer", "text": "L'osseointegrazione — il processo con cui l'impianto in titanio si fonde con l'osso — richiede in media 2–4 mesi. In alcuni casi di carico immediato è possibile ridurre i tempi, ma solo se le condizioni cliniche lo consentono." }
      },
      {
        "@type": "Question",
        "name": "Posso fare l'impianto se ho poco osso?",
        "acceptedAnswer": { "@type": "Answer", "text": "In molti casi sì. Tecniche come il rialzo del seno mascellare e la rigenerazione ossea guidata permettono di trattare anche i casi con osso insufficiente. La valutazione con CBCT determina la fattibilità." }
      },
      {
        "@type": "Question",
        "name": "Quanto dura un impianto dentale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Con una corretta igiene domiciliare e controlli periodici, un impianto in titanio può durare tutta la vita. La corona protesica soprastante può necessitare di sostituzione dopo 15–20 anni." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Implantologia", "item": "https://www.studiodimartino.eu/implantologia" }
    ]
  }
];

export default function ImplantologiaPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero
        title="Implantologia ad Agliana"
        subtitle="Impianti dentali sicuri e duraturi con tecniche mini-invasive."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Implantologia Dentale ad Agliana (Pistoia)
          </h1>
          <p className="text-gray-600 mb-4">
            Lo Studio Dentistico Dr. Nicola Di Martino ad Agliana offre trattamenti di
            <strong> implantologia dentale</strong> di alta qualità, affidati al Dott. Roberto Calvisi,
            chirurgo implantologo con pluriennale esperienza. Gli impianti dentali sono la soluzione
            più efficace e duratura per sostituire uno o più denti mancanti, ripristinando funzione
            estetica e masticatoria.
          </p>
          <p className="text-gray-600 mb-4">
            Un <strong>impianto dentale</strong> è una radice artificiale in titanio biocompatibile
            che viene inserita nell&apos;osso mascellare. Una volta integrato, l&apos;impianto supporta
            una corona, un ponte o una protesi, ripristinando la piena funzionalità della bocca.
            I materiali utilizzati sono di ultima generazione, garantendo durata e naturalezza.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Tipi di Implantologia che offriamo
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Impianto singolo</strong> — ideale per la sostituzione di un dente mancante
              senza intaccare i denti adiacenti.
            </li>
            <li>
              <strong>Arcata completa su impianti</strong> (All-on-4 / All-on-6) — soluzione per
              chi ha perso tutti i denti di un&apos;arcata, con soli 4 o 6 impianti.
            </li>
            <li>
              <strong>Impianti mini-invasivi</strong> — tecnica a bassa traumaticità, tempi di
              guarigione ridotti e ripresa rapida delle normali attività.
            </li>
            <li>
              <strong>Impianti post-estrattivi immediati</strong> — inserimento dell&apos;impianto
              nella stessa seduta dell&apos;estrazione, quando possibile.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Perché scegliere gli impianti dentali a Pistoia e Agliana
          </h2>
          <p className="text-gray-600 mb-4">
            Il Dr. Di Martino, grazie alla sua formazione come odontotecnico prima e odontoiatra poi,
            segue personalmente ogni caso dalla pianificazione alla realizzazione del manufatto
            protesico finale. Questo garantisce un risultato estetico e funzionale di eccellenza,
            con protesi su misura che si integrano naturalmente con il sorriso del paziente.
          </p>
          <p className="text-gray-600 mb-4">
            Prima di procedere con l&apos;implantologia, eseguiamo una valutazione approfondita
            attraverso radiografie e, se necessario, una TAC cone beam (CBCT) per pianificare
            con precisione il posizionamento degli impianti. I pazienti provenienti da Pistoia,
            Prato, Montale e tutta la Valdinievole trovano nel nostro studio un punto di
            riferimento per l&apos;implantologia nella provincia di Pistoia.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Costo dell&apos;impianto dentale ad Agliana
          </h2>
          <p className="text-gray-600 mb-4">
            Il costo di un impianto dentale varia in base al numero di impianti necessari,
            al tipo di protesi e alla complessità del caso clinico. Offriamo un preventivo
            dettagliato e personalizzato dopo la visita di valutazione. La prima visita
            è senza impegno.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Il nostro specialista in implantologia
          </h2>
          <p className="text-gray-600 mb-4">
            Il Dott. Roberto Calvisi è il chirurgo implantologo del nostro studio. Con anni di
            esperienza in chirurgia implantare, esegue interventi con precisione e delicatezza,
            minimizzando il disagio per il paziente. Lavora in stretta collaborazione con il
            Dr. Di Martino per garantire un risultato protesico ottimale.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sull&apos;implantologia</h2>
            <div className="space-y-4">
              {[
                { q: "L'intervento di impianto dentale fa male?", a: "No. L'intervento viene eseguito in anestesia locale completa: durante la procedura non si avverte dolore. Nelle 24–48 ore successive è normale un fastidio moderato, gestibile con antidolorifici da banco come ibuprofene." },
                { q: "Quanto costa un impianto dentale ad Agliana?", a: "Il costo varia in base al numero di impianti, al tipo di protesi e alla complessità del caso. Offriamo un preventivo dettagliato e personalizzato dopo la visita di valutazione, senza impegno." },
                { q: "Quanto tempo dura l'osseointegrazione?", a: "L'osseointegrazione — il processo con cui l'impianto in titanio si fonde con l'osso — richiede in media 2–4 mesi. In alcuni casi selezionati è possibile il carico immediato, ma solo se le condizioni cliniche lo consentono." },
                { q: "Posso fare l'impianto se ho poco osso?", a: "In molti casi sì. Tecniche come il rialzo del seno mascellare e la rigenerazione ossea guidata permettono di trattare anche i pazienti con osso insufficiente. La valutazione con CBCT determina la fattibilità." },
                { q: "Quanto dura un impianto dentale?", a: "Con una corretta igiene domiciliare e controlli periodici, un impianto in titanio può durare tutta la vita. La corona protesica soprastante può necessitare di sostituzione dopo 15–20 anni." },
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
              Prenota una consulenza sull&apos;implantologia
            </h3>
            <p className="text-gray-600 mb-4">
              Vuoi sapere se sei un buon candidato per gli impianti dentali? Contattaci per
              una prima visita ad Agliana. Ti risponderemo entro 24 ore.
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
