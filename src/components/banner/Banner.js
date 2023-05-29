import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaLinkedinIn,
  FaReact,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiReact, SiCplusplus } from 'react-icons/si';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Front-End Developer.'],
    loop: true,
    typeSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full py-20 pb-20 flex flex-col lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont"
    >
      <div className="w-full lgl:w-1/2 px-8 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-normal py-6">WELCOME TO MY WORLD</h4>
          <h1 className="text-8xl font-bold text-white">
            {' '}
            Hi, I'm{' '}
            <span className="text-designColor capitalize">JATIN</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="red" />
          </h2>
          <p> </p>
        </div>
        <div className="flex flex-col lgl:flex-row justify-between">
          <div>
            <h2 className="text-base font-bold uppercase font-titleFont mb-4 my-8">
              Find Me In
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jatin-jain-1aa819179/"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/jatin_______/"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-base font-bold uppercase font-titleFont mb-4 my-8">
              Best Skill On
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiReact />
              </span>
              <span className="bannerIcon">
                <SiCplusplus />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2"></div>
    </section>
  );
};

export default Banner;
