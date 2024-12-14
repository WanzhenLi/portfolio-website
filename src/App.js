import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHero from './components/sections/NewHero';
import AboutMe from './components/sections/AboutMe';
import Education from './components/sections/Education';
import Experiences from './components/sections/Experiences';
import Header from './components/sections/Header';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import ProjectDetail from './components/pages/ProjectDetail';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 