import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Photos } from './Icons';

const ScreenshotModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const screenshots = [
    { src: '/assets/images/bvsm1.png', title: '1. BVSM Main Analytics Dashboard', desc: 'Financial year analytics, active leads, paid invoice revenue chart, and policy category breakdown.' },
    { src: '/assets/images/bvsm2.png', title: '2. CRM Leads & Verification Portal', desc: 'Lead management filter table showing contact details, insurance policies, and client verification actions.' },
    { src: '/assets/images/bvsm3.png', title: '3. Policy Ledger Management', desc: 'Comprehensive policy records listing customer details, Tata AIG / Oriental insurance partners, and policy identifiers.' },
    { src: '/assets/images/bvsm4.png', title: '4. Master System Configuration', desc: 'Enterprise reference catalog, product structure, LOB parameters, dynamic field mappings, and wizard forms.' },
    { src: '/assets/images/bvsm5.png', title: '5. Finance & Invoices Engine', desc: 'Billing table displaying customer invoice numbers, dates, subtotal breakdowns, settlement statuses, and PDF generation.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const current = screenshots[currentIndex];

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(5, 7, 13, 0.92)', backdropFilter: 'blur(20px)',
      zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem'
    }}>
      <div style={{
        background: '#0d1322', border: '1px solid var(--border-glass)', borderRadius: 24,
        maxWidth: 1000, width: '100%', overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column', boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
      }}>
        {/* Header Bar */}
        <div style={{ padding: '1.2rem 1.8rem', background: '#141c2e', borderBottom: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
            <Photos size={22} color="var(--neon-cyan)" /> BVSM Live System Screenshots
            <span style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)', background: 'rgba(6, 182, 212, 0.15)', padding: '0.2rem 0.7rem', borderRadius: 50, marginLeft: '0.5rem' }}>
              {currentIndex + 1} of {screenshots.length}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)',
              color: '#fff', width: 36, height: 36, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Display Area with Navigation Arrows */}
        <div style={{ position: 'relative', background: '#070a12', minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            style={{
              position: 'absolute', left: '1.2rem', zIndex: 10,
              background: 'rgba(13, 19, 34, 0.85)', border: '1px solid var(--border-glass)',
              color: '#fff', width: 48, height: 48, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)', transition: '0.2s'
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={current.src}
            alt={current.title}
            style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: 12, border: '1px solid var(--border-glass)' }}
          />

          <button
            onClick={nextImage}
            aria-label="Next Image"
            style={{
              position: 'absolute', right: '1.2rem', zIndex: 10,
              background: 'rgba(13, 19, 34, 0.85)', border: '1px solid var(--border-glass)',
              color: '#fff', width: 48, height: 48, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)', transition: '0.2s'
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Footer Info & Thumbnails */}
        <div style={{ padding: '1.5rem 1.8rem', background: '#141c2e', borderTop: '1px solid var(--border-glass)' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--neon-cyan)', marginBottom: '0.3rem' }}>{current.title}</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.2rem' }}>{current.desc}</p>

          <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
            {screenshots.map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: 90, height: 55, objectFit: 'cover', borderRadius: 8, cursor: 'pointer',
                  border: currentIndex === idx ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                  opacity: currentIndex === idx ? 1 : 0.5, transition: '0.2s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotModal;
