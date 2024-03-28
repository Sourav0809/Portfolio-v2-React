/* -------------------------------------------------------------------------- */
/*              USING SWIPER JS HERE TO MAKE THE PROJECT CAROUSEL             */
/* -------------------------------------------------------------------------- */

//Importing Projects

import Project1 from "./ui/Project1";
import Project2 from "./ui/Project2";
import Project3 from "./ui/Project3";
import Project4 from "./ui/Project4";
// import Swiper core and required modules

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Project5 from "./ui/Project5";

const ProjectsContainer = () => {
  return (
    <>
      <div
        className=" w-full px-5 pb-20 min-[650px]:pb-2 overflow-hidden"
        id="projects"
      >
        <div className=" min-[1200px]:w-[1200px] w-[90%] m-auto   font-custom font-medium">
          <div className=" pb-10 ">
            <h1 className=" border-l-8 border-white p-5 text-3xl">
              Latest Projects
            </h1>
          </div>
          <Swiper
            className="text-white"
            id="projects"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // scrollbar={{ draggable: false }}

            //   autoplay={{ delay: 3000 }}
            //   autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <Project5 />
            </SwiperSlide>
            <SwiperSlide>
              <Project1 />
            </SwiperSlide>
            <SwiperSlide>
              <Project2 />
            </SwiperSlide>
            <SwiperSlide>
              <Project3 />
            </SwiperSlide>
            <SwiperSlide>
              <Project4 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectsContainer;
