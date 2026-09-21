import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Protesi Fissa Dentale Agliana | Ponti e Corone",
  description:
    "Protesi fissa dentale ad Agliana: ponti e corone su denti naturali o su impianti, realizzate dal Dr. Di Martino, odontoiatra e odontotecnico. Prima visita senza impegno.",
  path: "/protesi-fissa",
  keywords: [
    "protesi fissa dentale Agliana",
    "ponte dentale Agliana",
    "corona dentale Agliana",
    "protesi fissa su denti naturali",
    "quanto costa un ponte dentale",
    "protesi dentale fissa costo",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Protesi Dentale Fissa",
    "description": "Ricostruzione protesica fissa (corone e ponti) su denti naturali o su impianti, cementata o avvitata in modo permanente, non removibile dal paziente.",
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
        "name": "Qual è la differenza tra un ponte e un impianto?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il ponte si appoggia ai denti naturali vicini, che vanno limati per fare da sostegno. L'impianto sostituisce la radice del dente mancante senza coinvolgere i denti sani adiacenti. La scelta dipende dallo stato dei denti vicini e dalla situazione ossea." },
      },
      {
        "@type": "Question",
        "name": "Quanto dura una protesi fissa (ponte o corona)?",
        "acceptedAnswer": { "@type": "Answer", "text": "Con un'igiene domiciliare corretta e controlli periodici, un ponte o una corona in ceramica possono durare 10-15 anni o più. La durata dipende anche dalla salute dei denti pilastro su cui si appoggia la protesi." },
      },
      {
        "@type": "Question",
        "name": "La protesi fissa si può fare anche su impianti?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì. Quando mancano più denti o un'intera arcata, la protesi fissa può essere avvitata o cementata direttamente sugli impianti invece che sui denti naturali. È il principio della soluzione All-on-4." },
      },
      {
        "@type": "Question",
        "name": "Quanto costa un ponte dentale ad Agliana?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo dipende dal numero di elementi da sostituire, dal materiale della corona (metallo-ceramica, zirconio full-ceramic) e dalle condizioni dei denti pilastro. Dopo la visita di valutazione ricevi un preventivo scritto dettagliato, senza impegno." },
      },
      {
        "@type": "Question",
        "name": "Il ponte dentale fa male da mettere?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. La preparazione dei denti pilastro si esegue in anestesia locale. Nei giorni successivi è normale una lieve sensibilità, gestibile con antidolorifici da banco." },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Protesi Fissa", "item": "https://www.studiodimartino.eu/protesi-fissa" },
    ],
  },
];

export default function ProtesiFissaPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero
        title="Protesi Fissa Dentale ad Agliana"
        subtitle="Ponti e corone su denti naturali o su impianti, realizzati su misura in studio."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Protesi Fissa Dentale ad Agliana: Ponti e Corone su Denti Naturali o Impianti
          </h1>
          <p className="text-gray-600 mb-4">
            Lo Studio Dentistico Dr. Nicola Di Martino ad Agliana realizza{" "}
            <strong>protesi fisse</strong> — ponti e corone — per sostituire uno o più denti
            mancanti senza che il paziente debba rimuoverle. A differenza della protesi mobile,
            la protesi fissa resta ancorata in bocca in modo permanente, appoggiandosi ai denti
            naturali residui oppure, quando questi non ci sono più, direttamente sugli impianti.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Ponte dentale su denti naturali: come funziona
          </h2>
          <p className="text-gray-600 mb-4">
            Il <strong>ponte dentale</strong> sostituisce uno o più denti mancanti appoggiandosi
            ai denti naturali adiacenti (pilastri), opportunamente limati e ricoperti da corone
            che sostengono l&apos;elemento intermedio sospeso. È una soluzione indicata quando
            i denti pilastro sono già indeboliti da carie estese o vecchie otturazioni e
            necessitano comunque di una corona di protezione.
          </p>
          <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
            Ponte o impianto: quale scegliere
          </h3>
          <p className="text-gray-600">
            Se i denti vicini sono sani, l&apos;
            <a href="/implantologia" className="text-[#2F4F4F] underline">impianto dentale</a>{" "}
            evita di intaccarli. Se invece i denti pilastro necessitano comunque di una corona,
            il ponte può essere la soluzione più efficiente. La valutazione in studio
            confronta entrambe le opzioni caso per caso.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Corone dentali: materiali e quando si usano
          </h2>
          <p className="text-gray-600 mb-4">
            La <strong>corona dentale</strong> ricopre un dente molto compromesso (da carie,
            frattura parziale o devitalizzazione) restituendogli forma e funzione. Utilizziamo corone
            in <strong>zirconio full-ceramic</strong> e <strong>disilicato di litio</strong>, metal-free e altamente estetiche, oppure
            in metallo-ceramica per i settori posteriori dove il carico masticatorio è maggiore.
          </p>
          <p className="text-gray-600">
            Grazie alla doppia formazione del Dr. Di Martino come odontoiatra e{" "}
            <strong>odontotecnico</strong>, la progettazione e la rifinitura estetica della
            corona — forma, colore, texture — sono seguite personalmente, per un risultato
            che si integra naturalmente con il resto del sorriso.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Protesi fissa su impianti
          </h2>
          <p className="text-gray-600">
            Quando mancano più denti o un&apos;intera arcata, la protesi fissa può essere
            realizzata direttamente sugli impianti, senza coinvolgere i denti naturali residui.
            Scopri come funziona la{" "}
            <a href="/protesi-su-impianti" className="text-[#2F4F4F] underline">
              protesi fissa su impianti
            </a>{" "}
            e la soluzione All-on-4 per le arcate complete.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Quanto dura una protesi fissa e come si mantiene
          </h2>
          <p className="text-gray-600">
            Un ponte o una corona ben realizzati e curati possono durare 10-15 anni e oltre.
            La durata dipende dalla salute dei denti pilastro e da un&apos;igiene orale accurata:
            sotto un ponte lo spazio va pulito con lo scovolino o il filo interdentale specifico,
            per prevenire carie ai margini. I{" "}
            <a href="/igiene-prevenzione" className="text-[#2F4F4F] underline">
              controlli di igiene periodici
            </a>{" "}
            sono fondamentali per individuare precocemente eventuali problemi.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Quanto costa una protesi fissa dentale ad Agliana
          </h2>
          <p className="text-gray-600">
            Il costo di un ponte o di una corona dipende dal numero di elementi, dal materiale
            scelto e dalle condizioni dei denti pilastro (potrebbe essere necessaria una
            devitalizzazione preliminare o un perno radicolare). Dopo la visita di valutazione ricevi un preventivo
            scritto dettagliato, voce per voce, senza impegno.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sulla protesi fissa</h2>
            <div className="space-y-4">
              {[
                { q: "Qual è la differenza tra un ponte e un impianto?", a: "Il ponte si appoggia ai denti naturali vicini, che vanno limati per fare da sostegno. L'impianto sostituisce la radice del dente mancante senza coinvolgere i denti sani adiacenti." },
                { q: "Quanto dura una protesi fissa (ponte o corona)?", a: "Con un'igiene domiciliare corretta e controlli periodici, un ponte o una corona in ceramica possono durare 10-15 anni o più." },
                { q: "La protesi fissa si può fare anche su impianti?", a: "Sì. Quando mancano più denti o un'intera arcata, la protesi fissa può essere avvitata o cementata direttamente sugli impianti invece che sui denti naturali." },
                { q: "Quanto costa un ponte dentale ad Agliana?", a: "Dipende dal numero di elementi, dal materiale della corona e dalle condizioni dei denti pilastro. Dopo la visita ricevi un preventivo scritto dettagliato, senza impegno." },
                { q: "Il ponte dentale fa male da mettere?", a: "No. La preparazione dei denti pilastro si esegue in anestesia locale. Nei giorni successivi è normale una lieve sensibilità, gestibile con antidolorifici da banco." },
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
              Valuta la Protesi Fissa più Adatta a Te
            </h3>
            <p className="text-gray-600 mb-4">
              Ponte, corona o protesi su impianti: scopri in studio la soluzione più adatta
              alla tua situazione. Prima visita senza impegno ad Agliana.
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
                — soluzioni fisse per arcate complete
              </li>
              <li>
                <a href="/protesi-mobile" className="text-[#2F4F4F] underline">Protesi mobile</a>{" "}
                — dentiere e protesi scheletrate removibili
              </li>
              <li>
                <a href="/implantologia" className="text-[#2F4F4F] underline">Implantologia</a>{" "}
                — impianti dentali come alternativa al ponte
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
