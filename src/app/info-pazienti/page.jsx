import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata = {
  title: "Info Pazienti | Studio Dentistico Di Martino Agliana",
  description:
    "Informazioni utili per i pazienti dello Studio Di Martino ad Agliana: come prepararsi alla prima visita, modulo anagrafica, istruzioni post-intervento e FAQ.",
  alternates: {
    canonical: "https://studiodimartino.eu/info-pazienti",
  },
  openGraph: {
    title: "Info Pazienti | Studio Dentistico Di Martino Agliana",
    description:
      "Informazioni utili per i pazienti dello Studio Di Martino ad Agliana: prima visita, modulo anagrafica, istruzioni post-intervento.",
    url: "https://studiodimartino.eu/info-pazienti",
    siteName: "Studio Dentistico Di Martino",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://studiodimartino.eu/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function InfoPazientiPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Informazioni per i Pazienti"
        subtitle="Tutto quello che devi sapere prima, durante e dopo la visita."
        showButtons={false}
      />

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
            Informazioni Utili per i Pazienti
          </h1>
          <p className="text-gray-600 mb-10">
            Siamo felici di accoglierti nel nostro studio ad Agliana. Qui trovi tutte le
            informazioni pratiche per prepararti alla visita e per sapere cosa aspettarti.
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">Prima Visita Gratuita</h2>
              <p className="text-gray-600 mb-3">
                La <strong>prima consulenza è gratuita e senza impegno</strong>. Durante la prima
                visita il Dr. Di Martino effettuerà un esame completo della bocca, valuterà
                radiografie (se già disponibili) e discuterà con te le opzioni di trattamento
                più adatte alla tua situazione.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Cosa portare alla prima visita:</strong>
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Documento d&apos;identità</li>
                <li>Tessera sanitaria</li>
                <li>Eventuali radiografie o ortopantomografie recenti (ultimi 12 mesi)</li>
                <li>Lista dei farmaci che stai assumendo</li>
                <li>Segnalare allergie note (lattice, farmaci, anestetici)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">Modulo Anagrafica</h2>
              <p className="text-gray-600 mb-4">
                Per velocizzare l&apos;accettazione, puoi compilare il modulo anagrafica online
                prima della tua prima visita. I dati verranno trattati nel pieno rispetto del GDPR.
              </p>
              <Link
                href="/form-anagrafica"
                className="inline-flex items-center bg-[#2F4F4F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-200"
              >
                Compila il Modulo Anagrafica
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">Istruzioni Post-Trattamento</h2>
              <p className="text-gray-600 mb-3">
                Dopo alcuni trattamenti (estrazioni, implantologia, chirurgia) è importante
                seguire le istruzioni fornite dal medico per garantire una guarigione ottimale.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Regole generali dopo un intervento chirurgico:</strong>
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li>Non sciacquare la bocca nelle prime 24 ore</li>
                <li>Applicare ghiaccio sulla guancia per ridurre il gonfiore (20 min on/20 min off)</li>
                <li>Seguire la terapia antibiotica e antidolorifica prescritta</li>
                <li>Evitare cibi caldi, duri o piccanti per i primi giorni</li>
                <li>Non fumare nelle prime 48-72 ore</li>
                <li>Evitare sforzi fisici intensi per 2-3 giorni</li>
              </ul>
              <p className="text-gray-600">
                Per le istruzioni specifiche per i pazienti ortodontici, consulta la sezione dedicata:
              </p>
              <div className="mt-3">
                <Link
                  href="/istruzioni-ortodontiche"
                  className="text-[#2F4F4F] underline font-semibold hover:opacity-80"
                >
                  Istruzioni per Pazienti Ortodontici →
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">Domande Frequenti (FAQ)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#2F4F4F] mb-1">La prima visita è davvero gratuita?</h3>
                  <p className="text-gray-600">
                    Sì. La prima consulenza al nostro studio è completamente gratuita e senza
                    impegno. Al termine, riceverai un piano di trattamento dettagliato con i
                    relativi costi, senza alcuna pressione.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F4F4F] mb-1">Avete disponibilità per urgenze?</h3>
                  <p className="text-gray-600">
                    Sì. In caso di urgenza dentale contattaci immediatamente al 0574 712060 o
                    su WhatsApp. Cerchiamo di garantire disponibilità in giornata.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F4F4F] mb-1">Accettate bambini?</h3>
                  <p className="text-gray-600">
                    Sì. Offfriamo visite pediatriche, sigillature preventive e trattamenti
                    ortodontici per bambini a partire dai 6-7 anni.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F4F4F] mb-1">Come posso pagare?</h3>
                  <p className="text-gray-600">
                    Accettiamo contanti, carte di credito/debito e bancomat. Possiamo anche
                    valutare piani di pagamento rateizzati per trattamenti di maggiore entità.
                    Chiedi informazioni in segreteria.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">Hai altre domande?</h3>
            <p className="text-gray-600 mb-4">
              Contattaci per qualsiasi dubbio o informazione. Siamo qui per aiutarti.
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
