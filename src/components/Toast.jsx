import React from 'react';
import { CheckCircle2 } from './Icons';

const Toast = ({ show }) => {
  if (!show) return null;

  return (
    <div className="toast">
      <CheckCircle2 size={20} color="var(--accent-emerald)" />
      <span>Opening your email client — message ready to send.</span>
    </div>
  );
};

export default Toast;
