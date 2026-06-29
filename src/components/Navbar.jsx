import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Send } from './Icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo">
            <Code2 size={26} color="var(--accent)" />
            Fitsum <span>Mulugeta</span>
          </a>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary nav-cta nav-cta-desktop">
            <Send size={15} /> Let's Connect
          </a>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobile} aria-label="Close menu">
          <X size={22} />
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>{link.label}</a>
        ))}
        <a href="#contact" className="btn-primary" onClick={closeMobile}>
          <Send size={16} /> Let's Connect
        </a>
      </nav>
    </>
  );
};

export default Navbar;
