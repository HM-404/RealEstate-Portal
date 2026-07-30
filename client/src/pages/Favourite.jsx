import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getFavourites, removeFavourite } from "../services/favouriteService";

function Favourite() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = async () => {
    try {
      const data = await getFavourites();
      setFavourites(data.favourites);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (propertyId) => {
    const confirmRemove = window.confirm(
      "Remove this property from your favourites?",
    );

    if (!confirmRemove) return;

    try {
      await removeFavourite(propertyId);
      loadFavourites();
      alert("Property removed from favourites.");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to remove favourite.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-[#0F4C4C] text-center mb-10">
          My Favourite Properties
        </h1>

        {favourites.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-[#0F4C4C]">
              No Favourite Properties
            </h2>

            <p className="text-gray-600 mt-4">
              Browse properties and add your favourite ones here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favourites.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.property.images?.[0]}
                  alt={item.property.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-2xl font-bold text-[#0F4C4C]">
                    {item.property.title}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    📍 {item.property.location}
                  </p>

                  <p className="text-[#F4B400] font-bold text-xl mt-3">
                    ₹{item.property.price.toLocaleString()}
                  </p>

                  <button
                    onClick={() => handleRemove(item.property._id)}
                    className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Remove from Favourites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourite;
