import PlaceCard from './PlaceCard';

export default function PlaceList({ places }) {
    if (!Array.isArray(places)) {
      return <div>No hay lugares disponibles.</div>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    );
  }
  