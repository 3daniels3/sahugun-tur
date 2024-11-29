import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube';

export default function ModalHistoria({ isOpen, onClose, contenidoHistorias }) {
  if (!isOpen) return null; // No renderizar si el modal no está abierto

  if (!contenidoHistorias || !contenidoHistorias.titulo) {
    return <div>Loading... {console.log(contenidoHistorias)}</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Contenedor del Modal */}
      <div className="bg-white sm:w-[60%] h-[30rem] p-6 rounded-lg shadow-2xl relative overscroll-contain">
        {/* Botón de Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
        >
          ✕
        </button>

        {/* ContenidoHistorias del Modal */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{contenidoHistorias.titulo}</h2>
          <div className="flex items-start justify-around space-x mt-[3rem] h-[90%]">
            {/* Ilustración */}
            <div className="h-[10.3rem] bg-green-100 rounded-xl overflow-hidden drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
              <ReactPlayer 
                url={contenidoHistorias.video}
                playing={false}
                volume={0.5}
                controls={true}
                width={294}
                height={165}
              />
            </div>
            {/* Texto Completo */}
            <div className="w-[40%] font-light overscroll-auto overflow-auto h-[21rem]">
              <p>{contenidoHistorias.descripcion}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
