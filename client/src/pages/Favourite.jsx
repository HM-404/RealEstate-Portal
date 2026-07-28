import { useEffect, useState } from "react";
import { getFavourites, removeFavourite } from "../services/favouriteService";

function Favourite() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = async () => {
    try {
      const data = await getFavourites();
      setFavourites(data.favourites);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (propertyId) => {
    await removeFavourite(propertyId);
    loadFavourites();
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-8">
        My Favourite Properties
      </h1>

      {favourites.length === 0 ? (
        <p>No favourite properties yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favourites.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={item.property.images?.[0]}
                alt={item.property.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">{item.property.title}</h2>

                <p className="text-gray-500 mt-2">{item.property.location}</p>

                <p className="text-blue-600 font-bold mt-2">
                  ₹{item.property.price.toLocaleString()}
                </p>

                <button
                  onClick={() => handleRemove(item.property._id)}
                  className="mt-4 bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
