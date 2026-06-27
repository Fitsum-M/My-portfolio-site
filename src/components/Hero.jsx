import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from './Icons';

const Hero = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const roles = ['Full-Stack Developer', 'Laravel & PHP Specialist', 'React & JS Engineer', 'Enterprise ERP Architect'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic Typing Effect
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
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 80);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIdx]);

  // Particle Canvas Animation
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

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.4)' : 'rgba(6, 182, 212, 0.4)'
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

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
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
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} id="particle-canvas" />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#34d399', padding: '0.4rem 1.1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem'
          }}>
            <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
            Full-Stack Developer @ Excelloite
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.8rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
            Hi, I'm <span className="gradient-text">Fitsum</span>
          </h1>

          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 400, minHeight: '2.5rem' }}>
            Building systems as a <span style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>{text}|</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2.2rem', maxWidth: 580 }}>
            Passionate Full-Stack Engineer crafting robust enterprise platforms, automated workflows, and reactive applications using <strong>Laravel, PHP, React, MySQL</strong> and cloud infrastructure.
          </p>

          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Fitsum-M" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.2s' }}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/fitsum-mulugeta-417286395" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.2s' }}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:fitsummulugeta22@gmail.com" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.2s' }}>
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div style={{ background: '#0d1322', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div style={{ background: '#141c2e', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-glass)' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></span>
            <span style={{ marginLeft: 'auto', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>FitsumProfile.jsx</span>
          </div>
          <div style={{ padding: '1.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.7 }}>
            <div><span style={{ color: '#f472b6' }}>import</span> React <span style={{ color: '#f472b6' }}>from</span> <span style={{ color: '#a3e635' }}>'react'</span>;</div>
            <br />
            <div><span style={{ color: '#f472b6' }}>const</span> <span style={{ color: '#38bdf8' }}>Developer</span> = () =&gt; (</div>
            <div style={{ paddingLeft: '1.2rem' }}>&lt;<span style={{ color: '#f472b6' }}>Profile</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>name</span>=<span style={{ color: '#a3e635' }}>"Fitsum"</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>role</span>=<span style={{ color: '#a3e635' }}>"Full-Stack Developer"</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>company</span>=<span style={{ color: '#a3e635' }}>"Excelloite"</span></div>
            <div style={{ paddingLeft: '2.4rem' }}><span style={{ color: '#fbbf24' }}>stack</span>=&#123;[<span style={{ color: '#a3e635' }}>'Laravel'</span>, <span style={{ color: '#a3e635' }}>'React'</span>, <span style={{ color: '#a3e635' }}>'PHP'</span>]&#125;</div>
            <div style={{ paddingLeft: '1.2rem' }}>/&gt;</div>
            <div>);</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
