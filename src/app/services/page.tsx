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
        title: "Blockchain Development",
        description: "Expert token creation, smart contract engineering, and dApp deployment across major chains like Ethereum, Solana, and BSC.",
        icon: <BsShieldLock />,
    },
    {
        title: "KOLs & Business Development",
        description: "Strategic partnerships and influencer management to build credibility and scale project reach globally.",
        icon: <BsBriefcaseFill />,
    },
    {
        title: "Community Management",
        description: "Building authentic, hyper-engaged communities through proven growth frameworks and active participation.",
        icon: <BsPeopleFill />,
    },
    {
        title: "Web & App Development",
        description: "High-performance websites and digital products built for the next generation of the internet.",
        icon: <BsCodeSlash />,
    },
    {
        title: "Graphic & UI/UX Design",
        description: "Stunning visual identities and user-centric designs that make your brand stand out in a crowded market.",
        icon: <BsPhone />,
    },
    {
        title: "Community Moderation",
        description: "24/7 proactive moderation to ensure your community remains positive, secure, and spam-free.",
        icon: <BsLightningCharge />,
    },
    {
        title: "Chat Engagements",
        description: "Driving organice conversation and keeping your project’s energy high in Discord and Telegram.",
        icon: <BsChatDots />,
    },
    {
        title: "Pro-Raiding Services",
        description: "Coordinated social media campaigns that amplify your project’s presence during critical announcements.",
        icon: <BsMegaphoneFill />,
    },
    {
        title: "Social Media Optimization",
        description: "Professional setup and maintenance of your brand's social footprint for maximum visibility.",
        icon: <BsGraphUp />,
    },
    {
        title: "AI Solutions Integration",
        description: "Harnessing the power of AI to automate workflows and enhance user experiences.",
        icon: <BsCpu />,
    },
    {
        title: "Web3 Security Audit",
        description: "Thorough analysis of smart contracts and infrastructure to ensure maximum security.",
        icon: <BsShieldLock />,
    },
    {
        title: "Strategic Advisory",
        description: "End-to-end consulting for startups and enterprises entering the Web3 ecosystem.",
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
