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
    <div className="relative flex items-center w-full h-[45rem] mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 w-full h-[40rem]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >

        {console.log(contenido)}
        {contenido.map(({ id, imagen, piePagina }) => (
          <div key={id} className="w-full flex flex-col items-center justify-center flex-shrink-0 text-center space-y-5">
              <div className="aspect-video flex justify-center overflow-hidden">
                <img
                className="h-full rounded-3xl"
                  src={imagen}
                  alt={piePagina}
                />
              </div>
              <p className="drop-shadow-lg">{piePagina}</p>
            </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[3%] transform -translate-y-1/2 bg-green-800 text-green-100 p-4 rounded-full shadow-lg hover:bg-green-700"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[3%] transform -translate-y-1/2 bg-green-800 text-green-100 p-4 rounded-full shadow-lg hover:bg-green-700"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contenido.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              handleExpand(index)
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
