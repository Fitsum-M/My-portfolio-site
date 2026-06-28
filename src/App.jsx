import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ScreenshotModal from './components/ScreenshotModal';
import Toast from './components/Toast';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScreenshotsOpen, setIsScreenshotsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="portfolio-app">
      <Navbar isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects 
        onSelectProject={setSelectedProject} 
        onOpenScreenshots={() => setIsScreenshotsOpen(true)} 
      />
      <Experience />
      <Contact onShowToast={handleShowToast} />
      <Footer />
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ScreenshotModal isOpen={isScreenshotsOpen} onClose={() => setIsScreenshotsOpen(false)} />
      <Toast show={showToast} />
    </div>
  );
}

export default App;
