// components/Navbar/Navbar.tsx
"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import { BsArrowUpRightCircle } from "react-icons/bs";

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

  const navItems = ["Home", "Services", "About Us", "Blog"];

  return (
    <div className={style.navbar}>
      <Image
        src="/images/totalscopelogo.png"
        alt="TotalScope"
        width={120}
        height={120}
        className={style.logo}
      />

      {/* Desktop Navigation */}
      <nav className={style.navbarItems}>
        {navItems.map((item, index) => (
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

      <motion.button
        className={style.hireButton}
        onClick={() => scrollToSection("contact")}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        Contact Us
        <span className="ml-2"> <BsArrowUpRightCircle size={20} /> </span>
      </motion.button>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div
        className={`${style.hamburger} ${isMobileMenuOpen ? style.active : ""} lg:hidden`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Navigation Portal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={style.mobileMenu}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                onClick={() => {
                  scrollToSection(formatStringToId(item));
                  setIsMobileMenuOpen(false);
                }}
                className={style.mobileLink}
                whileHover={{ scale: 1.1, color: "#4400ff" }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              className={style.mobileHireButton}
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
