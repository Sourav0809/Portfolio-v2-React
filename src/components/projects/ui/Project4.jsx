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

const Project4 = () => {
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
            <img className=" w-full h-full p-2" src="images/ecom-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/ecom-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/ecom-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/ecom-4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full h-full p-2" src="images/ecom-5.png" />
          </SwiperSlide>
        </div>

        {/* DETAILS ABOUT THE PROJECT  */}
        <div className="  mt-14 w-full md:px-10 xl:px-14 flex flex-col min-[650px]:flex-row gap-10">
          <div className=" flex flex-col gap-2 justify-center items-center ">
            <h1 className=" text-2xl  font-custom">The Generics</h1>
            <h1>E-commerce Website With Some Good Functionality</h1>
            <div className=" flex justify-center items-center gap-2">
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                React
              </h1>
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                Tailwind
              </h1>
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                Firebase
              </h1>
              <h1 className=" px-3 py-1 border-2 text-black bg-white font-roboto border-blue-600">
                Context
              </h1>
            </div>
          </div>
          <div className=" font-roboto flex flex-col justify-start items-start">
            <h1 className=" text-xl">Features</h1>
            <p>
              User Authentication by firebase, with cart functionality like add,
              remove, update, delete, private routes , user specific data,
              product details page and all.
            </p>
            <div className=" flex justify-center items-center mt-2 gap-4">
              <a href="https://github.com/Sourav0809/Sharpener-Ecommerce">
                <FaGithub className=" text-2xl cursor-pointer" />
              </a>
              <a href="https://loacalecommerce.netlify.app/">
                <FaLink className=" text-2xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Project4;
