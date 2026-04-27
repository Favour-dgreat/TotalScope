"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { MdOutlineStars, MdLaunch } from "react-icons/md";
import { 
    BsArrowUpRightCircle, 
    BsCodeSlash, 
    BsPeopleFill, 
    BsBriefcaseFill, 
    BsMegaphoneFill, 
    BsChatDots, 
    BsShieldLock, 
    BsCpu, 
    BsGlobe,
    BsTwitterX,
    BsTelegram,
    BsCheckCircleFill,
    BsLightningChargeFill
} from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./HomePage.module.css";

const CountingNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
        duration: 2000
    });

    const displayValue = useTransform(springValue, (latest) => 
        `${prefix}${Math.floor(latest)}${suffix}`
    );

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const HomePage = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Autoplay was prevented:", error);
            });
        }
    }, []);

    // Services Data
    const growthServices = [
        {
            title: "Community Management",
            description: "We place the right people in your community managers, moderators, raiders, shillers, chatters, and reply guys — all working together to keep your project active, visible, and growing around the clock.",
            icon: <BsPeopleFill />
        },
        {
            title: "Content & Social Media management",
            description: "We manage your social presence and create the content that drives it. From daily posts to campaign rollouts, your brand stays consistent, sharp, and engaging across every platform.",
            icon: <BsMegaphoneFill />
        },
        {
            title: "Token Marketing & Launch",
            description: "We manage your token’s full lifecycle ..from refining the idea and structuring solid tokenomics to selecting the right launch strategy, building momentum, and driving visibility.",
            icon: <BsLightningChargeFill />
        },
        {
            title: "Lead Generation",
            description: "Targeted outreach that brings in real users and partners. We build your pipeline — B2B and B2C — so growth doesn’t slow down.",
            icon: <BsBriefcaseFill />
        },
        {
            title: "KOL Campaigns",
            description: "We connect your project with trusted voices in the space. Authentic reach, real engagement, measurable results.",
            icon: <BsChatDots />
        },
        {
            title: "Strategic Partnerships",
            description: "We open doors — cross-chain collaborations, ecosystem integrations, and high-value introductions that push your project forward.",
            icon: <BsGlobe />
        }
    ];

    const techServices = [
        {
            title: "Web & App Development",
            description: "Full-stack websites, web apps, and mobile applications — built clean, fast, and ready to scale.",
            icon: <BsCodeSlash />
        },
        {
            title: "Blockchain & Smart Contracts",
            description: "Custom smart contracts, tokenomics design, and dApp development — secure, scalable, and built for the long term.",
            icon: <BsShieldLock />
        },
        {
            title: "UI/UX Design",
            description: "Interfaces that look great and actually work. We design for real users, not just aesthetics.",
            icon: <BsCpu />
        }
    ];

    // Testimonials Data
    const testimonials = [
        {
            quote: "TotalScope built our entire platform from scratch and had it live ahead of schedule. Clean execution, zero stress.",
            name: "Ryan O.",
            role: "Founder, NexaFi"
        },
        {
            quote: "Our community went from quiet to extremely active within weeks. The moderation and engagement team they placed are genuinely incredible.",
            name: "Sola M.",
            role: "Project Lead, DropLabs"
        },
        {
            quote: "They handled our token launch end to end — tokenomics, launchpad, marketing. We exceeded our targets in the first 48 hours.",
            name: "James K.",
            role: "CEO, StackMint"
        },
        {
            quote: "The content and social media team understood our brand immediately. Our engagement tripled and the quality never dropped.",
            name: "Priya N.",
            role: "CMO, Orbiton"
        },
        {
            quote: "Working with TotalScope felt like having an in-house team. They’re fast, transparent, and they actually deliver.",
            name: "Tobias W.",
            role: "Co-Founder, ChainVault"
        },
        {
            quote: "From UI design to smart contract deployment — one team handled it all. I didn’t have to manage five different agencies anymore.",
            name: "Amara D.",
            role: "Founder, pulseDAO"
        }
    ];

    // Partners Data
    const partners = [
        "/images/partners/6.png",
        "/images/partners/8.png",
        "/images/partners/11.png",
        "/images/partners/13.png",
        "/images/partners/14.png",
        "/images/partners/16.png",
        "/images/partners/logored.png",
        "/images/partners/thefeb10.webp",
        "/images/partners/Tradehere.png",
        "/images/partners/TOPMOST_LOGOs.png",
        "/images/partners/GC_Logo.png",
        "/images/partners/ROAD1.png",

    ];

    // Achievements Data
    const achievements = [
        { label: "Happy Clients", value: 170, suffix: "+" },
        { label: "Success Rate", value: 95, suffix: "%" },
        { label: "Years in Market", value: 3, prefix: "+" }
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <video 
                        ref={videoRef}
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className={styles.bgVideo}
                        preload="auto"
                    >
                        <source src="/images/bg-video.mp4" type="video/mp4" />
                    </video>
                    <div className={styles.gradientGlow}></div>
                    <div className={styles.gridOverlay}></div>
                </div>
                
                <motion.div 
                    className={styles.heroContainer}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.heroBadge}>
                        <MdOutlineStars className={styles.badgeIcon} />
                        <span>Building with Precision</span>
                    </div>
                    
                    <h1 className={styles.heroTitle}>
                        Your Full-Stack Partner for <br />
                        <span className={styles.purpleGradientText}>Web3 & Tech.</span>
                    </h1>
                    
                    <p className={styles.heroSubtitle}>
                        Whether you’re launching a token, building a product, or scaling a brand — we handle development, marketing, and community so you don’t have to.
                    </p>
                    
                    <motion.button 
                        className={styles.primaryButton} 
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let’s Talk <BsArrowUpRightCircle size={20} />
                    </motion.button>
                </motion.div>

                {/* Decorative floating elements */}
                <div className={styles.floatingObjects}>
                    <motion.div 
                        className={styles.object1}
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                    <motion.div 
                        className={styles.object2}
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                </div>
            </section>
             {/* WHY TOTALSCOPE */}
            <section className={styles.whySection}>
                <div className={styles.container}>
                    <div className={styles.whyContent}>
                        <motion.div className={styles.whyLeft} {...fadeInUp}>
                            <div className={styles.sectionBadge}>WHY TOTALSCOPE</div>
                            <h2 className={styles.sectionTitle}>One team. Every layer. <br /><span className={styles.purpleText}>No gaps.</span></h2>
                            <p className={styles.whyDescription}>
                                We bring together marketers, developers, community specialists, and strategists under one roof — so your project moves as one unit from day one to launch and beyond.
                            </p>
                        </motion.div>
                        <motion.div className={styles.whyRight} {...fadeInUp}>
                            <div className={styles.statCard}>
                                <div className={styles.statGlow}></div>
                                <img src="/images/totalscopelogo.png" alt="Logo" className={styles.whyLogo} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
{/* ACHIEVEMENTS */}
            <section className={styles.achievementsSection}>
                <div className={styles.container}>
                    <motion.div className={styles.achievementContent} {...fadeInUp}>
                        <div className={styles.sectionBadge}>ACHIEVEMENTS</div>
                        <h2 className={styles.sectionTitle}>Proud of What We’ve Built.</h2>
                        <p className={styles.achievementSubtitle}>
                            TotalScope powers end-to-end digital growth for Web3 brands and tech products ..cutting execution time while delivering sharp, high-conversion experiences that move the needle.
                        </p>
                        
                        <div className={styles.achievementGrid}>
                            {achievements.map((a, index) => (
                                <div key={index} className={styles.achievementItem}>
                                    <h3 className={styles.achievementValue}>
                                        <CountingNumber value={a.value} prefix={a.prefix} suffix={a.suffix} />
                                    </h3>
                                    <p className={styles.achievementLabel}>{a.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            

            {/* SERVICES SECTION */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.sectionBadge}>SERVICES</div>
                        <h2 className={styles.sectionTitle}>Growth & Marketing</h2>
                    </motion.div>

                    <div className={styles.servicesGrid}>
                        {growthServices.map((service, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.serviceCard}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.serviceIconContainer}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={service.description && styles.serviceDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className={styles.sectionHeader} {...fadeInUp} style={{ marginTop: '6rem' }}>
                        <h2 className={styles.sectionTitle}>Tech & Development</h2>
                    </motion.div>

                    <div className={styles.servicesGrid}>
                        {techServices.map((service, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.serviceCard}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.serviceIconContainer}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

           {/* PARTNERS SECTION */}
            <section className={styles.partnersSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader} {...fadeInUp}>
                        <h2 className={styles.sectionTitle}>Key Clients</h2>
                    </div>
                    
                    <div className={styles.partnersGrid}>
                        {partners.map((logo, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.partnerCard}
                                {...fadeInUp}
                                transition={{ delay: index * 0.05 }}
                            >
                                <img src={logo} alt={`Partner ${index}`} className={styles.partnerImg} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.sectionBadge}>TESTIMONIALS</div>
                        <h2 className={styles.sectionTitle}>Trusted by Founders</h2>
                    </motion.div>

                    <div className={styles.testimonialGrid}>
                        {testimonials.map((t, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.testimonialCard}
                                {...fadeInUp}
                                transition={{ delay: index * 0.05 }}
                            >
                                <FaQuoteLeft className={styles.quoteIcon} />
                                <p className={styles.testimonialQuote}>{t.quote}</p>
                                <div className={styles.testimonialAuthor}>
                                    <div>
                                        <p className={styles.authorName}>{t.name}</p>
                                        <p className={styles.authorRole}>{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* CONTACT */}
            <section id="contact" className={styles.contactSection}>
                <div className={styles.container}>
                    <motion.div className={styles.contactCard} {...fadeInUp}>
                        <div className={styles.contactContent}>
                            <h2 className={styles.contactTitle}>Ready to Scale?</h2>
                            <p className={styles.contactSubtitle}>Let's handle your project with Precision.</p>
                            
                            <div className={styles.contactLinks}>
                                <a href="https://x.com/Totalscope_" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <BsTwitterX /> <span>x.com/Totalscope_</span>
                                </a>
                                <a href="https://t.me/lexioneth56" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <BsTelegram /> <span>@lexioneth56</span>
                                </a>
                            </div>
                        </div>
                        
                        <div className={styles.contactAction}>
                            <motion.button 
                                className={styles.contactBtn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Message Us Now
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
