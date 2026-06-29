import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Photos } from './Icons';
import { projectScreenshots } from '../data/projectScreenshots';

const ScreenshotModal = ({ isOpen, projectId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const config = projectScreenshots[projectId];
  const screenshots = config?.shots ?? [];

  useEffect(() => {
    setCurrentIndex(0);
  }, [projectId, isOpen]);

  if (!isOpen || !config) return null;

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
            {config.title}
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
            width={1024}
            height={576}
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
