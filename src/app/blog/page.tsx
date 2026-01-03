"use client";
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import styles from './Blog.module.css';

const posts = [
    {
        slug: "totalscope-anniversary-one",
        date: "JANUARY 2026",
        title: "TotalScope Agency at One: A Year of Growth, Innovation & New Beginnings",
        excerpt: "As TotalScope Agency marks its first anniversary, we celebrate a year defined by vision, evolution, and the relentless pursuit of excellence...",
    }
];

export default function BlogPage() {
    return (
        <div className={styles.blogPage}>
            <Navbar />

            <main className={styles.container}>
                <header className={styles.header}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        TotalScope <span className={styles.highlight}>Insights</span>
                    </motion.h1>
                </header>

                <div className={styles.postsGrid}>
                    {posts.map((post, index) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <motion.article
                                className={styles.blogCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className={styles.postDate}>{post.date}</span>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <div className={styles.readMore}>
                                    <span>Read Full Story</span>
                                    <BsArrowRight />
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
