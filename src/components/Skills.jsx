import React, { useState } from 'react';
import { Database, Code, Server, Terminal, ShieldCheck, Cpu, GitBranch, Cloud } from './Icons';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'Laravel', category: 'backend', level: 95, icon: Server, color: '#f43f5e' },
    { name: 'PHP', category: 'backend', level: 90, icon: Code, color: '#f43f5e' },
    { name: 'MySQL', category: 'backend', level: 88, icon: Database, color: '#f43f5e' },
    { name: 'REST APIs', category: 'backend', level: 92, icon: Cpu, color: '#f43f5e' },

    { name: 'React', category: 'frontend', level: 85, icon: Code, color: '#06b6d4' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 88, icon: Terminal, color: '#06b6d4' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 95, icon: ShieldCheck, color: '#06b6d4' },
    { name: 'Tailwind CSS', category: 'frontend', level: 90, icon: Code, color: '#06b6d4' },

    { name: 'Git & GitHub', category: 'devops', level: 88, icon: GitBranch, color: '#a855f7' },
    { name: 'Linux & Hostinger', category: 'devops', level: 85, icon: Server, color: '#a855f7' },
    { name: 'Azure Cloud', category: 'devops', level: 80, icon: Cloud, color: '#a855f7' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">Color-coded skill matrix categorized by domain expertise.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {['all', 'backend', 'frontend', 'devops'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--neon-indigo)' : 'rgba(255,255,255,0.03)',
                color: activeTab === tab ? '#fff' : 'var(--text-muted)',
                border: activeTab === tab ? '1px solid var(--neon-indigo)' : '1px solid var(--border-glass)',
                padding: '0.65rem 1.8rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.95rem',
                cursor: 'pointer', transition: 'var(--transition)',
                textTransform: 'capitalize',
                boxShadow: activeTab === tab ? '0 4px 20px rgba(99, 102, 241, 0.4)' : 'none'
              }}
            >
              {tab === 'all' ? 'All Skills' : tab === 'backend' ? 'Backend & DB' : tab === 'frontend' ? 'Frontend React' : 'DevOps & Cloud'}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card skill-card"
                data-category={skill.category}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `rgba(${parseInt(skill.color.slice(1,3),16)}, ${parseInt(skill.color.slice(3,5),16)}, ${parseInt(skill.color.slice(5,7),16)}, 0.15)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: skill.color
                }}>
                  <Icon size={24} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{skill.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
