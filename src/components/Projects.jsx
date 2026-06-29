import React from 'react';
import { Info } from './Icons';

const Projects = ({ onSelectProject }) => {
  const projects = [
    {
      id: 'bvsm',
      title: 'BVSM — Verification Management',
      badge: 'Live Enterprise System',
      desc: 'Broker & background verification platform with automated invoicing, dynamic mailers, RFQ workflows, and policy ledger management.',
      img: '/assets/images/bvsm1.png',
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
          <p className="section-desc">Enterprise platforms and custom management systems built for real-world scale.</p>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card-wrapper">
              <div className="project-card-inner">
                <div className="project-card-image">
                  <img src={proj.img} alt={proj.title} loading="lazy" />
                  <span className="project-badge">{proj.badge}</span>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button className="btn-ghost" onClick={() => onSelectProject(proj)}>
                      <Info size={15} /> View Details
                    </button>
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
