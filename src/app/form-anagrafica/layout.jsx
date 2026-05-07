import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Modulo Anagrafica Paziente",
  description:
    "Modulo anagrafica online per i pazienti dello Studio Dentistico Di Martino ad Agliana.",
  path: "/form-anagrafica",
  keywords: [
    "modulo anagrafica dentista",
    "anagrafica paziente Studio Di Martino",
    "studio dentistico Agliana",
  ],
});

export default function FormAnagraficaLayout({ children }) {
  return children;
}
