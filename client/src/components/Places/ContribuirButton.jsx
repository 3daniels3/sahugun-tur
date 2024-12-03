export default function ContribuirButton({accion}) {

  return(
    <button
      className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
      onClick={() => accion}
    >
      Contribuir
    </button>
  )
}