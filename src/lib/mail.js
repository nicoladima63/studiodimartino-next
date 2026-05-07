import nodemailer from "nodemailer";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function getTransporter() {
  const missing = getMissingEnv();
  if (missing.length > 0) {
    throw new Error(`Configurazione email incompleta: ${missing.join(", ")}`);
  }

  const port = Number(process.env.SMTP_PORT);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderSubmissionHtml(title, fields) {
  const rows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value || "-")}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#1f2937;line-height:1.5;">
      <h2 style="color:#2F4F4F;">${escapeHtml(title)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        <tbody>${rows}</tbody>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#6b7280;">
        Messaggio inviato dal sito studiodimartino.eu tramite endpoint server-side.
      </p>
    </div>
  `;
}

export function renderSubmissionText(title, fields) {
  return [
    title,
    "",
    ...fields.map(([label, value]) => `${label}: ${value || "-"}`),
    "",
    "Messaggio inviato dal sito studiodimartino.eu tramite endpoint server-side.",
  ].join("\n");
}

export async function sendSubmissionEmail({ subject, replyTo, fields }) {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  await transporter.sendMail({
    from,
    to: process.env.MAIL_TO,
    replyTo: replyTo || undefined,
    subject,
    text: renderSubmissionText(subject, fields),
    html: renderSubmissionHtml(subject, fields),
  });
}
