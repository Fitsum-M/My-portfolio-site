import React from 'react';
import { CheckCircle2 } from './Icons';

const Toast = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="toast">
      <CheckCircle2 size={20} color="var(--accent-emerald)" />
      <span>{message || 'Message sent successfully!'}</span>
    </div>
  );
};

export default Toast;
