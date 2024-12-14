import React from 'react';
import { ReactSocialLink } from '../shared';
import { images } from '../../constants/images';
import styles from './Footer.module.css';

const navigation = {
  pages: [
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
      
      <div className="section-container pt-4 md:pt-16 pb-4 md:pb-8 px-8 md:px-6 lg:px-16">
        {/* First Row: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 mb-12">
          {/* Left Column: Logo + CTA + Social */}
          <div className="space-y-8 flex flex-col items-center md:items-start md:pl-8 lg:pl-16">
            {/* Logo */}
            <div className="-mt-4 md:mt-0">
              <img
                src={images.logo}
                alt="Logo"
                className="h-20 w-auto"
              />
            </div>

            {/* CTA Text */}
            <p className="text-base md:text-lg text-[#666666] text-center md:text-left">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat at{' '}
              <a 
                href="mailto:phinneyisamazing@gmail.com" 
                className="text-primary hover:text-accent transition-colors"
              >
                phinneyisamazing@gmail.com
              </a>
            </p>

            {/* Social Links */}
            <div className="flex gap-8 justify-center md:justify-start">
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

          {/* Right Column: Navigation Links */}
          <div className="md:pl-12 lg:pl-40 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-8 text-[#333333] hidden md:block">Quick Links</h3>
            <div className="flex flex-row flex-wrap md:flex-col gap-6 md:gap-4 justify-center">
              {navigation.pages.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="text-[#666666] hover:text-accent transition-colors"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-[#666666] text-sm">
          &copy; {new Date().getFullYear()} Wanzhen Li. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 