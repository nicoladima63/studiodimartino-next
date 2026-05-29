"use client";

import { useState, useEffect } from "react";
import { X, Settings } from "lucide-react";
import { useConsentContext } from "@/contexts/ConsentContext";

const CONSENT_STORAGE_KEY = "studiodimartino_consent";
const CONSENT_VERSION = "1.0";

export default function CookieBanner() {
  const { setConsent } = useConsentContext();
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    technical: true, // Always required
    analytics: false,
    maps: false,
  });

  // Check if user has already given consent
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      if (data.version === CONSENT_VERSION) {
        setPreferences(data.preferences);
        setConsent(data.preferences);
        return;
      }
    }
    // Show banner if no valid consent stored
    setIsOpen(true);
  }, [setConsent]);

  const handleAcceptAll = () => {
    const newPreferences = {
      technical: true,
      analytics: true,
      maps: true,
    };
    saveConsent(newPreferences);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      technical: true, // Technical is mandatory
      analytics: false,
      maps: false,
    };
    saveConsent(newPreferences);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs) => {
    const data = {
      version: CONSENT_VERSION,
      preferences: prefs,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
    setConsent(prefs);
    setIsOpen(false);
    setShowCustomize(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {!showCustomize ? (
          <>
            {/* Main banner */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-[#2F4F4F] mb-2">
                  Utilizziamo i Cookie
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Utilizziamo cookie tecnici per il funzionamento del sito, analytics per comprendere
                  l&apos;esperienza degli utenti, e mappe interattive. Puoi scegliere quali accettare.
                </p>
                <a href="/cookie-policy" className="text-sm text-[#2F4F4F] underline hover:no-underline mt-2 inline-block">
                  Leggi la Cookie Policy completa
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Rifiuta Non Essenziali
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="px-4 py-2 text-sm font-semibold text-[#2F4F4F] border border-[#2F4F4F] rounded-lg hover:bg-[#2F4F4F] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="h-4 w-4" aria-hidden="true" />
                  Personalizza
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#2F4F4F] rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Accetta Tutto
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Customize view */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-[#2F4F4F]">Personalizza Cookie</h2>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="Chiudi personalizzazione"
                >
                  <X className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Technical - always on */}
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <label className="font-semibold text-sm text-[#2F4F4F]">
                      Cookie Tecnici (Necessari)
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Essenziali per il funzionamento del sito. Session, CSRF, preferenze.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 h-5 w-5 accent-[#2F4F4F] cursor-not-allowed"
                    aria-label="Cookie tecnici (sempre attivi)"
                  />
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <label htmlFor="analytics-toggle" className="font-semibold text-sm text-[#2F4F4F] cursor-pointer">
                      Analytics
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      Google Analytics per capire come gli utenti navigano il sito.
                    </p>
                  </div>
                  <input
                    id="analytics-toggle"
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 accent-[#2F4F4F]"
                  />
                </div>

                {/* Maps */}
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <label htmlFor="maps-toggle" className="font-semibold text-sm text-[#2F4F4F] cursor-pointer">
                      Mappe
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      OpenStreetMap per mostrare la localizzazione dello studio.
                    </p>
                  </div>
                  <input
                    id="maps-toggle"
                    type="checkbox"
                    checked={preferences.maps}
                    onChange={(e) =>
                      setPreferences({ ...preferences, maps: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 accent-[#2F4F4F]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annulla
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#2F4F4F] rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Salva Preferenze
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
