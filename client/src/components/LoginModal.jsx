import { useState } from "react";
import axios from "axios";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Función para manejar el submit del formulario de login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Realizar la solicitud POST a tu servidor para el login
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      // Si la respuesta es exitosa (status 200), puedes manejar el token
      console.log("Token recibido:", response.data.token);
      
      // Aquí puedes hacer algo con el token, como almacenarlo en el localStorage
      localStorage.setItem("token", response.data.token);

      // Cerrar el modal al hacer login
      onClose();
      alert("¡Login exitoso!");
    } catch (error) {
      // Si hay un error, mostrar el mensaje
      setErrorMessage(error.response ? error.response.data.message : "Error de conexión");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[90%] max-w-[400px] relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">Iniciar Sesión</h2>
        
        {/* Mostrar mensaje de error si lo hay */}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Input para el correo */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-yellow-400"
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Input para la contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-yellow-400"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Botón para enviar */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
