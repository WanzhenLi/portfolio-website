import React, { useState } from 'react';
import { ReactNavItem, Button } from '../shared/wrappers';
import { images } from '../../constants/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-transparent z-50 py-5">
      <div className="section-container">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            <img src={images.logo} alt="Portfolio" className="h-10" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <ReactNavItem href="#hero" label="Home" active={true} />
            <ReactNavItem href="#about" label="About Me" />
            <ReactNavItem href="#work" label="Work" />
            <ReactNavItem href="#experience" label="Experience" />
          </nav>

          <div className="hidden md:block">
            <Button
              variant="nav"
              label="Let's talk"
              onClick={() => console.log('Contact clicked')}
            />
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
              <nav className="flex flex-col py-4">
                <ReactNavItem href="#hero" label="Home" active={true} />
                <ReactNavItem href="#about" label="About Me" />
                <ReactNavItem href="#work" label="Work" />
                <ReactNavItem href="#experience" label="Experience" />
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 