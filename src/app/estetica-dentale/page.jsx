import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Estetica Dentale Agliana | Sbiancamento e Faccette",
  description:
    "Estetica dentale ad Agliana con il Dr. Di Martino, odontotecnico e odontoiatra. Sbiancamento professionale, faccette in ceramica e ricostruzioni estetiche. Prima visita senza impegno.",
  path: "/estetica-dentale",
  keywords: [
    "sbiancamento dentale Agliana",
    "faccette dentali Pistoia",
    "dentista estetico Agliana",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Estetica Dentale e Sbiancamento",
    "description": "Trattamenti estetici dentali: sbiancamento professionale, faccette in ceramica e ricostruzioni in composito per migliorare colore, forma e aspetto del sorriso.",
    "relevantSpecialty": "Dentistry",
    "performer": {
      "@type": "Physician",
      "name": "Dr. Nicola Di Martino",
      "jobTitle": "Odontoiatra e Odontotecnico",
      "worksFor": { "@type": "Dentist", "name": "Studio Dentistico Dr. Nicola Di Martino" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto dura lo sbiancamento dentale professionale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Lo sbiancamento in studio dura 60–90 minuti con risultati immediatamente visibili. Lo sbiancamento domiciliare con mascherine richiede 7–14 giorni. I risultati durano in media 1–3 anni, a seconda delle abitudini alimentari." }
      },
      {
        "@type": "Question",
        "name": "Le faccette in ceramica danneggiano i denti?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le faccette tradizionali richiedono una minima preparazione del dente (0,3–0,5 mm di smalto rimosso). Le faccette ultra-sottili no-prep non richiedono preparazione. La scelta dipende dalla situazione clinica e viene valutata dal Dr. Di Martino." }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra sbiancamento in studio e domiciliare?",
        "acceptedAnswer": { "@type": "Answer", "text": "Lo sbiancamento in studio usa gel a concentrazione più alta con lampada, risultati immediati in una seduta. Quello domiciliare usa gel a concentrazione minore in mascherine personalizzate, risultati graduali. Spesso si abbinano i due per effetti ottimali." }
      },
      {
        "@type": "Question",
        "name": "Quanto durano le faccette dentali in ceramica?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le faccette in ceramica di qualità durano in media 10–20 anni con una corretta igiene e senza traumatismi. La longevità dipende dal materiale, dalla tecnica di cementazione e dalle abitudini del paziente." }
      },
      {
        "@type": "Question",
        "name": "Lo sbiancamento funziona su corone o protesi?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Lo sbiancamento agisce solo sui denti naturali, non su corone, ponti, faccette o otturazioni in composito. Se si sbiana con protesi presenti, potrebbe creare una discromatia. Valutare con il dentista prima del trattamento." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Estetica Dentale", "item": "https://www.studiodimartino.eu/estetica-dentale" }
    ]
  }
];

export default function EsteticaDentalePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero
        title="Estetica Dentale ad Agliana"
        subtitle="Sbiancamento, faccette e ricostruzioni per il sorriso che hai sempre desiderato."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Estetica Dentale ad Agliana (Pistoia)
          </h1>
          <p className="text-gray-600 mb-4">
            Un sorriso bello e sano è uno degli elementi che più influenzano la fiducia in
            se stessi. Lo Studio Dentistico Dr. Nicola Di Martino ad Agliana offre trattamenti
            di <strong>estetica dentale</strong> personalizzati, pensati per valorizzare
            il sorriso di ogni paziente rispettando la naturalezza e l&apos;armonia con i
            lineamenti del viso.
          </p>
          <p className="text-gray-600 mb-4">
            Il Dr. Di Martino, grazie alla sua formazione come odontotecnico, conosce
            profondamente i materiali e le tecniche di laboratorio: questo gli permette
            di progettare faccette e ricostruzioni con un livello di dettaglio estetico
            difficilmente replicabile da chi non ha questa doppia competenza.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Sbiancamento Denti ad Agliana
          </h2>
          <p className="text-gray-600 mb-4">
            Lo <strong>sbiancamento dentale professionale</strong> è il trattamento estetico
            più richiesto. I denti tendono a ingiallirsi nel tempo a causa di caffè, tè, vino,
            tabacco e dall&apos;invecchiamento naturale dello smalto. Con lo sbiancamento
            professionale è possibile schiarire i denti di diversi toni in modo sicuro,
            sotto controllo clinico.
          </p>
          <p className="text-gray-600 mb-4">
            Offriamo due modalità:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Sbiancamento in studio</strong> — seduta unica di circa 60-90 minuti
              con gel professionale e lampada. Risultati immediati e visibili.
            </li>
            <li>
              <strong>Sbiancamento domiciliare</strong> — mascherine personalizzate da indossare
              a casa per 7-14 giorni. Risultati graduali e uniformi.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Faccette Dentali in Ceramica a Pistoia
          </h2>
          <p className="text-gray-600 mb-4">
            Le <strong>faccette in ceramica</strong> (o in composito) sono sottili lamine
            che vengono applicate sulla superficie anteriore dei denti per correggere forma,
            colore e posizione. Sono la soluzione ideale per:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600 mb-6">
            <li>Denti scheggiati o fratturati</li>
            <li>Denti con colorazioni difficili da sbiancamento (fluorosi, tetracicline)</li>
            <li>Lievi mal posizioni senza necessità di ortodonzia</li>
            <li>Denti con forma irregolare o dimensioni ridotte</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Le faccette in ceramica sono ultra-resistenti, longeve e perfettamente mimetiche
            con il colore naturale dei denti. Il risultato è un sorriso armonioso e
            dall&apos;aspetto completamente naturale.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Ricostruzioni Estetiche in Composito
          </h2>
          <p className="text-gray-600 mb-4">
            Le <strong>ricostruzioni estetiche in composito</strong> permettono di rimodellare
            i denti in modo conservativo, senza rimozione di tessuto sano. Utilizzando resine
            composite di ultima generazione, è possibile correggere piccoli difetti estetici
            in una singola seduta, con risultati immediatamente visibili.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sull&apos;estetica dentale</h2>
            <div className="space-y-4">
              {[
                { q: "Quanto dura lo sbiancamento dentale professionale?", a: "Lo sbiancamento in studio dura 60–90 minuti con risultati immediati. I risultati durano in media 1–3 anni a seconda delle abitudini (caffè, vino, fumo). Lo sbiancamento domiciliare con mascherine richiede 7–14 giorni." },
                { q: "Le faccette in ceramica danneggiano i denti?", a: "Le faccette tradizionali richiedono una minima preparazione (0,3–0,5 mm di smalto rimosso). Le faccette ultra-sottili no-prep non richiedono preparazione. La scelta dipende dalla situazione clinica valutata dal Dr. Di Martino." },
                { q: "Qual è la differenza tra sbiancamento in studio e domiciliare?", a: "Lo sbiancamento in studio usa gel ad alta concentrazione con lampada, risultati immediati in una seduta. Quello domiciliare usa gel a bassa concentrazione in mascherine personalizzate, risultati graduali in 7–14 giorni. Spesso si abbinano i due." },
                { q: "Quanto durano le faccette dentali in ceramica?", a: "Le faccette in ceramica di qualità durano in media 10–20 anni con corretta igiene e senza traumatismi. Il Dr. Di Martino, grazie alla sua formazione come odontotecnico, segue personalmente ogni fase dalla progettazione alla realizzazione." },
                { q: "Lo sbiancamento funziona su corone o protesi?", a: "No. Lo sbiancamento agisce solo sui denti naturali, non su corone, ponti o faccette. Se sono presenti protesi, sbiancando si crea una discromatia tra denti naturali e artificiali. Valutare con il dentista prima del trattamento." },
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
              Scopri il tuo nuovo sorriso
            </h3>
            <p className="text-gray-600 mb-4">
              Prenota una visita estetica ad Agliana senza impegno. Il Dr. Di Martino analizzerà il
              tuo sorriso e ti proporrà le soluzioni più adatte.
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
