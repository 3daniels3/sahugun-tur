import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import axios from "axios";

export default function Place() {
  const [places, setPlaces] = useState([]); // Lista de lugares
  const [showAddModal, setShowAddModal] = useState(false); // Estado del modal para agregar lugar
  const [newPlace, setNewPlace] = useState({ name: "", description: "" }); // Datos del nuevo lugar
  const [imageFile, setImageFile] = useState(null); // Archivo de imagen

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


  // Manejar envío del formulario para agregar un lugar
  const handleAddPlace = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newPlace.name);
    formData.append("description", newPlace.description);
    if (imageFile) {
      formData.append("image", imageFile); // Subir archivo de imagen
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:5000/api/places", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setPlaces([...places, response.data]); // Agregar el nuevo lugar
      setShowAddModal(false); // Cerrar modal
      setNewPlace({ name: "", description: "" }); // Limpiar formulario
      setImageFile(null); // Limpiar archivo de imagen
      alert("¡Lugar agregado exitosamente!");
    } catch (error) {
      console.error("Error al agregar lugar:", error);
      alert("Error al agregar lugar. Revisa los datos e inténtalo nuevamente.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto mt-[5rem]">
        <h1 className="text-2xl font-bold text-center mb-6">Lugares Registrados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((place) => (
            <div key={place.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                  src={`http://localhost:5000/${place.image}`} // Sin el slash adicional
                  alt={place.name}
                  className="w-full h-[200px] object-cover rounded-md"
              />
              <h2 className="mt-2 text-xl font-bold">{place.name}</h2>
              <p className="mt-2">{place.description}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg flex justify-center mx-auto"
          onClick={() => setShowAddModal(true)}
        >
          CONTRIBUIR
        </button>
      </div>

      {/* Modal para agregar un lugar */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-lg w-[90%] max-w-[400px] relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">Agregar Lugar</h2>
            <form onSubmit={handleAddPlace} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre del lugar"
                value={newPlace.name}
                onChange={(e) => setNewPlace({ ...newPlace, name: e.target.value })}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
              <textarea
                placeholder="Descripción"
                value={newPlace.description}
                onChange={(e) => setNewPlace({ ...newPlace, description: e.target.value })}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                rows="4"
                required
              ></textarea>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full border rounded-md px-3 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
