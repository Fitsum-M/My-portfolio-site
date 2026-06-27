import React from 'react';
import { CheckCircle2 } from './Icons';

const Toast = ({ show }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 3000,
      background: '#10b981', color: '#fff', padding: '1rem 1.8rem', borderRadius: 14,
      fontWeight: 600, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
      display: 'flex', alignItems: 'center', gap: '0.8rem', animation: 'fadeIn 0.3s ease'
    }}>
      <CheckCircle2 size={24} />
      <span>Message sent successfully! Fitsum will get back to you shortly.</span>
    </div>
  );
};

export default Toast;
