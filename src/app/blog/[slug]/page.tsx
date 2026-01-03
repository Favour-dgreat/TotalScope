"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../Blog.module.css';

const postData = {
    "totalscope-anniversary-one": {
        title: "TotalScope Agency at One: A Year of Growth, Innovation & New Beginnings",
        date: "January 2026",
        image: "/images/totalscopebanner.png",
        content: (
            <>
                <p>
                    As TotalScope Agency marks its first anniversary, we celebrate a year defined by vision, evolution, and the relentless pursuit of excellence. What began as an ambitious service-focused agency has grown into a dynamic force in the global tech and Web3 ecosystem - driven by a commitment to delivering value, building solutions, and empowering brands to scale.
                </p>
                <p>
                    Today, we honor our journey, appreciate the partners who believed in us, and proudly unveil the exciting new direction for TotalScope.
                </p>

                <h2>Looking Back: A Year of Milestones</h2>
                <p>
                    Over the past 12 months, TotalScope has worked alongside remarkable brands, founders, and communities across the world. From grassroots blockchain startups to well-established Web3 organizations, we have helped teams shape, communicate, and scale their products and ecosystems.
                </p>

                <ul>
                    <li><strong>Community Development & Moderation:</strong> We supported various blockchain projects in establishing authentic, active, and well-governed communities.</li>
                    <li><strong>Blockchain Development & Technical Support:</strong> Our developers contributed to the architecture and deployment of blockchain solutions enabling secure, scalable innovation.</li>
                    <li><strong>KOL Partnerships & Growth Campaigns:</strong> We executed cross-platform influencer collaborations and delivered performance-driven exposure.</li>
                    <li><strong>Pro-Raiding & Targeted Engagement:</strong> Our team amplified clients' visibility during key events and milestone campaigns.</li>
                </ul>

                <h2>The Next Phase: TotalScope Evolves</h2>
                <p>
                    While our service-for-hire model has helped us reach this point, the future calls for more. Today, we proudly announce the transition of TotalScope Agency into a <strong>full-fledged Technology, Blockchain, and Web3 Company</strong>.
                </p>

                <p>This evolution means:</p>
                <ol>
                    <li><strong>More Innovation, Less Limitation:</strong> Moving beyond traditional agency operations into a product-driven future.</li>
                    <li><strong>Technology at Our Core:</strong> From blockchain architecture to AI-powered systems - we are building, not just supporting.</li>
                    <li><strong>A Stronger Commitment to Africa:</strong> Bridging the gap for founders with scalable, future-proof tech.</li>
                </ol>

                <h2>Gratitude to Our Clients & Partners</h2>
                <p>
                    Our journey would not be possible without every individual and organization that trusted us. Your belief in TotalScope has fueled this transformation.
                </p>

                <blockquote>
                    "TotalScope is stepping into a future where we not only serve - we build, we create, and we drive the next wave of Web3 and technology evolution."
                </blockquote>

                <p>Thank you for being part of our story. Here’s to Year Two - smarter, stronger, and more revolutionary. Welcome to the new TotalScope.</p>
            </>
        )
    }
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const post = postData[slug as keyof typeof postData];

    if (!post) {
        return <div className={styles.postPage}>Post not found</div>;
    }

    return (
        <div className={styles.postPage}>
            <Navbar />

            <article className={styles.container}>
                <header className={styles.postHeader}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.postMeta}
                    >
                        <span className={styles.postDate}>{post.date}</span>
                    </motion.div>
                    <motion.h1
                        className={styles.fullTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {post.title}
                    </motion.h1>
                </header>

                <motion.div
                    className={styles.imageBanner}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Image src={post.image} alt={post.title} width={1200} height={600} />
                </motion.div>

                <motion.div
                    className={styles.postContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {post.content}
                </motion.div>
            </article>

            <Footer />
        </div>
    );
}
