import { Phone, ChevronRight, Clock, Calendar, Shield, CheckCircle, Smile, Award, HandHelping } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ChatbotWidget from "@/components/ChatbotWidget";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Photo imports
import dimartinoImg from "@/assets/photos/dimartino.jpg";
import baldiImg from "@/assets/photos/baldi.jpg";
import ponzecchiImg from "@/assets/photos/ponzecchi.jpg";
import armandiImg from "@/assets/photos/armandi.jpg";
import jablonvskyImg from "@/assets/photos/jablonvsky.jpg";
import calvisiImg from "@/assets/photos/calvisi.jpg";
import dorlandiImg from "@/assets/photos/dorlandi.jpg";

const WhatsAppIcon = () => (
  <svg
    className="mr-2 h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const services = [
  {
    title: "Odontoiatria Generale",
    description:
      "Cure dentali complete: dalla detartrasi all'igiene dentale professionale, otturazioni estetiche e devitalizzazioni. Prevenzione e trattamenti conservativi per mantenere i tuoi denti naturali il più a lungo possibile.",
  },
  {
    title: "Implantologia",
    description:
      "Impianti dentali di ultima generazione per sostituire denti mancanti in modo sicuro e duraturo. Dalla singola corona all'arcata completa, con materiali biocompatibili e tecniche mini-invasive.",
  },
  {
    title: "Ortodonzia",
    description:
      "Trattamenti ortodontici per adulti e bambini: apparecchi tradizionali, ortodonzia invisibile e allineatori trasparenti. Correzione di malocclusioni, denti storti e problemi di morso.",
  },
  {
    title: "Estetica Dentale",
    description:
      "Sbiancamento dentale professionale, faccette in ceramica e ricostruzioni estetiche per un sorriso perfetto. Risultati naturali e duraturi con le tecniche più avanzate.",
  },
];

const teamMembers = [
  { name: "Dott. Nicola Di Martino", role: "Odontoiatra", photo: dimartinoImg.src },
  { name: "Sig.ra Cristina Baldi", role: "Segretaria", photo: baldiImg.src },
  { name: "Sig.ra Cristina Ponzecchi", role: "Assistente", photo: ponzecchiImg.src },
  { name: "Dott.ssa Lara Armandi", role: "Igienista Professionale", photo: armandiImg.src },
  { name: "Dott.ssa Anet Jablonvsky", role: "Igienista Professionale", photo: jablonvskyImg.src },
  { name: "Dott. Roberto Calvisi", role: "Chirurgo Implantologo", photo: calvisiImg.src },
  { name: "Dott. Giacomo D'Orlandi", role: "Ortodontista", photo: dorlandiImg.src },
];

export default function HomePage() {
  return (
    <div>
      <Header />

      <Hero
        title={<>Studio Dentistico ad Agliana <br /> Dr. Nicola Di Martino</>}
        subtitle={<>Odontoiatria, Implantologia, Ortodonzia ed Estetica Dentale.<br /> Soluzioni personalizzate, senza stress, con risultati garantiti.</>}
      />

      {/* Chi Sono Section */}
      <section id="chi-sono" className="py-16 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F4F4F]">Chi Sono</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src={teamMembers[0].photo}
                alt="Dr. Nicola Di Martino - Dentista ad Agliana (Pistoia)"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Mi chiamo Nicola Di Martino e sono un dentista ad Agliana, in provincia di Pistoia.
                Il mio obiettivo è far sì che ogni paziente possa sorridere con fiducia ogni giorno.
              </p>
              <p className="text-gray-600 mb-4">
                Il mio percorso è unico nel suo genere: ho iniziato come odontotecnico, progettando
                protesi e impianti in laboratorio, per poi laurearmi in odontoiatria.
                Questa doppia competenza mi permette di seguire ogni trattamento dalla progettazione
                alla realizzazione finale, con una precisione che pochi studi dentistici possono offrire.
              </p>
              <p className="text-gray-600 mb-4">
                Nello studio di Via Michelangelo Buonarroti 15 ad Agliana, vicino a Pistoia e Prato,
                offro servizi di implantologia, ortodonzia invisibile, estetica dentale e odontoiatria
                conservativa. Ogni trattamento viene personalizzato sulle esigenze del paziente,
                utilizzando tecnologie moderne e materiali di alta qualità.
              </p>
              <p className="text-gray-600 mb-4">
                Sono anche un health coach certificato: credo che la salute orale sia parte
                integrante del benessere generale della persona. Per questo, oltre alle cure dentali,
                offro consulenze su alimentazione e abitudini che influenzano la salute dei denti.
              </p>
              <p className="text-gray-600">
                Vieni a conoscermi di persona: ti prometto che non sarà la
                solita visita dal dentista. La prima consulenza è senza impegno.
              </p>
              <div className="flex flex-col items-center gap-4 mt-6">
                <a
                  href="https://wa.me/393464731192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-200 w-72"
                >
                  <WhatsAppIcon />
                  Scrivimi su WhatsApp
                </a>
                <a
                  href="tel:+390574712060"
                  className="inline-flex items-center justify-center border-2 border-[#2F4F4F] text-[#2F4F4F] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#2F4F4F] hover:text-white transition duration-200 w-72"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Chiama Ora
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border-2 border-[#2F4F4F] text-[#2F4F4F] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#2F4F4F] hover:text-white transition duration-200 w-72"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Dove Sono
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Scegliermi Section */}
      <section id="choose-me-features" className="py-10 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F4F4F]">Perché Scegliermi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Empatia</h3>
              <p className="text-gray-600">
                Hai mai avuto la sensazione che nessuno capisca davvero il tuo problema?
                <br /> Io sì. È per questo che il mio approccio è diverso.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Smile className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">da Odontotecnico a Odontoiatra</h3>
              <p className="text-gray-600">
                Conosco ogni aspetto della cura dentale, dalla progettazione alla soluzione.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Award className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Coach</h3>
              <p className="text-gray-600">Il tuo benessere è una priorità, non solo il tuo sorriso.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <HandHelping className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-600">
                Troviamo insieme la soluzione più adatta a te, senza stress né sorprese.
              </p>
            </div>
          </div>
          <div className="text-center my-8">
            <h2 className="text-2xl font-bold text-[#2F4F4F]">Inoltre</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Orari Flessibili</h3>
              <p className="text-gray-600">
                Aperti anche in pausa pranzo il martedi e venerdi per venire incontro alle tue esigenze
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tecnologie Moderne</h3>
              <p className="text-gray-600">Strumentazione all&apos;avanguardia per cure di alta qualità</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Calendar className="w-12 h-12 text-[#2F4F4F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prima Visita</h3>
              <p className="text-gray-600">Consulenza iniziale senza impegno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemi Section */}
      <section id="solver" className="py-10 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2F4F4F]">
            Problemi che posso risolvere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2F4F4F] text-center">Denti storti?</h3>
              <p className="text-gray-600 text-center">Ortodonzia invisibile su misura per te.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2F4F4F] text-center">Denti ingialliti?</h3>
              <p className="text-gray-600 text-center">Sbiancamento professionale per un sorriso luminoso.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2F4F4F] text-center">Dolore o fastidio?</h3>
              <p className="text-gray-600 text-center">Trattamenti mirati per risolvere il problema alla radice.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2F4F4F] text-center">Paura del dentista?</h3>
              <p className="text-gray-600 text-center">Vieni a provare un&apos;esperienza completamente diversa!</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center bg-[#2F4F4F] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200"
            >
              Risolvi il tuo problema
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Trattamenti Section */}
      <section id="services" className="py-10 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2F4F4F]">
            I Nostri Trattamenti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#2F4F4F]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center bg-[#2F4F4F] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200"
            >
              Prenota il tuo trattamento
              <Calendar className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Igiene e Prevenzione */}
      <section id="prevenzione" className="py-10 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2F4F4F]">
            Igiene Dentale e Prevenzione
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              La prevenzione è il pilastro della salute orale. Nel nostro studio dentistico
              ad Agliana, le igieniste professionali Dott.ssa Lara Armandi e Dott.ssa Anet Jablonvsky
              si occupano di pulizia dentale professionale, sbiancamento e programmi di prevenzione
              personalizzati per adulti e bambini.
            </p>
            <p className="text-gray-600 mb-4">
              Consigliamo controlli periodici ogni 6 mesi per prevenire carie, gengiviti e
              parodontiti. Durante ogni seduta di igiene dentale, valutiamo lo stato di salute
              di gengive e tessuti orali, fornendo indicazioni personalizzate per l&apos;igiene
              domiciliare quotidiana.
            </p>
            <p className="text-gray-600">
              Per i pazienti ortodontici, offriamo sessioni di igiene dedicate con strumenti
              specifici per la pulizia attorno ad apparecchi e allineatori. La prevenzione è
              particolarmente importante durante il trattamento ortodontico per evitare
              demineralizzazioni e carie.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F4F4F]">Il Nostro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center justify-center">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <div key={index + 3} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recensioni Section */}
      <section id="testimonials" className="py-16 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F4F4F]">
            Cosa Dicono i Nostri Pazienti
          </h2>
          <div className="flex justify-center">
            <div
              className="elfsight-app-7ecdbcef-baf9-49cf-a499-b2c134fdafa0"
              data-elfsight-app-lazy
            ></div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/9ssp3vWirHLUqKR2A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#2F4F4F] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition duration-200"
            >
              Lascia una Recensione
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contact" className="py-16 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#2F4F4F]">
            Prenota ora la tua consulenza.
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Compila il modulo o contattaci direttamente. Risponderemo entro 24 ore.
          </p>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
          <MapSection />
        </div>
      </section>

      <Footer />

      <a
        href="tel:+390574712060"
        className="fixed bottom-28 right-4 bg-[#2F4F4F] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 z-40 md:hidden"
        aria-label="Chiama ora"
      >
        <Phone className="h-6 w-6" />
      </a>

      <ScrollToTopButton />

      <ChatbotWidget />
    </div>
  );
}
