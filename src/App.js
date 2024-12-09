import React from 'react';
import NewHero from './components/sections/NewHero';
import AboutMe from './components/sections/AboutMe';
import Education from './components/sections/Education';
import Experiences from './components/sections/Experiences';
import Header from './components/sections/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewHero/>
        <AboutMe />
        <Education />
        <Experiences />
      </main>
    </div>
  );
}

export default App; 