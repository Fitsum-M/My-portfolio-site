import React from 'react';
import { Award, Layers, Cpu, Server } from './Icons';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">Delivering enterprise solutions and robust full-stack software.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div style={{ fontSize: '1.08rem', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              I am a results-driven <strong>Full-Stack Developer</strong> currently engineering web applications at <strong>Excelloite</strong>, a dynamic software development company. I specialize in building high-concurrency backend systems, reactive web interfaces, and automated business workflows.
            </p>
            <div style={{
              background: 'rgba(99, 102, 241, 0.08)', borderLeft: '4px solid var(--neon-indigo)',
              padding: '1.4rem', borderRadius: '0 16px 16px 0', margin: '1.8rem 0', color: 'var(--text-main)', fontWeight: 500
            }}>
              "Passionate about clean architecture, optimized database queries, and creating intuitive digital platforms that drive business value."
            </div>
            <p>
              My expertise spans background verification management systems, donor CRMs, and agricultural trade ERP platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <Award size={36} color="var(--neon-cyan)" style={{ margin: '0 auto 0.8rem auto' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--neon-cyan)', lineHeight: 1 }}>3+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>Production Systems</div>
            </div>

            <div className="glass-card" style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <Layers size={36} color="var(--neon-indigo)" style={{ margin: '0 auto 0.8rem auto' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--neon-indigo)', lineHeight: 1 }}>100%</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>Client Delivery Rate</div>
            </div>

            <div className="glass-card" style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <Cpu size={36} color="var(--neon-rose)" style={{ margin: '0 auto 0.8rem auto' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--neon-rose)', lineHeight: 1 }}>REST</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>API Engineering</div>
            </div>

            <div className="glass-card" style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <Server size={36} color="var(--neon-purple)" style={{ margin: '0 auto 0.8rem auto' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--neon-purple)', lineHeight: 1 }}>Cloud</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>Azure & Linux Host</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
