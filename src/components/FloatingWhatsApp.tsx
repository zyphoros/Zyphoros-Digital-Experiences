import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip "Fale conosco" */}
      <div
        className={`bg-[#1c1124] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#b79aff]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] whitespace-nowrap transition-all duration-200 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="text-[#c1ff72]">●</span> Fale conosco no WhatsApp
      </div>

      {/* Floating Action Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="floating-whatsapp-btn"
        aria-label="Fale com a Zyphoros no WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-70 animate-ping -z-10" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 fill-white drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
        </svg>
      </a>
    </div>
  );
};
