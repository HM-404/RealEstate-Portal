import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaUserCircle } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

function Navbar() {
  return (
    <nav className="bg-[#0F4C4C] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <MdRealEstateAgent size={38} className="text-[#F4B400]" />

            <div>
              <h1 className="text-white text-2xl font-bold">EstateRise</h1>

              <p className="text-[#F4B400] text-xs tracking-widest">
                REAL ESTATE
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-[#F4B400] transition duration-300 flex items-center gap-2"
            >
              <FaHome />
              Home
            </Link>

            <Link
              to="/properties"
              className="text-white hover:text-[#F4B400] transition duration-300"
            >
              Properties
            </Link>

            <Link
              to="/favourite"
              className="text-white hover:text-[#F4B400] transition duration-300 flex items-center gap-2"
            >
              <FaHeart />
              Favourite
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-[#F4B400] transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Right Side */}

          <div className="flex gap-3">
            <Link to="/login">
              <button className="border border-[#F4B400] text-[#F4B400] px-5 py-2 rounded-lg hover:bg-[#F4B400] hover:text-[#0F4C4C] transition duration-300">
                Login
              </button>
            </Link>

            <Link to="/profile">
              <button className="bg-[#F4B400] text-[#0F4C4C] px-5 py-2 rounded-lg hover:bg-yellow-400 transition duration-300 flex items-center gap-2">
                <FaUserCircle />
                Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
