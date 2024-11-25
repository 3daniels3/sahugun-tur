import React, { useState } from "react";

export default function SliderCarrucel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes para el carrusel
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  // Mover al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Mover al slide anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="w-full flex-shrink-0 mb-[3rem]">
            <h3 className="text-3xl font-bold">
              Nuestra musica
            </h3>
            <div className="flex justify-center mt-[2.5rem] px-5 space-x-4">
              <div className="w-[23rem] h-[15rem] bg-yellow-200 rounded-xl overflow-hidden">
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-full"
                />
              </div>
              <div className="w-[23rem] h-[15rem] rounded-2xl flex items-center justify-center">
                texto descriptvo del video
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-green-800 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-green-800 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-green-800" : "bg-yellow-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}