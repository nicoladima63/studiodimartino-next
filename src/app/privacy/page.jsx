import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Informativa sulla Privacy del sito Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT).",
  path: "/privacy",
  keywords: ["privacy studio dentistico Agliana", "informativa privacy dentista"],
});

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-8">
            Informativa sulla Privacy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: maggio 2026</p>

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
                I dati inviati tramite il modulo anagrafica non restano memorizzati sul sito: vengono
                trasmessi allo studio e successivamente inseriti nel gestionale interno dello studio.
                Alcune richieste, ad esempio urgenze o trattamenti odontoiatrici, possono rivelare informazioni
                relative alla salute.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">d) Dati di navigazione</h3>
              <p>
                Cookie tecnici necessari al funzionamento del sito, cookie di analytics per comprendere
                l&apos;esperienza dei visitatori, e cookie da servizi di mappe interattive. Per maggiori informazioni
                consultare la <a href="/cookie-policy" className="text-[#2F4F4F] underline">Cookie Policy</a>.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">e) Dati delle Recensioni</h3>
              <p>
                Il sito visualizza le recensioni del studio pubblicate su Google Maps. I dati (nome autore,
                foto profilo, testo della recensione, valutazione, data) provengono direttamente da Google Places API
                e sono scaricati dal server del sito (non dal browser dell&apos;utente). Nessun dato personale del visitatore
                è trasmesso a Google per la visualizzazione delle recensioni.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Rispondere alle richieste di contatto e informazioni inviate tramite i moduli del sito</li>
                <li>Gestire le prenotazioni di visite e consulenze</li>
                <li>Trasmettere allo studio i dati anagrafici dei pazienti per l&apos;inserimento nel gestionale interno</li>
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
                <li><strong>Finalità di diagnosi, assistenza o terapia sanitaria</strong> (art. 9, par. 2, lett. h del GDPR) - quando i dati comunicati riguardano esigenze odontoiatriche o sanitarie</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">5. Servizi di Terze Parti</h2>
              <p>Il sito utilizza i seguenti servizi di terze parti:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Vercel</strong> - piattaforma di hosting del sito e delle API server-side usate per
                  ricevere i dati dei moduli e inoltrarli via email allo studio
                  (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy Vercel</a>).
                </li>
                <li>
                  <strong>Servizio email SMTP</strong> - i dati inseriti nei moduli sono inviati alla casella
                  email dello studio tramite il server SMTP configurato dal Titolare, senza pubblicare credenziali
                  email nel browser del visitatore.
                </li>
                <li>
                  <strong>Google Places API</strong> - per la visualizzazione delle recensioni del studio da Google Maps.
                  La API è chiamata dal server del sito (non dal browser), quindi i dati degli utenti visitatori non sono trasmessi a Google
                  (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy Google</a>).
                </li>
                <li>
                  <strong>OpenStreetMap</strong> - per la visualizzazione della mappa interattiva. Carica tile dai server di OpenStreetMap
                  (<a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Policy OSM</a>).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">6. Conservazione dei Dati</h2>
              <p>
                Il sito non salva i dati dei moduli in un database applicativo: i dati vengono inoltrati
                alla casella email dello studio. I dati anagrafici ricevuti vengono poi inseriti nel
                gestionale interno dello studio e conservati secondo i tempi previsti dalla normativa
                sanitaria, fiscale e amministrativa applicabile. Le email ricevute dal sito saranno
                conservate per il tempo strettamente necessario alla gestione della richiesta, salvo
                obblighi di legge o esigenze sanitarie/amministrative che impongano una conservazione
                più lunga.
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
                la nostra <a href="/cookie-policy" className="text-[#2F4F4F] underline">Cookie Policy</a>.
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
