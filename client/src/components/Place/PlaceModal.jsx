import { useState } from "react";
import axios from "axios";

export default function PlaceModal({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Agregar nuevo lugar
    const newPlace = { name, description, imageUrl };

    try {
      const response = await axios.post("http://localhost:5000/api/places", newPlace);
      onAddPlace(response.data); // Agregar el lugar recién creado al estado principal
      onClose();
      alert("¡Lugar registrado exitosamente!");
    } catch (error) {
      alert("Error al registrar el lugar");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[90%] max-w-[400px] relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold">✕</button>
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">Registrar un Lugar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Lugar</label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md px-3 py-2 mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              id="description"
              className="w-full border rounded-md px-3 py-2 mt-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Imagen URL</label>
            <input
              type="text"
              id="imageUrl"
              className="w-full border rounded-md px-3 py-2 mt-1"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
            Registrar Lugar
          </button>
        </form>
      </div>
    </div>
  );
}
