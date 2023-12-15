import React, { useEffect, useState } from "react";
import { MdOutlineCodeOff } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import { Link, animateScroll as scroll } from "react-scroll";
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
        className={`min-[850px]:hidden`}
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
            ? " flex flex-col gap-2 bg-blue-950 absolute right-0 top-0 pr-5 pt-24 h-screen w-[45%]"
            : "hidden "
        } min-[850px]:flex ${
          openHamburger ? "justify-start" : "justify-center"
        } items-center gap-8 text-2xl `}
      >
        <h1 className=" cursor-pointer hover:text-green-500">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            onClick={() => {
              setOpenHamburger(false);
            }}
          >
            Home
          </Link>
        </h1>
        <h1 className=" cursor-pointer hover:text-green-500">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1500}
            onClick={() => {
              setOpenHamburger(false);
            }}
          >
            About
          </Link>
        </h1>
        <h1 className=" cursor-pointer hover:text-green-500">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1500}
            onClick={() => {
              setOpenHamburger(false);
            }}
          >
            Skills
          </Link>
        </h1>
        <h1 className=" cursor-pointer hover:text-green-500">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1500}
            onClick={() => {
              setOpenHamburger(false);
            }}
          >
            Projects
          </Link>
        </h1>
        <h1 className=" cursor-pointer hover:text-green-500">
          <Link
            activeClass="active"
            to="contact-me-section"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
            onClick={() => {
              setOpenHamburger(false);
            }}
          >
            Contact Me
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
