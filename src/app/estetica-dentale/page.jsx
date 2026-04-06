import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Estetica Dentale Agliana | Sbiancamento & Faccette | Studio Di Martino",
  description:
    "Estetica dentale ad Agliana: sbiancamento professionale, faccette in ceramica, ricostruzioni estetiche. Sorriso perfetto con tecniche avanzate. Prima visita gratuita.",
  alternates: {
    canonical: "https://studiodimartino.eu/estetica-dentale",
  },
  openGraph: {
    title: "Estetica Dentale Agliana | Sbiancamento & Faccette | Studio Di Martino",
    description:
      "Estetica dentale ad Agliana: sbiancamento professionale, faccette in ceramica, ricostruzioni estetiche. Sorriso perfetto con tecniche avanzate.",
    url: "https://studiodimartino.eu/estetica-dentale",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EsteticaDentalePage() {
  return (
    <div>
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

          <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Scopri il tuo nuovo sorriso
            </h3>
            <p className="text-gray-600 mb-4">
              Prenota una visita estetica gratuita ad Agliana. Il Dr. Di Martino analizzerà il
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

      <Footer />
    </div>
  );
}
