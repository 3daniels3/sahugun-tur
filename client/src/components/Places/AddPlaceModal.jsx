import { useState } from "react";
import axios from "axios";

export default function AddPlaceModal({ isOpen, onClose }) {
  const [places, setPlaces] = useState([]); // Lista de lugares
  const [newPlace, setNewPlace] = useState({ name: "", description: "" }); // Datos del nuevo lugar
  const [imageFile, setImageFile] = useState(null); // Archivo de imagen

  if (!isOpen) return null;

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
      onclose; // Cerrar modal
      setNewPlace({ name: "", description: "" }); // Limpiar formulario
      setImageFile(null); // Limpiar archivo de imagen
      alert("¡Lugar agregado exitosamente!");
      window.location.reload();
    } catch (error) {
      console.error("Error al agregar lugar:", error);
      alert("Error al agregar lugar. Revisa los datos e inténtalo nuevamente.");
    }
  };

  return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[90%] max-w-[400px] relative">
        <button
          onClick={onClose}
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
  )
}