import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Implantologia Agliana | Impianti Dentali — Studio Di Martino",
  description:
    "Impianti dentali ad Agliana con chirurgo implantologo dedicato, CBCT 3D e tecnica mini-invasiva. Prima visita di valutazione senza impegno. Chiama o scrivi su WhatsApp.",
  path: "/implantologia",
  keywords: [
    "implantologia Agliana",
    "impianti dentali Agliana",
    "impianti dentali Pistoia",
    "impianti dentali Prato",
    "chirurgo implantologo Agliana",
    "impianto dentale costo Agliana",
    "impianto dentale fa male",
    "carico immediato impianto dentale",
    "All-on-4 Pistoia",
  ],
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://www.studiodimartino.eu/#dentist",
    "name": "Studio Dentistico Dr. Nicola Di Martino",
    "url": "https://www.studiodimartino.eu",
    "telephone": "+39-0574-712060",
    "priceRange": "€€",
    "medicalSpecialty": "Dentistry",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Michelangelo Buonarroti, 15",
      "addressLocality": "Agliana",
      "addressRegion": "PT",
      "postalCode": "51031",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.9015278,
      "longitude": 11.0136389
    },
    "hasMap": "https://maps.app.goo.gl/9ssp3vWirHLUqKR2A"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": "https://www.studiodimartino.eu/implantologia#procedura",
    "name": "Implantologia Dentale",
    "procedureType": "https://schema.org/SurgicalProcedure",
    "description": "Inserimento di fixture in titanio biocompatibile nell'osso mascellare per sostituire denti mancanti, con pianificazione CBCT 3D e tecnica mini-invasiva.",
    "bodyLocation": "Mandibola / Mascella",
    "preparation": "Visita di valutazione con radiografie panoramiche e CBCT tridimensionale. Anamnesi medica completa per escludere controindicazioni.",
    "followup": "Controlli post-operatori a 7 giorni, 1 mese, 3 mesi. Igiene professionale ogni 6 mesi per prevenire la perimplantite.",
    "howPerformed": "Anestesia locale. Inserimento della fixture in titanio. Periodo di osseointegrazione 2–4 mesi. Applicazione abutment e corona definitiva su misura.",
    "recognizingAuthority": { "@type": "Organization", "name": "FNOMCEO" },
    "relevantSpecialty": "Dentistry",
    "performer": {
      "@type": "Physician",
      "name": "Dott. Roberto Calvisi",
      "jobTitle": "Chirurgo Implantologo",
      "worksFor": { "@type": "Dentist", "@id": "https://www.studiodimartino.eu/#dentist" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "L'intervento di impianto dentale fa male?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Si esegue in anestesia locale completa: durante la procedura non si avverte dolore. Nelle 24–48 ore successive è normale un fastidio gestibile con ibuprofene da banco." }
      },
      {
        "@type": "Question",
        "name": "Quanto costa un impianto dentale ad Agliana?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo varia in base al numero di impianti, al tipo di corona e alla complessità del caso (eventuale rigenerazione ossea o rialzo del seno). Dopo la visita di valutazione si riceve un preventivo scritto dettagliato, senza impegno." }
      },
      {
        "@type": "Question",
        "name": "Quanto dura l'osseointegrazione?",
        "acceptedAnswer": { "@type": "Answer", "text": "L'osseointegrazione richiede in media 2–4 mesi. In casi selezionati è possibile il carico immediato, se la qualità e la quantità dell'osso lo permettono." }
      },
      {
        "@type": "Question",
        "name": "Posso fare l'impianto se ho poco osso?",
        "acceptedAnswer": { "@type": "Answer", "text": "In molti casi sì. La rigenerazione ossea guidata e il rialzo del seno mascellare permettono di trattare anche chi ha osso insufficiente. La valutazione con CBCT 3D determina la fattibilità." }
      },
      {
        "@type": "Question",
        "name": "Quanto dura un impianto dentale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Con una corretta igiene domiciliare e controlli periodici, un impianto in titanio può durare tutta la vita. La corona protesica soprastante può necessitare di sostituzione dopo 15–20 anni." }
      },
      {
        "@type": "Question",
        "name": "Un fumatore può fare l'impianto dentale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il fumo riduce il tasso di successo dell'osseointegrazione ma non è una controindicazione assoluta. Si consiglia di ridurre o sospendere il fumo nelle settimane precedenti e successive all'intervento." }
      },
      {
        "@type": "Question",
        "name": "Il diabete è una controindicazione per gli impianti?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il diabete ben compensato non preclude l'implantologia. Il diabete scompensato richiede una valutazione medica approfondita prima di procedere." }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra impianto singolo e All-on-4?",
        "acceptedAnswer": { "@type": "Answer", "text": "L'impianto singolo sostituisce un dente mancante con fixture, abutment e corona individuale. L'All-on-4 riabilita un'arcata completa con soli 4 impianti che supportano una protesi fissa." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.studiodimartino.eu" },
      { "@type": "ListItem", "position": 2, "name": "Implantologia", "item": "https://www.studiodimartino.eu/implantologia" }
    ]
  }
];

const faq = [
  {
    q: "L'intervento di impianto dentale fa male?",
    a: "No. Si esegue in anestesia locale completa: durante la procedura non si avverte dolore. Nelle 24–48 ore successive è normale un fastidio gestibile con ibuprofene da banco."
  },
  {
    q: "Quanto costa un impianto dentale ad Agliana?",
    a: "Il costo varia in base al numero di impianti, al tipo di corona e alla complessità del caso. Dopo la visita di valutazione ricevi un preventivo scritto dettagliato, senza impegno."
  },
  {
    q: "Quanto dura l'osseointegrazione?",
    a: "In media 2–4 mesi. In casi selezionati è possibile il carico immediato, se la qualità e la quantità dell'osso lo permettono."
  },
  {
    q: "Posso fare l'impianto se ho poco osso?",
    a: "In molti casi sì. Rigenerazione ossea guidata e rialzo del seno mascellare permettono di trattare anche chi ha osso insufficiente. La valutazione con CBCT 3D determina la fattibilità."
  },
  {
    q: "Quanto dura un impianto dentale?",
    a: "Con igiene domiciliare corretta e controlli periodici, un impianto in titanio può durare tutta la vita. La corona protesica può necessitare di sostituzione dopo 15–20 anni."
  },
  {
    q: "Un fumatore può fare l'impianto?",
    a: "Il fumo riduce il tasso di successo ma non è una controindicazione assoluta. Si consiglia di ridurre o sospendere il fumo nelle settimane precedenti e successive all'intervento."
  },
  {
    q: "Il diabete è una controindicazione?",
    a: "Il diabete ben compensato non preclude l'implantologia. Il diabete scompensato richiede una valutazione medica approfondita prima di procedere."
  },
  {
    q: "Qual è la differenza tra impianto singolo e All-on-4?",
    a: "L'impianto singolo sostituisce un dente con fixture, abutment e corona individuale. L'All-on-4 riabilita un'arcata completa con soli 4 impianti che supportano una protesi fissa."
  },
];

export default function ImplantologiaPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* HERO */}
      <section className="bg-[#2F4F4F] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Implantologia ad Agliana — Impianti Dentali con Chirurgo Dedicato
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Dott. Roberto Calvisi, chirurgo implantologo · Pianificazione CBCT 3D ·
            Tecnica mini-invasiva · Prima visita senza impegno
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
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2F4F4F] transition duration-200"
            >
              Chiama: 0574 712060
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-14">

          {/* PROBLEMA → SOLUZIONE */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Hai perso un dente? Ecco cosa succede se non lo sostituisci
            </h2>
            <p className="text-gray-600 mb-4">
              Anche solo dopo pochi mesi dalla perdita di un dente, i denti vicini iniziano
              a spostarsi verso lo spazio vuoto. L&apos;osso sotto la gengiva — senza la stimolazione
              della radice — si riassorbe progressivamente. La masticazione diventa asimmetrica,
              il carico si distribuisce male e altri denti si consumano più in fretta.
            </p>
            <p className="text-gray-600 mb-4">
              Più aspetti, più l&apos;intervento diventa complesso e costoso.
            </p>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
              Perché l&apos;impianto è diverso da un ponte o una protesi rimovibile
            </h3>
            <p className="text-gray-600">
              Un <strong>ponte fisso</strong> richiede di limare i denti adiacenti sani.
              Una <strong>protesi rimovibile</strong> non stimola l&apos;osso e può scivolare
              durante la masticazione. L&apos;<strong>impianto dentale</strong> sostituisce il dente
              dalla radice: è indipendente dai denti vicini, stimola l&apos;osso e si comporta
              esattamente come un dente naturale.
            </p>
          </div>

          {/* CHI PUÒ FARE L'IMPIANTO */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Chi può fare un impianto dentale
            </h2>
            <p className="text-gray-600 mb-4">
              La maggior parte degli adulti in buona salute è un candidato idoneo.
              La valutazione parte dall&apos;anamnesi medica completa e da una radiografia
              panoramica — in molti casi integrata con CBCT 3D.
            </p>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
              Casi complessi: poco osso, fumo, diabete
            </h3>
            <p className="text-gray-600">
              Il <strong>fumo</strong> riduce il tasso di successo ma non è una controindicazione
              assoluta — si consiglia di sospenderlo nelle settimane prima e dopo l&apos;intervento.
              Il <strong>diabete ben compensato</strong> non preclude l&apos;implantologia.
              Chi ha <strong>poco osso</strong> può ricorrere a tecniche di rigenerazione ossea
              guidata o rialzo del seno mascellare, valutate caso per caso con il CBCT.
            </p>
          </div>

          {/* PROCEDIMENTO PASSO PER PASSO */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">
              Come funziona l&apos;intervento — passo per passo
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  1. Visita di valutazione con CBCT 3D
                </h3>
                <p className="text-gray-600">
                  Analisi dello spazio osseo disponibile, dei nervi, dei seni paranasali.
                  La pianificazione digitale permette di posizionare virtualmente l&apos;impianto
                  prima ancora di entrare in sala operatoria.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  2. Posizionamento dell&apos;impianto
                </h3>
                <p className="text-gray-600">
                  Intervento in anestesia locale, in media 30–60 minuti per un impianto singolo.
                  La tecnica mini-invasiva riduce gonfiore e tempi di recupero.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  3. Osseointegrazione (2–4 mesi)
                </h3>
                <p className="text-gray-600">
                  Il titanio si fonde con l&apos;osso mascellare in un processo biologico naturale.
                  In casi selezionati — osso di buona qualità e densità — è possibile
                  applicare una corona provvisoria già il giorno stesso (carico immediato).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  4. Corona definitiva su misura
                </h3>
                <p className="text-gray-600">
                  Il Dr. Di Martino, grazie alla sua formazione come odontotecnico oltre che
                  come odontoiatra, segue personalmente la realizzazione della corona protesica.
                  Forma, colore e dimensione vengono personalizzati per integrarsi naturalmente
                  con il sorriso del paziente.
                </p>
              </div>
            </div>
          </div>

          {/* DOLORE */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Fa male? Gestione del dolore prima, durante e dopo
            </h2>
            <p className="text-gray-600 mb-4">
              Durante l&apos;intervento non si avverte dolore: si lavora in anestesia locale completa.
            </p>
            <ul className="list-none space-y-3 text-gray-600">
              <li><strong>Giorno 1–2:</strong> possibile gonfiore e fastidio sordo, gestibile con ibuprofene da banco.</li>
              <li><strong>Giorno 3:</strong> la maggior parte dei pazienti riprende le normali attività.</li>
              <li><strong>Giorno 7:</strong> controllo post-operatorio e rimozione punti, se presenti.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Per i pazienti con ansia dentale, il Dr. Di Martino utilizza un approccio comunicativo
              attivo durante tutta la seduta —{" "}
              <a href="/info-pazienti" className="text-[#2F4F4F] underline">
                leggi come gestiamo l&apos;ansia in studio
              </a>.
            </p>
          </div>

          {/* TECNOLOGIA */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Tecnologia e materiali che usiamo ad Agliana
            </h2>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
              CBCT cone beam — pianificazione digitale 3D
            </h3>
            <p className="text-gray-600 mb-4">
              La TAC cone beam produce una ricostruzione tridimensionale precisa dell&apos;osso,
              dei nervi e dei seni paranasali. Permette di pianificare il posizionamento
              dell&apos;impianto al millimetro, riducendo i rischi chirurgici e ottimizzando
              il risultato estetico e funzionale.
            </p>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
              Impianti in titanio di grado medicale
            </h3>
            <p className="text-gray-600">
              Utilizziamo impianti in titanio di grado 4 e 5 (Ti-6Al-4V), con superficie
              trattata per favorire l&apos;osseointegrazione. Per i pazienti con allergia accertata
              al titanio è disponibile la valutazione per impianti in zirconio.
            </p>
          </div>

          {/* RISCHI */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Rischi e percentuale di successo — dati reali
            </h2>
            <p className="text-gray-600 mb-4">
              Il tasso di successo degli impianti in titanio è superiore al <strong>95% a 10 anni</strong>{" "}
              nei pazienti sani non fumatori. I rischi principali sono:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>
                <strong>Perimplantite</strong> (infiammazione attorno all&apos;impianto): prevenibile
                con igiene domiciliare accurata e{" "}
                <a href="/igiene-prevenzione" className="text-[#2F4F4F] underline">
                  controlli professionali periodici
                </a>.
              </li>
              <li>
                <strong>Mancata osseointegrazione</strong>: rara (&lt;5%), più frequente nei fumatori
                pesanti e nei pazienti con osteoporosi severa.
              </li>
              <li>
                <strong>Lesioni ai nervi o ai seni</strong>: ridotte al minimo dalla pianificazione
                CBCT 3D pre-operatoria.
              </li>
            </ul>
          </div>

          {/* COSTI */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Quanto costa un impianto dentale ad Agliana
            </h2>
            <p className="text-gray-600 mb-4">
              Il costo dipende da tre fattori principali:
            </p>
            <ol className="list-decimal ml-6 space-y-2 text-gray-600 mb-4">
              <li>Il numero di impianti necessari</li>
              <li>Il tipo di corona (zirconio metal-free, metallo-ceramica, full-ceramic)</li>
              <li>La necessità di rialzo del seno o rigenerazione ossea guidata</li>
            </ol>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
              Arcate complete: All-on-4 e All-on-6
            </h3>
            <p className="text-gray-600 mb-4">
              Per chi ha perso tutti i denti di un&apos;arcata, la soluzione All-on-4 o All-on-6
              permette di ottenere una protesi fissa con soli 4 o 6 impianti. Il preventivo
              include fixture, abutment e protesi completa.
            </p>
            <p className="text-gray-600">
              Dopo la visita di valutazione ricevi un preventivo scritto dettagliato,
              voce per voce. La prima visita è senza impegno.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-6">
              Domande frequenti sull&apos;implantologia
            </h2>
            <div className="space-y-3">
              {faq.map(({ q, a }, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-semibold text-[#2F4F4F] cursor-pointer">{q}</summary>
                  <p className="text-gray-600 mt-3">{a}</p>
                </details>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Non hai trovato risposta?{" "}
              <a href="/contatti" className="text-[#2F4F4F] underline">
                Scrivici direttamente
              </a>{" "}
              — risposta entro 24 ore.
            </p>
          </div>

          {/* CHIRURGO */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F4F4F] mb-4">
              Il chirurgo implantologo — Dott. Roberto Calvisi
            </h2>
            <p className="text-gray-600 mb-4">
              Il Dott. Roberto Calvisi esegue gli interventi di chirurgia implantare presso
              lo studio di Agliana, in stretta collaborazione con il Dr. Di Martino per
              la fase protesica. Questa collaborazione tra chirurgo e odontotecnico-odontoiatra
              garantisce un risultato integrato: l&apos;impianto è pianificato già tenendo conto
              della corona definitiva che lo sosterrà.
            </p>
            <p className="text-gray-600">
              Scopri tutto il{" "}
              <a href="/il-team" className="text-[#2F4F4F] underline">
                team dello studio
              </a>.
            </p>
          </div>

          {/* AREA GEOGRAFICA */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-[#2F4F4F] mb-3">
              Pazienti da Pistoia, Prato e Valdinievole
            </h2>
            <p className="text-gray-600">
              Lo studio si trova ad Agliana, in posizione centrale rispetto a Pistoia, Prato,
              Montale, Quarrata e Poggio a Caiano. Molti pazienti scelgono il nostro studio
              come riferimento per l&apos;implantologia nella provincia di Pistoia.
            </p>
          </div>

          {/* CTA FINALE */}
          <div className="bg-[#2F4F4F] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">
              Prenota la visita di valutazione per l&apos;impianto
            </h2>
            <p className="text-gray-200 mb-6">
              Scopri se sei un buon candidato per l&apos;implantologia. La prima visita è
              senza impegno — ti diciamo cosa serve, quanto tempo ci vuole e quanto costa,
              in modo chiaro e scritto.
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
                className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2F4F4F] transition duration-200"
              >
                Chiama: 0574 712060
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Via Michelangelo Buonarroti, 15 — 51031 Agliana (PT) ·{" "}
              <a
                href="https://maps.app.goo.gl/9ssp3vWirHLUqKR2A"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Indicazioni stradali
              </a>
            </p>
          </div>

          {/* TRATTAMENTI CORRELATI */}
          <div>
            <h2 className="text-xl font-bold text-[#2F4F4F] mb-4">Trattamenti correlati</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/igiene-prevenzione" className="text-[#2F4F4F] underline">
                  Igiene e prevenzione
                </a>{" "}
                — fondamentale per mantenere l&apos;impianto nel tempo
              </li>
              <li>
                <a href="/estetica-dentale" className="text-[#2F4F4F] underline">
                  Estetica dentale
                </a>{" "}
                — corone in zirconio e sbiancamento per completare il sorriso
              </li>
              <li>
                <a href="/odontoiatria-generale" className="text-[#2F4F4F] underline">
                  Odontoiatria generale
                </a>{" "}
                — cura dei denti residui prima e durante il trattamento implantare
              </li>
            </ul>
          </div>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
          Le informazioni contenute in questa pagina hanno scopo puramente informativo
          e non sostituiscono il parere del medico odontoiatra. Per una valutazione
          personalizzata prenota una visita presso il nostro studio.
        </p>
      </div>

      <Footer />
    </div>
  );
}
