export default function PlaceCard({ place }) {
    return (
      <div className="p-4 bg-white shadow-md rounded-md mb-4">
        <h3 className="text-xl font-semibold">{place.name}</h3>
        <p>{place.description}</p>
        <img src={place.imageUrl} alt={place.name} className="w-full h-32 object-cover mt-2 rounded-md" />
      </div>
    );
  }
  