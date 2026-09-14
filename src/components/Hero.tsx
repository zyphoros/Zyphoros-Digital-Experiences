import React, { useRef, useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '../data';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  // Interactive Tech Network / Circuit Nodes Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Node particle definition
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const nodeCount = Math.min(Math.floor((width * height) / 28000), 28);
    const nodes: Node[] = [];

    const colors = ['rgba(183, 154, 255, 0.6)', 'rgba(193, 255, 114, 0.45)', 'rgba(255, 255, 255, 0.35)'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleCanvasMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleCanvasMouseMove);
    document.addEventListener('mouseleave', handleCanvasMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse gentle repulsion / interaction
        const dx = node.x - targetMouseX;
        const dy = node.y - targetMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          node.x += (dx / dist) * force * 1.2;
          node.y += (dy / dist) * force * 1.2;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Connect nearby nodes with delicate constellation lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distNodes = Math.hypot(node.x - other.x, node.y - other.y);
          if (distNodes < 130) {
            const alpha = (1 - distNodes / 130) * 0.12;
            ctx.strokeStyle = `rgba(183, 154, 255, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleCanvasMouseMove);
      document.removeEventListener('mouseleave', handleCanvasMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track cursor position for the dynamic radial glow over the Hero
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovering(true);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#160d1b]"
    >
      {/* Dynamic Background: Smooth gradient & Minimal Tech Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1022] via-[#160d1b] to-[#160d1b] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      {/* Ambient subtle light accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#b79aff] rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#c1ff72] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />

      {/* Refined Cursor Reactive Sheen */}
      <div
        className="absolute pointer-events-none rounded-full transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '360px',
          height: '360px',
          background:
            'radial-gradient(circle, rgba(183, 154, 255, 0.08) 0%, rgba(193, 255, 114, 0.04) 45%, transparent 70%)',
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Interactive Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Authority Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c1ff72]"></span>
          <span className="text-xs font-medium tracking-wide text-slate-300">
            Engenharia Digital & Design Cinematográfico
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] leading-[1.08] tracking-tight max-w-4xl text-white">
          Criamos sites e soluções <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-[#b79aff] to-[#c1ff72] bg-clip-text text-transparent">
            de impacto implacável.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 sm:mt-7 text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
          Design cinematográfico, carregamento sub-segundo e arquitetura digital construída sob medida para converter visitantes em clientes.
        </p>

        {/* Dual CTAs: Clean & High-Contrast */}
        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA (WhatsApp Neon-Lime) */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#160d1b] bg-[#c1ff72] hover:bg-[#d0ff8c] rounded-xl transition-all duration-200 shadow-sm hover:shadow-[0_4px_20px_rgba(193,255,114,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
            </svg>
            <span>Falar no WhatsApp</span>
            <span className="text-[#160d1b] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>

          {/* Secondary CTA (Ver Portfólio) */}
          <a
            href="#portfolio"
            id="hero-cta-portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide text-slate-200 hover:text-white rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
          >
            <span>Ver Portfólio</span>
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Clean Proofpoints */}
        <div className="mt-14 pt-7 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left w-full max-w-3xl">
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#c1ff72]">99+</div>
            <div className="text-xs text-slate-400 mt-0.5">PageSpeed Score</div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#b79aff]">&lt; 0.8s</div>
            <div className="text-xs text-slate-400 mt-0.5">Tempo Médio</div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Design Autoral</div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-200">24/7</div>
            <div className="text-xs text-slate-400 mt-0.5">Estabilidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};
