import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Odontoiatria Generale Agliana | Otturazioni & Devitalizzazioni | Studio Di Martino",
  description:
    "Dentista ad Agliana per odontoiatria conservativa: otturazioni estetiche, devitalizzazione dente, estrazioni. Studio dentistico Di Martino vicino a Pistoia e Prato.",
  alternates: {
    canonical: "https://studiodimartino.eu/odontoiatria-generale",
  },
  openGraph: {
    title: "Odontoiatria Generale Agliana | Otturazioni & Devitalizzazioni | Studio Di Martino",
    description:
      "Dentista ad Agliana per odontoiatria conservativa: otturazioni estetiche, devitalizzazione dente, estrazioni. Vicino a Pistoia e Prato.",
    url: "https://studiodimartino.eu/odontoiatria-generale",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function OdontoiatriaGeneralePage() {
  return (
    <div>
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

          <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Prenota la tua visita dentistica ad Agliana
            </h3>
            <p className="text-gray-600 mb-4">
              Controllo di routine o urgenza? Contattaci subito. Prima visita gratuita.
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
