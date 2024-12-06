import React from 'react';
import { ReactSocialLink } from '../shared';
import { images } from '../../constants/images';
import styles from './NewHero.module.css';

export default function NewHero({ title, subtitle, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-14">
      {/* Background */}
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary/5 ring-1 ring-primary/10"
        aria-hidden="true"
      />

      <div className="section-container py-32 sm:py-40">
        <div className="grid grid-cols-1 gap-y-12 
          md:grid-cols-[1.2fr_1fr] md:gap-x-8 md:gap-y-0
          lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-x-12 md:items-start">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img src={images.icons.handWave} alt="" className="h-8" />
              <span className="text-lg">Hey, My name is</span>
            </div>
            <h1 className={styles.heroTitle}>{title}</h1>
          </div>

          {/* Middle Column - Image */}
          <div className={styles.imageWrapper}>
            <img 
              src={images.hero.mainImage}
              alt="Profile"
              className={styles.heroImage}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full text-center md:text-left">
            <div className="space-y-6">
              <div>
                <p className="text-xl mb-2">I am a</p>
                <h2 className="text-5xl font-serif font-bold">
                  Web <span className={styles.highlightedText}>developer</span>
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-secondary">{subtitle}</p>
                <p className="text-lg">
                  Passionate about crafting elegant web solutions and turning ideas into interactive experiences.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 