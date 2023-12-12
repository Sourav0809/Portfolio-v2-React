import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" mt-36  border-t-2 font-custom overflow-hidden  py-10 px-5 gap-4 flex flex-col md:flex-row justify-around items-center ">
      <div className=" flex text-2xl md:text-5xl justify-between items-center gap-5">
        <a href="https://github.com/Sourav0809">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sourav-pathak-360551282/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/itssourav99/">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com/itssourav99">
          <FaTwitterSquare />
        </a>
      </div>
      <div className=" flex justify-center items-center gap-2">
        <FaCopyright className="text-2xl md:text-3xl" />

        <h1 className="text-xl md:text-3xl">| 2023 | All Right Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
