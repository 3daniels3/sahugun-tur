import Titulo from "../../Titulo"
import SliderCarrucel from "./SliderCarrucel"

export default function Cultura() {

  return(
    <>
      <section className="relative text-center h-[42rem]">

        {/* Titulo */}
        <div className="sm:w-[65%] mx-auto" >
          <Titulo texto={'Sahagún Capital Cultural'}></Titulo>
        </div>

        {/* Contenido cultura */}
        <div className="flex items-center h-full">
          {/* Background cultura */}
          <div className='absolute w-full -z-10 overflow-hidden h-[42rem]'>
            <img
              className="w-full"
              src="/BGCulturaSeccion.jpg" 
              alt="background cultura" 
            />
          </div>
          {/*slider */}
          <div className="sm:w-[65%] mx-auto mt-[6rem] w-full pt-[2rem] pb-[1rem] bg-white/50 backdrop-blur-md rounded-3xl drop-shadow-[0_3px_20px_rgba(0,0,0,0.7)]">

            <SliderCarrucel></SliderCarrucel>
          </div>
        </div>
      </section>
    </>
  )
}