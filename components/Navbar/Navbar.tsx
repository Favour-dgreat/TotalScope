"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formatStringToId = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className={style.navbar}>
      <Image
        src="/images/logo.png"
        alt="$GALAXY"
        width={120}
        height={120}
        className={style.logo}
      />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center ml-auto gap-4">
        <nav
          className={style.navbarItems}
          
        >
            {["Home", "Service", "About Us", "Reviews", "Our Partners"].map((item, index) => (
            <motion.a
              key={item}
              onClick={() => scrollToSection(formatStringToId(item))}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={index === 0 ? style.active : ""}
            >
              {item}
            </motion.a>
            ))}
            
        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Image
            src="/images/List.png"
            alt="menu"
            width={120}
            height={120}
            className="w-10 "
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-0 right-0 w-[100%] bg-white border-2 border-black h-[380px] flex flex-col p-5 justify-center gap-6 z-50" style={{borderRadius: "10px"}}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image
              src="/images/close.png"
              alt="close"
              width={10}
              height={10}
              className="w-2 "
            />
          </button>

          {["Home", "Service", "About Us", "Reviews", "Our Partners"].map((item) => (
            <motion.a
              key={item}
              onClick={() => {
                scrollToSection(formatStringToId(item));
                setIsMobileMenuOpen(false);
              }}
              className="text-[#002a7f] text-sm font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
           className={style.hireButtons}
          style={{width: "30%"}}
            whileHover={{ scale: 1.1 }}
          >
            Hire Us
          </motion.button>
        </motion.div>
      )}

      <motion.button
        className={style.hireButton}
        onClick={() => scrollToSection("contact")}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        Hire Us
      </motion.button>
    </div>
  );
};

export default Navbar;
