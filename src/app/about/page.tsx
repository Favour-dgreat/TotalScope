"use client";
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    BsRocketTakeoff, BsEyeFill, BsLightningChargeFill,
    BsPeopleFill, BsGlobe, BsShieldLock, BsCodeSlash,
    BsArrowRight, BsTelegram, BsTwitter
} from 'react-icons/bs';
import styles from './AboutPage.module.css';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const values = [
    {
        icon: <BsLightningChargeFill />,
        title: "Precision Execution",
        description: "We don't do half-measures. Every line of code, every campaign, every community touchpoint is built to perform at the highest level."
    },
    {
        icon: <BsShieldLock />,
        title: "Trust & Transparency",
        description: "We operate with full visibility. Our clients know exactly what's happening, when it's happening, and why — no black boxes."
    },
    {
        icon: <BsPeopleFill />,
        title: "Community First",
        description: "We believe the strongest projects are built on authentic communities. We don't chase vanity metrics — we build ecosystems that last."
    },
    {
        icon: <BsGlobe />,
        title: "Global Mindset",
        description: "From Africa to Asia to Europe, we operate across borders and time zones, bringing world-class execution to every market."
    },
    {
        icon: <BsCodeSlash />,
        title: "Builder DNA",
        description: "We're not just strategists — we ship. Our team writes code, deploys contracts, and launches products alongside our clients."
    },
    {
        icon: <BsRocketTakeoff />,
        title: "Long-Term Vision",
        description: "We partner with projects that think beyond the next cycle. Our work is designed for sustained growth, not quick flips."
    }
];

const milestones = [
    {
        year: "2023",
        title: "The Beginning",
        description: "TotalScope was founded with a clear mission — provide Web3 projects with full-stack execution under one roof."
    },
    {
        year: "2024",
        title: "Scaling Operations",
        description: "Started serving startups and teams who wanted clarity and execution."
    },
    {
        year: "2025",
        title: "Product Evolution",
        description: "Transitioned from being a service-based company into a technology company — building proprietary tools and scaling our own products."
    },
    {
        year: "2026",
        title: "The Next Chapter",
        description: "Deepening our blockchain infrastructure, launching internal ventures, and positioning TotalScope as a global Web3 technology powerhouse."
    }
];

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <Navbar />

            <main className={styles.container}>
                {/* HERO */}
                <header className={styles.hero}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.heroBadge}>WHO WE ARE</div>
                        <h1 className={styles.title}>
                            Built to <span className={styles.highlight}>Execute.</span>
                        </h1>
                        <p className={styles.tagline}>
                            TotalScope is a full-stack Web3 technology and growth company. We handle development, marketing, community, and strategy — so founders can focus on building.
                        </p>
                    </motion.div>
                </header>

                {/* STORY SECTION */}
                <section className={styles.storySection}>
                    <div className={styles.storyGrid}>
                        <motion.div className={styles.storyContent} {...fadeInUp}>
                            <h2 className={styles.sectionTitle}>Our Story</h2>
                            <p className={styles.paragraph}>
                                TotalScope started with a simple observation: most Web3 projects fail not because of bad ideas, but because of fragmented execution. Founders were juggling five different agencies for development, marketing, community, design, and strategy — and nothing moved as one unit.
                            </p>
                            <p className={styles.paragraph}>
                                We built TotalScope to solve that. One team, every layer, no gaps. From smart contract deployment to community management, from token launches to full product engineering — we bring everything under one roof with a single standard: precision.
                            </p>
                            <p className={styles.paragraph}>
                                Today, we've worked with over 170 clients across the globe, launched tokens, built platforms, scaled communities, and helped founders turn ideas into products that actually ship. And we're just getting started.
                            </p>
                        </motion.div>
                        <motion.div className={styles.storyImageWrapper} {...fadeInUp}>
                            <Image
                                src="/images/totalscopebanner.png"
                                alt="TotalScope Team"
                                width={600}
                                height={600}
                                className={styles.storyImage}
                            />
                            <div className={styles.imageGlow} />
                        </motion.div>
                    </div>
                </section>

                {/* MISSION & VISION */}
                <section className={styles.mvSection}>
                    <div className={styles.mvGrid}>
                        <motion.div className={styles.mvCard} {...fadeInUp}>
                            <div className={styles.mvIconWrapper}>
                                <BsRocketTakeoff />
                            </div>
                            <h3 className={styles.mvTitle}>Our Mission</h3>
                            <p className={styles.mvText}>
                                To be the definitive execution partner for Web3 founders — providing the technical infrastructure, growth systems, and community frameworks needed to launch, scale, and sustain globally competitive projects.
                            </p>
                        </motion.div>
                        <motion.div className={styles.mvCard} {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
                            <div className={styles.mvIconWrapper}>
                                <BsEyeFill />
                            </div>
                            <h3 className={styles.mvTitle}>Our Vision</h3>
                            <p className={styles.mvText}>
                                A decentralized future where technology is accessible, communities are empowered, and innovation is driven by builders — not hype. We're building toward a Web3 ecosystem where quality execution is the standard, not the exception.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* STATS BAR */}
                <motion.section className={styles.statsBar} {...fadeInUp}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>50+</span>
                        <span className={styles.statLabel}>Clients Served</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>4+</span>
                        <span className={styles.statLabel}>Technology Sectors</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>95%</span>
                        <span className={styles.statLabel}>Success Rate</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>3+</span>
                        <span className={styles.statLabel}>Years Building</span>
                    </div>
                </motion.section>

                {/* VALUES */}
                <section className={styles.valuesSection}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.heroBadge}>WHAT DRIVES US</div>
                        <h2 className={styles.sectionTitle}>Our Core Values</h2>
                        <p className={styles.sectionSubtitle}>
                            These aren't just words on a wall. They're the principles that guide every decision, every hire, and every project we take on.
                        </p>
                    </motion.div>

                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDesc}>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* TIMELINE */}
                <section className={styles.timelineSection}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.heroBadge}>OUR JOURNEY</div>
                        <h2 className={styles.sectionTitle}>Key Milestones</h2>
                    </motion.div>

                    <div className={styles.timeline}>
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.timelineItem} ${index % 2 !== 0 ? styles.timelineRight : ''}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                            >
                                <div className={styles.timelineDot} />
                                <div className={styles.timelineCard}>
                                    <span className={styles.timelineYear}>{milestone.year}</span>
                                    <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                                    <p className={styles.timelineDesc}>{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <motion.div className={styles.ctaCard} {...fadeInUp}>
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>Ready to Build With Us?</h2>
                            <p className={styles.ctaSubtitle}>
                                Whether you're launching a token, scaling a community, or building a product from scratch — let's talk.
                            </p>
                        </div>
                        <div className={styles.ctaLinks}>
                            <a href="https://x.com/Totalscope_" target="_blank" rel="noopener noreferrer" className={styles.ctaSocialLink}>
                                <BsTwitter /> <span>x.com/Totalscope_</span>
                            </a>
                            <a href="https://t.me/lexioneth56" target="_blank" rel="noopener noreferrer" className={styles.ctaSocialLink}>
                                <BsTelegram /> <span>@lexioneth56</span>
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
