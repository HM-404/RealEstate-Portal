import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { getProperty } from "../services/propertyService";
import { addFavourite } from "../services/favouriteService";
import { contactOwner } from "../services/contactService";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadProperty();
  }, []);

  const loadProperty = async () => {
    try {
      const data = await getProperty(id);
      setProperty(data.property);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFavourite = async () => {
    try {
      const res = await addFavourite(property._id);
      alert(res.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleContact = async () => {
    if (!message.trim()) {
      return alert("Please enter a message.");
    }

    try {
      const res = await contactOwner({
        propertyId: property._id,
        message,
      });

      alert(res.message);
      setMessage("");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  if (!property)
    return <h1 className="text-center text-3xl mt-20">Loading...</h1>;

  return (
    <div className="bg-[#FFF8E7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <img
          src={property.images[0]}
          alt={property.title}
          className="rounded-3xl w-full h-[550px] object-cover shadow-xl"
        />

        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          <div className="lg:col-span-2">
            <span className="bg-[#F4B400] text-[#0F4C4C] px-4 py-2 rounded-full font-semibold">
              {property.purpose}
            </span>

            <h1 className="text-5xl font-bold text-[#0F4C4C] mt-5">
              {property.title}
            </h1>

            <p className="flex items-center gap-2 mt-4 text-gray-600">
              <FaMapMarkerAlt />
              {property.location}
            </p>

            <h2 className="text-[#F4B400] text-4xl font-bold mt-6">
              ₹{property.price.toLocaleString()}
            </h2>

            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <FaBed className="mx-auto text-[#0F4C4C]" size={28} />
                <p className="mt-3 font-bold">{property.bedrooms}</p>
                <small>Bedrooms</small>
              </div>

              <div className="bg-white rounded-xl p-5 shadow text-center">
                <FaBath className="mx-auto text-[#0F4C4C]" size={28} />
                <p className="mt-3 font-bold">{property.bathrooms}</p>
                <small>Bathrooms</small>
              </div>

              <div className="bg-white rounded-xl p-5 shadow text-center">
                <FaRulerCombined className="mx-auto text-[#0F4C4C]" size={28} />
                <p className="mt-3 font-bold">{property.area}</p>
                <small>Sq Ft</small>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow mt-10 p-8">
              <h2 className="text-3xl font-bold text-[#0F4C4C] mb-4">
                Description
              </h2>

              <p className="text-gray-600 leading-8">{property.description}</p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#0F4C4C]">
                Owner Details
              </h2>

              <div className="mt-6 space-y-4">
                <p className="font-semibold">{property.owner.name}</p>

                <p className="flex items-center gap-3">
                  <FaEnvelope />
                  {property.owner.email}
                </p>

                <p className="flex items-center gap-3">
                  <FaPhone />
                  {property.owner.phone}
                </p>
              </div>

              <textarea
                rows={5}
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border w-full rounded-lg p-3 mt-8"
              />

              <button
                onClick={handleContact}
                className="bg-[#0F4C4C] hover:bg-[#12372A] text-white w-full py-3 rounded-xl mt-5"
              >
                Send Message
              </button>

              <button
                onClick={handleFavourite}
                className="bg-[#F4B400] hover:bg-yellow-400 text-[#0F4C4C] w-full py-3 rounded-xl mt-4 flex justify-center items-center gap-2"
              >
                <FaHeart />
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
