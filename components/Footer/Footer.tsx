// components/Footer/Footer.tsx
import React from 'react';
import { BsTelegram, BsInstagram, BsTwitterX, BsArrowRightShort, BsLinkedin } from "react-icons/bs";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Brand Column */}
        <div className={styles.brandColumn}>
          <div className={styles.brandName}>
            TotalScope
          </div>
          <p className={styles.brandDesc}>
            Building the next generation of digital excellence with precision and impact.
          </p>
          <div className={styles.socials}>
            <a href="https://t.me/LexionETH" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <BsTelegram />
            </a>
            <a href="https://www.linkedin.com/company/totalscope-agency" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <BsLinkedin />
            </a>
            <a href="https://x.com/TotalScope_" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <BsTwitterX />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Our Expertise</h4>
          <div className={styles.linkList}>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> Web & App Development</a>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> UI/UX Design</a>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> Smart Contracts</a>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> Brand Strategy</a>
          </div>
        </div>

        {/* Company Column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Company</h4>
          <div className={styles.linkList}>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> About Us</a>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> Our Vision</a>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> Case Studies</a>
            <a href="#" className={styles.linkItem}><BsArrowRightShort /> Careers</a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.bottomRow}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} TotalScope Agency. All rights reserved.
        </span>
        <span className={styles.copyright}>
          Precision • Impact • Excellence
        </span>
      </div>

      {/* Decorative Sphere Video */}
     
    </footer>
  );
};

export default Footer;
