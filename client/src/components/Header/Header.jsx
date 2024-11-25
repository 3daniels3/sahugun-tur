import NavBar_Button from "./NavBarButton"
import Button from "../Button";
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";




export default function Header() {
  
  return (
    <>
    <header className="flex justify-between items-center w-full h-[3rem] px-[1.5rem] py-[.3rem] bg-yellow-600/60 backdrop-blur-sm rounded-b-xl drop-shadow-lg text-white fixed top-0 z-50">
      <div className="drop-shadow-lg ">
        {/* Logo */}
        <h2 className="drop-shadow-md font-bold">SAHAGÚN TOUR</h2>
      </div>
      <div className="flex">
        <nav className="mx-[3rem]">
          <li className="flex items-center space-x-3 drop-shadow-md">
            <ul><NavBar_Button texto = {'Inicio'} icono={<AiOutlineHome/>} ruta={'/'}/></ul>
            <ul><NavBar_Button texto = {'Lugares'} icono={<AiOutlineShop />}/></ul>
            <ul><NavBar_Button texto = {'Mapa'} icono={<AiOutlineEnvironment />}/></ul>
            <ul><NavBar_Button texto = {'Eventos'} icono={<AiOutlineUsergroupAdd />}/></ul>
          </li>
        </nav>
      </div>
      <Button texto={'Iniciar sesión'} icono={<AiOutlineLogin />}/>
    </header>
    </>
  );
}
