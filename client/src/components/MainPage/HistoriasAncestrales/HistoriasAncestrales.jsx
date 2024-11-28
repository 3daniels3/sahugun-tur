import React, { useState } from "react";
import Titulo from "../../Titulo";
import ModalHistoria from "./ModalHistoria";
import SliderCarrucel from "../SliderCarrucel";

export default function HistoriasAncestrales() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contenidoHistorias = [
    {
      id: 1,
      titulo: 'Nuestra Musica',
      video: 'https://www.youtube.com/watch?v=WNV4SwsPg6I',
      descripcion: '"Más Sahagunense que Nunca" de Luis Alberto Prado es un himno emotivo que rinde homenaje a la identidad y cultura del municipio de Sahagún, Córdoba, Colombía. La canción exalta el orgullo de ser sahagunense, resaltando su historia, tradiciones y la calidez de su gente, con un ritmo festivo que inspira unidad y pertenencia.'
    },
    {
      id: 2,
      titulo: 'Nuestra Danza',
      video: 'https://www.youtube.com/watch?v=oOv-3r7zYx8',
      descripcion: 'La danza de Sahagún refleja las raíces culturales de la región sabanera. La danza de Sahagún refleja las raíces culturales de la región sabanera. La danza de Sahagún refleja las raíces culturales de la región sabanera.La danza de Sahagún refleja las raíces culturales de la región sabaneraLa danza de Sahagún refleja las raíces culturales de la región sabanera. La danza de Sahagún refleja las raíces culturales de la región sabanera.'
    },
  ];

  // Función para manejar el índice y abrir el modal
  const handleExpand = (index) => {
    console.log("Index seleccionado:", index); // Verifica el índice
    setCurrentIndex(index);  // Actualiza el índice
    setIsModalOpen(true);     // Abre el modal
  };

  return (
    <section className="pt-[4rem]">
      {/* Titulo */}
      <div className="sm:w-[65%] mx-auto">
        <Titulo texto={"Historias Ancestrales"} />
      </div>

      <img className="w-full" src="/BarraDecorativaUp.png" alt="barra decorativa" />

      <div className="text-center">
        <SliderCarrucel
          contenido={contenidoHistorias}
          onExpand={handleExpand}  // Pasa la función que maneja el índice
        />
      </div>

      <img className="w-full" src="/BarraDecorativaDown.png" alt="barra decorativa" />

      {/* Modal */}
      {isModalOpen && (
        <ModalHistoria
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contenidoHistorias={contenidoHistorias[currentIndex]}  // Pasa la historia correspondiente
        />
      )}
    </section>
  );
}
