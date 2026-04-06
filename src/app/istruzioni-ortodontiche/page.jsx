import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Istruzioni Ortodontiche | Studio Dentistico Di Martino Agliana",
  description:
    "Istruzioni per i pazienti ortodontici dello Studio Di Martino ad Agliana: cura degli allineatori, degli apparecchi fissi, igiene orale e consigli pratici.",
  alternates: {
    canonical: "https://studiodimartino.eu/istruzioni-ortodontiche",
  },
  openGraph: {
    title: "Istruzioni Ortodontiche | Studio Dentistico Di Martino Agliana",
    description:
      "Istruzioni per i pazienti ortodontici: cura degli allineatori, apparecchi fissi, igiene orale e consigli pratici.",
    url: "https://studiodimartino.eu/istruzioni-ortodontiche",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function IstruzioniOrtodontichePage() {
  return (
    <div>
      <Header />
      <Hero
        title="Istruzioni per Pazienti Ortodontici"
        subtitle="Segui questi consigli per ottenere il massimo dal tuo trattamento ortodontico."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Istruzioni Ortodontiche — Studio Di Martino Agliana
          </h1>
          <p className="text-gray-600 mb-10">
            Il successo del trattamento ortodontico dipende non solo dalle nostre cure, ma
            anche dalla tua collaborazione quotidiana. Segui queste istruzioni per ottenere
            i migliori risultati nel minor tempo possibile.
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
                Allineatori Trasparenti (Ortodonzia Invisibile)
              </h2>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>
                  <strong>Tempo di utilizzo:</strong> indossa gli allineatori almeno 20-22 ore al
                  giorno. Rimuovili solo per mangiare, bere (bevande diverse dall&apos;acqua),
                  spazzolarsi i denti e usare il filo interdentale.
                </li>
                <li>
                  <strong>Cambio degli allineatori:</strong> segui le indicazioni del Dott. D&apos;Orlandi
                  per il cambio (solitamente ogni 1-2 settimane).
                </li>
                <li>
                  <strong>Pulizia degli allineatori:</strong> risciacqua gli allineatori con acqua
                  fresca ogni volta che li rimuovi. Puliscili delicatamente con uno spazzolino
                  morbido e acqua fredda (mai calda, si deformano). Evita paste dentifricie
                  abrasive che li opacizzerebbero.
                </li>
                <li>
                  <strong>Custodia:</strong> quando non li indossi, riponili sempre nell&apos;apposita
                  custodia. Non lasciarli esposti all&apos;aria o avvolti in tovaglioli (rischio
                  di perdita o danneggiamento).
                </li>
                <li>
                  <strong>Bevande:</strong> con gli allineatori indossati è consentita solo l&apos;acqua
                  naturale. Caffè, tè, succhi e bevande zuccherate o gassate vanno consumati
                  solo dopo averli rimossi.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
                Apparecchi Fissi (Brackets)
              </h2>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>
                  <strong>Cibi da evitare:</strong> cibi duri (pane croccante, carote crude,
                  nocciole), appiccicosi (caramelle, gomme da masticare) e fibrosi che si
                  incastrano tra i brackets. Taglia frutta e verdura a pezzetti.
                </li>
                <li>
                  <strong>Bracket distaccato:</strong> se un bracket si stacca, conservalo e
                  contattaci per ripristinarlo al più presto. Non tentare di riattaccarlo da solo.
                </li>
                <li>
                  <strong>Filo che punge:</strong> se la punta del filo ortodontico dovesse
                  pungere la guancia, applicare un po&apos; di cera ortodontica sul punto
                  fastidioso fino alla prossima visita. La cera è disponibile in farmacia.
                </li>
                <li>
                  <strong>Dolore nei primi giorni:</strong> è normale avvertire tensione o
                  fastidio dopo ogni visita di attivazione. Dura 2-4 giorni. Se necessario,
                  prendi un antidolorifico da banco (paracetamolo o ibuprofene).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
                Igiene Orale durante l&apos;Ortodonzia
              </h2>
              <p className="text-gray-600 mb-3">
                Durante il trattamento ortodontico l&apos;igiene orale è ancora più importante
                del solito. Placca e cibo si accumulano più facilmente attorno a brackets
                e fili.
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>
                  <strong>Spazzolamento:</strong> spazzola i denti dopo ogni pasto, per almeno
                  2 minuti, usando uno spazzolino a testina piccola e setole morbide.
                </li>
                <li>
                  <strong>Scovolini interdentali:</strong> usa scovolini di misura appropriata
                  per pulire attorno ai brackets e sotto il filo ortodontico.
                </li>
                <li>
                  <strong>Filo interdentale con infilafilo:</strong> usa l&apos;apposito infilafilo
                  per passare il filo interdentale sotto il filo ortodontico.
                </li>
                <li>
                  <strong>Collutorio:</strong> usa un collutorio al fluoro per rinforzare lo
                  smalto e prevenire la demineralizzazione attorno ai brackets.
                </li>
                <li>
                  <strong>Sedute di igiene professionale:</strong> prenota sedute di igiene
                  ogni 3-4 mesi durante il trattamento. Le nostre igieniste useranno strumenti
                  specifici per pulire attorno all&apos;apparecchio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
                Contenitori di Contenzione
              </h2>
              <p className="text-gray-600 mb-3">
                Al termine del trattamento è obbligatorio usare i contenitori (retainers)
                per mantenere i risultati ottenuti. I denti hanno memoria e tendono a tornare
                nella posizione originale se non vengono contenuti.
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>
                  <strong>Contenitore rimovibile:</strong> indossalo ogni notte. La durata
                  è indicativamente a vita (per sempre, almeno di notte).
                </li>
                <li>
                  <strong>Contenitore fisso (filo linguale):</strong> è incollato nella parte
                  interna dei denti anteriori. Non toccarlo. In caso di distacco, contattaci
                  subito per evitare la ricaduta dei denti.
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Hai dubbi sul tuo trattamento ortodontico?
            </h3>
            <p className="text-gray-600 mb-4">
              Contattaci in qualsiasi momento. Siamo a disposizione per chiarimenti e urgenze.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
