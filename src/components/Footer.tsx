import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../data';
import { ZyphorosSymbol } from './ZyphorosLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#110915] border-t border-white/[0.06] text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:border-[#c1ff72]/50 transition-colors">
                <ZyphorosSymbol className="w-4 h-4 text-[#c1ff72]" />
              </div>
              <span className="font-sansation font-bold text-lg text-white tracking-wider">
                ZYPHOROS
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm font-normal leading-relaxed">
              Desenvolvimento de sites sob medida, landing pages e ecossistemas digitais para empresas que buscam alta performance e autoridade de marca.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c1ff72]"></span>
              <span>Disponível para novos projetos selecionados</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Cases</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Direct Contacts */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contato
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <span>Instagram:</span>
                <span className="text-slate-200">@Zyphoros_Tech</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#c1ff72] transition-colors"
              >
                <span>WhatsApp:</span>
                <span className="text-slate-200">(61) 99835-8397</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Zyphoros Soluções Tecnológicas. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Alta Performance</span>
            <span>•</span>
            <span>Código Limpo</span>
            <span>•</span>
            <span>Design Sob Medida</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
