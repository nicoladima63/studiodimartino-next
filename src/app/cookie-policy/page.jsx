import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Informativa sui Cookie del sito Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT).",
  path: "/cookie-policy",
  keywords: ["cookie policy studio dentistico", "informativa cookie"],
});

const CookiePolicy = () => {
  return (
    <div>
      <Header />
      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-8">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: maggio 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando
                visiti un sito web. Vengono utilizzati per ricordare informazioni su di te, migliorare
                l&apos;esperienza di navigazione e raccogliere dati statistici sulla tua visita.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Cookie utilizzati dal nostro sito</h2>

              <h3 className="text-lg font-semibold mt-6 mb-2">1. Cookie Tecnici (Necessari)</h3>
              <p>
                Questi cookie sono essenziali per il funzionamento del sito e non richiedono consenso.
                Vengono utilizzati per:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Session ID</strong> — mantiene la sessione di navigazione</li>
                <li><strong>CSRF Token</strong> — protezione contro attacchi cross-site request forgery nei form</li>
                <li><strong>Preferenze di navigazione</strong> — salva scelte dell&apos;utente (es. lingua, tema)</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Durata:</strong> fino alla chiusura del browser o come specificato nella sessione.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">2. Cookie di Analytics</h3>
              <p>
                Utilizziamo strumenti di analytics per comprendere come gli utenti interagiscono con
                il sito. Questi cookie sono caricati solo dopo aver ottenuto il tuo consenso esplicito.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  <strong>Google Analytics 4 (GA4)</strong> — cookie per tracciare visite, pagine visitate,
                  durata della sessione, dispositivo e posizione geografica approssimativa.
                  (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Google</a>)
                </li>
                <li>
                  <strong>Plausible Analytics</strong> (se attivo) — analytics privacy-first senza tracciamento
                  personalizzato. (<a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy Plausible</a>)
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Base giuridica:</strong> Art. 6 GDPR, par. 1, lett. a (Consenso).
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">3. Cookie di Terze Parti</h3>
              <p>
                Alcuni servizi di terze parti caricano cookie quando interagisci con loro. Questi richiedono
                il tuo consenso prima dell&apos;utilizzo:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  <strong>OpenStreetMap</strong> — mappa interattiva. Carica cookie per ricordare lo zoom e la posizione della mappa.
                  (<a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">Privacy OSM</a>)
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">4. Cookie di Marketing</h3>
              <p>
                Al momento non utilizziamo cookie di marketing (es. pixel di tracciamento per pubblici custom,
                retargeting). Se in futuro implementeremo questo tipo di cookie, te lo comunicheremo e chiederemo
                il consenso esplicito.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Consenso ai Cookie</h2>
              <p>
                Quando visiti il sito per la prima volta, verrà mostrato un banner informativo con le opzioni
                di consenso per i diversi tipi di cookie:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Accetta tutto</strong> — accetta tutti i cookie (tecnici, analytics, mappe)</li>
                <li><strong>Rifiuta</strong> — carica solo i cookie tecnici essenziali</li>
                <li><strong>Personalizza</strong> — scegli quale categoria di cookie consentire</li>
              </ul>
              <p className="mt-3">
                Puoi modificare le tue preferenze di consenso in qualsiasi momento ritornando a questa pagina
                o cliccando sul link &quot;Gestisci Cookie&quot; nel footer del sito.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Come disabilitare i Cookie</h2>
              <p>
                Puoi disabilitare i cookie dalle impostazioni del tuo browser. Tieni presente che disabilitare
                i cookie tecnici potrebbe compromettere il funzionamento del sito. Ecco come fare nei browser principali:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li><strong>Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati del sito web</li>
                <li><strong>Edge:</strong> Impostazioni → Privacy, ricerca e servizi → Cookie e altri dati dei siti</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">IP Anonymization e Privacy</h2>
              <p>
                I dati raccolti da Google Analytics vengono anonimizzati: l&apos;ultimo ottetto dell&apos;indirizzo IP
                viene rimosso prima della memorizzazione. Questo significa che non è possibile identificare direttamente
                il tuo indirizzo IP completo nei rapporti di Google Analytics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">Contatti e Reclami</h2>
              <p>
                Per domande su questa Cookie Policy, contatta:<br />
                <a href="mailto:segreteria@studiodimartino.eu" className="text-[#2F4F4F] underline">segreteria@studiodimartino.eu</a>
              </p>
              <p className="mt-4">
                Se ritieni che i tuoi diritti siano stati violati, puoi proporre reclamo all&apos;Autorità Garante
                per la Protezione dei Dati Personali:
                <br />
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">
                  www.garanteprivacy.it
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
