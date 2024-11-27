import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Titulo from "../../Titulo";
import ModalHistoria from "./ModalHistoria";

export default function HistoriasAncestrales() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mover al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contenidoHistorias.length);
  };

  // Mover al slide anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contenidoHistorias.length) % contenidoHistorias.length
    );
  };

  const contenidoHistorias = [
    {
      id: 1,
      titulo: 'Nuestra Musica',
      video: 'https://www.youtube.com/watch?v=WNV4SwsPg6I',
      descripcion: '"Más Sahagunense que Nunca" de Luis Alberto Prado es un himno emotivo que rinde homenaje a la identidad y cultura del municipio de Sahagún, Córdoba, Colombía. La canción exalta el orgullo de ser sahagunense, resaltando su historia, tradiciones y la calidez de su gente, con un ritmo festivo que inspira unidad y pertenencia. '
    },
    {
      id: 2,
      titulo: 'Nuestra Danza',
      video: 'https://www.youtube.com/watch?v=oOv-3r7zYx8',
      descripcion: 'La danza de Sahagún refleja las raíces culturales de la región sabanera. Está influenciada por ritmos caribeños como la cumbia y el porro, con movimientos vibrantes y expresivos que evocan la conexión con la tierra, las tradiciones campesinas y las festividades locales. Los trajes típicos suelen ser coloridos, destacando la riqueza cultural y la alegría del pueblo sahagunense.'
    },
  ]
  
  const isTextLong = contenidoHistorias.map(({ descripcion }) => descripcion.length > 300);

  return (
    <section className="pt-[4rem]">
      {/* Titulo */}
      <div className="sm:w-[65%] mx-auto">
        <Titulo texto={"Historias Ancestrales"}></Titulo>
      </div>

      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contenidoHistorias.map(({ id, titulo, video, descripcion}) => (
            <div key={id} className="w-full flex-shrink-0 mb-[3rem]">
              <h3 className="text-3xl text-center font-bold">{titulo}</h3>
              <div className="flex justify-center items-center mt-[2.5rem] px-5 space-x-8">
                <div className="w-[23rem] h-[12.9rem] bg-green-100 rounded-xl overflow-hidden drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
                  <ReactPlayer
                    url={video}
                    playing={false}
                    volume={0.5}
                    controls={true}
                    width={368}
                    height={207}
                  />
                </div>
                <div className="w-[23rem] h-[15rem] rounded-2xl flex items-center justify-center">
                  <p>
                    {isTextLong ? `${descripcion.slice(0, 300)}${isTextLong ? "..." : ""}` :  descripcion}
                    {/* Botón Ver Más */}
                    {isTextLong && !isExpanded && (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-green-500 hover:underline"
                      >
                        Ver más
                      </button>
                    )}
                  </p>
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
          {contenidoHistorias.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-green-800" : "bg-green-200"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ModalHistoria
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contenidoHistorias={contenidoHistorias[currentIndex]}
        />
      )}
    </section>
  );
}
