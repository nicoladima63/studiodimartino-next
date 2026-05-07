import { NextResponse } from "next/server";
import { sendSubmissionEmail } from "@/lib/mail";

export const runtime = "nodejs";

function clean(value) {
  return String(value || "").trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const visitType = clean(body.visitType);
    const message = clean(body.message);
    const privacyAccepted = body.privacyAccepted === true;

    if (!name || !phone || !email || !visitType || !privacyAccepted) {
      return NextResponse.json({ error: "Dati mancanti." }, { status: 400 });
    }

    await sendSubmissionEmail({
      subject: `Nuova richiesta dal sito - ${visitType} - ${name}`,
      replyTo: email,
      fields: [
        ["Nome e Cognome", name],
        ["Telefono", phone],
        ["Email", email],
        ["Tipo di visita", visitType],
        ["Messaggio", message],
        ["Informativa privacy", "Letta e confermata dall'utente"],
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio contatto:", error);
    return NextResponse.json({ error: "Errore durante l'invio." }, { status: 500 });
  }
}
