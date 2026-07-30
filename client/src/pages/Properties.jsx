import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getProperties } from "../services/propertyService";
import PropertyCard from "../components/PropertyCard";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Show Loader while data is loading
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-[#0F4C4C] mb-10 text-center">
        Our Properties
      </h1>

      {/* Empty State */}
      {properties.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-[#0F4C4C]">
            No Properties Found
          </h2>

          <p className="text-gray-600 mt-3">
            Try changing your search filters or add a new property.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Properties;
