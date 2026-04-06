import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export const metadata = {
  title: "Contatti | Studio Dentistico Di Martino Agliana (PT)",
  description:
    "Contatta lo Studio Dentistico Dr. Nicola Di Martino ad Agliana. Via Michelangelo Buonarroti, 15. Tel: 0574 712060. WhatsApp: 346 473 1192. Prima visita gratuita.",
  alternates: {
    canonical: "https://studiodimartino.eu/contatti",
  },
  openGraph: {
    title: "Contatti | Studio Dentistico Di Martino Agliana (PT)",
    description:
      "Contatta lo Studio Dentistico Dr. Nicola Di Martino ad Agliana. Via Michelangelo Buonarroti, 15. Tel: 0574 712060. Prima visita gratuita.",
    url: "https://studiodimartino.eu/contatti",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContattiPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Contattaci"
        subtitle="Siamo ad Agliana, a pochi minuti da Pistoia e Prato."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-4 text-center">
            Prenota una Visita al nostro Studio Dentistico ad Agliana
          </h1>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Compila il modulo o contattaci direttamente. La prima visita è gratuita.
            Risponderemo entro 24 ore.
          </p>

          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Dove siamo</h2>
              <address className="not-italic text-gray-600 space-y-1">
                <p><strong>Studio Dentistico Dr. Nicola Di Martino</strong></p>
                <p>Via Michelangelo Buonarroti, 15</p>
                <p>51031 Agliana (PT)</p>
              </address>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Orari di apertura</h2>
              <table className="text-gray-600 text-sm w-full">
                <tbody>
                  <tr>
                    <td className="py-1 pr-4 font-semibold">Lunedì</td>
                    <td>9:00–13:00 / 15:00–19:00</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 font-semibold">Martedì</td>
                    <td>9:00–16:00 (continuato)</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 font-semibold">Mercoledì</td>
                    <td>9:00–13:00 / 15:00–19:00</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 font-semibold">Giovedì</td>
                    <td>9:00–13:00 / 15:00–19:00</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 font-semibold">Venerdì</td>
                    <td>9:00–16:00 (continuato)</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 font-semibold">Sabato</td>
                    <td>Chiuso</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Telefono e WhatsApp</h2>
              <p className="text-gray-600 mb-2">
                <a href="tel:+390574712060" className="text-[#2F4F4F] font-semibold hover:underline">
                  +39 0574 712060
                </a>
              </p>
              <p className="text-gray-600">
                <a
                  href="https://wa.me/393464731192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2F4F4F] font-semibold hover:underline"
                >
                  WhatsApp: +39 346 473 1192
                </a>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Email</h2>
              <p className="text-gray-600">
                <a
                  href="mailto:segreteria@studiodimartino.eu"
                  className="text-[#2F4F4F] font-semibold hover:underline"
                >
                  segreteria@studiodimartino.eu
                </a>
              </p>
            </div>
          </div>

          <ContactForm />
          <MapSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
