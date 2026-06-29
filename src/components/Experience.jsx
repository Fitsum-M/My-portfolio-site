import React from 'react';
import { Calendar, Building2 } from './Icons';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">Engineering systems and delivering enterprise solutions.</p>
        </div>

        <div className="glass-card experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-role">Full-Stack Developer</h3>
              <div className="experience-company">
                <Building2 size={17} /> Excelloite Software
              </div>
            </div>
            <span className="experience-badge">
              <Calendar size={13} /> Present Role
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Currently working as a core Full-Stack Developer at Excelloite. Leading backend architectural development, API design, database indexing, and client-facing web application implementations.
          </p>

          <ul className="experience-list">
            <li>Architected multi-tenant verification systems with automated PDF invoice generation engines and RFQ management tools.</li>
            <li>Engineered NGO donor management CRM software featuring document KYC uploads, automated campaign schedulers, and Hostinger cloud server setups.</li>
            <li>Designed state machines for agricultural trade ERP platforms to manage trade ID lifecycles and cross-module validations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
