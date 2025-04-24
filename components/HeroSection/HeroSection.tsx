// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import style from './HeroSection.module.css';
import React from 'react';
import { motion } from "framer-motion";
import OrbitalInterface from './OrbitalInterface';


const HeroSection = () => {
  return (
    <section
  id="home"
  className={`${style.hero} w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-4 md:py-24 bg-black text-white`}
>
  {/* Left Side Content */}
  <div className={`${style.left} w-full md:w-1/2 text-center md:text-left mt-8 md:mt-5`}>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      WELCOME TO <br />
      <span className={`${style.highlight} bg-gradient-to-r bg-clip-text`}>
        TOTALSCOPE
      </span>{' '}
      AGENCY
    </h1>

    <p className={`${style.tagline} text-sm sm:text-base md:text-lg mt-4 text-gray-300 font-light`}>
      ...building your Web3 empire with precision
    </p>

    <Link
      href="https://t.me/LexionETH"
      className={`${style.hireBtn} inline-block text-white px-6 py-3 rounded-md font-semibold text-sm md:text-base shadow-lg hover:scale-105 transition-transform duration-300`}
    >
      Hire Us
    </Link>
  </div>

  {/* Orbital Interface */}
  <div className="w-full md:w-1/2 flex justify-center items-center">
    <OrbitalInterface />
  </div>
</section>

  );
};

export default HeroSection;
