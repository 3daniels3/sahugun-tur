import React, { useState, useEffect } from "react";
import { AiFillCaretUp } from "react-icons/ai";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Manejar el scroll para mostrar/ocultar el botón
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  // Volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-[3rem] right-[2.5rem] bg-yellow-500 text-yellow-700 text-4xl p-3 rounded-full drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] hover:bg-yellow-600 hover:-translate-y-2 transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <AiFillCaretUp/>
      </button>
    </div>
  );
};
