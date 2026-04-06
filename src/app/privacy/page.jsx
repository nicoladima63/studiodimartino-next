import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Studio Dentistico Di Martino",
  description: "Informativa sulla Privacy del sito Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT).",
  alternates: { canonical: "/privacy" },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-8">
            Informativa sulla Privacy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: marzo 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">1. Titolare del Trattamento</h2>
              <p>Il Titolare del trattamento dei dati personali è:</p>
              <ul className="list-none mt-2 space-y-1">
                <li><strong>Studio Dentistico Dr. Nicola Di Martino</strong></li>
                <li>Via Michelangelo Buonarroti, 15 - 51031 Agliana (PT)</li>
                <li>P.IVA: 04354040489</li>
                <li>Iscrizione Albo Odontoiatri di Firenze n. 591</li>
                <li>Email: <a href="mailto:segreteria@studiodimartino.eu" className="text-[#2F4F4F] underline">segreteria@studiodimartino.eu</a></li>
                <li>Telefono: +39 0574 712060</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">2. Dati Personali Raccolti</h2>
              <p>Il sito raccoglie dati personali nelle seguenti modalità:</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">a) Form di contatto</h3>
              <p>Nome e cognome, numero di telefono, indirizzo email, tipo di visita richiesta, messaggio libero.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">b) Assistente virtuale (chatbot)</h3>
              <p>Nome e numero di telefono, tipo di visita selezionata.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">c) Modulo pre-ammissione (anagrafica)</h3>
              <p>
                Dati anagrafici (nome, cognome, data di nascita, luogo di nascita, codice fiscale, sesso),
                dati di residenza (indirizzo, CAP, città, provincia), dati di contatto (telefono, email).
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">d) Dati di navigazione</h3>
              <p>
                Cookie tecnici necessari al funzionamento del sito. Per maggiori informazioni consultare
                la <a href="https://www.iubenda.com/privacy-policy/43231094/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Cookie Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Rispondere alle richieste di contatto e informazioni inviate tramite i moduli del sito</li>
                <li>Gestire le prenotazioni di visite e consulenze</li>
                <li>Finalità amministrative e organizzative legate ai servizi dello studio</li>
                <li>Adempiere ad obblighi di legge</li>
              </ul>
              <p className="mt-2">
                I dati personali <strong>non</strong> saranno utilizzati per finalità di marketing o
                profilazione, né saranno ceduti a terzi per tali scopi.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">4. Base Giuridica del Trattamento</h2>
              <p>Il trattamento dei dati si fonda su:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Consenso dell&apos;interessato</strong> (art. 6, par. 1, lett. a del GDPR) - espresso tramite la compilazione volontaria dei moduli e la spunta dell&apos;apposita casella</li>
                <li><strong>Esecuzione di misure precontrattuali</strong> (art. 6, par. 1, lett. b del GDPR) - per la gestione delle richieste di appuntamento</li>
                <li><strong>Obbligo legale</strong> (art. 6, par. 1, lett. c del GDPR) - per gli adempimenti normativi applicabili</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">5. Servizi di Terze Parti</h2>
              <p>Il sito utilizza i seguenti servizi di terze parti:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>EmailJS</strong> - per l&apos;invio dei dati inseriti nei moduli di contatto alla casella email dello studio. I dati transitano attraverso i server di EmailJS
                  (<a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy EmailJS</a>).
                </li>
                <li>
                  <strong>Elfsight</strong> - per la visualizzazione del widget delle recensioni Google. Potrebbe raccogliere dati anonimi di utilizzo
                  (<a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy Elfsight</a>).
                </li>
                <li>
                  <strong>OpenStreetMap</strong> - per la visualizzazione della mappa interattiva. Carica tile dai server di OpenStreetMap
                  (<a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy OSM</a>).
                </li>
                <li>
                  <strong>Google Fonts</strong> - per il caricamento del font Montserrat. Trasferisce l&apos;indirizzo IP ai server di Google
                  (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy Google</a>).
                </li>
                <li>
                  <strong>Iubenda</strong> - per la gestione del consenso cookie e la cookie policy
                  (<a href="https://www.iubenda.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy Iubenda</a>).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">6. Conservazione dei Dati</h2>
              <p>
                I dati personali raccolti tramite i moduli del sito saranno conservati per il tempo
                strettamente necessario a soddisfare le finalità per cui sono stati raccolti e
                comunque non oltre <strong>24 mesi</strong> dalla raccolta, salvo obblighi di legge
                che ne impongano una conservazione più lunga.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">7. Diritti dell&apos;Interessato</h2>
              <p>
                Ai sensi degli articoli 15-22 del Regolamento (UE) 2016/679 (GDPR),
                l&apos;interessato ha diritto di:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Accesso</strong> - ottenere conferma dell&apos;esistenza di un trattamento e accedere ai propri dati</li>
                <li><strong>Rettifica</strong> - ottenere la correzione di dati inesatti o incompleti</li>
                <li><strong>Cancellazione</strong> - ottenere la cancellazione dei propri dati (&ldquo;diritto all&apos;oblio&rdquo;)</li>
                <li><strong>Limitazione</strong> - ottenere la limitazione del trattamento</li>
                <li><strong>Portabilità</strong> - ricevere i propri dati in formato strutturato e leggibile</li>
                <li><strong>Opposizione</strong> - opporsi al trattamento dei propri dati</li>
                <li><strong>Revoca del consenso</strong> - revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca</li>
              </ul>
              <p className="mt-4">
                Per esercitare i propri diritti è possibile inviare una richiesta a:<br />
                <a href="mailto:segreteria@studiodimartino.eu" className="text-[#2F4F4F] underline">segreteria@studiodimartino.eu</a>
              </p>
              <p className="mt-2">
                L&apos;interessato ha inoltre diritto di proporre reclamo all&apos;Autorità Garante
                per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">www.garanteprivacy.it</a>).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">8. Cookie Policy</h2>
              <p>
                Per informazioni dettagliate sull&apos;utilizzo dei cookie, si prega di consultare
                la nostra <a href="https://www.iubenda.com/privacy-policy/43231094/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Cookie Policy</a> gestita
                tramite Iubenda.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">9. Misure di Sicurezza</h2>
              <p>
                Il Titolare adotta misure di sicurezza adeguate per proteggere i dati personali
                raccolti da accessi non autorizzati, perdita, distruzione o alterazione. Il sito
                utilizza il protocollo HTTPS per la trasmissione sicura dei dati.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">10. Modifiche alla Privacy Policy</h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla presente informativa
                in qualsiasi momento. La versione aggiornata sarà sempre disponibile su questa pagina.
                Si consiglia di consultare periodicamente questa pagina per eventuali aggiornamenti.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
