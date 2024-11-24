export default function Banner({texto}) {

  return(
    <div className="relative flex items-center justify-center w-[97%] sm:h-[36.5rem] h-[13.6rem] mx-auto mt-[4rem] overflow-hidden rounded-3xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
      <h1 className="absolute z-10 font-extrabold text-5xl drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] text-yellow-100">{texto}</h1>
      <img 
        className="w-full absolute top-0 z-0" 
        src="https://png.pngtree.com/background/20230301/original/pngtree-abstract-white-green-background-with-golden-curve-border-picture-image_2071058.jpg" 
        alt="Imagen de Banner" 
      />
    </div>
  )
}