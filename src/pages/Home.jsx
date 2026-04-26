import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PHI   = 1.618033988749895;
const FIBS  = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
const ROLES = ['computer engineer', 'applied mathematician', 'software developer', 'builder of things'];

/* ─────────────────────────────────────────────────
   Fibonacci Spiral Canvas
   Canvas: 680×420 (ratio ≈ φ)
   Spiral eye at (490, 310) — between F1 and F2
   Scale a=12 so r grows by φ every quarter-turn
   CCW on screen: x = cx + r·cos(θ),  y = cy − r·sin(θ)
───────────────────────────────────────────────── */
function FibSpiral() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 680, H = 420;
    const CX = 490, CY = 310;   // spiral eye
    const A  = 12;               // scale — r(0)=12
    const MAX_T = Math.PI * 3.13; // fits within canvas

    // Fibonacci squares (canvas px): [x, y, side, fibNumber]
    const SQ = [
      [  0,   0, 420, 21],
      [420,   0, 260, 13],
      [520, 260, 160,  8],
      [420, 320, 100,  5],
      [420, 260,  60,  3],
      [480, 260,  40,  2],
      [500, 300,  20,  1],
      [480, 300,  20,  1],
    ];

    // Particles spread along spiral
    const NPART = 65;
    const parts = Array.from({ length: NPART }, () => ({
      t:     Math.random() * MAX_T,
      speed: 0.005 + Math.random() * 0.007,
      sz:    1.2 + Math.random() * 2.2,
      gold:  Math.random() > 0.38,
      phase: Math.random() * Math.PI * 2,
    }));

    const pt = (theta) => {
      const r = A * Math.pow(PHI, (2 * theta) / Math.PI);
      return { x: CX + r * Math.cos(theta), y: CY - r * Math.sin(theta) };
    };

    let t0 = null, raf;

    const drawSquares = (rev) => {
      const visible = rev * SQ.length;
      SQ.forEach(([x, y, s, n], i) => {
        const age = visible - i;
        if (age <= 0) return;
        const a = Math.min(age, 1);

        // Border
        ctx.strokeStyle = `rgba(212,175,55,${a * 0.22})`;
        ctx.lineWidth = 0.7;
        ctx.strokeRect(x + 0.5, y + 0.5, s, s);

        // Number — only when square is big enough and faded in enough
        if (s >= 40 && age > 0.6) {
          const na = Math.min((age - 0.6) * 2.5, 1);
          const fs = Math.min(s * 0.14, 18);
          ctx.save();
          ctx.globalAlpha = na * 0.35;
          ctx.fillStyle = '#d4af37';
          ctx.font = `600 ${fs}px 'JetBrains Mono', monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(n, x + s / 2, y + s / 2);
          ctx.restore();
        }
      });
    };

    const drawSpiral = (rev, elapsed) => {
      const end = MAX_T * rev;

      // Layered glow
      const glows = [
        { lw: 18, alpha: 0.03 },
        { lw: 8,  alpha: 0.07 },
        { lw: 3,  alpha: 0.15 },
        { lw: 1.5, alpha: 0.9  },
      ];
      glows.forEach(({ lw, alpha }) => {
        ctx.beginPath();
        let first = true;
        for (let th = 0; th <= end; th += 0.035) {
          const { x, y } = pt(th);
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          first = false;
        }
        ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
        ctx.lineWidth = lw;
        ctx.stroke();
      });

      // Animated tip — bright dot chasing the spiral end
      if (rev < 1) {
        const { x, y } = pt(end);
        const pulse = 0.55 + 0.45 * Math.sin(elapsed * 9);
        ctx.beginPath();
        ctx.arc(x, y, 4 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,206,94,${0.9 * pulse})`;
        ctx.shadowColor = '#f0ce5e';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Subtle glow at the spiral eye
      const eyePulse = 0.5 + 0.5 * Math.sin(elapsed * 1.2);
      const eyeGrad = ctx.createRadialGradient(CX, CY, 0, CX, CY, 30);
      eyeGrad.addColorStop(0, `rgba(212,175,55,${0.12 * eyePulse})`);
      eyeGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = eyeGrad;
      ctx.beginPath();
      ctx.arc(CX, CY, 30, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParticles = (rev, elapsed) => {
      const maxT = MAX_T * rev;
      parts.forEach(p => {
        p.t += p.speed;
        if (p.t > maxT) p.t = 0.05;
        const { x, y } = pt(p.t);
        const pulse = 0.35 + 0.65 * Math.sin(elapsed * 2.8 + p.phase);

        ctx.beginPath();
        ctx.arc(x, y, p.sz * (0.6 + 0.4 * pulse), 0, Math.PI * 2);
        if (p.gold) {
          ctx.fillStyle = `rgba(212,175,55,${0.75 * pulse})`;
          ctx.shadowColor = '#d4af37';
        } else {
          ctx.fillStyle = `rgba(56,189,248,${0.65 * pulse})`;
          ctx.shadowColor = '#38bdf8';
        }
        ctx.shadowBlur = 7;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawCornerLabel = (elapsed) => {
      const a = Math.min(Math.max(elapsed - 2.5, 0), 1);
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = a * 0.45;
      ctx.fillStyle = '#8998b3';
      ctx.font = `10px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText('r(θ) = a · φ^(2θ/π)', 10, 10);
      ctx.restore();
    };

    const frame = (ts) => {
      if (!t0) t0 = ts;
      const elapsed = (ts - t0) / 1000;
      const rev = Math.min(elapsed / 2.8, 1);

      ctx.clearRect(0, 0, W, H);
      drawSquares(rev);
      drawSpiral(rev, elapsed);
      drawParticles(rev, elapsed);
      drawCornerLabel(elapsed);

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} width={680} height={420} className="fib-canvas" />;
}

/* ─────────────────────────────────────────────────
   Fibonacci Sequence — numbers appear one by one,
   ratio converging to φ shown live.
───────────────────────────────────────────────── */
function FibSequence() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count >= FIBS.length) return;
    const t = setTimeout(() => setCount(n => n + 1), 400);
    return () => clearTimeout(t);
  }, [count]);

  const ratio  = count > 1 ? FIBS[count - 1] / FIBS[count - 2] : null;
  const isNear = ratio !== null && Math.abs(ratio - PHI) < 0.002;

  return (
    <div className="fib-seq">
      <div className="fib-seq-top">
        <div className="fib-nums-row">
          {FIBS.slice(0, count).map((n, i) => (
            <span key={i} className={`fib-pill${i === count - 1 ? ' fib-pill-new' : ''}`}>
              {n}
            </span>
          ))}
          <span className="fib-cursor-seq">_</span>
        </div>
      </div>

      {ratio && (
        <div className="fib-ratio-row">
          <span className="fib-ratio-label">
            F({count - 1}) / F({count - 2})
          </span>
          <span className="fib-ratio-eq"> = </span>
          <span className={`fib-ratio-val${isNear ? ' is-phi' : ''}`}>
            {ratio.toFixed(9)}
          </span>
          {isNear && (
            <span className="fib-phi-badge">≈ φ</span>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Home Page
───────────────────────────────────────────────── */
function Home() {
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    let t;
    if (!deleting) {
      if (displayed.length < full.length) {
        t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 90);
      } else {
        t = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <div className="container">
      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-prompt">
          <span className="p-path">~/casper</span>
          <span className="p-dollar"> $ </span>
          <span className="p-cmd">whoami</span>
        </div>
        <h1 className="hero-name">Casper Adamus</h1>
        <div className="hero-role">
          <span>{displayed}</span>
          <span className="cursor-block">█</span>
        </div>
        <div className="hero-meta">
          <span>@</span>
          <span className="hm-val">uconn</span>
          <span className="hm-sep"> · </span>
          <span className="hm-val">CE + Applied Math</span>
          <span className="hm-sep"> · </span>
          <span className="hm-val">Hartford, CT</span>
        </div>
        <div className="hero-links">
          <Link to="/about"    className="hero-btn">./about</Link>
          <Link to="/projects" className="hero-btn">./projects</Link>
          <Link to="/contact"  className="hero-btn">./contact</Link>
        </div>
      </div>

      {/* ── φ divider ── */}
      <div className="phi-bar">
        <span className="phi-sym">φ</span>
        <span className="phi-eq"> = 1.618033988749895…</span>
        <div className="phi-rule"></div>
      </div>

      {/* ── Currently ── */}
      <div className="section">
        <h2 className="section-title">currently</h2>
        <p>
          Software Developer at <span className="hl">i3</span>, building data pipelines
          and backend systems. Studying Computer Engineering &amp; Applied Mathematics at{' '}
          <span className="hl">University of Connecticut</span>.
        </p>
      </div>

      {/* ── Fibonacci / Golden Ratio ── */}
      <div className="section">
        <h2 className="section-title">fibonacci · golden ratio</h2>
        <p className="muted">
          The Fibonacci tiling of squares — each ratio F(n)/F(n−1) converges to φ.
          The spiral traces the arc inscribed in each square.
        </p>
        <div className="fib-viz">
          <FibSpiral />
          <FibSequence />
        </div>
      </div>
    </div>
  );
}

export default Home;
