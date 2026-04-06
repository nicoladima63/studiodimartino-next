import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Igiene Dentale Agliana | Pulizia Denti Professionale | Studio Di Martino",
  description:
    "Igiene dentale professionale ad Agliana con le nostre igieniste. Pulizia denti, prevenzione carie e gengivite. Programmi personalizzati per adulti e bambini. Prenota ora.",
  alternates: {
    canonical: "https://studiodimartino.eu/igiene-prevenzione",
  },
  openGraph: {
    title: "Igiene Dentale Agliana | Pulizia Denti Professionale | Studio Di Martino",
    description:
      "Igiene dentale professionale ad Agliana. Pulizia denti, prevenzione carie e gengivite. Programmi personalizzati per adulti e bambini.",
    url: "https://studiodimartino.eu/igiene-prevenzione",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function IgienePrevenzione() {
  return (
    <div>
      <Header />
      <Hero
        title="Igiene Dentale e Prevenzione"
        subtitle="Pulizia professionale e programmi personalizzati per una bocca sempre sana."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Igiene Dentale Professionale ad Agliana (Pistoia)
          </h1>
          <p className="text-gray-600 mb-4">
            La <strong>prevenzione dentale</strong> è il pilastro della salute orale a lungo
            termine. Nello Studio Dentistico Dr. Nicola Di Martino ad Agliana, la Dott.ssa Lara
            Armandi e la Dott.ssa Anet Jablonvsky — igieniste dentali professionali — seguono
            ogni paziente con programmi di igiene personalizzati, pensati per prevenire carie,
            gengivite e parodontite.
          </p>
          <p className="text-gray-600 mb-4">
            La <strong>pulizia denti professionale</strong> (detartrasi) rimuove il tartaro
            e la placca batterica che non è possibile eliminare con il normale spazzolamento
            domiciliare. È raccomandata ogni 6 mesi per i pazienti in salute, con frequenza
            maggiore in caso di predisposizione a problemi parodontali.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Cosa include la seduta di igiene dentale
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Rimozione del tartaro</strong> con strumenti a ultrasuoni e curettes manuali
            </li>
            <li>
              <strong>Air polishing</strong> — getto di polvere abrasiva per rimuovere le pigmentazioni
              superficiali (caffè, tè, vino, tabacco)
            </li>
            <li>
              <strong>Lucidatura dei denti</strong> per rallentare il rideposito della placca
            </li>
            <li>
              <strong>Sondaggio parodontale</strong> per valutare lo stato di salute delle gengive
            </li>
            <li>
              <strong>Istruzione all&apos;igiene domiciliare</strong> — tecnica corretta di
              spazzolamento, uso del filo interdentale e degli scovolini
            </li>
            <li>
              <strong>Applicazione di fluoro</strong> per rinforzare lo smalto, se necessario
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Prevenzione della Carie e della Gengivite
          </h2>
          <p className="text-gray-600 mb-4">
            La <strong>prevenzione della carie</strong> inizia da una corretta igiene domiciliare
            e da controlli periodici. Nei bambini, proponiamo sigillature dei solchi dei molari
            permanenti, sigillature preventive che impediscono l&apos;accumulo di placca nelle
            zone più difficili da raggiungere.
          </p>
          <p className="text-gray-600 mb-4">
            La <strong>gengivite</strong> è l&apos;infiammazione delle gengive, segnalata da
            sanguinamento durante il lavaggio dei denti. Se non trattata, può evolvere in
            parodontite con perdita di osso di supporto. Intercettare precocemente questi
            segnali è essenziale per preservare i denti nel tempo.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Igiene Dentale per Pazienti Ortodontici
          </h2>
          <p className="text-gray-600 mb-4">
            I pazienti in trattamento ortodontico richiedono una cura speciale nell&apos;igiene
            orale. Offriamo sedute dedicate con strumenti specifici per la pulizia attorno a
            brackets e allineatori, riducendo il rischio di demineralizzazioni e carie
            durante il trattamento.
          </p>

          <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
            Le nostre Igieniste Dentali
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Dott.ssa Lara Armandi</strong> e <strong>Dott.ssa Anet Jablonvsky</strong> sono
            le igieniste professionali del nostro studio. Entrambe laureate in igiene dentale,
            si aggiornano costantemente sulle più recenti tecniche di prevenzione e motivazione
            del paziente. Il loro approccio paziente e attento mette a proprio agio anche i
            pazienti più ansiosi.
          </p>

          <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Prenota la tua seduta di igiene dentale
            </h3>
            <p className="text-gray-600 mb-4">
              Sei ad Agliana, Pistoia o dintorni? Prenota la tua pulizia denti professionale.
              Rispondiamo entro 24 ore.
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
