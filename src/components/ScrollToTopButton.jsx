"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-14 right-4 bg-[#2F4F4F] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity duration-300 z-40"
      aria-label="Torna in cima"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
