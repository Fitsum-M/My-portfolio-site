import React from 'react';
import { X, CheckCircle } from './Icons';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  const featuresMap = {
    bvsm: [
      "Dynamic automated invoice generation and billing PDF engine",
      "Configurable multi-provider email automation & dynamic mailer settings",
      "Request for Quotation (RFQ) module with real-time tracking",
      "Azure cloud integration for verification audit logs"
    ],
    anekaa: [
      "Donor KYC document upload & encrypted management",
      "Automated fundraising campaign scheduling and notifications",
      "Custom drag-and-drop HTML email template engine for donor outreach",
      "Real-time donation analytics dashboard and tax receipt generator"
    ],
    adarsh: [
      "Unique Trade ID lifecycle management tracking orders from draft to settlement",
      "Multi-company architecture supporting isolated ledgers",
      "Integrated domestic and export trade logistics workflow modules",
      "Strict database interdependency validation algorithms"
    ]
  };

  const features = featuresMap[project.id] || [];

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(7, 10, 18, 0.85)', backdropFilter: 'blur(16px)',
      zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem'
    }}>
      <div style={{
        background: '#0d1322', border: '1px solid var(--border-glass)', borderRadius: 24,
        maxWidth: 750, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', padding: '2.8rem'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)',
            color: 'var(--text-muted)', width: 38, height: 38, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.6rem' }}>{project.title}</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--neon-indigo)', padding: '0.3rem 0.8rem', borderRadius: 6, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              {t}
            </span>
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.8rem' }}>{project.desc}</p>

        <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Key Modules & Features</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
          {features.map((feat, i) => (
            <li key={i} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontSize: '0.98rem' }}>
              <CheckCircle size={18} color="var(--neon-cyan)" /> {feat}
            </li>
          ))}
        </ul>

        <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>My Role & Contributions</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{project.role}</p>
      </div>
    </div>
  );
};

export default Modal;
