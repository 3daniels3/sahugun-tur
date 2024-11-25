import { useState } from "react"; // Importar useState para manejar el estado
import LoginModal from "../LoginModal"; // Importar el componente del modal
import NavBar_Button from "./NavBar_Button";
import Button from "../Button";
import { AiOutlineHome, AiOutlineEnvironment, AiOutlineShop, AiOutlineUsergroupAdd, AiOutlineLogin } from "react-icons/ai";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  const openModal = () => setModalOpen(true); // Función para abrir el modal
  const closeModal = () => setModalOpen(false); // Función para cerrar el modal

  return (
    <>
      <header className="flex justify-between items-center w-full h-[3rem] px-[1.5rem] py-[.3rem] bg-yellow-600/60 backdrop-blur-md rounded-b-xl drop-shadow-lg text-white fixed top-0 z-50">
        <div className="drop-shadow-lg ">
          {/* Logo */}
          <h2 className="drop-shadow-md font-bold">SAHAGÚN TOUR</h2>
        </div>
        <div className="flex">
          <nav className="mx-[3rem]">
            <li className="flex items-center space-x-3 drop-shadow-md">
              <ul><NavBar_Button texto={'Inicio'} icono={<AiOutlineHome />} ruta={'/'} /></ul>
              <ul><NavBar_Button texto={'Lugares'} icono={<AiOutlineShop />} /></ul>
              <ul><NavBar_Button texto={'Mapa'} icono={<AiOutlineEnvironment />} /></ul>
              <ul><NavBar_Button texto={'Eventos'} icono={<AiOutlineUsergroupAdd />} /></ul>
            </li>
          </nav>
        </div>
        {/* Botón para abrir el modal */}
        <Button texto={'Iniciar sesión'} icono={<AiOutlineLogin />} onClick={openModal} />
      </header>

      {/* Modal de inicio de sesión */}
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
