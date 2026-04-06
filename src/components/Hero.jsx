"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Phone } from "lucide-react";
import studioImg from "@/assets/photos/studio.jpg";

// import.meta.glob non esiste in Next.js: importiamo direttamente l'immagine hero
const heroImages = [studioImg];

const Hero = ({ title, subtitle, showButtons = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => nextSlide(), 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative bg-[#2F4F4F] text-white py-20 w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-70" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
      </div>

      {heroImages.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-300" aria-label="Slide precedente">
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-300" aria-label="Slide successiva">
            <ChevronRight className="text-white" size={24} />
          </button>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">{subtitle}</p>

        {showButtons && (
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center bg-white text-[#2F4F4F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              <Calendar className="mr-2" />
              Prenota una Consulenza
            </a>
            <a href="tel:+390574712060" className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2F4F4F]">
              <Phone className="mr-2" />
              Chiama Ora
            </a>
          </div>
        )}

        {heroImages.length > 1 && (
          <div className="flex justify-center mt-8">
            {heroImages.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 mx-1 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`} aria-label={`Vai alla slide ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
