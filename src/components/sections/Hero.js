import React from 'react';
import { images } from '../../constants/images';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, children }) => {
  return (
    <section className="pt-[200px] pb-[100px] text-primary overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-[1fr_0.5fr_1fr] gap-[50px] items-start">
          {/* Left Column - Name */}
          <div className={styles.heroSplitContentLeft}>
            <div className="flex items-center gap-3 mb-6">
              <img src={images.icons.handWave} alt="" className="h-8" />
              <span className="text-lg">Hey, My name is</span>
            </div>
            <h1 className="text-[80px] leading-none font-serif font-bold text-primary lg:text-[80px]">
              {title}
            </h1>
          </div>

          {/* Middle Column - Image */}
          <div className={`${styles.heroSplitImageWrap} -mb-[130px]`}>
            <img 
              src={images.hero.mainImage} 
              alt="Profile" 
              className={styles.heroImage}
            />
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div>
                <p className="text-xl mb-2">I am a</p>
                <h2 className="text-[52px] font-serif font-bold">
                  Web <span className="relative inline-block">
                    developer
                    <span className="absolute left-0 right-0 bottom-0 h-3 bg-accent/30 -z-10 translate-y-2"></span>
                  </span>
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-secondary">{subtitle}</p>
                <p className="text-lg">
                  Bringing together emotion and form creating something that looks good.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className={styles.heroSocialWrap}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 