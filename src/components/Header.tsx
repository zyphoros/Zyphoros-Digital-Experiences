import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../data';
import { ZyphorosSymbol } from './ZyphorosLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#160d1b]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Typographic Logo */}
        <a
          href="#"
          id="header-logo-link"
          className="group flex items-center gap-2.5 text-decoration-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c1ff72] rounded-lg p-1"
        >
          <div className="relative w-8 h-8 rounded-lg bg-[#22132b] border border-[#b79aff]/30 flex items-center justify-center group-hover:border-[#c1ff72]/70 group-hover:shadow-[0_0_12px_rgba(193,255,114,0.25)] transition-all duration-300">
            {/* Official Zyphoros Logo Glyph */}
            <ZyphorosSymbol className="w-5 h-5 text-[#c1ff72] transform group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#c1ff72] rounded-full"></span>
          </div>

          <div className="flex flex-col">
            <span className="font-sansation font-bold text-xl tracking-wider text-white flex items-center">
              ZYPHOROS
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c1ff72] ml-1"></span>
            </span>
            <span className="font-rotis text-[10px] tracking-[0.18em] text-slate-400 font-normal -mt-0.5">
              digital experiences
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors duration-200 py-1 tracking-wide relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c1ff72] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Primary WhatsApp CTA in Header */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-whatsapp"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#160d1b] bg-[#c1ff72] hover:bg-[#d0ff8c] rounded-lg transition-all duration-200 shadow-sm hover:shadow-[0_2px_15px_rgba(193,255,114,0.3)]"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
            </svg>
            <span>Fale no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 text-white hover:text-[#c1ff72] focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#160d1b]/95 backdrop-blur-xl border-b border-[#b79aff]/20 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#b79aff] hover:text-white py-2 border-b border-[#b79aff]/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-3 rounded-lg font-bold text-[#160d1b] bg-[#c1ff72] tracking-wider uppercase text-sm shadow-[0_0_15px_rgba(193,255,114,0.3)]"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
