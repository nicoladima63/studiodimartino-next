import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Implantologia Agliana | Impianti Dentali | Studio Di Martino",
  description:
    "Implantologia ad Agliana con il Dott. Roberto Calvisi, chirurgo implantologo. Impianti dentali singoli e arcata completa, tecnica mini-invasiva. Prenota ora.",
  alternates: {
    canonical: "https://studiodimartino.eu/implantologia",
  },
  openGraph: {
    title: "Implantologia Agliana | Impianti Dentali | Studio Di Martino",
    description:
      "Implantologia ad Agliana con il Dott. Roberto Calvisi, chirurgo implantologo. Impianti dentali singoli e arcata completa, tecnica mini-invasiva.",
    url: "https://studiodimartino.eu/implantologia",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ImplantologiaPage() {
  return (
    <div>
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
            è gratuita e senza impegno.
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

          <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Prenota una consulenza sull&apos;implantologia
            </h3>
            <p className="text-gray-600 mb-4">
              Vuoi sapere se sei un buon candidato per gli impianti dentali? Contattaci per
              una prima visita gratuita ad Agliana. Ti risponderemo entro 24 ore.
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
