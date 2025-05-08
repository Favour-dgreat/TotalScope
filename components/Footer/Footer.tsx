// components/Footer.tsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © TotalScope Agency {new Date().getFullYear()} | All Rights Reserved </p>

      <div className={styles.socials}>
      <a href="https://t.me/LexionETH" target="_blank" rel="noopener noreferrer">
          <img src="/images/telegram_symbol.png" alt="Twitter" width={28} height={28} />
        </a> 
        <a href="https://x.com/TotalScope_" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" width={28} height={28} />
        </a>
        <a href="https://github.com/TotalScope-Agency" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="Twitter" width={28} height={28} />
        </a>
        {/* <a href="https://instagram.com/totalscopeagency" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Twitter" width={24} height={24} />
        </a>      */}

      </div>
    </footer>
  );
};

export default Footer;
