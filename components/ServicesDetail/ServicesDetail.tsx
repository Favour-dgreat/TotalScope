// components/ServicesDetail.tsx
import styles from './ServicesDetail.module.css';

const services = [
  {
    title: "KOLs Management / Business Development",
    description: "TotalScope manages KOL's and forms strategic partnerships to elevate your project's influence.",
  },
  {
    title: "Community Management",
    description: "TotalScope handles all aspects of community management, driving engagement and fostering growth.",
  },
  {
    title: "Community Moderation",
    description: "Our team at TotalScope keeps your chat clean, positive, and free from negativity or spam.",
  },
  {
    title: "Chat Engagements",
    description: "TotalScope ensures your community stays lively and engaged through active participation and conversation starters.",
  },
  {
    title: "Pro-Raiding Services",
    description: "We organize powerful social media campaigns to boost your project’s visibility.",
  },
  {
    title: "Blockchain Development",
    description: "TotalScope provides expert blockchain development services, creating tokens, smart contracts, or platforms to power your project.",
  },
  {
    title: "Graphics & Designs",
    description: "We design custom graphics to strengthen your marketing and branding.",
  },
  {
    title: "Social Media Setups",
    description: "TotalScope Agency sets up and optimizes your social media group and channels for a professional community space.",
  }
];
const icons = [
    "/images/Frame39.png", // Icon for "Community Moderation"
    "/images/Frame102.png", // Icon for "Community Moderation"
    "/images/Frame103.png", // Icon for "Chat Engagements"
    "/images/Frame104.png", // Icon for "Pro-Raiding Services"
    "/images/Frame101.png", // Icon for "Community Management"
    "/images/Frame105.png", // Icon for "KOLs Management / Business Development"
    "/images/Frame106.png", // Icon for "BlockChain development"
    "/images/Frame107.png", // Icon for "Graphics & Designs"
    "/images/Frame108.png", // Icon for "Social Media Setups"
  ];

const ServicesDetail = () => {
  return (
    <section className={styles.detail} id="service">
      <h2>Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
             <span className={styles.icon}>
                        <img
                          src={icons[index]} // Dynamically map the icon based on the index
                          alt={`Icon for ${service}`}
                          width={40}
                          height={40}
                        />
                      </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetail;
