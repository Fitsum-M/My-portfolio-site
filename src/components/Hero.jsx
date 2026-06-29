import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ArrowRight } from './Icons';

const Hero = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const roles = ['Full-Stack Developer', 'Laravel & PHP Specialist', 'React Engineer', 'Enterprise Systems Architect'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const current = roles[roleIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text.length === current.length) {
          timer = setTimeout(() => setIsDeleting(true), 2200);
        }
      }, 75);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.25)' : 'rgba(56, 189, 248, 0.2)'
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="particle-canvas" />

      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Full-Stack Developer @ Excelloite
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Fitsum</span>
          </h1>

          <h2 className="hero-subtitle">
            Building systems as a <span className="hero-typed">{text}|</span>
          </h2>

          <p className="hero-desc">
            Full-Stack Engineer crafting robust enterprise platforms, automated workflows, and reactive applications using <strong>Laravel, PHP, React, and MySQL</strong> on cloud infrastructure.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Fitsum-M" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href="https://www.linkedin.com/in/fitsum-mulugeta-417286395" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <div className="code-window">
          <div className="code-window-bar">
            <span className="code-dot" style={{ background: '#ff5f56' }} />
            <span className="code-dot" style={{ background: '#ffbd2e' }} />
            <span className="code-dot" style={{ background: '#27c93f' }} />
            <span style={{ marginLeft: 'auto', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>profile.jsx</span>
          </div>
          <div className="code-window-body">
            <div><span style={{ color: '#c084fc' }}>import</span> React <span style={{ color: '#c084fc' }}>from</span> <span style={{ color: '#86efac' }}>'react'</span>;</div>
            <br />
            <div><span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#7dd3fc' }}>Developer</span> = () =&gt; (</div>
            <div style={{ paddingLeft: '1.2rem' }}>&lt;<span style={{ color: '#c084fc' }}>Profile</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>name</span>=<span style={{ color: '#86efac' }}>"Fitsum"</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>role</span>=<span style={{ color: '#86efac' }}>"Full-Stack Developer"</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>company</span>=<span style={{ color: '#86efac' }}>"Excelloite"</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>stack</span>=&#123;[<span style={{ color: '#86efac' }}>'Laravel'</span>, <span style={{ color: '#86efac' }}>'React'</span>, <span style={{ color: '#86efac' }}>'PHP'</span>]&#125;</div>
            <div style={{ paddingLeft: '1.2rem' }}>/&gt;</div>
            <div>);</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
