import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { MdOutlineCodeOff } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenHamburger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className=" text-white fixed w-full top-0 font-custom flex justify-between items-center py-5 px-[4rem] md:px-[10rem] text-2xl bg-customBlack z-50  "
      id="main-header"
    >
      <div className="flex justify-center items-center gap-2 text-blue-700 font-semibold ">
        <MdOutlineCodeOff className="cursor-pointer" />
        <h1
          className="cursor-pointer text-3xl"
          onClick={() => {
            location.reload();
          }}
        >
          SOURAV DEV
        </h1>
      </div>
      <div
        className={`md:hidden`}
        onClick={() => {
          setOpenHamburger((prev) => !prev);
        }}
      >
        {!openHamburger ? (
          <GiHamburgerMenu className=" text-5xl cursor-pointer" />
        ) : (
          <RxCrossCircled className="text-5xl absolute top-5 right-14 z-20" />
        )}
      </div>
      <div
        className={`${
          openHamburger
            ? " flex flex-col gap-2 bg-blue-950 absolute right-0 top-0 pr-5 pt-24 h-screen w-[45%] hamburger-container  "
            : "hidden "
        } md:flex ${
          openHamburger ? "justify-start" : "justify-center"
        } items-center gap-8 text-2xl `}
      >
        <h1 className=" cursor-pointer hover:text-green-500">Home</h1>
        <h1 className=" cursor-pointer hover:text-green-500">About</h1>
        <h1 className=" cursor-pointer hover:text-green-500">Skills</h1>
        <h1 className=" cursor-pointer hover:text-green-500">Projects</h1>
        <h1 className=" cursor-pointer hover:text-green-500">Contact Me</h1>
      </div>
    </header>
  );
};

export default Header;
