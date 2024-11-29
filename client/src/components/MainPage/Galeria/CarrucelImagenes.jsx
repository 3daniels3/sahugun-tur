import React, { useState } from "react";

export default function CarrucelImagenes({ contenido }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contenido.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contenido.length) % contenido.length
    );
  };

  return (
    <div className="relative w-[80%] mx-auto">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 overflow-hidden"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {contenido.map(({imagen, piePagina}) => (
          <div className="w-full flex-shrink-0 mb-[5rem] sm:h-[40rem] text-center space-y-5">
            <img className="rounded-3xl" src={imagen} alt={piePagina} />
            <p className="drop-shadow-lg">{piePagina}</p>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-green-800 text-green-100 p-4 text-3xl rounded-full shadow-lg hover:bg-green-700 drop-shadow-[0_3px_30px_rgba(0,0,0,1)]"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-green-800 text-green-100 p-4 text-3xl rounded-full shadow-lg hover:bg-green-700 drop-shadow-[0_3px_30px_rgba(0,0,0,1)]"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contenido.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);  // Actualizamos el índice
              handleExpand(index);  // Llamamos a handleExpand con el índice
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-green-800" : "bg-green-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
