import { Link } from 'react-router-dom'

export default function Button({texto, ruta}) {
  return(
    <Link to={ruta} className="static top-0 flex items-center px-[1rem] py-[.4rem] h-[2.2rem] font-semibold rounded-md cursor-pointer overflow-hidden bg-yellow-600 scale-105 hover:scale-110 transition hover:ease-in-out duration-200">
      {texto}
    </Link>
  )
}