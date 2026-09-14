import React, { useState } from 'react';
import { SERVICES_DATA, WHATSAPP_LINK } from '../data';
import { ServiceItem } from '../types';

interface TiltCardProps {
  service: ServiceItem;
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ service, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 4 deg max rotation for smooth elegance
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'globe':
        return (
          <svg className="w-5 h-5 text-[#b79aff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
      case 'zap':
        return (
          <svg className="w-5 h-5 text-[#c1ff72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case 'code':
        return (
          <svg className="w-5 h-5 text-[#b79aff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'cpu':
        return (
          <svg className="w-5 h-5 text-[#c1ff72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'none' : 'transform 0.4s ease-out, border-color 0.25s ease',
        }}
        id={`service-card-${service.id}`}
        className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden group hover:border-[#b79aff]/35 transition-colors duration-300"
      >
        <div>
          {/* Header of Card: Icon & Tag */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#b79aff]/40 transition-colors duration-200">
              {renderIcon(service.icon)}
            </div>
            <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.03] text-slate-300 border border-white/10">
              {service.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
            {service.shortDesc}
          </p>

          {/* Key Deliverables Bullet Points */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <span className="text-[#c1ff72] shrink-0 text-xs mt-0.5 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer Link */}
        <div className="mt-8 pt-4">
          <a
            href={`${WHATSAPP_LINK}&text=${encodeURIComponent(`Olá! Tenho interesse no serviço de ${service.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#b79aff] hover:text-[#c1ff72] transition-colors duration-200"
          >
            <span>Solicitar proposta técnica</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="relative py-24 sm:py-32 bg-[#160d1b] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#b79aff] text-xs font-semibold tracking-widest uppercase mb-4">
            Especialidades
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Soluções digitais desenhadas para{' '}
            <span className="text-[#b79aff]">
              dominar mercados.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Zero templates pré-moldados. Construímos ferramentas digitais sob medida com rigor de engenharia e foco em conversão.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <TiltCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
