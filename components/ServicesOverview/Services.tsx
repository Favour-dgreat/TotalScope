// components/ServicesOverview.tsx
import styles from './ServicesOverview.module.css';

const services = [
  "Community Management",
  "Community Moderation",
  "Chat Engagements",
  "Pro-Raiding Services",
  "KOLs Management / Business Development",
  "Blockchain Development",
];
const icons = [
    "/images/Frame102.png", // Icon for "Community Moderation"
    "/images/Frame103.png", // Icon for "Chat Engagements"
    "/images/Frame104.png", // Icon for "Pro-Raiding Services"
    "/images/Frame101.png", // Icon for "Community Management"
    "/images/Frame105.png", // Icon for "KOLs Management / Business Development"
    "/images/Frame106.png", // Icon for "BlockChain development"
  ];

const ServicesOverview = () => {
  return (
    <section className={styles.overview} >
       {services.map((service, index) => (
        <div
          className={`${styles.card} ${styles.slider}`}
          key={index}
          
        >
          <span className={styles.icon}>
            <img
              src={icons[index]} // Dynamically map the icon based on the index
              alt={`Icon for ${service}`}
              width={40}
              height={40}
            />
          </span>
          <p>{service}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesOverview;
