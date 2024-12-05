import React from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "../ContextApi/ThemeContext";
SwiperCore.use([Autoplay]);
const HomePage = () => {
  const { darkMode, toggleTheme } = useTheme(); // Access theme context

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      {/* Banner Section */}
      <div className="max-h-screen">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Adjust delay time (in milliseconds)
            disableOnInteraction: false, // Keeps autoplay running after user interactions
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="custom-swiper animate__animated animate__fadeInDown"
        >
          <SwiperSlide>
            <div className="w-full h-[560px] overflow-hidden">
              <img
                src={`https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/hero-bg-3.png`}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[560px] overflow-hidden">
              <img
                src={`https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/hero_bg.jpg`}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[560px] overflow-hidden">
              <img
                src={`https://visahub.wporganic.com/wp-content/uploads/2019/02/slider-version-6.jpg`}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Rest of the HomePage Content */}
      <section className="mb-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
          Latest Visas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border p-4 rounded shadow-md bg-white">
              <img
                src={`https://via.placeholder.com/300x200?text=Country+${
                  index + 1
                }`}
                alt={`Country ${index + 1}`}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold text-blue-800">
                Country {index + 1}
              </h3>
              <p className="text-gray-700">Visa Type: Tourist</p>
              <p className="text-gray-700">Processing Time: 7 days</p>
              <p className="text-gray-700">Fee: $100</p>
              <p className="text-gray-700">Validity: 1 year</p>
              <p className="text-gray-700">Application Method: Online</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 w-full">
                See Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
