import React, { useEffect, useRef } from 'react';
import { DIFFERENTIALS, WHATSAPP_LINK } from '../data';

export const WhyZyphoros: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal-differential-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative py-24 sm:py-32 bg-[#160d1b] overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto / Sticky Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#b79aff] text-xs font-semibold tracking-widest uppercase mb-4">
              O Padrão Zyphoros
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              A diferença entre um site comum e uma{' '}
              <span className="text-[#b79aff]">
                potência digital.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              No mercado atual, o site da sua empresa é a primeira impressão mais valiosa. Se for lento ou genérico, seu cliente simplesmente fechará a aba e comprará do concorrente.
            </p>

            <div className="mt-8 p-6 rounded-2xl glass-card border border-white/10 relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-widest text-[#c1ff72] mb-1.5">
                Compromisso Técnico
              </div>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Desenvolvemos cada aplicação sob medida, sem atalhos que comprometam a velocidade, a segurança e a escala do seu negócio.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#b79aff] hover:text-[#c1ff72] transition-colors"
              >
                <span>Falar com o arquiteto técnico</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated List with Stylized Numbers */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {DIFFERENTIALS.map((item, index) => (
              <div
                key={item.number}
                className="reveal-differential-item opacity-0 translate-y-8 transition-all duration-700 glass-card rounded-2xl p-6 sm:p-7 hover:border-white/20 group"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Stylized Number */}
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-white/20 group-hover:text-[#c1ff72] transition-colors duration-200 shrink-0 font-mono tracking-tighter">
                    {item.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors duration-200">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                        {item.highlight}
                      </span>
                    </div>

                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
