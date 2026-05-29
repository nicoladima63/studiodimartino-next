"use client";

import { createContext, useContext, useState } from "react";

const ConsentContext = createContext();
const CONSENT_STORAGE_KEY = "studiodimartino_consent";
const CONSENT_VERSION = "1.0";

function getInitialConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      if (data.version === CONSENT_VERSION) {
        return data.preferences;
      }
    }
  } catch (e) {
    console.error("Error reading consent from localStorage:", e);
  }
  return { technical: true, analytics: false, maps: false };
}

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(getInitialConsent);

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
