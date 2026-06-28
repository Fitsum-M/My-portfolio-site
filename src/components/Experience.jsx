import React from 'react';
import { Briefcase, Calendar, Building2 } from './Icons';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">Engineering systems and delivering enterprise solutions.</p>
        </div>

        <div style={{ maxWidth: 850, margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '2.8rem', position: 'relative', borderLeft: '4px solid var(--neon-indigo)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>Full-Stack Developer</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-cyan)', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  <Building2 size={18} /> Excelloite Software
                </div>
              </div>
              <span style={{ background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--neon-indigo)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} /> Present Role
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Currently working as a core Full-Stack Developer at Excelloite, an established software company. Leading backend architectural development, API design, database indexing, and client-facing web application implementations.
            </p>

            <ul style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.98rem', listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--neon-cyan)', marginTop: '0.6rem', flexShrink: 0 }}></span>
                <span>Architected multi-tenant verification systems with automated PDF invoice generation engines and RFQ management tools.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--neon-indigo)', marginTop: '0.6rem', flexShrink: 0 }}></span>
                <span>Engineered NGO donor management CRM software featuring document KYC uploads, automated campaign schedulers, and Hostinger cloud server setups.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--neon-purple)', marginTop: '0.6rem', flexShrink: 0 }}></span>
                <span>Designed state machines for agricultural trade ERP platforms to manage trade ID lifecycles and cross-module validations.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
