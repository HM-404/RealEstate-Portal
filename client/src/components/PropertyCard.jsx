import { Link } from "react-router-dom";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img
          src={
            property.images?.[0] ||
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
          }
          alt={property.title}
          className="h-64 w-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200";
          }}
        />

        <span className="absolute top-4 left-4 bg-[#F4B400] text-[#0F4C4C] px-4 py-1 rounded-full font-semibold">
          {property.purpose}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#0F4C4C]">{property.title}</h2>

        <p className="flex items-center gap-2 text-gray-500 mt-3">
          <FaMapMarkerAlt />
          {property.location}
        </p>

        <p className="text-[#F4B400] text-3xl font-bold mt-4">
          ₹{property.price.toLocaleString()}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div>
            <FaBed className="mx-auto text-[#0F4C4C]" />
            <p className="mt-2">{property.bedrooms}</p>
          </div>

          <div>
            <FaBath className="mx-auto text-[#0F4C4C]" />
            <p className="mt-2">{property.bathrooms}</p>
          </div>

          <div>
            <FaRulerCombined className="mx-auto text-[#0F4C4C]" />
            <p className="mt-2">{property.area} sqft</p>
          </div>
        </div>

        <div className="mt-8">
          <Link to={`/properties/${property._id}`}>
            <button className="w-full bg-[#0F4C4C] hover:bg-[#12372A] text-white py-3 rounded-xl font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
