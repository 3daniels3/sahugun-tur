export default function RedesSociales({enlace, icono}) {

  return(
    <a
      href={enlace}
      target="_blank"
      className="hover:text-green-400 transition-colors"
    >
      <div className="text-2xl">
        {icono}
      </div>
    </a>
  )
}