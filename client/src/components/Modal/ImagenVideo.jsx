import ReactPlayer from 'react-player/youtube';

export default function ImagenVideo({tipo, multimedia}) {

  return(
    <>
        {tipo == 'video' ? (
          <ReactPlayer 
            url={multimedia}
            playing={false}
            volume={0.5}
            controls={true}
            width={294}
            height={165}
          />
        ) : tipo == 'imagen' ? (
          <img src={multimedia} alt={tipo} />
        ) : (
          <p>"No hay multimedia"</p>
        )}
      </>
  )
}