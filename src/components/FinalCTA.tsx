import React from 'react';
import { WHATSAPP_LINK } from '../data';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#160d1b] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#c1ff72] text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c1ff72]"></span>
          <span>Agenda Aberta para Novos Projetos</span>
        </div>

        {/* Impact Headline */}
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Pronto para transformar sua presença digital em uma{' '}
          <span className="text-[#b79aff]">
            máquina de resultados?
          </span>
        </h2>

        {/* Copy */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Fale diretamente com nossa equipe técnica para analisar seu cenário e planejar uma solução sob medida para sua empresa.
        </p>

        {/* WhatsApp Button */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp-btn"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#160d1b] bg-[#c1ff72] hover:bg-[#d2ff8c] rounded-xl transition-all duration-200"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
            </svg>
            <span>Falar no WhatsApp agora</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* WhatsApp direct number assurance */}
        <p className="mt-5 text-xs text-slate-400">
          Atendimento ágil em horário comercial • WhatsApp Direto: (61) 99835-8397
        </p>
      </div>
    </section>
  );
};
