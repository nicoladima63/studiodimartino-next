import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Protesi Mobile Dentale Agliana | Dentiere e Scheletrati",
  description:
    "Protesi mobile dentale ad Agliana: dentiere totali, protesi scheletrate parziali e overdenture su impianti realizzate su misura dal Dr. Di Martino. Prima visita senza impegno.",
  path: "/protesi-mobile",
  keywords: [
    "protesi mobile dentale Agliana",
    "dentiera Agliana",
    "protesi scheletrata Agliana",
    "protesi dentaria mobile costo",
    "protesi totale removibile",
    "dentiera nuova non si adatta",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Protesi Dentale Mobile",
    "description": "Ricostruzione protesica removibile (totale o parziale) che il paziente può togliere e reinserire autonomamente, indicata quando mancano molti o tutti i denti di un'arcata.",
    "relevantSpecialty": "Dentistry",
    "recognizingAuthority": { "@type": "Organization", "name": "FNOMCEO" },
    "performer": {
      "@type": "Physician",
      "name": "Dr. Nicola Di Martino",
      "jobTitle": "Odontoiatra e Odontotecnico",
      "worksFor": { "@type": "Dentist", "name": "Studio Dentistico Dr. Nicola Di Martino" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è la differenza tra dentiera totale e scheletrato?",
        "acceptedAnswer": { "@type": "Answer", "text": "La dentiera totale sostituisce tutti i denti di un'arcata e si appoggia sulla gengiva. Lo scheletrato è una protesi parziale, con una struttura metallica che si aggancia ai denti naturali rimasti, indicata quando mancano solo alcuni elementi." },
      },
      {
        "@type": "Question",
        "name": "Quanto costa una protesi mobile ad Agliana?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo dipende dal tipo di protesi (totale, scheletrato, flessibile) e dal materiale usato. Dopo la visita di valutazione ricevi un preventivo scritto dettagliato, senza impegno." },
      },
      {
        "@type": "Question",
        "name": "La dentiera nuova si muove o dà fastidio: è normale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un periodo di adattamento di alcune settimane è normale, con eventuali piccoli aggiustamenti in studio nelle prime visite di controllo. Se il fastidio persiste oltre un mese, la protesi va rivalutata e ribasata." },
      },
      {
        "@type": "Question",
        "name": "Cos'è una protesi mobile su impianti (overdenture)?",
        "acceptedAnswer": { "@type": "Answer", "text": "È una dentiera che si aggancia a 2 o più impianti tramite attacchi a scatto, restando molto più stabile di una protesi tradizionale appoggiata solo sulla gengiva, pur restando removibile dal paziente per la pulizia." },
      },
      {
        "@type": "Question",
        "name": "Quanto dura una protesi mobile?",
        "acceptedAnswer": { "@type": "Answer", "text": "In media 5-8 anni, dopo i quali l'osso e la gengiva sottostanti cambiano forma e la protesi va ribasata o rifatta per mantenere una tenuta corretta." },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Protesi Mobile", "item": "https://www.studiodimartino.eu/protesi-mobile" },
    ],
  },
];

export default function ProtesiMobilePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero
        title="Protesi Mobile Dentale ad Agliana"
        subtitle="Dentiere totali, protesi scheletrate parziali e overdenture su impianti, realizzate su misura."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Protesi Mobile Dentale ad Agliana: Dentiere e Protesi Scheletrate
          </h1>
          <p className="text-gray-600 mb-4">
            La <strong>protesi mobile</strong> sostituisce i denti mancanti con un dispositivo
            che il paziente può togliere e metterere autonomamente per la pulizia quotidiana.
            È la soluzione indicata quando mancano molti o tutti i denti di un&apos;arcata e
            un&apos;alternativa fissa non è percorribile per motivi economici, ossei o di salute
            generale. Allo Studio Dentistico Dr. Di Martino ad Agliana ogni protesi mobile è
            progettata su misura, seguendo forma e occlusione del singolo paziente.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Protesi mobile totale (dentiera): per chi ha perso tutti i denti
          </h2>
          <p className="text-gray-600">
            La <strong>dentiera totale</strong> si appoggia direttamente sulla gengiva e
            ricostruisce l&apos;intera arcata, superiore e o inferiore. La tenuta si basa
            sull&apos;aderenza tra la base in resina e i tessuti molli: per questo l&apos;impronta
            di precisione e la registrazione del morso sono fasi decisive per un risultato
            stabile e confortevole in fase di masticazione e fonazione.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Protesi mobile parziale (scheletrato): quando restano denti naturali
          </h2>
          <p className="text-gray-600">
            Lo <strong>scheletrato</strong> è una protesi parziale con un&apos;intelaiatura
            metallica leggera che si aggancia ai denti naturali residui tramite ganci o
            attacchi di precisione. Permette di sostituire gli elementi mancanti sfruttando
            e proteggendo i denti ancora presenti, con un ingombro ridotto rispetto a una
            protesi parziale in resina.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Protesi mobile su impianti (overdenture): più stabilità, meno movimento
          </h2>
          <p className="text-gray-600">
            Chi trova la dentiera tradizionale poco stabile può valutare un&apos;
            <strong>overdenture</strong>: una protesi removibile che si aggancia a 2 o più
            impianti tramite attacchi a scatto (ot-equator). Resta una protesi mobile
            — si toglie per la pulizia — ma la ritenzione sugli impianti riduce drasticamente
            i movimenti durante la masticazione e la parola. Approfondisci su{" "}
            <a href="/protesi-su-impianti" className="text-[#2F4F4F] underline">
              protesi su impianti
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Problemi comuni con le protesi mobili e come risolverli
          </h2>
          <p className="text-gray-600 mb-4">
            Alcuni disagi sono normali nelle prime settimane, altri segnalano che la protesi
            va rivista:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li><strong>Movimento durante la masticazione:</strong> può richiedere una ribasatura o, se persistente, la valutazione di attacchi su impianti.</li>
            <li><strong>Fastidio o piccole ulcere:</strong> tipiche nelle prime settimane, si risolvono con piccole rettifiche in studio.</li>
            <li><strong>Difficoltà di pronuncia:</strong> normale nella fase di adattamento, migliora progressivamente con l&apos;uso quotidiano.</li>
            <li><strong>Protesi che non si adatta più dopo anni:</strong> l&apos;osso e la gengiva cambiano forma nel tempo; la protesi va ribasata o rifatta.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Materiali: resina, scheletrato in metallo, protesi flessibili
          </h2>
          <p className="text-gray-600">
            Le basi in <strong>resina acrilica</strong> sono la soluzione classica per le
            protesi totali. Lo <strong>scheletrato in lega metallica</strong> offre maggiore
            resistenza e un ingombro minore per le protesi parziali. Le{" "}
            <strong>protesi flessibili</strong> in resina termoplastica, senza ganci metallici
            visibili, sono un&apos;opzione più estetica per alcuni casi parziali. La scelta si
            valuta in base al numero di denti mancanti e alle esigenze estetiche e funzionali.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Quanto costa una protesi mobile ad Agliana
          </h2>
          <p className="text-gray-600">
            Il costo varia in base al tipo di protesi (totale, scheletrato, flessibile o
            overdenture su impianti) e ai materiali scelti. Dopo la visita di valutazione
            ricevi un preventivo scritto dettagliato, senza impegno.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sulla protesi mobile</h2>
            <div className="space-y-4">
              {[
                { q: "Qual è la differenza tra dentiera totale e scheletrato?", a: "La dentiera totale sostituisce tutti i denti di un'arcata e si appoggia sulla gengiva. Lo scheletrato è una protesi parziale, agganciata ai denti naturali rimasti." },
                { q: "Quanto costa una protesi mobile ad Agliana?", a: "Dipende dal tipo di protesi (totale, scheletrato, flessibile) e dal materiale usato. Dopo la visita ricevi un preventivo scritto dettagliato, senza impegno." },
                { q: "La dentiera nuova si muove o dà fastidio: è normale?", a: "Un periodo di adattamento di alcune settimane è normale, con piccoli aggiustamenti in studio. Se il fastidio persiste oltre un mese, la protesi va rivalutata." },
                { q: "Cos'è una protesi mobile su impianti (overdenture)?", a: "È una dentiera che si aggancia a 2 o più impianti tramite attacchi a scatto, molto più stabile di una protesi tradizionale, pur restando removibile per la pulizia." },
                { q: "Quanto dura una protesi mobile?", a: "In media 5-8 anni, dopo i quali l'osso e la gengiva cambiano forma e la protesi va ribasata o rifatta per mantenere una tenuta corretta." },
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
              Trova la Protesi Mobile più Adatta a Te
            </h3>
            <p className="text-gray-600 mb-4">
              Dentiera, scheletrato o overdenture su impianti: valutiamo insieme la soluzione
              più stabile e confortevole. Prima visita senza impegno ad Agliana.
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

          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#2F4F4F] mb-4">Trattamenti correlati</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/protesi-su-impianti" className="text-[#2F4F4F] underline">Protesi su impianti</a>{" "}
                — overdenture e soluzioni fisse ancorate agli impianti
              </li>
              <li>
                <a href="/protesi-fissa" className="text-[#2F4F4F] underline">Protesi fissa</a>{" "}
                — ponti e corone non removibili
              </li>
              <li>
                <a href="/implantologia" className="text-[#2F4F4F] underline">Implantologia</a>{" "}
                — impianti dentali per stabilizzare la protesi mobile
              </li>
            </ul>
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
