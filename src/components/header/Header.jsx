import gsap from "gsap";
import React, { useEffect } from "react";
import { MdOutlineCodeOff } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  // useEffect(() => {
  //   gsap.from("#main-header", {
  //     y: -100,
  //     duration: 1,
  //   });
  // }, []);

  return (
    <header
      className=" text-white sticky top-0 font-custom flex justify-between items-center py-5 px-[4rem] md:px-[10rem] text-2xl bg-customBlack z-50  "
      id="main-header"
    >
      <div className=" flex justify-center items-center gap-2 text-red-500  font-semibold">
        <MdOutlineCodeOff className="cursor-pointer" />
        <h1
          className="cursor-pointer"
          onClick={() => {
            location.reload();
          }}
        >
          SOURAV DEV
        </h1>
      </div>
      <div className=" md:hidden ">
        <GiHamburgerMenu className=" text-4xl" />
      </div>
      <div className=" hidden md:flex justify-center items-center gap-8 text-xl  ">
        <h1 className=" cursor-pointer hover:text-green-500">HOME</h1>
        <h1 className=" cursor-pointer hover:text-green-500">ABOUT</h1>
        <h1 className=" cursor-pointer hover:text-green-500">SKILLS</h1>
        <h1 className=" cursor-pointer hover:text-green-500">PROJECTS</h1>
        <h1 className=" cursor-pointer hover:text-green-500">CONTACT ME </h1>
      </div>
    </header>
  );
};

export default Header;
