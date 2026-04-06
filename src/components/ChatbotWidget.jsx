"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";

const WEB3FORMS_KEY = "bbbc29e2-3fa7-439d-97e6-3a3e0c49b519";

const CHAT_TREE = {
  start: {
    id: "start",
    message: "Ciao! Sono l'assistente dello Studio Di Martino. Come posso aiutarti?",
    options: [
      { label: "Prima visita", next: "prima_visita" },
      { label: "Controllo periodico", next: "controllo" },
      { label: "Urgenza / Dolore", next: "urgenza" },
      { label: "Info trattamenti", next: "trattamenti" },
    ],
  },
  prima_visita: {
    id: "prima_visita",
    message: "Ottima scelta! La prima visita è senza impegno. Come preferisci prenotare?",
    options: [
      { label: "Compila il modulo", next: "form", visitType: "prima-visita" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, vorrei prenotare una prima visita." },
      { label: "Chiama lo studio", action: "phone" },
    ],
  },
  controllo: {
    id: "controllo",
    message: "Perfetto, è importante fare controlli regolari! Come preferisci prenotare?",
    options: [
      { label: "Compila il modulo", next: "form", visitType: "controllo" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, vorrei prenotare un controllo." },
      { label: "Chiama lo studio", action: "phone" },
    ],
  },
  urgenza: {
    id: "urgenza",
    message: "Mi dispiace che tu stia soffrendo. Per le urgenze ti consiglio di chiamarci direttamente per trovare il primo appuntamento disponibile.",
    options: [
      { label: "Chiama ora", action: "phone" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, ho un'urgenza dentale, potete aiutarmi?" },
      { label: "Compila il modulo", next: "form", visitType: "urgenza" },
    ],
  },
  trattamenti: {
    id: "trattamenti",
    message: "Di quale trattamento vorresti sapere di più?",
    options: [
      { label: "Implantologia", next: "info_implantologia" },
      { label: "Ortodonzia", next: "info_ortodonzia" },
      { label: "Estetica dentale", next: "info_estetica" },
      { label: "Igiene e prevenzione", next: "info_igiene" },
    ],
  },
  info_implantologia: {
    id: "info_implantologia",
    message: "Offriamo soluzioni implantologiche all'avanguardia per sostituire denti mancanti. Il Dott. Calvisi è il nostro specialista in chirurgia implantare. Vuoi prenotare una consulenza?",
    options: [
      { label: "Prenota consulenza", next: "form", visitType: "prima-visita" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, vorrei info sull'implantologia." },
      { label: "Torna all'inizio", next: "start" },
    ],
  },
  info_ortodonzia: {
    id: "info_ortodonzia",
    message: "Offriamo ortodonzia tradizionale e invisibile per adulti e bambini. Il Dott. D'Orlandi è il nostro ortodontista. Vuoi prenotare una consulenza?",
    options: [
      { label: "Prenota consulenza", next: "form", visitType: "prima-visita" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, vorrei info sull'ortodonzia." },
      { label: "Torna all'inizio", next: "start" },
    ],
  },
  info_estetica: {
    id: "info_estetica",
    message: "Sbiancamento professionale e faccette per un sorriso perfetto. Vuoi prenotare una consulenza?",
    options: [
      { label: "Prenota consulenza", next: "form", visitType: "prima-visita" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, vorrei info sull'estetica dentale." },
      { label: "Torna all'inizio", next: "start" },
    ],
  },
  info_igiene: {
    id: "info_igiene",
    message: "La prevenzione è fondamentale! Le nostre igieniste professionali ti aiuteranno a mantenere un sorriso sano. Vuoi prenotare un appuntamento?",
    options: [
      { label: "Prenota appuntamento", next: "form", visitType: "controllo" },
      { label: "Scrivi su WhatsApp", action: "whatsapp", whatsappMsg: "Ciao, vorrei prenotare un'igiene dentale." },
      { label: "Torna all'inizio", next: "start" },
    ],
  },
  form: {
    id: "form",
    type: "form",
    message: "Perfetto! Lasciami i tuoi dati e ti ricontatteremo al più presto.",
  },
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState("start");
  const [chatHistory, setChatHistory] = useState([]);
  const [visitType, setVisitType] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      setChatHistory([{ sender: "bot", text: CHAT_TREE.start.message }]);
    }
  }, [isOpen]);

  const handleOptionClick = (option) => {
    setChatHistory((prev) => [...prev, { sender: "user", text: option.label }]);

    if (option.visitType) {
      setVisitType(option.visitType);
    }

    if (option.action === "whatsapp") {
      const msg = encodeURIComponent(option.whatsappMsg || "Ciao!");
      window.open(`https://wa.me/393464731192?text=${msg}`, "_blank");
      return;
    }

    if (option.action === "phone") {
      window.location.href = "tel:+390574712060";
      return;
    }

    const nextNode = CHAT_TREE[option.next];
    if (nextNode) {
      setTimeout(() => {
        setChatHistory((prev) => [...prev, { sender: "bot", text: nextNode.message }]);
        setCurrentNode(option.next);
      }, 400);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Per favore, compila tutti i campi.");
      return;
    }
    if (!privacyAccepted) {
      toast.error("Devi accettare l'informativa privacy.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Richiesta dal chatbot — ${formData.name}`,
          from_name: "Chatbot Studio Di Martino",
          "Nome": formData.name,
          "Telefono": formData.phone,
          "Tipo di visita": visitType || "—",
          "Origine": "Chatbot",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Web3Forms error");

      setChatHistory((prev) => [
        ...prev,
        { sender: "user", text: `${formData.name} - ${formData.phone}` },
        { sender: "bot", text: "Grazie! Ti ricontatteremo al più presto. A presto!" },
      ]);
      setSubmitted(true);
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Errore chatbot:", error);
      toast.error("Errore nell'invio. Riprova o chiamaci direttamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setChatHistory([{ sender: "bot", text: CHAT_TREE.start.message }]);
    setCurrentNode("start");
    setVisitType("");
    setFormData({ name: "", phone: "" });
    setSubmitted(false);
    setPrivacyAccepted(false);
  };

  return (
    <>
      {/* Bottone floating - basso sinistra */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-4 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-gray-500 hover:bg-gray-600"
            : "bg-[#2F4F4F] hover:bg-opacity-90 animate-bounce-slow"
        }`}
        aria-label={isOpen ? "Chiudi assistente" : "Apri assistente"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Overlay chat */}
      <div
        className={`fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-bottom-left
          md:bottom-24 md:left-4 md:w-[340px]
          bottom-0 left-0 right-0 w-full md:rounded-2xl rounded-t-2xl rounded-b-none
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}
      >
        {/* Header chat */}
        <div className="bg-[#2F4F4F] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-sm">Studio Di Martino</p>
              <p className="text-xs text-green-300">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white hover:bg-opacity-10 rounded p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Area messaggi */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                  msg.sender === "user"
                    ? "bg-[#2F4F4F] text-white rounded-br-md"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Area opzioni / form */}
        <div className="p-3 border-t border-gray-200 bg-white">
          {submitted ? (
            <button
              onClick={resetChat}
              className="w-full text-sm text-[#2F4F4F] font-semibold py-2 hover:underline"
            >
              Inizia una nuova conversazione
            </button>
          ) : CHAT_TREE[currentNode]?.type === "form" ? (
            <form onSubmit={handleFormSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Il tuo nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
                required
              />
              <input
                type="tel"
                placeholder="Il tuo telefono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F4F4F]"
                required
              />
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 accent-[#2F4F4F]"
                  required
                />
                <span className="text-xs text-gray-500">
                  Accetto l&apos;<a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] underline">informativa privacy</a>
                </span>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2F4F4F] text-white py-2 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Invio..." : "Invia richiesta"}
              </button>
            </form>
          ) : (
            <div className="space-y-2">
              {CHAT_TREE[currentNode]?.options?.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-3 py-2 text-sm bg-gray-100 hover:bg-[#2F4F4F] hover:text-white rounded-lg transition-all duration-200 font-medium"
                >
                  {option.label}
                </button>
              ))}
              {currentNode !== "start" && (
                <button
                  onClick={resetChat}
                  className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-1 flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Ricomincia
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
