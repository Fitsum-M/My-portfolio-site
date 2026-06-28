import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Send } from './Icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      padding: scrolled ? '0.8rem 0' : '1.3rem 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(7, 10, 18, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }}>
          <Code2 size={28} color="var(--neon-cyan)" /> Fitsum <span style={{ color: 'var(--neon-indigo)' }}>Mulugeta</span>
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '2.2rem', alignItems: 'center', listStyle: 'none' }}>
          <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }}>About</a>
          <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }}>Skills</a>
          <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }}>Projects</a>
          <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }}>Experience</a>
          <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }}>Contact</a>
        </nav>

        <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
          <Send size={16} /> Let's Connect
        </a>
      </div>
    </header>
  );
};

export default Navbar;
