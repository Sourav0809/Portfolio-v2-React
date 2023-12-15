import React, { useEffect } from "react";

// importing icons ...
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsBootstrap, BsFiletypeScss } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
// importing gsap components
import gsap from "gsap";
import { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
  // GSAP ANIMATION

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".skill-container-1", {
      scrollTrigger: {
        trigger: ".skill-container-1",
        start: "top 80%",
        end: "bottom 20%",
      },
      x: 400,
      duration: 2,
      opacity: 0,
    });
    gsap.from(".skill-container-2", {
      scrollTrigger: {
        trigger: ".skill-container-3",
        start: "top 80%",
        end: "bottom 20%",
      },
      x: -400,
      duration: 2,
      opacity: 0,
    });
    gsap.from(".skill-container-3", {
      scrollTrigger: {
        trigger: ".skill-container-3",
        start: "top 80%",
        end: "bottom 20%",
      },
      x: 400,
      duration: 2,
      opacity: 0,
    });
  }, []);

  return (
    <div
      className=" min-[1400px]:w-[1400px] w-[90%] m-auto mt-5 md:mt-[15rem] pb-[15rem] overflow-hidden  font-custom"
      id="skills"
    >
      <h1 className=" border-l-8 border-white p-2  text-3xl" id="contact">
        <span className=" pl-4">My Skills </span>
      </h1>

      <div className=" mt-2 md:mt-2 flex flex-col-reverse md:flex-row items-center justify-center gap-16 relative ">
        <div className=" w-full  md:px-0 md:w-1/2  flex flex-col justify-center items-center   gap-10">
          <div className="w-full px-5 md:px-0 md:w-1/2  flex justify-center items-center  gap-10 skill-container-1">
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <FaHtml5 />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <FaCss3 />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <SiJavascript className=" rounded-xl" />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <FaReact />
              </div>
            </div>
          </div>
          <div className="w-full px-5 md:px-0 md:w-1/2  flex justify-center items-center  gap-10 skill-container-2">
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 right-3 rounded-[50%]">
                <SiTailwindcss />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 right-3 rounded-[50%]">
                <BsBootstrap />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 right-3 rounded-[50%]">
                <SiMui />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 right-3 rounded-[50%]">
                <FaGitAlt />
              </div>
            </div>
          </div>
          <div className="w-full px-5 md:px-0 md:w-1/2  flex justify-center items-center  gap-10 skill-container-3">
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <FaGithub />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <BsFiletypeScss />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <SiRedux />
              </div>
            </div>
            <div className=" relative">
              <div className=" w-20 h-20 rounded-[50%] bg-yellow-400 absolute"></div>
              <div className=" text-6xl p-2 border border-white relative z-10 bg-blue-600 top-3 left-3 rounded-[50%]">
                <IoLogoFirebase />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[30rem] h-[32rem] md:w-[32rem] md:h-[32rem] pt-10 md:pt-0 rounded-[50%]">
          {/* <div className=" bg-blue-600 w-[35rem] h-[35rem] absolute rounded-[50%] z-10"></div> */}
          <img
            src="./hand code img.png"
            className=" w-full h-full rounded-2xl  object-cover bg-blue-950 relative top-4 skills-child-container right-4  z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
