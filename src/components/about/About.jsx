import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    gsap.from(".about_me_container", {
      scrollTrigger: {
        trigger: ".about_me_container",
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
      className=" min-[1400px]:w-[1400px] w-[90%] m-auto mt-[15rem] pt-2 md:pt-[15rem] pb-[15rem]  font-custom "
      id="about"
    >
      <h1 className=" border-l-8 border-white p-2  text-3xl" id="contact">
        <span className=" pl-4">About Me </span>
      </h1>

      <div className=" flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mt-16">
        <div className=" flex relative ">
          <div className=" w-[30rem] h-[20rem] ">
            <img
              src="public/profile4.jpg"
              className=" w-full h-full object-cover rounded-md relative z-30"
            />
          </div>
          <div className=" w-[30rem] h-[20rem] bg-blue-700 absolute z-20 bottom-4 left-4 rounded-md"></div>
        </div>
        <div className=" flex flex-col gap-4 justify-center about_me_container ">
          <h1 className=" text-3xl">Who Am I ?</h1>
          <p className="text-lg">
            I'm a seasoned Frontend Developer with experience in a variety of
            projects, from e-commerce and social media to productivity tools and
            food ordering systems. I love creating websites and apps that not
            only work well but also look great and are easy to use. My expertise
            is in making user-friendly interfaces that people enjoy using.
          </p>
          <p className=" text-base  ">
            #FrontendDeveloper #React #Responsive Design
          </p>
          <button className=" bg-blue-700 px-5 py-2 rounded-md flex justify-center items-center gap-2 w-fit">
            <MdEmail />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=spathak7431@gmail.com">
              Drop a Email
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
