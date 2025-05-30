// components/CTASection.tsx
import styles from './CTASection.module.css';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className={styles.cta} id="hire">
      <h2>Ready to Work With Us?</h2>
      <Link href="https://t.me/LexionETH" className={`${styles.btn} hover:scale-105 transition-transform duration-300`}>Hire Us</Link>
    </section>
  );
};

export default CTASection;
