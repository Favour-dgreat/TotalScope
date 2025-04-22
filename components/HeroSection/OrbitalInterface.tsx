// components/OrbitalInterface.tsx
import React from 'react';
import Image from 'next/image';
import styles from './OrbitalInterface.module.css';
import { style } from 'framer-motion/client';

interface OrbitalIconProps {
  src: string;
  alt: string;
  position: number; 
  orbit: number; 
  onClick?: () => void;
}

const OrbitalIcon: React.FC<OrbitalIconProps> = ({ src, alt, position, orbit,  }) => {
  const angle = position * (Math.PI / 180);
   const orbitRadii = {
    1: 150, 
    2: 250, 
    3: 350, 
  };
  
  const orbitRadius = orbitRadii[orbit as keyof typeof orbitRadii];
  const top = 50 - Math.cos(angle) * orbitRadius / 10;
  const left = 50 + Math.sin(angle) * orbitRadius / 10;
  const orbitClass = styles[`orbit${orbit}`]; 

  return (
    <div 
      className={`${styles.orbitalIcon}`} 
      style={{ 
        top: `${top}%`, 
        left: `${left}%`,
      }}
      data-orbit={orbit}
     
    >
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );
};

const OrbitalInterface: React.FC = () => {
  const icons = [
    { src: "/images/Frame106.png", alt: 'Instagram', position: 270, orbit: 1 },

    { src: '/images/Frame101.png', alt: 'Link',  position: 180, orbit: 2 },
    { src: '/images/Frame102.png', alt: 'People', position: 90, orbit: 2 },
    { src: '/images/Frame103.png', alt: 'Copy',position: 360, orbit: 2 },

    { src: '/images/Frame104.png', alt: 'Chat', position: 130, orbit: 3, },
    { src: '/images/Frame105.png', alt: 'Users', position: 40, orbit: 3 },
    { src: '/images/Frame107.png', alt: 'Document', position: 220, orbit: 3 },
    { src: '/images/Frame39.png', alt: 'Group', position: 300, orbit: 3 },
  ];

 

  return (
    <div className={styles.orbitalContainer}>
      {/* Orbit Rings */}
      <div className={`${styles.orbitRing} ${styles.firstOrbit}`}></div>
      <div className={`${styles.orbitRing} ${styles.secondOrbit}`}></div>
      <div className={`${styles.orbitRing} ${styles.thirdOrbit}`}></div>
      
      {/* Center Purple Sphere */}
      <div className={styles.centerSphere}>
        <Image src="/images/hero-globe.png" alt="Central Sphere" fill />
      </div>
      
      {/* Orbital Icons */}
      {icons.map((icon, index) => (
        <OrbitalIcon
          key={index}
          src={icon.src}
          alt={icon.alt}
          position={icon.position}
          orbit={icon.orbit}
        />
      ))}
    </div>
  );
};

export default OrbitalInterface;