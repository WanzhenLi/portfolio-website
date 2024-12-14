import React from 'react';
import { ReactSocialLink } from '../shared';
import { images } from '../../constants/images';
import styles from './Footer.module.css';

const navigation = {
  main: [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ]
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Divider */}
      <div className={styles.divider}></div>
      
      <div className="section-container py-0 sm:py-12">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6" aria-label="Footer">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#666666] hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-8">
          <ReactSocialLink 
            href="https://linkedin.com/in/wzli-bu"
            icon={images.icons.social.linkedin}
          />
          <ReactSocialLink 
            href="https://github.com/WanzhenLi"
            icon={images.icons.social.github}
          />
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-sm text-[#666666]">
          &copy; {new Date().getFullYear()} Wanzhen Li. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 