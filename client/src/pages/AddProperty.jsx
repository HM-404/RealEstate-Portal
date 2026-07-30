import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../services/propertyService";

function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    propertyType: "Apartment",
    purpose: "Buy",
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    images: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("propertyType", formData.propertyType);
      data.append("purpose", formData.purpose);
      data.append("location", formData.location);
      data.append("area", formData.area);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);

      if (image) {
        data.append("image", image);
      }

      await addProperty(data);

      alert("Property Added Successfully");
      navigate("/admin");
    } catch (err) {
      alert(err.response?.data?.message || "Error adding property");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#0F4C4C] mb-8">Add Property</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="area"
            placeholder="Area (sqft)"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#0F4C4C] text-white py-3 rounded-lg hover:bg-[#12372A]"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
