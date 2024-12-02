import { Link } from "react-router-dom"

export default function EnlacesRapidos({texto, ruta}) {

  return(
    <>
      <Link 
        to={ruta}
        className="hover:text-green-400 transition-colors" 
      >
        {texto}
      </Link>
    </>
  )
}