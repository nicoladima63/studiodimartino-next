"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const WEB3FORMS_KEY = "bbbc29e2-3fa7-439d-97e6-3a3e0c49b519";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    visitType: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      toast.error("Devi accettare l'informativa privacy per procedere.", { duration: 3000 });
      return;
    }

    const loadingToast = toast.loading("Invio in corso...");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuova ${formData.visitType} — ${formData.name}`,
          from_name: "Sito Studio Di Martino",
          "Nome e Cognome": formData.name,
          "Telefono": formData.phone,
          "Email": formData.email,
          "Tipo di visita": formData.visitType,
          "Messaggio": formData.message || "—",
        }),
      });
      const data = await res.json();
      toast.dismiss(loadingToast);
      if (data.success) {
        toast.success("Messaggio inviato con successo!", {
          style: { background: "#2F4F4F", color: "#fff" },
          duration: 3000,
        });
        setFormData({ name: "", phone: "", email: "", visitType: "", message: "" });
        setPrivacyAccepted(false);
      } else {
        toast.error("Si è verificato un errore, riprova più tardi.", { duration: 3000 });
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Si è verificato un errore, riprova più tardi.", { duration: 3000 });
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex items-center">
          <Phone className="text-[#2F4F4F] mr-4" />
          <div>
            <h3 className="font-semibold">Telefono</h3>
            <p className="text-gray-600">+39 0574 712060</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="text-[#2F4F4F] mr-4" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">segreteria@studiodimartino.eu</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin className="text-[#2F4F4F] mr-4" />
          <div>
            <h3 className="font-semibold">Indirizzo</h3>
            <p className="text-gray-600">Via Michelangelo Buonarroti, 15, 51031 - Agliana (PT)</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="text-[#2F4F4F] mr-4" />
          <div>
            <h3 className="font-semibold">Orari</h3>
            <p className="text-gray-600">Lun-Merc-Gio: 9-13, 15-19 | Mar-Ven: 9-16</p>
          </div>
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome e Cognome"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefono"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
            required
          />
          <select
            name="visitType"
            value={formData.visitType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
            required
          >
            <option value="">Seleziona il tipo di visita</option>
            <option value="Prima Visita">Prima Visita</option>
            <option value="Controllo">Controllo</option>
            <option value="Urgenza">Urgenza</option>
          </select>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Messaggio (opzionale)"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
        />
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 h-4 w-4 accent-[#2F4F4F]"
            required
          />
          <span className="text-sm text-gray-600">
            Ho letto e accetto l&apos;
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline font-medium">
              Informativa sulla Privacy
            </a>{" "}
            e acconsento al trattamento dei miei dati personali ai sensi del Reg. UE 2016/679 (GDPR).
          </span>
        </label>
        <button
          type="submit"
          className="w-full bg-[#2F4F4F] text-white py-4 rounded-lg font-bold hover:bg-opacity-90 active:bg-opacity-80 transition-all duration-200 text-lg shadow-md hover:shadow-lg"
        >
          Prenota Subito la Tua Consulenza
        </button>
      </form>
    </>
  );
}
