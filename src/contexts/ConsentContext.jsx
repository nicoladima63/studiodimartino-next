"use client";

import { createContext, useContext, useState } from "react";

const ConsentContext = createContext();

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState({
    technical: true,
    analytics: false,
    maps: false,
  });

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
