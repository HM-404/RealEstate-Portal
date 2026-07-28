import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}

          <div>
            <p className="text-[#F4B400] font-semibold tracking-widest uppercase">
              Premium Real Estate
            </p>

            <h1 className="text-6xl font-bold text-[#0F4C4C] mt-5 leading-tight">
              Find Your
              <br />
              Dream Home
            </h1>

            <p className="text-gray-600 text-lg mt-8 leading-8">
              Buy, rent and explore premium apartments, villas, independent
              houses and commercial properties across India.
            </p>

            <div className="flex gap-5 mt-10">
              <Link to="/properties">
                <button className="bg-[#F4B400] text-[#0F4C4C] font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition">
                  Explore Properties
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-[#0F4C4C] text-[#0F4C4C] px-8 py-4 rounded-lg hover:bg-[#0F4C4C] hover:text-white transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side */}

          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
              alt="Luxury House"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
