"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { MdOutlineStars } from "react-icons/md";
import { BsArrowUpRightCircle, BsCodeSlash, BsPhone, BsGraphUp, BsShieldLock, BsArrowLeft, BsArrowRight, BsPeopleFill, BsBriefcaseFill, BsMegaphoneFill, BsChatDots, BsPlayCircleFill, BsCpu } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./HomePage.module.css";

const HomePage = () => {
    // WorkWithUs State
    const projects = [
        {
            title: "FinTech App – Complete Platform Build",
            description: "Built a cross-platform mobile + web app used by 30,000+ monthly customers.",
            color: "linear-gradient(45deg, #1a0b2e, #4400ff)"
        },
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive analytics dashboard for a global retail brand.",
            color: "linear-gradient(45deg, #2e0b1a, #ff0044)"
        },
        {
            title: "Healthcare Portal",
            description: "Secure patient management system with telemedicine integration.",
            color: "linear-gradient(45deg, #0b2e1a, #00ff44)"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Partners Data
    const partners = [
        "/images/Frame101.png",
        "/images/Frame102.png",
        "/images/Frame103.png",
        "/images/Frame104.png",
        "/images/Frame105.png",
        "/images/Frame106.png",
        "/images/Frame107.png",
    ];

    // Services Data
    const services = [
        {
            title: "KOLs Management / Business Development",
            description: "TotalScope manages KOL's and forms strategic partnerships to elevate your project's influence.",
            icon: <BsBriefcaseFill />,
        },
        {
            title: "Community Management",
            description: "TotalScope handles all aspects of community management, driving engagement and fostering growth.",
            icon: <BsPeopleFill />,
        },
        {
            title: "Community Moderation",
            description: "Our team at TotalScope keeps your chat clean, positive, and free from negativity or spam.",
            icon: <BsShieldLock />,
        },
        {
            title: "Chat Engagements",
            description: "TotalScope ensures your community stays lively and engaged through active participation and conversation starters.",
            icon: <BsChatDots />,
        },
        {
            title: "Pro-Raiding Services",
            description: "We organize powerful social media campaigns to boost your project’s visibility.",
            icon: <BsMegaphoneFill />,
        },
        {
            title: "Blockchain Development",
            description: "TotalScope provides expert blockchain development services, creating tokens, smart contracts, or platforms to power your project.",
            icon: <BsShieldLock />,
        },
        {
            title: "Graphic Designs",
            description: "We design custom graphics to strengthen your marketing and branding.",
            icon: <BsPhone />,
        },
        {
            title: "Social Media Setups",
            description: "TotalScope Agency sets up and optimizes your social media group and channels for a professional community space.",
            icon: <BsGraphUp />,
        },
        {
            title: "Website & WebApp Development",
            description: "Custom, scalable web solutions designed for performance and user experience.",
            icon: <BsCodeSlash />,
        },
        {
            title: "Mobile App Development",
            description: "High-performance iOS and Android applications built with modern frameworks.",
            icon: <BsPhone />,
        },
        {
            title: "Animation",
            description: "Engaging 2D and 3D animations that bring your brand's story to life.",
            icon: <BsPlayCircleFill />,
        },
        {
            title: "AI Automation",
            description: "Streamline your workflows with intelligent AI-powered automation solutions.",
            icon: <BsCpu />,
        }
    ];

    // Testimonials Data
    const testimonials = [
        {
            quote: "The best CM I have ever had came from this team! Always there to help and keep things running smoothly. A real community Hero",
            name: "Hannah",
            role: "CEO, FinTech Solutions",
            avatar: "/images/1.png" // Placeholder
        },
        {
            quote: "We needed a scalable solution fast. The team delivered beyond our expectations.",
            name: "Vertex",
            role: "CTO, HealthPlus",
            avatar: "/images/3.png" // Placeholder
        },
        {
            quote: "A true partner in every sense. They understood our vision and executed it perfectly.",
            name: "Anakazo",
            role: "Founder, EcoStyle",
            avatar: "/images/5.png" // Placeholder
        },
        {
            quote: "The best CM I have ever had came from this team! Always there to help and keep things running smoothly. A real community Hero",
            name: "Hannah",
            role: "CEO, FinTech Solutions",
            avatar: "/images/1.png" // Placeholder
        },
        {
            quote: "We needed a scalable solution fast. The team delivered beyond our expectations.",
            name: "Vertex",
            role: "CTO, HealthPlus",
            avatar: "/images/3.png" // Placeholder
        },
        {
            quote: "A true partner in every sense. They understood our vision and executed it perfectly.",
            name: "Anakazo",
            role: "Founder, EcoStyle",
            avatar: "/images/5.png" // Placeholder
        }
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.HeroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                        <span>Welcome to TotalScope Agency</span>
                    </div>
                    <div className={styles.heroImageContainer}>
                        <img src="/images/hero-globe.png" alt="Crystal Ball" className={styles.heroImage} />
                    </div>
                    <h1 className={styles.h1}>
                        Building Solutions That <br />
                        Move the <span className={styles.highlight}>Modern World.</span>
                    </h1>
                    <p className={styles.subtext}>
                        We help startups, enterprises, and emerging Web3 brands design, build, and scale powerful digital products
                    </p>

                    <button className={styles.button} onClick={scrollToContact}>
                        Let's Work Together <span className={styles.arrow}> <BsArrowUpRightCircle size={20} />
                        </span>
                    </button>
                </div>

                <div className={styles.globeContainer}>
                    <img src="/images/hero-globe.png" alt="Crystal Ball" className={styles.globe} />
                </div>

                {/* Decorative elements */}
                <div className={styles.star1}>★</div>
                <div className={styles.star2}>★</div>
                <div className={styles.star3}>★</div>
                <div className={styles.star4}>★</div>
                <div className={styles.star5}>★</div>
                <div className={styles.star6}>★</div>
                <div className={styles.star7}>★</div>
                <div className={styles.star8}>★</div>
                <div className={styles.star9}>★</div>
                <div className={styles.star10}>★</div>
                <div className={styles.star11}>★</div>
                <div className={styles.star12}>★</div>
                <div className={styles.star13}>★</div>
                <div className={styles.star14}>★</div>
                <div className={styles.star15}>★</div>
                <div className={styles.star16}>★</div>
            </section>

            {/* PARTNERS SECTION */}
            <div className={styles.partnersPage}>
                <main className={styles.partnersMain}>
                    {/* Header Section */}
                    <section className={styles.partnersHeader}>
                        <div className={styles.partnersBadge}>
                            <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                            <span>Our Clients</span>
                        </div>
                        <h1 className={styles.partnersTitle}>
                            We Build for <span className={styles.textBlue}>Founders,</span><br />
                            Creators, and Global Teams
                        </h1>
                    </section>

                    {/* Logos Section */}
                    <section className={`${styles.partnersLogos} hidden md:flex`}>
                        <div className={`${styles.logoGrid}`}>
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
                            <div className={`${styles.featureImageContainer} hidden md:flex`}>
                                {/* Placeholder for the person image */}
                                <img src="/images/ww.jpg" alt="Satisfied Client" className={styles.featureImage} />
                                <div className={`${styles.statBadge} ${styles.topRight}`}>
                                    <span className={styles.statNumber}>20+</span>
                                    <span className={styles.statLabel}>Satisfied Client</span>
                                </div>
                                <div className={`${styles.statBadge} ${styles.bottomLeft}`}>
                                    <span className={styles.statNumber}>20+</span>
                                    <span className={styles.statLabel}>Projects Delivered</span>
                                </div>
                            </div>

                            <div className={`${styles.featureContent}`}>
                                <h2 className="text-2xl md:text-4xl">
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

            {/* INTRO SECTION */}
            <section className={styles.introSection}>
                <div className={styles.introHeader}>
                    <div className={styles.badge}>
                        <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                        <span>What we do</span>
                    </div>
                    <h2 className={styles.whoTitle}>
                        Solutions Designed For  <span className={styles.highlight}>Impact</span>
                    </h2>
                </div>

                <div className={styles.solutionsGrid}>
                    {services.map((service, index) => {
                        const styleIndex = index % 3;
                        const glowClasses = [styles.cardPurple, styles.cardBlue, styles.cardMagenta];
                        const iconColors = [styles.purple, styles.blue, styles.magenta];

                        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            card.style.setProperty("--mouse-x", `${x}px`);
                            card.style.setProperty("--mouse-y", `${y}px`);
                        };

                        return (
                            <div
                                key={index}
                                className={`${styles.solutionCard} ${glowClasses[styleIndex]}`}
                                onMouseMove={handleMouseMove}
                            >
                                {/* Background depth icon */}
                                <div className={styles.solutionBgIcon}>
                                    {service.icon}
                                </div>

                                <div className={`${styles.solutionIconBox} ${iconColors[styleIndex]}`}>
                                    {service.icon}
                                </div>
                                <div className={styles.solutionCardContent} style={{ zIndex: 1 }}>
                                    <h3 className={styles.introCardTitle} style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
                                    <p className={styles.introCardDescription}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* TRANSITION TEXT */}
            <div className={styles.transitionSection}>
                <motion.h2
                    className={styles.transitionTitle}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.03,
                            }
                        }
                    }}
                >
                    {/* "From " */}
                    {"From ".split("").map((char, i) => (
                        <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            {char}
                        </motion.span>
                    ))}

                    {/* "design to development" */}
                    <span className={styles.glowText}>
                        {"design to development".split("").map((char, i) => (
                            <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                {char}
                            </motion.span>
                        ))}
                    </span>
                    <br />

                    {/* "to growth" */}
                    <span className={styles.glowText}>
                        {"to growth".split("").map((char, i) => (
                            <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                {char}
                            </motion.span>
                        ))}
                    </span>

                    {/* ", we handle the" */}
                    {", we handle the".split("").map((char, i) => (
                        <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            {char}
                        </motion.span>
                    ))}
                    <br />

                    {/* "entire project lifecycle." */}
                    {"entire project lifecycle.".split("").map((char, i) => (
                        <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>
            </div>
            <section className={styles.workWithUsSection}>
                <div className={styles.workHeader}>
                    <div className={`${styles.workHeaderLeft} items-center md:items-start w-full md:w-auto`}>
                        <div className={`${styles.badge} mx-auto md:mx-0`}>
                            <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                            <span>Our Portfolio</span>
                        </div>
                        <h2 className={`${styles.workTitle} text-center md:text-left`}>
                            Featured <span className={styles.highlight}>Work</span>
                        </h2>
                    </div>

                    <div className={`${styles.workHeaderRight} justify-center md:justify-end w-full md:w-auto`}>
                        <button className={`${styles.exploreButton} hidden md:flex`}>
                            Explore All Case Studies <BsArrowUpRightCircle size={18} />
                        </button>
                    </div>
                </div>

                <div className={styles.featuredCardContainer}>
                    <div key={currentIndex} className={styles.featuredCard}>
                        <div className={styles.projectImageContainer}>
                            {/* Placeholder for project image */}
                            <div style={{ width: '100%', height: '100%', background: projects[currentIndex].color, transition: 'background 0.5s ease' }}></div>
                        </div>

                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{projects[currentIndex].title}</h3>
                            <p className={styles.projectDescription}>
                                {projects[currentIndex].description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.navButtonsContainer}>
                    <button onClick={prevProject} className={styles.navButton} aria-label="Previous Project">
                        <BsArrowLeft size={24} />
                    </button>
                    <button onClick={nextProject} className={styles.navButton} aria-label="Next Project">
                        <BsArrowRight size={24} />
                    </button>
                </div>

                {/* Why Collaborate Section */}
                <div className={styles.whyCollaborateSection}>
                    <div className={styles.centerHeader}>
                        <div className={styles.badge}>
                            <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                            <span>Why Choose Us</span>
                        </div>
                        <h2 className={styles.workTitle}>
                            Why Collaborate with<br />
                            <span className={styles.highlight}>TotalScope</span>
                        </h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.collaborateFeatureCard}>
                            <div className={styles.collaborateFeatureIcon}>
                                <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={24} />
                            </div>
                            <div className={styles.collaborateFeatureContent}>
                                <h3 className={styles.collaborateFeatureTitle}>Full Creative & Technical Team</h3>
                                <p className={styles.collaborateFeatureDescription}>Designers, developers, marketers, analysts, and strategists in one place.</p>
                            </div>
                        </div>

                        <div className={styles.collaborateFeatureCard}>
                            <div className={styles.collaborateFeatureIcon}>
                                <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={24} />
                            </div>
                            <div className={styles.collaborateFeatureContent}>
                                <h3 className={styles.collaborateFeatureTitle}>End-to-End Execution</h3>
                                <p className={styles.collaborateFeatureDescription}>Strategy → Design → Development → Launch → Growth.</p>
                            </div>
                        </div>

                        <div className={styles.collaborateFeatureCard}>
                            <div className={styles.collaborateFeatureIcon}>
                                <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={24} />
                            </div>
                            <div className={styles.collaborateFeatureContent}>
                                <h3 className={styles.collaborateFeatureTitle}>Data-Driven Approach</h3>
                                <p className={styles.collaborateFeatureDescription}>Every decision backed by analytics and user insights.</p>
                            </div>
                        </div>

                        <div className={styles.collaborateFeatureCard}>
                            <div className={styles.collaborateFeatureIcon}>
                                <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={24} />
                            </div>
                            <div className={styles.collaborateFeatureContent}>
                                <h3 className={styles.collaborateFeatureTitle}>Cross-Industry Expertise</h3>
                                <p className={styles.collaborateFeatureDescription}>SaaS, fintech, e-commerce, Web3, gaming, education, and more.</p>
                            </div>
                        </div>

                        <div className={styles.collaborateFeatureCard}>
                            <div className={styles.collaborateFeatureIcon}>
                                <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={24} />
                            </div>
                            <div className={styles.collaborateFeatureContent}>
                                <h3 className={styles.collaborateFeatureTitle}>Reliable Delivery</h3>
                                <p className={styles.collaborateFeatureDescription}>On-time execution with transparent communication.</p>
                            </div>
                        </div>

                        <div className={styles.collaborateFeatureCard}>
                            <div className={styles.collaborateFeatureIcon}>
                                <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={24} />
                            </div>
                            <div className={styles.collaborateFeatureContent}>
                                <h3 className={styles.collaborateFeatureTitle}>Innovation at the Core</h3>
                                <p className={styles.collaborateFeatureDescription}>Modern, future-ready solutions that give your brand a competitive edge.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaContainer}>
                        <button className={styles.ctaButton}>
                            Let's Build Something Exceptional <BsArrowUpRightCircle size={20} />
                        </button>
                    </div>
                </div>
            </section>

            SERVICES SECTION
            {/* <section className={styles.servicesSection}>
                <div className={styles.servicesHeader}>
                    <div className={styles.badge}>
                        <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                        <span>What we do</span>
                    </div>
                    <h2 className={styles.servicesTitle}>
                        Solutions Designed for <span className={styles.highlight}>Impact</span>
                    </h2>
                </div>

                <div className={styles.servicesParent}>
                    Branding Card
                    <div className={styles.brandingCard}>
                        <img src="/images/totalscopelogo.png" alt="TotalScope Agency" className={styles.brandingLogo} />

                        Decorative stars
                        <div style={{ position: 'absolute', top: '20%', left: '10%', color: 'white', fontSize: '10px' }}>★</div>
                        <div style={{ position: 'absolute', top: '10%', right: '10%', color: 'white', fontSize: '10px' }}>★</div>
                        <div style={{ position: 'absolute', bottom: '30%', right: '20%', color: 'white', fontSize: '10px' }}>★</div>
                    </div>

                    Service Cards Container
                    <div className={styles.servicesScrollContainer}>
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <div className={styles.iconContainer}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceItemTitle}>{service.title}</h3>
                                <p className={styles.serviceItemDescription}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* WORK WITH US SECTION */}


            {/* TESTIMONIALS SECTION */}
            <section className={styles.testimonialsSection}>
                <div className={styles.testimonialsHeader}>
                    <div className={styles.badge}>
                        <MdOutlineStars fill="rgba(144, 0, 173, 1)" size={20} />
                        <span>Testimonials</span>
                    </div>
                    <h2 className={styles.testimonialsTitle}>
                        Hear from Our <span className={styles.highlight}>Clients</span>
                    </h2>
                </div>

                <div className={styles.testimonialCarouselContainer}>
                    <div className={styles.testimonialGrid}>
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div key={index} className={styles.testimonialCard}>
                                <FaQuoteLeft className={styles.quoteIcon} />
                                <p className={styles.quoteText}>"{item.quote}"</p>
                                <div className={styles.author}>
                                    {/* Avatar */}
                                    <div className={styles.avatar}>
                                        <img src={item.avatar} alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                    </div>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.authorName}>{item.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REACHOUT SECTION */}
            <section className={styles.reachoutSection} id="contact">
                <div className={styles.contentWrapper}>
                    <h2 className={styles.headline}>
                        We turn ambitious ideas into
                    </h2>
                    <h2 className={styles.subHeadline}>
                        profitable, scalable digital products.
                    </h2>
                    <p className={styles.description}>
                        Your competitive advantage starts here—with a team built for innovation.
                    </p>

                    <form className={styles.formContainer}>
                        <div className={styles.formInputGroup}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input type="text" id="name" className={styles.formInput} placeholder="Your Name" />
                        </div>

                        <div className={styles.formInputGroup}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input type="email" id="email" className={styles.formInput} placeholder="your@email.com" />
                        </div>

                        <div className={styles.formInputGroup}>
                            <label className={styles.label} htmlFor="message">Project Idea</label>
                            <textarea id="message" className={styles.formTextarea} placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Let's Talk <BsArrowUpRightCircle size={18} />
                        </button>
                    </form>
                </div>



                {/* Decorative Stars */}
                <div style={{ position: 'absolute', top: '20%', left: '10%', color: '#4400ff', fontSize: '10px' }}>★</div>
                <div style={{ position: 'absolute', top: '15%', right: '15%', color: '#4400ff', fontSize: '10px' }}>★</div>
                <div style={{ position: 'absolute', bottom: '40%', left: '20%', color: '#4400ff', fontSize: '10px' }}>★</div>
                <div style={{ position: 'absolute', bottom: '30%', right: '10%', color: '#4400ff', fontSize: '10px' }}>★</div>
            </section>

            <Footer />

        </div>
    );
};

export default HomePage;
