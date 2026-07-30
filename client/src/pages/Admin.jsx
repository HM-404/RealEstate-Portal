import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getProperties, deleteProperty } from "../services/propertyService";

function Admin() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data.properties);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "This property will be permanently deleted.\n\nDo you want to continue?",
    );

    if (!confirmDelete) return;

    try {
      await deleteProperty(id);
      alert("Property Deleted Successfully");
      loadProperties();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-[#0F4C4C]">
            Property Management Dashboard
          </h1>

          <Link to="/add-property">
            <button className="bg-[#F4B400] hover:bg-yellow-500 transition px-6 py-3 rounded-lg font-semibold text-[#0F4C4C]">
              + Add Property
            </button>
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#0F4C4C]">
            <p className="text-gray-500">Total Properties</p>
            <h2 className="text-4xl font-bold text-[#0F4C4C]">
              {properties.length}
            </h2>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#F4B400]">
            <p className="text-gray-500">Buy Properties</p>
            <h2 className="text-4xl font-bold text-[#0F4C4C]">
              {properties.filter((p) => p.purpose === "Buy").length}
            </h2>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#1E88E5]">
            <p className="text-gray-500">Rent Properties</p>
            <h2 className="text-4xl font-bold text-[#0F4C4C]">
              {properties.filter((p) => p.purpose === "Rent").length}
            </h2>
          </div>
        </div>

        {/* Empty State */}
        {properties.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-[#0F4C4C]">
              No Properties Found
            </h2>

            <p className="text-gray-600 mt-4">
              Click "Add Property" to create your first property listing.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0F4C4C] text-white">
                <tr>
                  <th className="p-4">Title</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Purpose</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {properties.map((property) => (
                  <tr
                    key={property._id}
                    className="border-b text-center hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{property.title}</td>

                    <td>{property.location}</td>

                    <td>₹{property.price.toLocaleString()}</td>

                    <td>{property.purpose}</td>

                    <td className="space-x-3 py-3">
                      <Link to={`/edit-property/${property._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(property._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
