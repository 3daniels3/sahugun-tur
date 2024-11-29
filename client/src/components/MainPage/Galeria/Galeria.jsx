import Titulo from '../../Titulo'
import CarrucelImagenes from './CarrucelImagenes'

export default function Galeria() {

  const imagenes = [
    {
      imagen: 'https://www.las2orillas.co/wp-content/uploads/2024/01/sahagun-1132x670-2.jpg',
      piePagina: 'Parque central de Sahagún'
    },
    {
      imagen: 'https://www.las2orillas.co/wp-content/uploads/2024/01/sahagun-1132x670-2.jpg',
      piePagina: 'Parque central de Sahagún'
    },
    {
      imagen: 'https://www.las2orillas.co/wp-content/uploads/2024/01/sahagun-1132x670-2.jpg',
      piePagina: 'Parque central de Sahagún'
    },
    {
      imagen: 'https://www.las2orillas.co/wp-content/uploads/2024/01/sahagun-1132x670-2.jpg',
      piePagina: 'Parque central de Sahagún'
    },
  ]

  return(
    <section>
      {/* Titulo */}
      <div className="sm:w-[65%] mx-auto" >
        <Titulo texto={'Galeria de imagenes'}></Titulo>
      </div>
      <div>
        <CarrucelImagenes contenido={imagenes}></CarrucelImagenes>
      </div>
    </section>
  )
}