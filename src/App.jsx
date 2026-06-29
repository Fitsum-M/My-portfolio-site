import React, { useState } from 'react';
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
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  const handleShowToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 5000);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowScreenshots(false);
  };

  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onSelectProject={setSelectedProject} />
      <Experience />
      <Contact onShowToast={handleShowToast} />
      <Footer />
      <Modal
        project={selectedProject}
        onClose={handleCloseModal}
        onViewScreenshots={() => setShowScreenshots(true)}
      />
      <ScreenshotModal
        isOpen={showScreenshots}
        projectId={selectedProject?.id}
        onClose={() => setShowScreenshots(false)}
      />
      <Toast show={toast.show} message={toast.message} />
    </div>
  );
}

export default App;
