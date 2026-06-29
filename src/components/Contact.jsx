import React, { useState } from 'react';
import { Mail, Briefcase, Code2, Send, Github, Linkedin } from './Icons';

const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:fitsummulugeta22@gmail.com?subject=${subject}&body=${body}`;
    onShowToast();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Talk</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">Have a project, opportunity, or architectural inquiry? Send me a message.</p>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Contact Information
            </h3>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-sub)' }}>Email</label>
                <a href="mailto:fitsummulugeta22@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
                  fitsummulugeta22@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{ color: 'var(--accent-secondary)', background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.25)' }}>
                <Briefcase size={20} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-sub)' }}>Current Position</label>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Full-Stack Developer @ Excelloite</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{ color: 'var(--neon-purple)', background: 'rgba(167, 139, 250, 0.1)', borderColor: 'rgba(167, 139, 250, 0.25)' }}>
                <Code2 size={20} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-sub)' }}>Primary Stack</label>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Laravel, React, PHP, MySQL</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: 'var(--text-sub)', fontSize: '0.8rem', marginBottom: '0.65rem' }}>Connect</label>
              <div className="social-links">
                <a href="https://github.com/Fitsum-M" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/fitsum-mulugeta-417286395" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  required
                  rows={4}
                  className="form-input"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
