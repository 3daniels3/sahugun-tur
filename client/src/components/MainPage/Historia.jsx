import Titulo from "../Titulo";

export default function Historia() {

  return(
    <section>
      <Titulo texto={'Historia'}></Titulo>
      <div className="flex justify-between items-center">
        <div className="overflow-hidden rounded-full w-[18rem] h-[18rem] flex justify-center items-center drop-shadow-[0_2px_9px_rgba(0,0,0,0.4)]">
          <img
          className="scale-[1.8]" 
            src="https://content.wepik.com/statics/134565210/preview-page0.jpg" 
            alt="Imagen Historia de Sahagún" 
          />
        </div>
        <div className="space-y-4 w-[30rem] font-light text-xl">
          <p>Sahagún, municipio de Córdoba, Colombia, fue fundado en 1776 por Antonio de la Torre y Miranda en tierras habitadas originalmente por los indígenas zenúes. Durante la época colonial, se desarrolló como un asentamiento agrícola y ganadero, consolidándose como un punto estratégico de comercio en la región.</p>
          <p>En el siglo XIX, Sahagún vivió los conflictos políticos que marcaron a Colombia, pero su población preservó tradiciones culturales que hoy son emblemáticas, como el Festival Nacional del Porro, símbolo de su identidad costeña. Actualmente, combina su riqueza histórica y cultural con una economía basada en la agricultura, la ganadería y el comercio.</p>
        </div>
      </div>
    </section>
  )
}