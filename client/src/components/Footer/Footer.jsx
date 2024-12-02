import EnlacesRapidos from "./EnlacesRapidos";
import { AiFillFacebook, AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import RedesSociales from "./RedesSociales";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-green-100 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-5 sm:px-10">
        {/* Sección 1: Información */}
        <div>
          <h3 className="text-lg font-bold mb-4">Sobre Nosotros</h3>
          <p className="text-sm leading-relaxed">
            Somos una iniciativa dedicada a explorar y resaltar la belleza y cultura de Sahagún. Únete a nuestro viaje para descubrirlo.
          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li>
              <EnlacesRapidos texto={'Inicio'} ruta={'/'}/>
            </li>
            <li>
              <EnlacesRapidos texto={'Lugares'} ruta={'/Place'}/>
            </li>
          </ul>
        </div>

        {/* Sección 3: Redes sociales */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <RedesSociales enlace={'https://www.facebook.com/'} icono={<AiFillFacebook />} />
            <RedesSociales enlace={'https://www.instagram.com/'} icono={<AiFillInstagram />} />
            <RedesSociales enlace={'https://www.tiktok.com/'} icono={<AiFillTikTok />} />
          </div>
        </div>
      </div>

      {/* Área de Copyright */}
      <div className="border-t border-green-600 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} <b>Sahagún Tour</b>. Todos los derechos reservados.
      </div>
    </footer>
  );
}
