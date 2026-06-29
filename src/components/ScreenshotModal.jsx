import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Photos } from './Icons';

const ScreenshotModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    { src: '/assets/images/bvsm1.png', width: 1024, height: 480, title: 'Main Analytics Dashboard', desc: 'Financial year analytics, active leads, paid invoice revenue chart, and policy category breakdown.' },
    { src: '/assets/images/bvsm2.png', width: 1024, height: 441, title: 'CRM Leads & Verification Portal', desc: 'Lead management filter table showing contact details, insurance policies, and client verification actions.' },
    { src: '/assets/images/bvsm3.png', width: 1024, height: 488, title: 'Policy Ledger Management', desc: 'Comprehensive policy records listing customer details, insurance partners, and policy identifiers.' },
    { src: '/assets/images/bvsm4.png', width: 1024, height: 491, title: 'Master System Configuration', desc: 'Enterprise reference catalog, product structure, LOB parameters, dynamic field mappings, and wizard forms.' },
    { src: '/assets/images/bvsm5.png', width: 1024, height: 434, title: 'Finance & Invoices Engine', desc: 'Billing table displaying customer invoice numbers, dates, subtotal breakdowns, settlement statuses, and PDF generation.' }
  ];

  if (!isOpen) return null;

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  const current = screenshots[currentIndex];

  return (
    <div className="modal-overlay" style={{ zIndex: 2500 }} onClick={onClose}>
      <div
        className="modal-content screenshot-modal"
        style={{ padding: 0, overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="screenshot-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>
            <Photos size={20} color="var(--accent-secondary)" />
            BVSM Live System
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-secondary)', background: 'var(--accent-muted)', padding: '0.15rem 0.6rem', borderRadius: 50, marginLeft: '0.35rem', fontWeight: 600 }}>
              {currentIndex + 1} / {screenshots.length}
            </span>
          </div>
          <button className="modal-close" style={{ position: 'static' }} onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="screenshot-display">
          <button className="screenshot-nav prev" onClick={prevImage} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <img
            src={current.src}
            alt={current.title}
            width={current.width}
            height={current.height}
            decoding="async"
            loading="eager"
          />
          <button className="screenshot-nav next" onClick={nextImage} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="screenshot-footer">
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
            {current.title}
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1rem', lineHeight: 1.6 }}>{current.desc}</p>
          <div className="screenshot-thumbs">
            {screenshots.map((item, idx) => (
              <img
                key={item.src}
                src={item.src}
                alt={`Screenshot ${idx + 1}`}
                className={`screenshot-thumb ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotModal;
