import React, { useState } from 'react';
import { Mail, Briefcase, Code2, Send, Github, Linkedin } from './Icons';

const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
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

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3.5rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.8rem' }}>Contact Information</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.8rem' }}>
              <div style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-indigo)' }}>
                <Mail size={22} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-sub)' }}>Email Direct</label>
                <a href="mailto:fitsummulugeta22@gmail.com" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', textDecoration: 'none' }}>fitsummulugeta22@gmail.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.8rem' }}>
              <div style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-cyan)' }}>
                <Briefcase size={22} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-sub)' }}>Current Position</label>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>Full-Stack Developer @ Excelloite</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2.2rem' }}>
              <div style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(168, 85, 247, 0.12)', border: '1px solid rgba(168, 85, 247, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-purple)' }}>
                <Code2 size={22} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-sub)' }}>Primary Tech Stack</label>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>Laravel, React, PHP, MySQL</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: 'var(--text-sub)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>Connect Socially</label>
              {/* ONLY GitHub and LinkedIn icons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/Fitsum-M" target="_blank" rel="noreferrer" style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', transition: '0.2s' }}>
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/fitsum-mulugeta-417286395" target="_blank" rel="noreferrer" style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', transition: '0.2s' }}>
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)' }}>Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: 10, padding: '0.85rem 1.2rem', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)' }}>Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: 10, padding: '0.85rem 1.2rem', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '1.8rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)' }}>Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: 10, padding: '0.85rem 1.2rem', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
