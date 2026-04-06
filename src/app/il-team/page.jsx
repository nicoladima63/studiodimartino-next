import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import dimartinoImg from "@/assets/photos/dimartino.jpg";
import baldiImg from "@/assets/photos/baldi.jpg";
import ponzecchiImg from "@/assets/photos/ponzecchi.jpg";
import armandiImg from "@/assets/photos/armandi.jpg";
import jablonvskyImg from "@/assets/photos/jablonvsky.jpg";
import calvisiImg from "@/assets/photos/calvisi.jpg";
import dorlandiImg from "@/assets/photos/dorlandi.jpg";

export const metadata = {
  title: "Il Team | Dr. Nicola Di Martino Dentista Agliana | Studio Di Martino",
  description:
    "Conosci il team dello Studio Dentistico Di Martino ad Agliana: Dr. Nicola Di Martino odontoiatra, chirurgo implantologo, ortodontista e igieniste dentali.",
  alternates: {
    canonical: "https://studiodimartino.eu/il-team",
  },
  openGraph: {
    title: "Il Team | Dr. Nicola Di Martino Dentista Agliana | Studio Di Martino",
    description:
      "Conosci il team dello Studio Dentistico Di Martino ad Agliana: odontoiatra, chirurgo implantologo, ortodontista e igieniste.",
    url: "https://studiodimartino.eu/il-team",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

const team = [
  {
    name: "Dr. Nicola Di Martino",
    role: "Odontoiatra, Health Coach",
    photo: dimartinoImg.src,
    bio: "Fondatore dello studio, il Dr. Di Martino ha un percorso unico: prima odontotecnico, poi laureato in Odontoiatria. Questa doppia competenza gli permette di seguire ogni caso dalla pianificazione protesica alla realizzazione finale. È anche Health Coach certificato: crede nell'approccio olistico alla salute, dove la bocca è specchio del benessere generale. Prima visita gratuita e senza impegno.",
  },
  {
    name: "Dott. Roberto Calvisi",
    role: "Chirurgo Implantologo",
    photo: calvisiImg.src,
    bio: "Specializzato in chirurgia implantare, il Dott. Calvisi esegue interventi di implantologia singola e su arcata completa con tecniche mini-invasive. La sua esperienza pluriennale garantisce risultati prevedibili e un basso tasso di complicanze.",
  },
  {
    name: "Dott. Giacomo D'Orlandi",
    role: "Ortodontista",
    photo: dorlandiImg.src,
    bio: "Specializzato in ortodonzia fissa e mobile, il Dott. D'Orlandi tratta pazienti di tutte le età — dai bambini in fase di sviluppo agli adulti che desiderano correggere il loro sorriso. Ha una spiccata competenza nel trattamento con allineatori trasparenti.",
  },
  {
    name: "Dott.ssa Lara Armandi",
    role: "Igienista Dentale",
    photo: armandiImg.src,
    bio: "Laureata in igiene dentale, la Dott.ssa Armandi è la referente per la prevenzione e l'igiene orale del nostro studio. Elabora programmi personalizzati di igiene domiciliare e professionale, con un'attenzione particolare ai pazienti parodontali.",
  },
  {
    name: "Dott.ssa Anet Jablonvsky",
    role: "Igienista Dentale",
    photo: jablonvskyImg.src,
    bio: "Igienista dentale con esperienza in parodontologia e igiene per pazienti ortodontici. La Dott.ssa Jablonvsky è particolarmente attenta alla motivazione del paziente e all'educazione a una corretta igiene quotidiana.",
  },
  {
    name: "Sig.ra Cristina Baldi",
    role: "Segretaria",
    photo: baldiImg.src,
    bio: "Cristina è il primo volto che incontri entrando nello studio. Si occupa dell'accoglienza dei pazienti, della gestione degli appuntamenti e di tutta la parte amministrativa. La sua disponibilità e cordialità mettono a proprio agio anche i pazienti più ansiosi.",
  },
  {
    name: "Sig.ra Cristina Ponzecchi",
    role: "Assistente alla Poltrona",
    photo: ponzecchiImg.src,
    bio: "Assistente odontoiatrica qualificata, Cristina affianca i medici durante le sedute cliniche garantendo efficienza e sicurezza. Il suo supporto è fondamentale per rendere ogni trattamento fluido e confortevole per il paziente.",
  },
];

export default function IlTeamPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Il Nostro Team"
        subtitle="Professionisti dedicati alla tua salute orale, con passione e competenza."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-4 text-center">
            Il Team dello Studio Dentistico Di Martino ad Agliana
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Un team multidisciplinare, unito dall&apos;obiettivo comune di offrire cure
            odontoiatriche di eccellenza in un ambiente accogliente e sereno.
          </p>

          <div className="space-y-12">
            {team.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.role} - Studio Di Martino Agliana`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2F4F4F] mb-1">{member.name}</h2>
                  <p className="text-[#2F4F4F] font-semibold mb-3 opacity-70">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-3">
              Vieni a conoscerci di persona
            </h3>
            <p className="text-gray-600 mb-6">
              La prima consulenza è gratuita e senza impegno. Saremo felici di accoglierti
              nel nostro studio ad Agliana.
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
