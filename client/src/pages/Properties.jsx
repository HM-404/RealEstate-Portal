import { useEffect, useState } from "react";

import { getProperties } from "../services/propertyService";

import PropertyCard from "../components/PropertyCard";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-[#0F4C4C] mb-10 text-center">
        Our Properties
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Properties;
