import { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSearch = () => {
    console.log({
      location,
      type,
      purpose,
    });

    // We'll connect this to the backend in a later phase.
  };

  return (
    <section className="max-w-7xl mx-auto -mt-10 relative z-20">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="grid md:grid-cols-4 gap-5">
          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-[#0F4C4C] mb-2">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter City"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-semibold text-[#0F4C4C] mb-2">
              Property Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm font-semibold text-[#0F4C4C] mb-2">
              Purpose
            </label>

            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select</option>
              <option>Buy</option>
              <option>Rent</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-[#F4B400] hover:bg-yellow-400 text-[#0F4C4C] font-bold py-3 rounded-lg transition"
            >
              Search Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
