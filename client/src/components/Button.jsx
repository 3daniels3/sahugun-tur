export default function Button({ texto, icono, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative top-0 flex items-center px-[1rem] py-[.4rem] h-[2.2rem] font-semibold rounded-md cursor-pointer overflow-hidden bg-yellow-600 scale-105 hover:scale-110 transition hover:ease-in-out duration-200"
    >
      <div className="absolute right-2 text-yellow-500 scale-[4.5] transform -translate-x-1 translate-y-3 z-0">
        {icono}
      </div>
      <div className="z-10">{texto}</div>
    </button>
  );
}
