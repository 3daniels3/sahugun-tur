import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ContribuirButton from "../components/Places/ContribuirButton";
import axios from "axios";
import Titulo from "../components/Titulo";
import AddPlaceModal from "../components/Places/AddPlaceModal";
import Footer from "../components/Footer/Footer";
import LoginModal from "../components/Login/LoginModal";

export default function Place() {
  const [places, setPlaces] = useState([]); // Lista de lugares
  const [showAddModal, setShowAddModal] = useState(false); // Modal para agregar lugar
  const [showLoginModal, setShowLoginModal] = useState(false); // Modal para iniciar sesión
  const [userEmail, setUserEmail] = useState(null); // Correo del usuario logueado

  // Obtener lugares desde el backend
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/places", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlaces(response.data);
      } catch (error) {
        console.error("Error al obtener los lugares:", error);
      }
    };

    fetchPlaces();

    // Cargar correo desde localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setUserEmail(storedEmail);
  }, []);
  
  const handleContributeClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginModal(true); // Mostrar modal de login
    } else {
      setShowAddModal(true); // Mostrar modal de contribuir
    }
  };
  
  
  const handleLogout = () => {
    // Cerrar sesión
    setUserEmail(null);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    alert("¡Has cerrado sesión!");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(email, password); // Pasar el email y password al prop onLogin
      setErrorMessage(""); // Limpiar error si es exitoso
    } catch (error) {
      setErrorMessage("Correo o contraseña incorrectos"); // Mostrar mensaje de error
    }
  };
  
  

  return (
    <>
      <Header />
      <div className="container mx-auto mt-[5rem] mb-[10rem] text-green-900">
        <Titulo texto={"Lugares"} />
        <div className="w-[80%] text-center text-lg mx-auto mb-[3rem]">
          <p>
            Sahagún, Córdoba, ofrece espacios tranquilos para disfrutar de su
            ambiente cálido y acogedor, con áreas ideales para el encuentro
            social, la cultura y la tradición. Sus paisajes llanos reflejan la
            vida rural y el legado de su comunidad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((place) => (
            <div key={place.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={`http://localhost:5000/${place.image}`} // Ajustar ruta si es necesario
                alt={place.name}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <h2 className="mt-2 text-xl font-bold">{place.name}</h2>
              <p className="mt-2">{place.description}</p>
            </div>
          ))}
        </div>
        <ContribuirButton />
        <button
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg flex justify-center mx-auto"
          onClick={handleContributeClick}
        >
          CONTRIBUIR
        </button>
      </div>

      <Footer />

      {/* Modal para agregar lugar */}
      {showAddModal && (
        <AddPlaceModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Modal para iniciar sesión */}
      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          setUserEmail={setUserEmail}
        />
      )}
    </>
  );
}
