import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import istruzioniImg from "@/assets/photos/istruzioni.jpg";

export const metadata = {
  title: "Istruzioni | Studio Dentistico Di Martino",
  alternates: { canonical: "/info-page" },
};

const InfoPage = () => {
  return (
    <div>
      <Header />
      <Hero
        title="Istruzioni"
        subtitle="Le tue informazioni sono al sicuro con noi."
        showButtons={false}
      />
      <section id="chi-sono" className="py-16 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F4F4F]">Istruzioni</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src={istruzioniImg.src}
                alt="Istruzioni Studio Di Martino"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Qui puoi inserire il tuo testo. Questo paragrafo è un esempio di
                come il contenuto verrà visualizzato all&apos;interno del layout.
                Puoi aggiungere tutti i paragrafi, elenchi o altri elementi di
                cui hai bisogno.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InfoPage;
