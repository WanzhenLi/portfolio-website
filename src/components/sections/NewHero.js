import React from 'react';
import { ReactSocialLink } from '../shared';
import { images } from '../../constants/images';
import styles from './NewHero.module.css';
import { motion } from 'framer-motion';

export default function NewHero() {
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0 
    }
  };

  return (
    <section className="relative isolate overflow-hidden pt-14" id="hero">
      {/* Background */}
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary/5 ring-1 ring-primary/10"
        aria-hidden="true"
      />

      <div className="section-container py-20 sm:py-40">
        <div className="grid grid-cols-1 gap-y-12 
          md:grid-cols-[1.2fr_1fr] md:gap-x-8 md:gap-y-0
          lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-x-12 md:items-start">
          {/* Left Column */}
          <motion.div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <img src={images.icons.handWave} alt="" className="h-8" />
              <span className="text-lg">Hey, My name is</span>
            </motion.div>
            <motion.h1 
              className={styles.heroTitle}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Wanzhen
            </motion.h1>
          </motion.div>

          {/* Middle Column - Image */}
          <div className={styles.imageWrapper}>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 1.1, borderRadius: '100%' }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                borderRadius: '100px'
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut"
              }}
            >
              <img 
                src={images.hero.mainImage}
                alt="Profile"
                className={styles.heroImage}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end h-full text-center md:text-left">
            <div className="space-y-6">
              <div>
                <p className="sm:text-2xl text-lg mb-2 text-secondary">I am a</p>
                <h2 className="sm:text-6xl text-4xl font-serif font-bold">
                   <span className={styles.highlightedText}>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute left-0 top-[80%] h-[0.6em] w-full fill-accent-light"
                      preserveAspectRatio="none"
                    >
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                    </svg>
                    <span className="relative">Software Engineer</span>
                  </span>
                </h2>
              </div>
              <div className="space-y-4">
                {/* TODO: WEB DEVELOPER SHOULD BE REVISITED! */}
                <p className="sm:text-2xl text-lg text-secondary">web developer, data scientist, AI engineer...</p>
                <p className="sm:text-2xl text-lg text-secondary">
                Passionate about transforming ideas into impactful web and AI solutions. Fueled by curiosity and a love for solving complex challenges.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start">
              <ReactSocialLink 
                href="https://linkedin.com/in/wzli-bu"
                icon={images.icons.social.linkedin}
              />
              <ReactSocialLink 
                href="https://github.com/WanzhenLi"
                icon={images.icons.social.github}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 