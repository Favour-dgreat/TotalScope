"use client";
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <Navbar />

            <main className={styles.container}>
                <header className={styles.hero}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Our <span className={styles.highlight}>Evolution</span>
                    </motion.h1>
                    <p className={styles.tagline}>From Agency to Technology Hub.</p>
                </header>

                <section className={styles.section}>
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <h2>TotalScope at One</h2>
                            <p className={styles.paragraph}>
                                As TotalScope Agency marks its first anniversary, we celebrate a year defined by vision, evolution, and the relentless pursuit of excellence. What began as an ambitious service-focused agency has grown into a dynamic force in the global tech and Web3 ecosystem.
                            </p>
                            <p className={styles.paragraph}>
                                Today, we are proud to announce the transition of TotalScope Agency into a full-fledged Technology, Blockchain, and Web3 Company. We are moving beyond traditional agency operations and stepping fully into a product-driven, innovation-focused future.
                            </p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/totalscopebanner.png"
                                alt="Innovation at TotalScope"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.missionSection}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>12+</span>
                            <span className={styles.statLabel}>Months Growth</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>30k+</span>
                            <span className={styles.statLabel}>Users Impacted</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>Global</span>
                            <span className={styles.statLabel}>Web3 Vision</span>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.grid}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/ww.jpg"
                                alt="Building the Future"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2>Our Core Pillars</h2>
                            <div className={styles.paragraph}>
                                <strong>Technology at Our Core:</strong> From blockchain architecture to Web3 security tools and AI-powered systems.
                            </div>
                            <div className={styles.paragraph}>
                                <strong>Africa & Global Markets:</strong> Bridging the gap for founders across emerging markets with scalable tech.
                            </div>
                            <div className={styles.paragraph}>
                                <strong>Innovation First:</strong> Stepping fully into a product-driven future where we build solutions for longevity.
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
