export default function AcortadorTexto({truncado, descripcion, onExpand}) {

  return(
      <>
        {truncado ? (
          <p>
            {descripcion.length > 300 ? (
              <>
                {descripcion.slice(0, 300)}...
                <button
                  onClick={onExpand}
                  className="text-green-500 hover:underline"
                >
                  Ver más
                </button>
              </>
            ) : (
              descripcion
            )}
          </p>
        ) : (
          <p>{descripcion}</p>
        )}
      </>
    );
}