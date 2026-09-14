import React, { useState } from 'react';
import { PORTFOLIO_CASES, WHATSAPP_LINK } from '../data';
import { PortfolioCase } from '../types';
import { ScreenshotCarousel } from './ScreenshotCarousel';

export const Portfolio: React.FC = () => {
  const [activeCase, setActiveCase] = useState<PortfolioCase | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#160d1b] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#c1ff72] text-xs font-semibold tracking-widest uppercase mb-4">
              Cases Selecionados
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Resultados reais construídos com{' '}
              <span className="text-[#b79aff]">precisão cirúrgica.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Projetos onde tecnologia e design se encontram para gerar tração comercial e valor de marca.
            </p>
          </div>

          <a
            href={`${WHATSAPP_LINK}&text=${encodeURIComponent('Olá! Vi o portfólio da Zyphoros e quero entender como seria um projeto para a minha empresa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c1ff72] hover:text-[#d0ff8c] group self-start md:self-auto shrink-0 pb-2 transition-colors"
          >
            <span>Iniciar um projeto sob medida</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Portfolio Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_CASES.map((item) => (
            <div
              key={item.id}
              id={`portfolio-case-${item.id}`}
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="glass-card rounded-2xl overflow-hidden group border border-white/[0.08] hover:border-[#b79aff]/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Visual Header / Preview with Screenshot Carousel */}
              <div className="relative h-64 sm:h-72 overflow-hidden border-b border-white/[0.06] bg-[#1a0f20]">
                {/* Reusable Screenshot Carousel */}
                <ScreenshotCarousel
                  images={item.screenshots}
                  altTitle={item.client}
                  isPaused={hoveredCardId === item.id}
                />

                {/* Window Header Overlay */}
                <div className="absolute top-4 inset-x-4 z-10 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 pointer-events-auto shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                    <span className="text-xs font-mono text-slate-200 ml-1.5">{item.url}</span>
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-slate-200 border border-white/15 pointer-events-auto shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Technology Tags */}
                <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-1.5 max-w-[calc(100%-90px)] pointer-events-none">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-slate-200 border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-[#160d1b]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center justify-center p-6 text-center z-20">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#c1ff72] mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 max-w-sm">
                    {item.client}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 max-w-xs line-clamp-2">
                    {item.headline}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveCase(item)}
                      id={`btn-open-case-${item.id}`}
                      className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/20 transition-all"
                    >
                      Ver Detalhes
                    </button>
                    <a
                      href={`https://${item.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#c1ff72]/15 hover:bg-[#c1ff72]/25 text-[#c1ff72] border border-[#c1ff72]/30 transition-all flex items-center gap-1"
                    >
                      <span>Acessar</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Content Footer */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {item.client}
                    </h3>
                    <a
                      href={`https://${item.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-[#c1ff72] transition-colors flex items-center gap-1"
                      title="Acessar projeto online"
                    >
                      <span>{item.url}</span>
                      <span>↗</span>
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setActiveCase(item)}
                    className="text-xs font-medium text-[#b79aff] hover:text-white transition-colors"
                  >
                    Ver detalhes do case →
                  </button>
                  <a
                    href={`${WHATSAPP_LINK}&text=${encodeURIComponent(`Olá! Gostei muito do projeto da ${item.client} (${item.url}) e gostaria de desenvolver algo nesse nível.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#c1ff72] hover:underline"
                  >
                    Quero similar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      {activeCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="bg-[#1c1124] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCase(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-[#c1ff72]">
              Estudo de Caso • {activeCase.category}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              {activeCase.client}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-1 font-normal">
              {activeCase.headline}
            </p>

            {/* Modal Screenshot Carousel */}
            <div className="my-5 h-52 sm:h-64 rounded-xl overflow-hidden border border-white/15 relative">
              <ScreenshotCarousel
                images={activeCase.screenshots}
                altTitle={activeCase.client}
              />
            </div>

            {/* Project URL & Link Box */}
            <div className="my-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Link de Produção</span>
                <span className="text-sm sm:text-base font-mono font-semibold text-white">{activeCase.url}</span>
              </div>
              <a
                href={`https://${activeCase.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-[#c1ff72] text-xs font-semibold uppercase tracking-wider transition-colors self-start sm:self-auto"
              >
                <span>Acessar site ao vivo</span>
                <span>↗</span>
              </a>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1 text-[#b79aff]">
                  O Desafio
                </h4>
                <p>
                  {activeCase.challenge || 'Desenvolver uma aplicação digital que una performance de ponta, design refinado e foco absoluto na experiência do usuário e conversão.'}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1 text-[#c1ff72]">
                  A Solução da Zyphoros
                </h4>
                <p>
                  {activeCase.solution || 'Construímos uma solução sob medida com arquitetura moderna, carregamento ultrarrápido e interface visual alinhada aos objetivos estratégicos do projeto.'}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-2">
                  Stack Técnica
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCase.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Pronto para gerar resultados para o seu negócio?
              </span>
              <a
                href={`${WHATSAPP_LINK}&text=${encodeURIComponent(`Olá! Quero saber mais sobre o case da ${activeCase.client} (${activeCase.url}) e viabilizar um projeto para minha empresa.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#160d1b] bg-[#c1ff72] hover:bg-[#d0ff8c] transition-all"
              >
                Conversar com a Zyphoros
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
