// importing icons
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Project5 = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-full md:px-28 md:py-5 mt-5 md:mt-0  "
      >
        <div>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/redbubble1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/redbubble2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/redbubble3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/redbubble4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/redbubble5.png" />
          </SwiperSlide>
        </div>

        {/* DETAILS ABOUT THE PROJECT  */}
        <div className="  mt-14 w-full md:px-10 xl:px-14 flex flex-col min-[650px]:flex-row gap-10">
          <div className=" flex flex-col gap-2 justify-center items-center ">
            <h1 className=" text-2xl  font-custom">RedBubble</h1>
            <h1>A Full-Stack E-commerce Website with All P0 Features.</h1>
            <div className=" flex justify-center items-center gap-2">
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                React
              </h1>
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                Node
              </h1>
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                PostgreSQL
              </h1>
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                Tailwind
              </h1>
            </div>
          </div>
          <div className=" font-roboto flex flex-col justify-start items-start">
            <h1 className=" text-xl">Features</h1>
            <p>
              Login & Create Account, Add & Remove from Cart, Order Item,
              Address Selection via Google Maps, My Orders, Order History,
              Downloadable Invoices, Secure Payments
            </p>
            <div className=" flex justify-center items-center mt-2 gap-4">
              <a
                href="https://github.com/Sourav0809/Full-stack-Ecommerce-App"
                target="_blank"
              >
                <FaGithub className=" text-2xl cursor-pointer" />
              </a>
              <a href="https://redbubble.vercel.app/" target="_blank">
                <FaLink className=" text-2xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Project5;
