import React, { useState, useEffect } from "react";
import PlaceList from "../components/Place/PlaceList";
import PlaceModal from "../components/Place/PlaceModal";
import ContributeButton from "../components/Place/ContributeButton";
import Header from "../components/Header/Header"; // Suponiendo que el Header es común para todas las páginas

export default function Place() {
  const [places, setPlaces] = useState([]); // Estado para almacenar los lugares
  const [isModalOpen, setModalOpen] = useState(false); // Controla la apertura del modal
  const [userEmail, setUserEmail] = useState(null); // Guardar el email del usuario logueado

  useEffect(() => {
    // Verificar si el usuario está logueado al cargar la página
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }

    // Cargar los lugares desde el backend (puedes cambiar la URL)
    const fetchPlaces = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/places");
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error al obtener los lugares:", error);
      }
    };

    fetchPlaces();
  }, []);

  const handleAddPlace = (newPlace) => {
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Header /> {/* Header común para todas las ventanas */}
      
      <div className="container mx-auto p-4">
        {/* Mostrar el botón de contribución solo si el usuario está logueado */}
        {userEmail && <ContributeButton onClick={openModal} />}
        
        {/* Mostrar la lista de lugares */}
        <PlaceList places={places} />

        {/* Modal para agregar un nuevo lugar */}
        <PlaceModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          onAddPlace={handleAddPlace} 
        />
      </div>
    </div>
  );
}
