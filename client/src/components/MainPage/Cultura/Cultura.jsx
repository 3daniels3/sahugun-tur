import Titulo from "../../Titulo"
import SliderCarrucel from "./SliderCarrucel"

export default function Cultura() {

  // Imágenes para el carrusel
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  const contenidoCultural = [
    {
      titulo: 'Nuestra Musica',
      video: 'https://www.youtube.com/watch?v=WNV4SwsPg6I',
      descripcion: '"Más Sahagunense que Nunca" de Luis Alberto Prado es un himno emotivo que rinde homenaje a la identidad y cultura del municipio de Sahagún, Córdoba, Colombía. La canción exalta el orgullo de ser sahagunense, resaltando su historia, tradiciones y la calidez de su gente, con un ritmo festivo que inspira unidad y pertenencia.'
    },
    {
      titulo: 'Nuestra Danza',
      video: 'https://www.youtube.com/watch?v=oOv-3r7zYx8',
      descripcion: 'La danza de Sahagún refleja las raíces culturales de la región sabanera. Está influenciada por ritmos caribeños como la cumbia y el porro, con movimientos vibrantes y expresivos que evocan la conexión con la tierra, las tradiciones campesinas y las festividades locales. Los trajes típicos suelen ser coloridos, destacando la riqueza cultural y la alegría del pueblo sahagunense.'
    },
  ]

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
          <div className="sm:w-[70%] mx-auto mt-[6rem] w-full pt-[2rem] pb-[1rem] bg-white/50 backdrop-blur-md rounded-3xl drop-shadow-[0_3px_20px_rgba(0,0,0,0.7)]">

            <SliderCarrucel contenido={contenidoCultural}></SliderCarrucel>
          </div>
        </div>
      </section>
    </>
  )
}