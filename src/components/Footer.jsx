import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2F4F4F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Contatti</h4>
            <p className="mb-2 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Via Michelangelo Buonarroti, 15 - 51031 Agliana (PT)
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              +39 0574 712060
            </p>
            <p className="mb-2 flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              segreteria@studiodimartino.eu
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Orari</h4>
            <p className="mb-2 flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Lun-Merc-Gio: 9:00-13:00, 15:00-19:00
            </p>
            <p className="mb-2 flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Martedi e Venerdi: 9:00-16:00
            </p>
            <p className="mb-2 flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Sabato e Domenica: Chiuso
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Seguici</h4>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/studio_dentistico_di_martino" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors" aria-label="Seguici su Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/15td3Aa8zh/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors" aria-label="Seguici su Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@drnicoladimartino" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="Seguici su TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
              <a href="https://www.iubenda.com/privacy-policy/43231094/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-600">
          <p>Studio Dentistico Di Martino - La tua salute dentale è la nostra missione</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Studio Dentistico Di Martino. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
