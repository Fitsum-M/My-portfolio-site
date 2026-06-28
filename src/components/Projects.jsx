import React from 'react';
import { ExternalLink, Info, Photos } from './Icons';

const Projects = ({ onSelectProject, onOpenScreenshots }) => {
  const projects = [
    {
      id: 'bvsm',
      title: 'BVSM - Verification Management',
      badge: 'Live Enterprise System',
      desc: 'Broker & Background Verification Management System featuring automated client invoicing, dynamic mailers, policy ledgers, and RFQ modules.',
      img: '/assets/images/bvsm.jpg',
      tech: ['Laravel', 'MySQL', 'Blade', 'Azure', 'Tailwind'],
      hasScreenshots: true,
      role: 'Full-Stack Developer at Excelloite — Built invoice generation engines, dynamic mailer dispatch configurations, and RFQ modules.'
    },
    {
      id: 'anekaa',
      title: 'Anekaa Care Foundation CRM',
      badge: 'Private Client CRM',
      desc: 'Donor & fundraiser management system powering campaign scheduling, donor KYC document verification, and tax receipt generation.',
      img: '/assets/images/anekaa.jpg',
      tech: ['Laravel', 'MySQL', 'Blade', 'Tailwind', 'Hostinger'],
      hasScreenshots: false,
      role: 'Full-Stack Developer — Architected donor database schemas, implemented secure KYC uploads, integrated automated campaign schedulers, and managed cloud server deployment.'
    },
    {
      id: 'adarsh',
      title: 'Adarsh Agritech ERP',
      badge: 'Enterprise Production',
      desc: 'Multi-company agricultural trade management system tracking order state lifecycles and domestic/export trade workflow interdependencies.',
      img: '/assets/images/adarsh.jpg',
      tech: ['Laravel', 'MySQL', 'REST APIs'],
      hasScreenshots: false,
      role: 'Developer — Developed complex trade state machines, module interdependency validation algorithms, and optimized commodity queries.'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Enterprise platforms and custom management systems designed for scale.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem' }}>
          {projects.map((proj) => (
            <div key={proj.id} className="project-card-wrapper">
              <div className="project-card-inner">
                <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'rgba(7, 10, 18, 0.85)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)', color: 'var(--neon-cyan)',
                    padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase'
                  }}>
                    {proj.badge}
                  </span>
                </div>

                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>{proj.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '1.5rem', flexGrow: 1 }}>{proj.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} className="tech-tag" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)', padding: '0.25rem 0.7rem', borderRadius: 6, fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => onSelectProject(proj)}
                      style={{
                        background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)', padding: '0.65rem 1.2rem', borderRadius: 10, fontSize: '0.9rem', fontWeight: 600,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'var(--transition)'
                      }}
                    >
                      <Info size={16} /> View Details
                    </button>

                    {proj.hasScreenshots && (
                      <button
                        onClick={onOpenScreenshots}
                        style={{
                          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2))',
                          border: '1px solid rgba(6, 182, 212, 0.4)',
                          color: 'var(--neon-cyan)', padding: '0.65rem 1.2rem', borderRadius: 10, fontSize: '0.9rem', fontWeight: 600,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'var(--transition)'
                        }}
                      >
                        <Photos size={16} /> Demo Pictures (5)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
