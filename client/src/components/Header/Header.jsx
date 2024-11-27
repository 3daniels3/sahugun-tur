import { useState } from "react";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Login/RegisterModal";
import Button from "../Button";
import { AiOutlineHome, AiOutlineEnvironment, AiOutlineShop, AiOutlineUsergroupAdd, AiOutlineLogin } from "react-icons/ai";
import NavBar_Button from "./NavBarButton";

export default function Header() {
  const [isLoginOpen, setLoginOpen] = useState(false); // Modal de login
  const [isRegisterOpen, setRegisterOpen] = useState(false); // Modal de registro

  const openLoginModal = () => {
    setLoginOpen(true);
    setRegisterOpen(false); // Asegúrate de que el modal de registro esté cerrado
  };

  const openRegisterModal = () => {
    setLoginOpen(false); // Cierra el modal de login
    setRegisterOpen(true); // Abre el modal de registro
  };

  return (
    <>
      <header className="flex justify-between items-center w-full h-[3rem] px-[1.5rem] py-[.3rem] bg-yellow-600/60 backdrop-blur-sm rounded-b-xl drop-shadow-lg text-white fixed top-0 z-50">
        <div className="drop-shadow-lg ">
          <h2 className="drop-shadow-md font-bold">SAHAGÚN TOUR</h2>
        </div>
        <div className="flex">
          <nav className="mx-[3rem]">
            <li className="flex items-center space-x-3 drop-shadow-md">
              <ul><NavBar_Button texto={"Inicio"} icono={<AiOutlineHome />} ruta={"/"} /></ul>
              <ul><NavBar_Button texto={"Lugares"} icono={<AiOutlineShop />} /></ul>
              <ul><NavBar_Button texto={"Mapa"} icono={<AiOutlineEnvironment />} /></ul>
              <ul><NavBar_Button texto={"Eventos"} icono={<AiOutlineUsergroupAdd />} /></ul>
            </li>
          </nav>
        </div>
        <Button texto={"Iniciar sesión"} icono={<AiOutlineLogin />} onClick={openLoginModal} />
      </header>

      {/* Modales */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} onRegisterClick={openRegisterModal} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
}
