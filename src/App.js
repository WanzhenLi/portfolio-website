import React from 'react';
import { ReactButton, ReactSocialLink } from './components/shared';
import Hero from './components/sections/Hero';
import Header from './components/sections/Header';
import { images } from './constants/images';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="section-container">
          <Hero
            title="Wanzhen"
            subtitle="and web designer and I'm very passionate and dedicated to my work with 5 years."
          >
            <div slot="social-links" style={{ display: 'flex', gap: '50px' }}>
              <ReactSocialLink 
                href="https://linkedin.com"
                icon={images.icons.social.linkedin}
              />
              <ReactSocialLink 
                href="https://instagram.com"
                icon={images.icons.social.instagram}
              />
              <ReactSocialLink 
                href="https://facebook.com"
                icon={images.icons.social.facebook}
              />
              <ReactSocialLink 
                href="https://twitter.com"
                icon={images.icons.social.twitter}
              />
            </div>
          </Hero>
        </div>
      </main>
    </div>
  );
}

export default App; 