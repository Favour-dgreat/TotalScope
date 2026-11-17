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
    BsLightningChargeFill,
    BsLaptop,
    BsFire
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

// Sets --mx/--my on the card so CSS can draw a glow that follows the cursor
const trackSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const initials = (name: string) =>
    name.split(" ").map((p) => p[0]).join("").replace(".", "").slice(0, 2).toUpperCase();

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
    const serviceCategories: { title: string; icon: React.ReactNode; items: string[]; wide?: string }[] = [
        {
            title: "Technology & Product Development",
            icon: <BsCodeSlash />,
            items: [
                "Developers", "Designers",
                "Website Development", "Application Development",
                "Blockchain Solutions", "Smart Contracts",
                "UI/UX Design", "Project Foundations"
            ]
        },
        {
            title: "Community Services",
            icon: <BsPeopleFill />,
            items: [
                "Community Managers", "Moderators",
                "X Mainstreamers", "Raiders",
                "Shillers", "Native Chatters / BitcoinTalk"
            ],
            wide: "Pump.funers"
        },
        {
            title: "Creative & Marketing",
            icon: <BsMegaphoneFill />,
            items: [
                "Project Artwork", "Branding",
                "Memesites", "AI-Generated Content",
                "Social Media Management", "Token Marketing",
                "Lead Generation", "Marketing Strategists"
            ]
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

    // Key Clients
    const clients = [
        "NexaFi", "DropLabs", "StackMint", "Orbiton", "ChainVault",
        "pulseDAO", "DTP", "COR", "PUT", "AzkabanDAO"
    ];

    // Our Flex
    const flexBlocks: { title: string; icon: React.ReactNode; items: React.ReactNode[]; note: string }[] = [
        {
            title: "Selected Builds",
            icon: <BsLaptop />,
            items: [
                <><strong>Cortex AI GPU Rent Bot</strong> — Telegram GPU rental interface and supporting website.</>,
                <><strong>Launchpad Platforms</strong> — Token launch infrastructure and project participation workflows.</>,
                <><strong>Gaming Applications</strong> — Interactive gaming platforms and Web3 gaming experiences.</>,
                <><strong>Telegram Mini-Apps &amp; Bots</strong> — Custom interactive applications and automated product systems.</>
            ],
            note: "These are just a few examples of the products and technical solutions we've built and worked on, with many more across different industries and use cases."
        },
        {
            title: "Technical Expertise",
            icon: <BsCpu />,
            items: [
                "Full-stack web and application development.",
                "Blockchain and Web3 product development.",
                "Smart contract development and integration.",
                "AI-powered applications and automation.",
                "DeFi, staking and token management platforms.",
                "NFT marketplaces and digital asset applications.",
                "UI/UX design, product architecture and MVP development."
            ],
            note: ""
        },
        {
            title: "Meme Marketing & Campaign Flex",
            icon: <BsFire />,
            items: [
                <><span className={styles.ticker}>$ADILLO</span> Market cap moved from $600K to $8M during the campaign, driven by our X Mainstreamers.</>,
                <><span className={styles.ticker}>$MOKSHA</span> Campaign associated with a reported 500% market-cap increase within two hours.</>,
                <><span className={styles.ticker}>$PEPEWICK</span> Meme content distribution and community campaign execution.</>,
                <><span className={styles.ticker}>$FROGT</span> Coordinated meme marketing and social engagement.</>,
                <><span className={styles.ticker}>$WOJAKX</span> Community-led meme campaign execution.</>
            ],
            note: "These represent only a selection of the meme campaigns and marketing executions we've delivered, with many more across different communities and ecosystems."
        },
        {
            title: "Community Services",
            icon: <BsPeopleFill />,
            items: [
                "Built and coordinated teams of raiders, shillers, native chatters, moderators and community managers.",
                <>Scaled and managed <strong>80+ crypto communities</strong>.</>,
                <>Helped <strong>Dulu Gaming</strong> reach 2,000+ active players on launch day.</>,
                <>Helped onboard 200+ <strong>alpha testers and node miners</strong> for <strong>Cortensor ($COR)</strong>.</>,
                "Delivered Telegram and Discord moderation, active chat engagement and community operations.",
                "Organised coordinated raiding, shilling and X engagement campaigns."
            ],
            note: "These are just a few highlights from our community operations, with many more communities supported and campaigns executed."
        }
    ];

    // Achievements Data
    const achievements: { label: string; value: number; prefix?: string; suffix?: string }[] = [
        { label: "Happy Clients", value: 170, suffix: "+" },
        { label: "Success Rate", value: 95, suffix: "%" },
        { label: "Years in Market", value: 4 }
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
                        An agency that lets our clients focus on their products while we handle community growth, marketing, launch and post-launch support, with the added ability to develop products from the ground up when needed.
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
                            <h2 className={styles.sectionTitle}>One team. <span className={styles.purpleText}>Everything.</span></h2>
                            <p className={styles.whyDescription}>
                                Developers, community specialists and marketers work under one roof, keeping everything connected as your project moves from the first idea to launch and beyond.
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
                        <h2 className={styles.sectionTitle}>Proud of What <span className={styles.purpleGradientText}>We’ve Built.</span></h2>
                        <p className={styles.achievementSubtitle}>
                            TotalScope powers end-to-end digital growth for Web3 brands and tech products ..cutting execution time while delivering sharp, high-conversion experiences that move the needle.
                        </p>
                        
                        <div className={styles.achievementGrid}>
                            {achievements.map((a, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.achievementItem}
                                    onMouseMove={trackSpotlight}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.12 }}
                                >
                                    <h3 className={styles.achievementValue}>
                                        <CountingNumber value={a.value} prefix={a.prefix} suffix={a.suffix} />
                                    </h3>
                                    <p className={styles.achievementLabel}>{a.label}</p>
                                </motion.div>
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
                        <h2 className={styles.sectionTitle}>What We <span className={styles.purpleGradientText}>Do</span></h2>
                        <p className={styles.sectionLead}>Three disciplines, one team — pick a single service or plug us in end to end.</p>
                    </motion.div>

                    <motion.div className={styles.serviceChartFrame} {...fadeInUp}>
                        <div className={styles.serviceChart}>
                            {serviceCategories.map((cat, catIndex) => (
                                <div key={cat.title} className={styles.serviceRow} onMouseMove={trackSpotlight}>
                                    <div className={styles.serviceCategoryWrap}>
                                        <span className={styles.serviceIndex}>0{catIndex + 1}</span>
                                        <div className={styles.serviceCategoryIcon}>{cat.icon}</div>
                                        <h3 className={styles.serviceCategory}>{cat.title}</h3>
                                    </div>
                                    <div className={styles.pillGrid}>
                                        {[...cat.items, ...(cat.wide ? [cat.wide] : [])].map((item, i) => (
                                            <motion.span
                                                key={item}
                                                className={`${styles.servicePill} ${item === cat.wide ? styles.servicePillWide : ""}`}
                                                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* KEY CLIENTS */}
            <section className={styles.partnersSection}>
                <div className={styles.container}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.sectionBadge}>KEY CLIENTS</div>
                        <h2 className={styles.sectionTitle}>Trusted by <span className={styles.purpleGradientText}>Founders.</span></h2>
                    </motion.div>

                    <div className={styles.clientGrid}>
                        {clients.map((name, index) => (
                            <motion.div
                                key={name}
                                className={styles.clientCell}
                                onMouseMove={trackSpotlight}
                                {...fadeInUp}
                                transition={{ delay: index * 0.05 }}
                            >
                                <span className={styles.clientName}>{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.sectionBadge}>CLIENT TESTIMONIALS</div>
                        <h2 className={styles.sectionTitle}>What Founders Say About <span className={styles.purpleGradientText}>Working With Us</span></h2>
                    </motion.div>

                    <div className={styles.testimonialGrid}>
                        {testimonials.map((t, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.testimonialCard}
                                onMouseMove={trackSpotlight}
                                {...fadeInUp}
                                transition={{ delay: index * 0.05 }}
                            >
                                <FaQuoteLeft className={styles.quoteIcon} />
                                <p className={styles.testimonialQuote}>{t.quote}</p>
                                <div className={styles.testimonialAuthor}>
                                    <div className={styles.authorAvatar}>{initials(t.name)}</div>
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

            {/* OUR FLEX */}
            <section className={styles.flexSection}>
                <div className={styles.container}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <div className={styles.sectionBadge}>OUR FLEX</div>
                        <h2 className={styles.sectionTitle}><span className={styles.purpleGradientText}>101%</span> Hands-On.</h2>
                        <p className={styles.flexIntro}>
                            We built TotalScope to bring product development, community growth and marketing under one roof, giving clients the freedom to focus on building while we handle execution from launch to post-launch.
                        </p>
                    </motion.div>

                    <div className={styles.flexGrid}>
                        {flexBlocks.map((block, index) => (
                            <motion.div
                                key={block.title}
                                className={styles.flexCard}
                                onMouseMove={trackSpotlight}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.flexHeader}>
                                    <div className={styles.flexIcon}>{block.icon}</div>
                                    <h3 className={styles.flexTitle}>{block.title}</h3>
                                </div>
                                <ul className={styles.flexList}>
                                    {block.items.map((item, i) => (
                                        <li key={i}>
                                            <BsCheckCircleFill className={styles.flexBullet} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {block.note && <p className={styles.flexNote}>{block.note}</p>}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className={styles.powWrap} {...fadeInUp}>
                        <a href="https://t.me/lexioneth56" target="_blank" rel="noopener noreferrer" className={styles.powNote}>
                            <span className={styles.powDot}></span>
                            <strong>POW:</strong> Proof of work available on request
                            <BsArrowUpRightCircle />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.contactSection}>
                <div className={styles.container}>
                    <motion.div className={styles.contactCard} onMouseMove={trackSpotlight} {...fadeInUp}>
                        <div className={styles.contactOrb}></div>
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
                            <motion.a
                                href="https://t.me/lexioneth56"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactBtn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Message Us Now
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
