import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F4C4C] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-[#F4B400]">EstateRise</h1>

          <p className="mt-4 text-gray-300">
            Your trusted real estate partner for buying, renting and selling
            premium properties.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-[#F4B400] mb-4">Quick Links</h2>

          <ul className="space-y-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/favourite">Favourite</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold text-[#F4B400] mb-4">Contact</h2>

          <div className="space-y-4">
            <p className="flex gap-2">
              <FaMapMarkerAlt />
              New Delhi, India
            </p>

            <p className="flex gap-2">
              <FaPhone />
              +91 9876543210
            </p>

            <p className="flex gap-2">
              <FaEnvelope />
              support@estaterise.com
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-bold text-[#F4B400] mb-4">Follow Us</h2>

          <div className="flex gap-5 text-3xl">
            <FaFacebook className="hover:text-[#F4B400] cursor-pointer" />
            <FaInstagram className="hover:text-[#F4B400] cursor-pointer" />
            <FaLinkedin className="hover:text-[#F4B400] cursor-pointer" />
            <FaTwitter className="hover:text-[#F4B400] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-300">
        © 2026 EstateRise. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
