"use client";
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import { motion } from 'framer-motion';
import {
    BsCodeSlash, BsPeopleFill, BsShieldLock, BsChatDots,
    BsMegaphoneFill, BsPhone, BsBriefcaseFill, BsGraphUp,
    BsArrowRight, BsCpu, BsGlobe, BsLightningCharge
} from 'react-icons/bs';
import styles from './ServicesPage.module.css';

const services = [
    {
        title: "Blockchain Architecture",
        description: "Custom tokenomics, smart contract engineering, and enterprise blockchain deployment for resilient dApps.",
        icon: <BsShieldLock />,
    },
    {
        title: "Product Engineering",
        description: "Full-stack development of scalable Web3 platforms and mobile-first decentralized applications.",
        icon: <BsCodeSlash />,
    },
    {
        title: "Global BD & Partnerships",
        description: "Scaling project reach through KOL management and cross-chain strategic collaborations.",
        icon: <BsBriefcaseFill />,
    },
    {
        title: "Community Ecosystems",
        description: "Building authentic, hyper-engaged communities with a focus on longevity and governance.",
        icon: <BsPeopleFill />,
    },
    {
        title: "24/7 Security & Moderation",
        description: "Proactive governance and moderation systems to protect and nurture community growth.",
        icon: <BsShieldLock />,
    },
    {
        title: "Strategic Advisory",
        description: "Consulting for founders entering the Web3 space, from concept to global scaling.",
        icon: <BsGlobe />,
    }
];

export default function ServicesPage() {
    return (
        <div className={styles.servicesPage}>
            <Navbar />

            <main className={styles.container}>
                <header className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={styles.title}>
                            Precision <span className={styles.highlight}>Services</span>
                        </h1>
                        <p className={styles.subtitle}>
                            From blockchain architecture to global community scaling, we provide the technical and strategic foundation for your Web3 empire.
                        </p>
                    </motion.div>
                </header>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.glow} />
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                            <div className={styles.cardFooter}>
                                <span>Get Started</span>
                                <BsArrowRight />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
