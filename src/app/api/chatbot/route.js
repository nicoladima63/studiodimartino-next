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
    const visitType = clean(body.visitType);
    const privacyAccepted = body.privacyAccepted === true;

    if (!name || !phone || !privacyAccepted) {
      return NextResponse.json({ error: "Dati mancanti." }, { status: 400 });
    }

    await sendSubmissionEmail({
      subject: `Richiesta dal chatbot - ${name}`,
      fields: [
        ["Nome", name],
        ["Telefono", phone],
        ["Tipo di visita", visitType],
        ["Origine", "Chatbot"],
        ["Informativa privacy", "Letta e confermata dall'utente"],
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio chatbot:", error);
    return NextResponse.json({ error: "Errore durante l'invio." }, { status: 500 });
  }
}
