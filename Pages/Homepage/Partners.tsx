"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Partners/Partners.module.css";
import { MdOutlineStars } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Partners = () => {
    const partners = [
        "/images/Frame101.png",
        "/images/Frame102.png",
        "/images/Frame103.png",
        "/images/Frame104.png",
        "/images/Frame105.png",
        "/images/Frame106.png",
        "/images/Frame107.png",
    ];

    return (
        <div className={styles.partnersPage}>
            <Navbar />

            <main className={styles.partnersMain}>
                {/* Header Section */}
                <section className={styles.partnersHeader}>
                    <div className={styles.partnersBadge}>
                        <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                        <span>Our Partners</span>
                    </div>
                    <h1 className={styles.partnersTitle}>
                        We Build for <span className={styles.textBlue}>Founders,</span><br />
                        Creators, and Global Teams
                    </h1>
                </section>

                {/* Logos Section */}
                <section className={styles.partnersLogos}>
                    <div className={styles.logoGrid}>
                        {/* Duplicate the list to create seamless infinite scroll */}
                        {[...partners, ...partners].map((src, index) => (
                            <div key={index} className={styles.logoItem}>
                                <img src={src} alt={`Partner ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Feature Card Section */}
                <section className={styles.featureSection}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureImageContainer}>
                            {/* Placeholder for the person image */}
                            <img src="/images/ww.jpg" alt="Satisfied Client" className={styles.featureImage} />
                            <div className={`${styles.statBadge} ${styles.topRight}`}>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>Satisfied Client</span>
                            </div>
                            <div className={`${styles.statBadge} ${styles.bottomCenter}`}>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>Projects Done</span>
                            </div>
                        </div>

                        <div className={styles.featureContent}>
                            <h2>
                                Brands across tech, finance, e-commerce, gaming, and Web3 trust us to bring their vision to life.
                            </h2>
                            <button className={styles.featureButton}>
                                Book a Session Now <BsArrowUpRightCircle size={18} />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Partners;
