import { Link } from 'react-router-dom'

export default function NavBar_Button({texto, icono, ruta}) {

  return(
    <Link to={ruta} className="group relative flex items-center px-[1rem] py-[.4rem] font-semibold rounded-md cursor-pointer overflow-hidden hover:py-[1rem] hover:bg-yellow-600 hover:scale-105 transition hover:ease-in-out duration-200">
      <div className="absolute right-2 text-yellow-500 scale-[4.8] transform translate-x-8 translate-y-1 opacity-0  transition-all duration-200 ease-in-out group-hover:translate-x-1 group-hover:opacity-100  z-0">
        {icono}
      </div>
      <div className="z-10">
        {texto}
      </div>
    </Link>
  )
}