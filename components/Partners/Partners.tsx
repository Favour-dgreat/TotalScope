// components/Partners.tsx
"use client";
import styles from './Partners.module.css';
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Partners = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.partners} id="our-partners">
      <h2>Our Partners</h2>

      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Working alongside Ecosystem Experts</h3>
          <p>
            We ensure 100% satisfaction in service delivery, crafting the
            perfect solution for your web3 project.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <video
            ref={videoRef}
            src="/images/Siteslideshow.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
          <div className={styles.playButton} onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
