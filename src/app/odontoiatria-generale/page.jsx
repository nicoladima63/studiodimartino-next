import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Odontoiatria Generale Agliana | Otturazioni e Devitalizzazioni",
  description:
    "Dentista ad Agliana per odontoiatria conservativa: otturazioni estetiche, devitalizzazione dente, estrazioni. Studio dentistico Di Martino vicino a Pistoia e Prato.",
  path: "/odontoiatria-generale",
  keywords: [
    "odontoiatria generale Agliana",
    "otturazioni Agliana",
    "devitalizzazione Agliana",
    "odontoiatria conservativa Pistoia",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Odontoiatria Conservativa e Generale",
    "description": "Cure dentali conservative: otturazioni in resina composita, devitalizzazione canalare, corone in ceramica, ponti. Approccio orientato alla massima conservazione del tessuto dentale sano.",
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
        "name": "Quanto dura un'otturazione dentale in composito?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un'otturazione in resina composita dura mediamente 7–10 anni con una corretta igiene orale. La longevità dipende dalla dimensione del restauro, dalle abitudini del paziente (bruxismo, fumo) e dalla qualità del materiale utilizzato." }
      },
      {
        "@type": "Question",
        "name": "La devitalizzazione del dente fa male?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. La terapia canalare viene eseguita in anestesia locale completa e non causa dolore durante la procedura. Nelle 24–48 ore successive può esserci un lieve fastidio alla masticazione, che si risolve con antidolorifici da banco." }
      },
      {
        "@type": "Question",
        "name": "Quando è necessaria una corona dentale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Una corona è indicata quando un dente è troppo compromesso per un'otturazione: dopo devitalizzazione, in caso di frattura estesa, o quando il dente è molto indebolito da carie. Protegge il dente residuo e ripristina funzione ed estetica." }
      },
      {
        "@type": "Question",
        "name": "Quanto dura una corona in ceramica?",
        "acceptedAnswer": { "@type": "Answer", "text": "Una corona in ceramica integrale dura mediamente 15–20 anni. La longevità dipende dall'igiene orale, dall'assenza di bruxismo e dalla qualità del dente residuo sotto la corona." }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo prima posso essere visitato per un'urgenza dentale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Per le urgenze cerchiamo di garantire disponibilità in giornata o entro 24 ore. Chiama lo studio al 0574 712060 o scrivici su WhatsApp per essere valutato il prima possibile." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Odontoiatria Generale", "item": "https://www.studiodimartino.eu/odontoiatria-generale" }
    ]
  }
];

export default function OdontoiatriaGeneralePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero
        title="Odontoiatria Generale ad Agliana"
        subtitle="Cure dentali complete e conservative per mantenere i tuoi denti naturali il più a lungo possibile."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Dentista ad Agliana: Odontoiatria Conservativa e Generale
          </h1>
          <p className="text-gray-600 mb-4">
            Lo Studio Dentistico Dr. Nicola Di Martino ad Agliana è il tuo punto di riferimento
            per l&apos;<strong>odontoiatria generale e conservativa</strong> nell&apos;area di
            Pistoia e Prato. Il Dr. Di Martino esegue cure dentali complete, con un approccio
            orientato alla massima conservazione del tessuto dentale sano.
          </p>
          <p className="text-gray-600 mb-4">
            Che si tratti di un controllo di routine, di una carie da trattare o di un&apos;urgenza
            dentale, siamo pronti ad accoglierti con professionalità e attenzione. La nostra
            priorità è risolvere il tuo problema nel minor numero di sedute possibile, con
            tecniche minimamente invasive.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Otturazioni Estetiche ad Agliana
          </h2>
          <p className="text-gray-600 mb-4">
            Le <strong>otturazioni dentali</strong> in resina composita di ultima generazione
            permettono di trattare le carie in modo estetico e duraturo. Il composito viene
            scelto nella tonalità del dente naturale, rendendo il restauro praticamente
            invisibile. Grazie alle tecniche adesive moderne, è possibile rimuovere solo il
            tessuto cariato, preservando al massimo il dente sano.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Devitalizzazione del Dente (Terapia Endodontica)
          </h2>
          <p className="text-gray-600 mb-4">
            La <strong>devitalizzazione del dente</strong> (o terapia canalare) è necessaria
            quando la carie o un trauma raggiunge la polpa dentale, causando dolore e infiammazione.
            Il trattamento prevede la rimozione della polpa infetta, la pulizia e la sagomatura
            dei canali radicolari e la loro otturazione con materiale biocompatibile.
          </p>
          <p className="text-gray-600 mb-4">
            Con le tecnologie moderne — strumentazione rotante in nichel-titanio e microscopio
            operatorio — la terapia canalare è oggi un trattamento preciso e confortevole,
            che permette di conservare il dente naturale per molti anni ancora.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Corone e Ponti in Ceramica
          </h2>
          <p className="text-gray-600 mb-4">
            Quando un dente è troppo compromesso per un&apos;otturazione, la soluzione è
            una <strong>corona dentale</strong>. Le corone in ceramica integrale sono esteticamente
            perfette e biologicamente compatibili, senza il classico bordo scuro alla base
            delle vecchie corone in metallo-ceramica.
          </p>
          <p className="text-gray-600 mb-4">
            Il Dr. Di Martino, grazie alla sua formazione come odontotecnico, collabora
            direttamente con il laboratorio per garantire che ogni corona o ponte sia
            realizzato con la massima precisione, ottenendo un risultato estetico superiore.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Urgenze Dentali a Pistoia e Agliana
          </h2>
          <p className="text-gray-600 mb-4">
            Se hai un&apos;<strong>urgenza dentale</strong> — mal di denti acuto, dente rotto,
            ascesso — contattaci immediatamente. Cerchiamo di garantire disponibilità in
            giornata o nel minor tempo possibile per le urgenze. Non aspettare: un dolore
            dentale non si risolve da solo e ignorarlo può portare a complicazioni più gravi.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sull&apos;odontoiatria generale</h2>
            <div className="space-y-4">
              {[
                { q: "Quanto dura un'otturazione dentale in composito?", a: "Mediamente 7–10 anni con una corretta igiene orale. La longevità dipende dalla dimensione del restauro e dalle abitudini del paziente (bruxismo, fumo)." },
                { q: "La devitalizzazione del dente fa male?", a: "No. La terapia canalare viene eseguita in anestesia locale completa. Nelle 24–48 ore successive può esserci un lieve fastidio alla masticazione, che si risolve con antidolorifici da banco." },
                { q: "Quando è necessaria una corona dentale?", a: "Una corona è indicata quando un dente è troppo compromesso per un'otturazione: dopo devitalizzazione, frattura estesa, o dente molto indebolito da carie. Protegge il dente residuo ripristinando funzione ed estetica." },
                { q: "Quanto dura una corona in ceramica?", a: "Una corona in ceramica integrale dura mediamente 15–20 anni. Il Dr. Di Martino, avendo formazione anche come odontotecnico, collabora direttamente con il laboratorio per garantire massima precisione e risultato estetico superiore." },
                { q: "Quanto tempo prima posso essere visitato per un'urgenza dentale?", a: "Per le urgenze cerchiamo di garantire disponibilità in giornata o entro 24 ore. Chiama lo studio al 0574 712060 o scrivici su WhatsApp al 346 473 1192." },
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
              Prenota la tua visita dentistica ad Agliana
            </h3>
            <p className="text-gray-600 mb-4">
              Controllo di routine o urgenza? Contattaci subito. Prima visita senza impegno.
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
