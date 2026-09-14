/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyZyphoros } from './components/WhyZyphoros';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { STANDALONE_HTML_CODE } from './standaloneCode';

export default function App() {
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(STANDALONE_HTML_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zyphoros-landing-page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#160d1b] text-white selection:bg-[#c1ff72] selection:text-[#160d1b] font-body relative">
      {/* Navigation Header */}
      <Header onOpenExportModal={() => setExportModalOpen(true)} />

      {/* Main Landing Page Flow */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyZyphoros />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Export / Single File Standalone Modal */}
      {exportModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setExportModalOpen(false)}
        >
          <div
            className="bg-[#1a0f20] border border-[#b79aff]/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-[0_0_60px_rgba(183,154,255,0.25)] relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#b79aff]/20">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#c1ff72]">
                  Entrega Técnica • Arquivo Único Autossuficiente
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                  Código Completo (HTML + CSS + JS)
                </h3>
              </div>
              <button
                onClick={() => setExportModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Este arquivo contém a página completa da Zyphoros sem dependências de frameworks. Salve como <code className="text-[#c1ff72] bg-[#160d1b] px-1.5 py-0.5 rounded font-mono">index.html</code> para publicar instantaneamente em qualquer hospedagem (GitHub Pages, Vercel, Netlify, cPanel).
            </p>

            {/* Action Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#c1ff72] hover:bg-[#d0ff8c] text-[#160d1b] shadow-[0_0_15px_rgba(193,255,114,0.4)] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                <span>{copied ? '✓ Código Copiado!' : 'Copiar Código Completo'}</span>
              </button>

              <button
                onClick={handleDownloadHtml}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#2a1738] hover:bg-[#381c4e] text-white border border-[#b79aff]/40 transition-all"
              >
                <svg className="w-4 h-4 text-[#b79aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Baixar index.html</span>
              </button>

              <a
                href="/zyphoros-standalone.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-[#b79aff] hover:text-[#c1ff72] transition-colors ml-auto"
              >
                <span>Abrir standalone em nova aba</span>
                <span>↗</span>
              </a>
            </div>

            {/* Code Preview Box */}
            <div className="mt-4 flex-1 min-h-0 bg-[#120917] border border-[#b79aff]/20 rounded-xl p-4 overflow-auto font-mono text-xs text-slate-300">
              <pre className="whitespace-pre">
                <code>{STANDALONE_HTML_CODE.slice(0, 1800)}...</code>
              </pre>
            </div>
            <div className="mt-2 text-[11px] text-slate-500 text-right">
              Total: ~{Math.round(STANDALONE_HTML_CODE.length / 1024)} KB autossuficiente
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
