import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" }
  ];

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on home, we can link back or let the user navigate
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className={style.navbar}>
      <Link href="/">
        <Image
          src="/images/totalscopelogo.png"
          alt="TotalScope"
          width={120}
          height={120}
          className={style.logo}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className={style.navbarItems}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.path} passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={pathname === item.path ? style.active : ""}
            >
              {item.label}
            </motion.a>
          </Link>
        ))}
      </nav>

      <motion.button
        className={style.hireButton}
        onClick={() => window.open("https://t.me/LexionETH", "_blank")}
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
              <Link key={item.label} href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                <motion.span
                  className={`${style.mobileLink} ${pathname === item.path ? style.active : ""}`}
                  whileHover={{ scale: 1.1, color: "#4400ff" }}
                >
                  {item.label}
                </motion.span>
              </Link>
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
