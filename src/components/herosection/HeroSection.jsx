import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useEffect } from "react";

import gsap from "gsap";
const HeroSection = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(".hero-child-2", {
      x: 400,
      duration: 2,
      opacity: 0,
    });

    tl.to(".hero-child-1", {
      y: 50,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      className=" min-[1400px]:w-[1400px] w-[90%] m-auto mt-28 flex flex-col min-[500px]:flex-row justify-center items-center gap-32"
      id="hero"
    >
      <div className=" flex justify-center items-center relative hero-child-1 w-full min-[500px]:w-[50%] ">
        <div className=" w-[20rem] h-[20rem] min-[500px]:  md:w-[30rem] md:h-[30rem] rounded-[50%] bg-[rgb(42,21,76)] shadow-xl shadow-white rotate-180"></div>
        <div className=" w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]  rounded-[50%] bg-transparent shadow-xl  absolute top-5 left-1 md:left-5 bg-blue-950  ">
          <img
            src="./hand code img.png"
            className=" object-cover w-full h-full rounded-[50%]  border border-white "
          />
        </div>
      </div>
      <div className="font-custom flex flex-col gap-7 justify-center w-full md:w-[50%] md:px-0 px-5 hero-child-2">
        <div className=" flex flex-col gap-2">
          <h1 className="text-4xl">Greetings!</h1>
          <h1 className=" text-6xl">I'm Sourav Pathak.</h1>
        </div>
        <div className=" text-2xl">
          <h1>Currently crafting</h1>
          <h1>Immersive Frontend Experiences.</h1>
        </div>
        <div className=" flex text-xl gap-4">
          <a
            href="https://drive.google.com/file/d/1_0o8eHvAbJtGBjWCcta1MDyePM20SfMq/view"
            className=" bg-blue-700 px-5 py-2 rounded-md flex justify-center items-center gap-2 w-fit"
          >
            <FiDownload />
            <span>Resume</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=spathak7431@gmail.com"
            className=" bg-blue-700 px-5 py-2 rounded-md flex justify-center items-center gap-2 w-fit"
          >
            <MdEmail />
            <span>Contact</span>
          </a>
        </div>
        <div className=" flex justify-start items-center gap-5">
          <a href="https://github.com/Sourav0809">
            <FaGithub className=" text-3xl  rounded-full cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/sourav-pathak-360551282/">
            <FaLinkedin className=" text-3xl  rounded-full cursor-pointer" />
          </a>
          <a href="https://twitter.com/itssourav99">
            <FaTwitter className=" text-3xl  rounded-full cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/sourav.souravpathak/">
            <FaSquareFacebook className=" text-3xl  rounded-full cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/itssourav99/">
            <PiInstagramLogoBold className=" text-3xl  rounded-full cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
