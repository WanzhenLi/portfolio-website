import React from 'react';
import { Button, ReactHero, ReactSocialLink } from './components/shared/wrappers';
import Header from './components/layout/Header';
import { images } from './constants/images';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container-custom">
          <ReactHero
            title="Wanzhen"
            subtitle="and web designer and I'm very passionate and dedicated to my work with 5 years."
          >
            <div slot="social-links" style={{ display: 'flex', gap: '50px' }}>
              <ReactSocialLink 
                href="https://linkedin.com"
                icon={images.social.linkedin}
              />
              <ReactSocialLink 
                href="https://instagram.com"
                icon={images.social.instagram}
              />
              <ReactSocialLink 
                href="https://facebook.com"
                icon={images.social.facebook}
              />
              <ReactSocialLink 
                href="https://twitter.com"
                icon={images.social.twitter}
              />
            </div>
          </ReactHero>
        </div>
      </main>
    </div>
  );
}

export default App; 