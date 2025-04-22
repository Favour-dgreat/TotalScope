// components/AboutUs.tsx
import styles from './AboutUs.module.css';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className={styles.about} id="about-us">
      <h2>About Us</h2>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
          At TotalScope, we’ve got you covered! Whether it’s chat setups or blockchain builds, we’re here to fulfill your needs.
          </p>
            <p>
          TotalScope doesn’t just provide services, we catch your vision and turn it into reality, building your Web3 empire with precision.
            </p>
          <p>
          If you’re ready to elevate your project, TotalScope has got your back!  
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/totalscopebanner.png"
            alt="About us image"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
