import React, { useState } from 'react';
import { Database, Code, Server, Terminal, ShieldCheck, Cpu, GitBranch, Cloud } from './Icons';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'Laravel', category: 'backend', icon: Server },
    { name: 'PHP', category: 'backend', icon: Code },
    { name: 'MySQL', category: 'backend', icon: Database },
    { name: 'REST APIs', category: 'backend', icon: Cpu },

    { name: 'React', category: 'frontend', icon: Code },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: Terminal },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: ShieldCheck },
    { name: 'Tailwind CSS', category: 'frontend', icon: Code },

    { name: 'Git & GitHub', category: 'devops', icon: GitBranch },
    { name: 'Linux & Hostinger', category: 'devops', icon: Server },
    { name: 'Azure Cloud', category: 'devops', icon: Cloud },
  ];

  const tabLabels = {
    all: 'All Skills',
    backend: 'Backend & DB',
    frontend: 'Frontend',
    devops: 'DevOps & Cloud',
  };

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">Technologies I use to build and ship production-grade systems.</p>
        </div>

        <div className="skill-tabs">
          {['all', 'backend', 'frontend', 'devops'].map((tab) => (
            <button
              key={tab}
              className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="glass-card skill-card" data-category={skill.category}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'var(--accent-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700 }}>
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
