import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProperty, updateProperty } from "../services/propertyService";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    propertyType: "",
    purpose: "",
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
  });

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const data = await getProperty(id);

      setFormData({
        title: data.property.title,
        description: data.property.description,
        price: data.property.price,
        propertyType: data.property.propertyType,
        purpose: data.property.purpose,
        location: data.property.location,
        area: data.property.area,
        bedrooms: data.property.bedrooms,
        bathrooms: data.property.bathrooms,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProperty(id, formData);

      alert("Property Updated Successfully");

      navigate("/admin");
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#0F4C4C] mb-8">
          Edit Property
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-[#0F4C4C] text-white py-3 rounded-lg">
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProperty;
