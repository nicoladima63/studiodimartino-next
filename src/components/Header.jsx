"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const scrollToSection = (e, sectionId) => {
    if (!isLandingPage) return;
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#solver", label: "Soluzioni", onlyLanding: true },
    { href: "#team", label: "Team", onlyLanding: true },
    { href: "#testimonials", label: "Recensioni", onlyLanding: true },
    { href: "#contact", label: "Contatti", onlyLanding: true },
  ];

  const renderLink = ({ href, label, onlyLanding }) => {
    if (onlyLanding && !isLandingPage) return null;

    if (isLandingPage && href.startsWith("#")) {
      return (
        <a
          key={label}
          href={href}
          onClick={(e) => scrollToSection(e, href.substring(1))}
          className="hover:text-gray-300"
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        key={label}
        href={href}
        className="hover:text-gray-300"
        aria-current={pathname === href ? "page" : undefined}
      >
        {label}
      </Link>
    );
  };

  const renderMobileLink = ({ href, label, onlyLanding }) => {
    if (onlyLanding && !isLandingPage) return null;

    if (isLandingPage && href.startsWith("#")) {
      return (
        <a
          key={label}
          href={href}
          onClick={(e) => scrollToSection(e, href.substring(1))}
          className="block px-3 py-2 hover:bg-gray-700"
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        key={label}
        href={href}
        className="block px-3 py-2 hover:bg-gray-700"
        onClick={() => setIsMenuOpen(false)}
        aria-current={pathname === href ? "page" : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="bg-[#1d5353] text-white w-full sticky top-0 z-50 shadow-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#2F4F4F] focus:rounded"
      >
        Vai al contenuto principale
      </a>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link href="/">Studio Dentistico Di Martino</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <nav className="hidden md:flex space-x-8" aria-label="Navigazione principale">
            {navLinks.map(renderLink)}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(renderMobileLink)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
