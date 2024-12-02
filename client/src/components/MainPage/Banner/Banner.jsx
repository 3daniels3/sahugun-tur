export default function Banner({texto}) {

  return(
    <div className="relative flex items-center justify-center w-full h-dvh mx-auto overflow-hidden rounded-3xl ">
      <h1 className="absolute z-10 font-extrabold text-5xl drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] text-yellow-100">{texto}</h1>
      <img 
        className="w-full absolute top-0 z-0" 
        src="/SahagunBanner.jpeg" 
        alt="Imagen de Banner" 
      />
      <img className='absolute top-28 w-full drop-shadow-[0_3px_20px_rgba(0,0,0,0.7)]' src="/PapelRasgado.png" alt="Efecto papel rasgado" />
    </div>
  )
}