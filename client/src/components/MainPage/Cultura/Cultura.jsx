import Titulo from "../../Titulo"

export default function Cultura() {

  return(
    <>
      <section className="relative text-center h-[45rem]">
        {/* Titulo */}
        <div className="sm:w-[65%] mx-auto " >
          <Titulo texto={'Sahagún Capital Cultural'}></Titulo>
        </div>
        {/* Contenido cultura */}
        <div className="flex items-center h-full">
          {/* Background cultura */}
          <div className='absolute w-full -z-10 overflow-hidden h-[45rem]'>
            <img
              className="w-full"
              src="/BGCulturaSeccion.jpg" 
              alt="background cultura" 
            />
          </div>
          <div className="absolute w-full py-[2rem] bg-white/50 backdrop-blur-sm rounded-3xl drop-shadow-[0_3px_20px_rgba(0,0,0,0.7)]">
            <h3 className="text-3xl font-bold">
              Nuestra musica
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}