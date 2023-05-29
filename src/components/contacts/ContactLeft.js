import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { con } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={con}
        alt="con"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jatin Jain</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+918375011514</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jatinjain.2011@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          
        <a href="https://www.linkedin.com/in/jatin-jain-1aa819179/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaLinkedinIn />
  </a>
  <a href="https://www.instagram.com/jatin_______/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaInstagram />
  </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
