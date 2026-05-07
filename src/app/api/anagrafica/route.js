import { NextResponse } from "next/server";
import { sendSubmissionEmail } from "@/lib/mail";

export const runtime = "nodejs";

function clean(value) {
  return String(value || "").trim();
}

function formatDate(value) {
  if (!value) return "";
  return value.split("-").reverse().join("/");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const privacyAccepted = body.privacyAccepted === true;

    const requiredFields = [
      "cognome",
      "nome",
      "dataNascita",
      "comuneNascita",
      "codiceFiscale",
      "sesso",
      "indirizzo",
      "citta",
      "cap",
      "provincia",
      "cellulare",
      "email",
    ];

    const missing = requiredFields.filter((field) => !clean(body[field]));
    if (missing.length > 0 || !privacyAccepted) {
      return NextResponse.json({ error: "Dati mancanti." }, { status: 400 });
    }

    const cognome = clean(body.cognome);
    const nome = clean(body.nome);
    const email = clean(body.email);

    await sendSubmissionEmail({
      subject: `Nuova anagrafica paziente - ${cognome} ${nome}`,
      replyTo: email,
      fields: [
        ["Cognome", cognome],
        ["Nome", nome],
        ["Data di nascita", formatDate(clean(body.dataNascita))],
        ["Comune di nascita", clean(body.comuneNascita)],
        ["Codice fiscale", clean(body.codiceFiscale).toUpperCase()],
        ["Sesso", clean(body.sesso) === "M" ? "Maschio" : "Femmina"],
        ["Indirizzo", clean(body.indirizzo)],
        ["CAP", clean(body.cap)],
        ["Citta", clean(body.citta)],
        ["Provincia", clean(body.provincia).toUpperCase()],
        ["Cellulare", clean(body.cellulare)],
        ["Email", email],
        ["Informativa privacy", "Letta e confermata dall'utente"],
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio anagrafica:", error);
    return NextResponse.json({ error: "Errore durante l'invio." }, { status: 500 });
  }
}
