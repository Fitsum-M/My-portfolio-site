import React from 'react';
import { X, CheckCircle, Photos } from './Icons';

const Modal = ({ project, onClose, onViewScreenshots }) => {
  if (!project) return null;

  const featuresMap = {
    bvsm: [
      'Dynamic automated invoice generation and billing PDF engine',
      'Configurable multi-provider email automation & dynamic mailer settings',
      'Request for Quotation (RFQ) module with real-time tracking',
      'Policy ledger management with insurance partner integrations',
      'Azure cloud integration for verification audit logs'
    ],
    anekaa: [
      'Donor KYC document upload & encrypted management',
      'Automated fundraising campaign scheduling and notifications',
      'Custom drag-and-drop HTML email template engine for donor outreach',
      'Real-time donation analytics dashboard and tax receipt generator'
    ],
    adarsh: [
      'Unique Trade ID lifecycle management tracking orders from draft to settlement',
      'Multi-company architecture supporting isolated ledgers',
      'Integrated domestic and export trade logistics workflow modules',
      'Strict database interdependency validation algorithms'
    ]
  };

  const features = featuresMap[project.id] || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <h3 className="modal-title">{project.title}</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
          {project.tech.map((t) => (
            <span key={t} className="modal-tech-tag">{t}</span>
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.desc}
        </p>

        {project.hasScreenshots && (
          <button
            className="btn-primary"
            onClick={onViewScreenshots}
            style={{ marginBottom: '1.75rem', width: '100%', justifyContent: 'center' }}
          >
            <Photos size={18} /> View Live System Screenshots
          </button>
        )}

        <h4 className="modal-section-title">Key Modules & Features</h4>
        <ul className="modal-feature-list">
          {features.map((feat) => (
            <li key={feat}>
              <CheckCircle size={16} color="var(--accent-secondary)" />
              {feat}
            </li>
          ))}
        </ul>

        <h4 className="modal-section-title">My Role & Contributions</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{project.role}</p>
      </div>
    </div>
  );
};

export default Modal;
