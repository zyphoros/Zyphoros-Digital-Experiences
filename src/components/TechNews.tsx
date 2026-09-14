import React from 'react';
import { TECH_NEWS_POSTS, INSTAGRAM_LINK } from '../data';

export const TechNews: React.FC = () => {
  return (
    <section id="novidades" className="relative py-24 sm:py-32 bg-[#160d1b] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#b79aff] text-xs font-semibold tracking-widest uppercase mb-4">
              Conteúdo & Mercado
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Novidades do mundo Tech no{' '}
              <span className="text-[#b79aff]">@Zyphoros_Tech</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Análises sobre futuro da web, IA aplicada a negócios e arquiteturas digitais em nosso feed oficial.
            </p>
          </div>

          {/* Direct CTA to Instagram profile */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-instagram-profile"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#b79aff]/40 transition-all duration-200 self-start md:self-auto shrink-0"
          >
            {/* Instagram Icon SVG */}
            <svg
              className="w-4 h-4 text-[#b79aff] group-hover:text-white transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-xs font-semibold tracking-wide">Seguir no Instagram</span>
            <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>

        {/* 3 Illustrative Feed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TECH_NEWS_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#b79aff]/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                {/* Post Top Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#b79aff]">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <circle cx="12" cy="12" r="4"></circle>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-slate-400">@Zyphoros_Tech</span>
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                    {post.tag}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>

              {/* Post Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-400">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>

                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#b79aff] hover:text-[#c1ff72] transition-colors flex items-center gap-1"
                >
                  <span>Ver post</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
