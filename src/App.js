import React from 'react';
import NewHero from './components/sections/NewHero';
import AboutMe from './components/sections/AboutMe';
import Education from './components/sections/Education';
import Experiences from './components/sections/Experiences';
import Header from './components/sections/Header';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="section-container">
          <NewHero/>
          <AboutMe />
          <Skills />
          <Education />
          <Experiences />
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App; 