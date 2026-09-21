export const SITE_URL = "https://www.studiodimartino.eu";

export const sitePages = [
  {
    "name": "Home",
    "path": "/",
    "description": "Presentazione dello studio e dei servizi.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 1
  },
  {
    "name": "Contatti",
    "path": "/contatti",
    "description": "Recapiti, indirizzo e modalità per prenotare.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Emergenza dentista Agliana",
    "path": "/emergenza-dentista-agliana",
    "description": "Indicazioni per le urgenze dentali.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Estetica dentale",
    "path": "/estetica-dentale",
    "description": "Informazioni sui trattamenti estetici dentali.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Sbiancamento professionale, faccette in ceramica e ricostruzioni estetiche per migliorare l'aspetto del sorriso."
  },
  {
    "name": "Igiene e prevenzione",
    "path": "/igiene-prevenzione",
    "description": "Informazioni su pulizia dentale e prevenzione.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Igiene orale professionale e programmi personalizzati per prevenire carie, gengivite e parodontite."
  },
  {
    "name": "Il team",
    "path": "/il-team",
    "description": "Professionisti dello studio.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Implantologia",
    "path": "/implantologia",
    "description": "Informazioni sugli impianti dentali.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Soluzioni implantari per sostituire elementi dentali mancanti, con pianificazione dedicata e approccio mini-invasivo."
  },
  {
    "name": "Info pazienti",
    "path": "/info-pazienti",
    "description": "Informazioni utili per i pazienti.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Istruzioni ortodontiche",
    "path": "/istruzioni-ortodontiche",
    "description": "Indicazioni per pazienti ortodontici.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Odontoiatria generale",
    "path": "/odontoiatria-generale",
    "description": "Informazioni sulle cure conservative e generali.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Cure dentali conservative, otturazioni, devitalizzazioni, corone e ponti, con attenzione alla conservazione del tessuto dentale sano."
  },
  {
    "name": "Ortodonzia",
    "path": "/ortodonzia",
    "description": "Informazioni su allineatori e apparecchi.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Trattamenti ortodontici con allineatori trasparenti e apparecchi tradizionali per adulti, adolescenti e bambini."
  },
  {
    "name": "Protesi fissa",
    "path": "/protesi-fissa",
    "description": "Informazioni su ponti e corone dentali fisse.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Ponti e corone fissi su denti naturali o su impianti, realizzati su misura per sostituire elementi dentali mancanti o compromessi."
  },
  {
    "name": "Protesi mobile",
    "path": "/protesi-mobile",
    "description": "Informazioni su dentiere e protesi scheletrate removibili.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Protesi removibili totali e parziali (dentiere e scheletrati) per arcate con molti o tutti i denti mancanti."
  },
  {
    "name": "Protesi su impianti",
    "path": "/protesi-su-impianti",
    "description": "Informazioni su protesi fisse e removibili ancorate a impianti dentali.",
    "kind": "service",
    "changeFrequency": "monthly",
    "priority": 0.8,
    "serviceDescription": "Riabilitazioni fisse (All-on-4) e removibili (overdenture) ancorate a impianti dentali per arcate parziali o complete."
  },
  {
    "name": "Cookie Policy",
    "path": "/cookie-policy",
    "description": "Informativa sui Cookie del sito Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT).",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Istruzioni Orto",
    "path": "/istruzioni-orto",
    "description": "Istruzioni pratiche per i pazienti ortodontici dello Studio Dentistico Di Martino ad Agliana.",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  },
  {
    "name": "Privacy",
    "path": "/privacy",
    "description": "Informativa sulla Privacy del sito Studio Dentistico Dr. Nicola Di Martino ad Agliana (PT).",
    "kind": "core",
    "changeFrequency": "monthly",
    "priority": 0.8
  }
] as const;

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;
