import React from 'react';
import { Award, Layers, Cpu, Server } from './Icons';

const About = () => {
  const stats = [
    { icon: Award, value: 'Full-Stack', label: 'Production Systems', color: 'var(--accent)', compact: true },
    { icon: Layers, value: 'CRM · ERP · BVS', label: 'Enterprise Platforms', color: 'var(--accent-secondary)', compact: true },
    { icon: Cpu, value: 'REST', label: 'API Engineering', color: 'var(--neon-purple)' },
    { icon: Server, value: 'Cloud', label: 'Azure & Linux Host', color: 'var(--accent-emerald)' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">Delivering enterprise solutions and robust full-stack software.</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a results-driven <strong style={{ color: 'var(--text-main)' }}>Full-Stack Developer</strong> currently engineering web applications at <strong style={{ color: 'var(--text-main)' }}>Excelloite</strong>, a software development company. I specialize in building high-concurrency backend systems, reactive web interfaces, and automated business workflows.
            </p>
            <div className="about-quote">
              Passionate about clean architecture, optimized database queries, and creating intuitive digital platforms that drive business value.
            </div>
            <p>
              My expertise spans background verification management systems, donor CRMs, and agricultural trade ERP platforms.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map(({ icon: Icon, value, label, color, compact }) => (
              <div key={label} className="glass-card stat-card">
                <Icon size={30} color={color} style={{ margin: '0 auto' }} />
                <div className={`stat-value${compact ? ' stat-value-compact' : ''}`} style={{ color }}>{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
