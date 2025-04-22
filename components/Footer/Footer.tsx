// components/Footer.tsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © TotalScope Agency {new Date().getFullYear()}  All Rights Reserved.</p>

      <div className={styles.socials}>
      <a href="https://telegram.com/totalscopeagency" target="_blank" rel="noopener noreferrer">
          <img src="/images/telegram_symbol.png" alt="Twitter" width={24} height={24} />
        </a> 
        <a href="https://twitter.com/totalscopeagency" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://twitter.com/totalscopeagency" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://instagram.com/totalscopeagency" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Twitter" width={24} height={24} />
        </a>     

      </div>
    </footer>
  );
};

export default Footer;
