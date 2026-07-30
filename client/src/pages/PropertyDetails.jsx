import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getProperty } from "../services/propertyService";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperty();
  }, []);

  const loadProperty = async () => {
    try {
      const data = await getProperty(id);
      setProperty(data.property);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600">Property Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <img
        src={property.images?.[0]}
        alt={property.title}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold text-[#0F4C4C] mt-8">
        {property.title}
      </h1>

      <p className="text-gray-600 mt-4">{property.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h2 className="font-bold text-xl mb-3">Property Details</h2>

          <p>
            <strong>Price:</strong> ₹{property.price}
          </p>
          <p>
            <strong>Location:</strong> {property.location}
          </p>
          <p>
            <strong>Area:</strong> {property.area} sq.ft.
          </p>
          <p>
            <strong>Bedrooms:</strong> {property.bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong> {property.bathrooms}
          </p>
          <p>
            <strong>Purpose:</strong> {property.purpose}
          </p>
          <p>
            <strong>Type:</strong> {property.propertyType}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5">
          <h2 className="font-bold text-xl mb-3">Owner Details</h2>

          <p>
            <strong>Name:</strong> {property.owner?.name}
          </p>
          <p>
            <strong>Email:</strong> {property.owner?.email}
          </p>
          <p>
            <strong>Phone:</strong> {property.owner?.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
