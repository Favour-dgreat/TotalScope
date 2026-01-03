"use client";
import React from "react";
import styles from "./Intro.module.css";
import { MdOutlineStars } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Intro = () => {
    return (
        <section className={styles.introSection}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                    <span>Who We Are</span>
                </div>
                <h2 className={styles.title}>
                    We Build for <span className={styles.highlight}>Founders</span>,<br />
                    Creators, and Global Teams.
                </h2>
            </div>

            <div className={styles.introCard}>
                <div className={styles.cardImageContainer}>
                    {/* Placeholder image - user can replace with the specific person image later */}
                    <img src="/images/hero-globe.png" alt="Founder" className={styles.cardImage} style={{ maxWidth: '300px' }} />
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Build, scale, and thrive...</h3>
                    <p className={styles.cardDescription}>
                        Your vision, our technical expertise. We turn complex ideas into seamless digital experiences.
                    </p>
                    <button className={styles.cardButton}>
                        Learn More <BsArrowUpRightCircle size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Intro;
