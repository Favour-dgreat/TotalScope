// components/Footer/Footer.tsx
import React from 'react';
import { BsTelegram, BsTwitterX, BsLinkedin } from "react-icons/bs";
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
