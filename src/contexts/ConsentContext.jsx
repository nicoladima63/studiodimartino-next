"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ConsentContext = createContext();
const CONSENT_STORAGE_KEY = "studiodimartino_consent";
const CONSENT_VERSION = "1.0";

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState({
    technical: true,
    analytics: false,
    maps: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (data.version === CONSENT_VERSION) {
          setConsent(data.preferences);
          return;
        }
      }
    } catch (e) {
      console.error("Error reading consent from localStorage:", e);
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsentContext() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsentContext deve essere usato dentro ConsentProvider");
  }
  return context;
}
