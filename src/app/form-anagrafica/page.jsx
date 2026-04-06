"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  User,
  CalendarDays,
  MapPin,
  Fingerprint,
  VenetianMask,
  Home,
  Building2,
  Mailbox,
  Map,
  Smartphone,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const WEB3FORMS_KEY = "bbbc29e2-3fa7-439d-97e6-3a3e0c49b519";

const FormAnagrafica = () => {
  const [formData, setFormData] = useState({
    cognome: "",
    nome: "",
    dataNascita: "",
    comuneNascita: "",
    codiceFiscale: "",
    sesso: "",
    indirizzo: "",
    citta: "",
    cap: "",
    provincia: "",
    cellulare: "",
    email: "",
    privacyAccettata: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const cfRegex = /^[A-Z0-9]{16}$/i;
    if (!cfRegex.test(formData.codiceFiscale)) {
      toast.error("Il codice fiscale non è valido.");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Per favore, inserisci un'email valida.");
      return false;
    }
    const capRegex = /^\d{5}$/;
    if (!capRegex.test(formData.cap)) {
      toast.error("Il CAP deve essere di 5 cifre.");
      return false;
    }
    const provRegex = /^[A-Z]{2}$/i;
    if (!provRegex.test(formData.provincia)) {
      toast.error("La provincia deve essere di 2 lettere (es. PT).");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacyAccettata) {
      toast.error("Devi accettare l'informativa privacy prima di procedere.");
      return;
    }
    if (!validateForm()) return;

    const loadingToast = toast.loading("Invio in corso...");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuova anagrafica — ${formData.cognome} ${formData.nome}`,
          from_name: "Sito Studio Di Martino",
          "Cognome e Nome": `${formData.cognome} ${formData.nome}`,
          "Data di nascita": formData.dataNascita.split("-").reverse().join("/"),
          "Comune di nascita": formData.comuneNascita,
          "Codice fiscale": formData.codiceFiscale.toUpperCase(),
          "Sesso": formData.sesso === "M" ? "Maschio" : "Femmina",
          "Indirizzo": formData.indirizzo,
          "CAP": formData.cap,
          "Città": formData.citta,
          "Provincia": formData.provincia.toUpperCase(),
          "Cellulare": formData.cellulare,
          "Email": formData.email,
        }),
      });
      const data = await res.json();
      toast.dismiss(loadingToast);
      if (data.success) {
        toast.success("Dati inviati con successo.", { duration: 4000 });
        setFormData({
          cognome: "",
          nome: "",
          dataNascita: "",
          comuneNascita: "",
          codiceFiscale: "",
          sesso: "",
          indirizzo: "",
          citta: "",
          cap: "",
          provincia: "",
          cellulare: "",
          email: "",
          privacyAccettata: false,
        });
      } else {
        toast.error("Errore durante l'invio. Riprova più tardi.", { duration: 4000 });
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Errore durante l'invio. Riprova più tardi.", { duration: 4000 });
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <Header />

      <Hero
        title="Anagrafica"
        subtitle="Compila il modulo con i tuoi dati."
        showButtons={false}
      />

      <section id="form-anagrafica" className="py-16 w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F4F4F]">
            Modulo Anagrafico
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#2F4F4F] mb-4">Anagrafica</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    placeholder="Cognome"
                    required
                    className="form-input pl-10"
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                    className="form-input pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="dataNascita"
                    value={formData.dataNascita}
                    onChange={handleChange}
                    required
                    className="form-input pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="comuneNascita"
                    value={formData.comuneNascita}
                    onChange={handleChange}
                    placeholder="Comune di Nascita"
                    required
                    className="form-input pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="codiceFiscale"
                    value={formData.codiceFiscale}
                    onChange={handleChange}
                    placeholder="Codice Fiscale"
                    required
                    className="form-input uppercase pl-10"
                    maxLength="16"
                  />
                </div>
                <div className="relative">
                  <VenetianMask className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="sesso"
                    value={formData.sesso}
                    onChange={handleChange}
                    required
                    className="form-input pl-10"
                  >
                    <option value="">Seleziona Sesso</option>
                    <option value="M">Maschio</option>
                    <option value="F">Femmina</option>
                  </select>
                </div>
              </div>

              <hr className="my-6" />
              <h3 className="text-xl font-semibold text-[#2F4F4F] mb-4">Residenza</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="indirizzo"
                    value={formData.indirizzo}
                    onChange={handleChange}
                    placeholder="Indirizzo (Via, Piazza, etc.)"
                    required
                    className="form-input pl-10"
                  />
                </div>
                <div className="relative">
                  <Mailbox className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="cap"
                    value={formData.cap}
                    onChange={handleChange}
                    placeholder="CAP"
                    required
                    className="form-input pl-10"
                    maxLength="5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="citta"
                    value={formData.citta}
                    onChange={handleChange}
                    placeholder="Città"
                    required
                    className="form-input pl-10"
                  />
                </div>
                <div className="relative">
                  <Map className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                    placeholder="Provincia (es. PT)"
                    required
                    className="form-input uppercase pl-10"
                    maxLength="2"
                  />
                </div>
              </div>

              <hr className="my-6" />
              <h3 className="text-xl font-semibold text-[#2F4F4F] mb-4">Contatti</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="cellulare"
                    value={formData.cellulare}
                    onChange={handleChange}
                    placeholder="Cellulare"
                    required
                    className="form-input pl-10"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-input pl-10"
                  />
                </div>
              </div>

              <hr className="my-6" />

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#2F4F4F]">Informativa Privacy (GDPR UE 2016/679)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  I dati personali raccolti saranno trattati nel rispetto del Regolamento (UE) 2016/679
                  e utilizzati esclusivamente per finalità amministrative, cliniche e di contatto relative
                  ai servizi richiesti. Il titolare del trattamento è lo Studio Dr. Nicola Di Martino.
                  Potrai in ogni momento richiedere l&apos;accesso, la rettifica o la cancellazione dei tuoi
                  dati scrivendo alla{" "}
                  <a className="text-[#2F4F4F] underline" href="mailto:segreteria@studiodimartino.eu">
                    segreteria
                  </a>.
                </p>
                <label className="flex items-center gap-3 cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    name="privacyAccettata"
                    checked={formData.privacyAccettata}
                    onChange={(e) => setFormData({ ...formData, privacyAccettata: e.target.checked })}
                    required
                    className="h-4 w-4 accent-[#2F4F4F]"
                  />
                  <span className="text-sm text-gray-600">
                    Dichiaro di aver letto e compreso l&apos;informativa privacy e acconsento al trattamento
                    dei miei dati personali.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F4F4F] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 text-lg"
              >
                Invia Dati
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FormAnagrafica;
