import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Protesi su Impianti Agliana | Fisse e Removibili",
  description:
    "Protesi su impianti dentali ad Agliana: soluzioni fisse come l'All-on-4 e overdenture removibili ancorate agli impianti. Chirurgia con il Dott. Calvisi, protesi con il Dr. Di Martino. Prima visita senza impegno.",
  path: "/protesi-su-impianti",
  keywords: [
    "protesi su impianti Agliana",
    "protesi fissa su impianti costo",
    "overdenture su impianti",
    "All-on-4 Agliana",
    "dentiera fissata con impianti",
    "protesi avvitata su impianti",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Protesi su Impianti Dentali",
    "description": "Riabilitazione protesica ancorata a impianti dentali, in versione fissa (avvitata o cementata) o removibile (overdenture), per arcate parziali o complete.",
    "relevantSpecialty": "Dentistry",
    "recognizingAuthority": { "@type": "Organization", "name": "FNOMCEO" },
    "performer": [
      {
        "@type": "Physician",
        "name": "Dott. Roberto Calvisi",
        "jobTitle": "Chirurgo Implantologo",
        "worksFor": { "@type": "Dentist", "name": "Studio Dentistico Dr. Nicola Di Martino" },
      },
      {
        "@type": "Physician",
        "name": "Dr. Nicola Di Martino",
        "jobTitle": "Odontoiatra e Odontotecnico",
        "worksFor": { "@type": "Dentist", "name": "Studio Dentistico Dr. Nicola Di Martino" },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanti impianti servono per una protesi fissa su un'intera arcata?",
        "acceptedAnswer": { "@type": "Answer", "text": "Con la tecnica All-on-4 bastano 4 impianti per sostenere una protesi fissa su un'intera arcata; in caso di osso più scarso si può ricorrere a 6 impianti (All-on-6). Il numero esatto si stabilisce con la pianificazione CBCT 3D." },
      },
      {
        "@type": "Question",
        "name": "Che differenza c'è tra protesi avvitata e cementata sugli impianti?",
        "acceptedAnswer": { "@type": "Answer", "text": "La protesi avvitata si fissa agli impianti con viti removibili dal dentista per manutenzione, senza bisogno di cemento. La protesi cementata si incolla come una corona tradizionale. La avvitata è generalmente preferita perché più facile da controllare e riparare nel tempo." },
      },
      {
        "@type": "Question",
        "name": "La protesi su impianti si toglie di notte?",
        "acceptedAnswer": { "@type": "Answer", "text": "Dipende dal tipo: la protesi fissa (avvitata o cementata) resta sempre in bocca come i denti naturali. L'overdenture removibile, agganciata agli impianti con attacchi a scatto, si toglie per la pulizia quotidiana, tipicamente la sera." },
      },
      {
        "@type": "Question",
        "name": "Quanto costa una protesi su impianti ad Agliana?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo dipende dal numero di impianti necessari, dal tipo di protesi (fissa o removibile) e dalla complessità del caso. Dopo la visita di valutazione con il Dott. Calvisi e il Dr. Di Martino ricevi un preventivo scritto dettagliato, senza impegno." },
      },
      {
        "@type": "Question",
        "name": "Quanto tempo passa tra l'inserimento degli impianti e la protesi definitiva?",
        "acceptedAnswer": { "@type": "Answer", "text": "In casi selezionati con osso di buona qualità è possibile applicare una protesi provvisoria a carico immediato lo stesso giorno dell'intervento. La protesi definitiva si realizza dopo l'osseointegrazione, in media 2-4 mesi." },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Protesi su Impianti", "item": "https://www.studiodimartino.eu/protesi-su-impianti" },
    ],
  },
];

export default function ProtesiSuImpiantiPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero
        title="Protesi su Impianti ad Agliana"
        subtitle="Soluzioni fisse (All-on-4) e removibili (overdenture) ancorate agli impianti dentali."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Protesi su Impianti ad Agliana: Soluzioni Fisse e Removibili
          </h1>
          <p className="text-gray-600 mb-4">
            Quando mancano molti denti o un&apos;intera arcata, gli{" "}
            <a href="/implantologia" className="text-[#2F4F4F] underline">impianti dentali</a>{" "}
            possono sostenere una <strong>protesi su impianti</strong>: una riabilitazione
            più stabile di una protesi appoggiata solo sulla gengiva, disponibile in versione
            fissa o removibile. Allo Studio Dentistico Dr. Di Martino ad Agliana la chirurgia
            implantare è seguita dal Dott. Roberto Calvisi, chirurgo implantologo, mentre la
            progettazione e realizzazione della protesi è seguita personalmente dal Dr. Di
            Martino, odontoiatra e odontotecnico.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Perché una protesi su impianti invece che su denti naturali
          </h2>
          <p className="text-gray-600">
            La <a href="/protesi-fissa" className="text-[#2F4F4F] underline">protesi fissa
            tradizionale</a> (ponte) richiede denti naturali sani da usare come pilastri. Quando
            questi mancano, sono compromessi o insufficienti per numero, gli impianti
            offrono un ancoraggio indipendente, senza dover ricorrere a una{" "}
            <a href="/protesi-mobile" className="text-[#2F4F4F] underline">
              protesi mobile
            </a>{" "}
            appoggiata sulla sola gengiva, spesso meno stabile durante la masticazione.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Protesi fissa su impianti: All-on-4 e All-on-6
          </h2>
          <p className="text-gray-600 mb-4">
            Le tecniche <strong>All-on-4</strong> e <strong>All-on-6</strong> permettono di riabilitare un&apos;intera arcata
            con soli 4 o 6 impianti, posizionati con un&apos;angolazione specifica per sfruttare
            al meglio l&apos;osso disponibile anche in caso di riassorbimento osseo. Dove
            l&apos;osso lo consente o serve maggiore distribuzione del carico si utilizzano
            6 impianti (All-on-6). La protesi risultante è fissa: resta in bocca come i denti
            naturali e non viene rimossa dal paziente.
          </p>
          <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
            Protesi avvitata o cementata
          </h3>
          <p className="text-gray-600">
            La <strong>protesi avvitata</strong> si fissa agli impianti con viti che il
            dentista può svitare per manutenzione o riparazioni, senza dover rimuovere la
            protesi con procedure invasive. È generalmente la soluzione preferita per le
            arcate complete, proprio per la facilità di controllo nel tempo.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Protesi removibile su impianti (overdenture)
          </h2>
          <p className="text-gray-600">
            Per chi preferisce una soluzione removibile ma più stabile di una dentiera
            tradizionale, l&apos;<strong>overdenture</strong> si aggancia a 2 o più impianti
            tramite attacchi a scatto (Ot-equator) o una barra di collegamento. Il paziente può
            comunque toglierla per la pulizia quotidiana, ma il movimento durante la
            masticazione e la parola si riduce drasticamente rispetto a una protesi mobile
            senza impianti.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Il percorso: dalla chirurgia alla protesi definitiva
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                1. Pianificazione e chirurgia implantare
              </h3>
              <p className="text-gray-600">
                Il Dott. Calvisi pianifica e posiziona gli impianti con il supporto della
                CBCT 3D. Approfondisci la fase chirurgica nella pagina dedicata all&apos;
                <a href="/implantologia" className="text-[#2F4F4F] underline">
                  implantologia
                </a>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                2. Provvisorio (in casi selezionati, a carico immediato)
              </h3>
              <p className="text-gray-600">
                Quando la qualità e quantità d&apos;osso lo permettono, è possibile applicare
                una protesi provvisoria già il giorno dell&apos;intervento, per non restare
                mai senza denti nel periodo di guarigione.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                3. Protesi definitiva su misura
              </h3>
              <p className="text-gray-600">
                Dopo l&apos;osseointegrazione (in media 2-4 mesi), il Dr. Di Martino progetta
                e realizza la protesi definitiva — fissa o removibile — curandone forma,
                colore e occlusione grazie alla sua formazione come odontotecnico.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Manutenzione e durata della protesi su impianti
          </h2>
          <p className="text-gray-600">
            Sia la protesi fissa che l&apos;overdenture richiedono controlli periodici per
            verificare la tenuta delle viti o degli attacchi e prevenire la perimplantite.
            Gli{" "}
            <a href="/igiene-prevenzione" className="text-[#2F4F4F] underline">
              appuntamenti di igiene professionale
            </a>{" "}
            includono strumenti specifici per la pulizia attorno agli impianti, non
            raggiungibili con lo spazzolino da soli.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Quanto costa una protesi su impianti ad Agliana
          </h2>
          <p className="text-gray-600">
            Il costo dipende dal numero di impianti necessari, dal tipo di protesi (fissa
            avvitata, cementata o overdenture removibile) e dalla complessità del caso
            (eventuale rigenerazione ossea). Dopo la visita di valutazione ricevi un
            preventivo scritto dettagliato, voce per voce, senza impegno.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">Domande frequenti sulla protesi su impianti</h2>
            <div className="space-y-4">
              {[
                { q: "Quanti impianti servono per una protesi fissa su un'intera arcata?", a: "Con la tecnica All-on-4 bastano 4 impianti; con osso più scarso si può ricorrere a 6 impianti (All-on-6). Il numero esatto si stabilisce con la pianificazione CBCT 3D." },
                { q: "Che differenza c'è tra protesi avvitata e cementata sugli impianti?", a: "La protesi avvitata si fissa con viti removibili dal dentista per manutenzione. La protesi cementata si incolla come una corona tradizionale. La avvitata è generalmente preferita per la facilità di controllo nel tempo." },
                { q: "La protesi su impianti si toglie di notte?", a: "La protesi fissa resta sempre in bocca come i denti naturali. L'overdenture removibile, agganciata agli impianti, si toglie per la pulizia quotidiana, tipicamente la sera." },
                { q: "Quanto costa una protesi su impianti ad Agliana?", a: "Dipende dal numero di impianti, dal tipo di protesi e dalla complessità del caso. Dopo la visita ricevi un preventivo scritto dettagliato, senza impegno." },
                { q: "Quanto tempo passa tra l'inserimento degli impianti e la protesi definitiva?", a: "In casi selezionati è possibile una protesi provvisoria a carico immediato lo stesso giorno. La protesi definitiva si realizza dopo l'osseointegrazione, in media 2-4 mesi." },
              ].map(({ q, a }, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-semibold text-[#2F4F4F] cursor-pointer">{q}</summary>
                  <p className="text-gray-600 mt-2">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 bg-[#2F4F4F] rounded-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-3">
              Valuta la Protesi su Impianti più Adatta a Te
            </h3>
            <p className="text-gray-200 mb-6">
              Fissa o removibile: la visita di valutazione con il Dott. Calvisi e il Dr. Di
              Martino stabilisce la soluzione più adatta alla tua situazione ossea. Prima
              visita senza impegno.
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
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2F4F4F] transition duration-200"
              >
                Chiama: 0574 712060
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#2F4F4F] mb-4">Trattamenti correlati</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/implantologia" className="text-[#2F4F4F] underline">Implantologia</a>{" "}
                — la fase chirurgica di posizionamento degli impianti
              </li>
              <li>
                <a href="/protesi-fissa" className="text-[#2F4F4F] underline">Protesi fissa</a>{" "}
                — ponti e corone su denti naturali
              </li>
              <li>
                <a href="/protesi-mobile" className="text-[#2F4F4F] underline">Protesi mobile</a>{" "}
                — dentiere e protesi scheletrate removibili
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
