export default function ContributeButton({ onClick }) {
    return (
      <div className="flex justify-center mt-8">
        <button
          onClick={onClick}
          className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600"
        >
          Contribuir
        </button>
      </div>
    );
  }
  