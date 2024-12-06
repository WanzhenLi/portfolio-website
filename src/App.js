import React from 'react';
import { ReactSocialLink } from './components/shared';
import NewHero from './components/sections/NewHero';
import Header from './components/sections/Header';
import { images } from './constants/images';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="section-container">
          {/*TODO - FIX: RENAME NEWHERO TO HEROSECTION*/}
          <NewHero
            title="Wanzhen"
            subtitle="and data analyst."
          >
            {/*TODO - FIX: MOVE THE SOCIALLINK COMPONENTS INSIDE HEROSECTION*/}
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
          </NewHero>
        </div>
      </main>
    </div>
  );
}

export default App; 