import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ContribuirButton from "../components/Places/ContribuirButton";
import axios from "axios";
import Titulo from "../components/Titulo";
import AddPlaceModal from "../components/Places/AddPlaceModal";

export default function Place() {
  const [places, setPlaces] = useState([]); // Lista de lugares
  const [showAddModal, setShowAddModal] = useState(false); // Estado del modal para agregar lugar


  // Obtener lugares desde el backend
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const token = localStorage.getItem("token"); // Leer token del localStorage
        const response = await axios.get("http://localhost:5000/api/places", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlaces(response.data);
      } catch (error) {
        console.error("Error al obtener los lugares:", error);
      }
    };
  
    fetchPlaces();
    
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto mt-[5rem] text-green-900">
        <Titulo texto={'Lugares'} />
        <div className="w-[80%] text-center text-lg mx-auto">
          <p>Sahagún, Córdoba, ofrece espacios tranquilos para disfrutar de su ambiente cálido y acogedor, con áreas ideales para el encuentro social, la cultura y la tradición. Sus paisajes llanos reflejan la vida rural y el legado de su comunidad.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((place) => (
            <div key={place.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                  src={`http://localhost:5000${place.image}`} // Sin el slash adicional
                  alt={place.name}
                  className="w-full h-[200px] object-cover rounded-md"
              />
              <h2 className="mt-2 text-xl font-bold">{place.name}</h2>
              <p className="mt-2">{place.description}</p>
            </div>
          ))}
        </div>
        <ContribuirButton/>
        <button
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
          onClick={() => setShowAddModal(true)}
        >
          Contribuir
        </button>
      </div>

      {/* Modal para agregar un lugar */}
      {showAddModal && (
        <AddPlaceModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </>
  );
}
