import React, { useState } from "react";
import axios from "axios";

export default function LoginModal({ isOpen, onClose, onRegisterClick, setUserEmail }) {
  if (!isOpen) return null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      console.log("Token recibido:", response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", email); // Guardar el correo del usuario
      setUserEmail(email); // Actualizar el estado global
      onClose();
      alert("¡Login exitoso!");
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : "Error de conexión");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[90%] max-w-[400px] relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold">✕</button>
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">Iniciar Sesión</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition">
            Iniciar Sesión
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          ¿No tienes cuenta?{" "}
          <button onClick={onRegisterClick} className="text-yellow-600 underline">Regístrate aquí</button>
        </p>
      </div>
    </div>
  );
}
