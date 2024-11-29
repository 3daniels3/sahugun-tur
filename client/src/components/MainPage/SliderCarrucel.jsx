import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube';
import AcortadorTexto from "./AcortadorTexto";

export default function SliderCarrucel({ contenido, truncado=true, onExpand }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contenido.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contenido.length) % contenido.length
    );
  };

  const handleExpand = (index) => {
    onExpand(index);  // Pasamos el índice correcto al hacer clic
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {contenido.map(({ id, titulo, video, descripcion }, index) => (
          <div key={id} className="w-full flex-shrink-0 mb-[3rem]">
            <h3 className="text-3xl font-bold">{titulo}</h3>
            <div className="flex justify-center items-center mt-[2.5rem] px-5 space-x-8">
              <div className="w-[23rem] h-[12.9rem] bg-green-100 rounded-xl overflow-hidden drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
                <ReactPlayer 
                  url={video}
                  playing={false}
                  controls={true}
                  width={368}
                  height={207}
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0,
                        iv_load_policy: 3,
                        disablekb: 1,
                      },
                    },
                  }}                
                />
              </div>
              <div className="w-[23rem] h-[15rem] rounded-2xl flex items-center justify-center">
                <AcortadorTexto
                  descripcion={descripcion}
                  truncado={truncado}
                  onExpand={() => handleExpand(index)} // Pasamos el índice a onExpand
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-green-800 text-green-100 p-2 rounded-full shadow-lg hover:bg-green-700"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-green-800 text-green-100 p-2 rounded-full shadow-lg hover:bg-green-700"
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
