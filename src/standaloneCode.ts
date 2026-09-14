/**
 * Generates the complete 100% self-contained standalone single-file index.html
 * No external dependencies except Google Fonts & inline SVGs.
 * Ready for direct publishing to GitHub Pages, Netlify, Vercel or any static host.
 */
export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zyphoros — Sites e Soluções Tecnológicas de Alto Impacto</title>
  <meta name="description" content="A Zyphoros desenvolve sites cinematográficos, landing pages de alta conversão e sistemas sob medida para empresas que lideram seus mercados.">
  <meta property="og:title" content="Zyphoros — Sites e Soluções Tecnológicas">
  <meta property="og:description" content="Engenharia digital de elite com foco obsessivo em performance e conversão real.">
  <meta property="og:type" content="website">

  <!-- Google Fonts: Space Grotesk & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.cdnfonts.com/css/sansation" rel="stylesheet">

  <style>
    /* ==========================================================================
       ZYPHOROS DESIGN SYSTEM & CSS RESET
       ========================================================================== */
    :root {
      --bg-primary: #160d1b;
      --brand-lilac: #b79aff;
      --neon-lime: #c1ff72;
      --text-main: #ffffff;
      --text-muted: #94a3b8;
      --glass-bg: rgba(28, 17, 36, 0.45);
      --glass-border: rgba(255, 255, 255, 0.08);
      --font-heading: 'Space Grotesk', -apple-system, sans-serif;
      --font-body: 'Inter', system-ui, -apple-system, sans-serif;
      --font-rotis: 'Rotis Sans Serif', 'Rotis II Sans Pro', -apple-system, sans-serif;
      --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
    }

    @font-face {
      font-family: 'Rotis Sans Serif';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Rotis Sans Serif'), local('Rotis II Sans Pro'), url('/fonts/RotisSansSerif-Regular.ttf') format('truetype');
    }

    @font-face {
      font-family: 'Rotis Sans Serif';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Rotis Sans Serif Bold'), local('Rotis II Sans Pro Bold'), url('/fonts/RotisSansSerif-Bold.ttf') format('truetype');
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
      background-color: var(--bg-primary);
      color: var(--text-main);
    }

    body {
      font-family: var(--font-body);
      background-color: var(--bg-primary);
      color: var(--text-main);
      line-height: 1.6;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    ::selection {
      background-color: var(--neon-lime);
      color: var(--bg-primary);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      cursor: pointer;
      font-family: inherit;
      border: none;
      background: none;
    }

    /* Container Utility */
    .container {
      width: 100%;
      max-width: 1240px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    /* Subtle Circuit & Noise Grid */
    .tech-grid {
      background-size: 48px 48px;
      background-image: 
        linear-gradient(to right, rgba(183, 154, 255, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(183, 154, 255, 0.04) 1px, transparent 1px);
    }

    /* Glassmorphism Card */
    .glass-card {
      background: var(--glass-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      transition: border-color 0.3s ease, box-shadow 0.4s var(--ease-snappy), transform 0.4s var(--ease-snappy);
    }

    .glass-card:hover {
      border-color: rgba(183, 154, 255, 0.35);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
    }

    /* Header Styling */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.3s ease;
    }

    header.scrolled {
      background: rgba(22, 13, 27, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(183, 154, 255, 0.15);
      padding: 0.85rem 0;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    .brand-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--brand-lilac), var(--bg-primary));
      border: 1px solid rgba(183, 154, 255, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 15px rgba(183, 154, 255, 0.3);
    }

    .brand-name {
      font-family: 'Sansation', var(--font-heading);
      font-size: 1.45rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: var(--text-main);
      display: flex;
      align-items: center;
    }

    .brand-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--neon-lime);
      margin-left: 4px;
    }

    .brand-subtitle {
      font-family: var(--font-rotis);
      font-size: 0.65rem;
      letter-spacing: 0.18em;
      color: var(--text-muted);
      margin-top: -2px;
      display: block;
    }

    nav.desktop-nav {
      display: none;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      nav.desktop-nav {
        display: flex;
      }
    }

    nav.desktop-nav a {
      font-size: 0.9rem;
      font-weight: 500;
      color: rgba(183, 154, 255, 0.8);
      transition: color 0.2s;
      position: relative;
    }

    nav.desktop-nav a:hover {
      color: #ffffff;
    }

    nav.desktop-nav a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--neon-lime);
      transition: width 0.3s;
    }

    nav.desktop-nav a:hover::after {
      width: 100%;
    }

    .header-cta {
      display: none;
    }

    @media (min-width: 768px) {
      .header-cta {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--neon-lime);
        color: var(--bg-primary);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.55rem 1.15rem;
        border-radius: 8px;
        box-shadow: 0 0 18px rgba(193, 255, 114, 0.35);
        transition: all 0.25s var(--ease-snappy);
      }

      .header-cta:hover {
        background: #d3ff91;
        box-shadow: 0 0 28px rgba(193, 255, 114, 0.6);
        transform: translateY(-1px);
      }
    }

    /* Mobile hamburger */
    .mobile-menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      width: 40px;
      height: 40px;
    }

    @media (min-width: 768px) {
      .mobile-menu-btn {
        display: none;
      }
    }

    .mobile-menu-drawer {
      display: none;
      flex-direction: column;
      background: rgba(22, 13, 27, 0.98);
      padding: 1.5rem;
      border-bottom: 1px solid rgba(183, 154, 255, 0.2);
    }

    .mobile-menu-drawer.open {
      display: flex;
    }

    .mobile-menu-drawer a {
      padding: 0.75rem 0;
      font-size: 1.1rem;
      color: var(--brand-lilac);
      border-bottom: 1px solid rgba(183, 154, 255, 0.1);
    }

    /* ==========================================================================
       HERO SECTION
       ========================================================================== */
    .hero-section {
      position: relative;
      min-height: 92vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8rem 0 4rem 0;
      overflow: hidden;
      text-align: center;
    }

    .hero-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .cursor-glow {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(193, 255, 114, 0.12) 0%, rgba(183, 154, 255, 0.14) 40%, rgba(22, 13, 27, 0) 75%);
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
      z-index: 2;
      opacity: 0;
    }

    .hero-content {
      position: relative;
      z-index: 5;
      max-width: 960px;
      margin: 0 auto;
    }

    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 1rem;
      border-radius: 9999px;
      background: rgba(28, 17, 36, 0.8);
      border: 1px solid rgba(183, 154, 255, 0.3);
      box-shadow: 0 0 15px rgba(183, 154, 255, 0.2);
      margin-bottom: 2rem;
    }

    .badge-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--neon-lime);
      animation: pulse 2s infinite;
    }

    .badge-text {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--brand-lilac);
    }

    .hero-title {
      font-family: var(--font-heading);
      font-size: clamp(2.6rem, 7vw, 5.2rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.03em;
      margin-bottom: 1.75rem;
    }

    .hero-title-gradient {
      background: linear-gradient(90deg, #ffffff 10%, var(--brand-lilac) 65%, var(--neon-lime) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-desc {
      font-size: clamp(1rem, 2.5vw, 1.35rem);
      color: var(--text-muted);
      max-width: 680px;
      margin: 0 auto 2.5rem auto;
      font-weight: 400;
    }

    .hero-ctas {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 640px) {
      .hero-ctas {
        flex-direction: row;
        gap: 1.25rem;
      }
    }

    .btn-primary-lime {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background: var(--neon-lime);
      color: var(--bg-primary);
      font-weight: 800;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 1rem 2rem;
      border-radius: 12px;
      box-shadow: 0 0 30px rgba(193, 255, 114, 0.45);
      transition: all 0.3s var(--ease-snappy);
      width: 100%;
    }

    @media (min-width: 640px) {
      .btn-primary-lime {
        width: auto;
      }
    }

    .btn-primary-lime:hover {
      background: #d4ff94;
      box-shadow: 0 0 45px rgba(193, 255, 114, 0.7);
      transform: translateY(-2px);
    }

    .btn-secondary-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: rgba(28, 17, 36, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(183, 154, 255, 0.4);
      color: #ffffff;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 1rem 2rem;
      border-radius: 12px;
      transition: all 0.3s var(--ease-snappy);
      width: 100%;
    }

    @media (min-width: 640px) {
      .btn-secondary-outline {
        width: auto;
      }
    }

    .btn-secondary-outline:hover {
      border-color: var(--brand-lilac);
      background: rgba(38, 22, 50, 0.8);
      color: var(--neon-lime);
      transform: translateY(-2px);
    }

    /* Hero proof stats */
    .hero-stats {
      margin-top: 3.5rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(183, 154, 255, 0.15);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      text-align: left;
    }

    @media (min-width: 768px) {
      .hero-stats {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .stat-num {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 800;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-top: 0.35rem;
    }

    /* ==========================================================================
       SECTIONS SHARED HEADINGS
       ========================================================================== */
    section {
      padding: 6rem 0;
      position: relative;
    }

    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0.25rem 0.85rem;
      border-radius: 9999px;
      background: rgba(183, 154, 255, 0.1);
      border: 1px solid rgba(183, 154, 255, 0.25);
      color: var(--brand-lilac);
      margin-bottom: 1rem;
    }

    .section-title {
      font-family: var(--font-heading);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 1rem;
    }

    .section-desc {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 600px;
    }

    /* ==========================================================================
       SERVIÇOS SECTION (3D TILT CARDS)
       ========================================================================== */
    .services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-top: 3.5rem;
    }

    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .service-card-wrapper {
      perspective: 1000px;
    }

    .service-card {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform-style: preserve-3d;
      transition: transform 0.15s ease-out, border-color 0.3s;
    }

    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .service-icon-box {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: #20132b;
      border: 1px solid rgba(183, 154, 255, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .service-pill {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      background: rgba(183, 154, 255, 0.1);
      color: var(--brand-lilac);
      border: 1px solid rgba(183, 154, 255, 0.2);
    }

    .service-title {
      font-family: var(--font-heading);
      font-size: 1.4rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.75rem;
    }

    .service-desc {
      font-size: 0.95rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .service-deliverables {
      margin-top: 1.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(183, 154, 255, 0.1);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .deliverable-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: #e2e8f0;
    }

    .deliverable-dot {
      color: var(--neon-lime);
    }

    .service-footer {
      margin-top: 2rem;
      padding-top: 1rem;
    }

    .service-link {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--brand-lilac);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: color 0.2s;
    }

    .service-link:hover {
      color: var(--neon-lime);
    }

    /* ==========================================================================
       PORTFÓLIO SECTION
       ========================================================================== */
    .portfolio-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-top: 3.5rem;
    }

    @media (min-width: 768px) {
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .portfolio-card {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .portfolio-visual {
      height: 260px;
      background: linear-gradient(135deg, #251532, #140b18);
      padding: 1.25rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 1px solid rgba(183, 154, 255, 0.15);
      overflow: hidden;
    }

    .carousel-container {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .carousel-slide {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      opacity: 0;
      transition: opacity 0.6s ease-in-out;
      z-index: 1;
    }

    .carousel-slide.active {
      opacity: 1;
      z-index: 2;
    }

    .carousel-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(20, 11, 24, 0.85), rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4));
      z-index: 3;
      pointer-events: none;
    }

    .carousel-dots {
      position: absolute;
      bottom: 12px;
      right: 12px;
      display: flex;
      gap: 6px;
      padding: 4px 8px;
      border-radius: 9999px;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      z-index: 4;
      pointer-events: none;
    }

    .carousel-dot {
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.4);
      transition: all 0.3s ease;
    }

    .carousel-dot.active {
      width: 16px;
      background: var(--neon-lime);
    }

    .portfolio-metric {
      font-family: var(--font-heading);
      font-size: 2.75rem;
      font-weight: 800;
      line-height: 1;
    }

    .portfolio-metric-sub {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 0.35rem;
    }

    .portfolio-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .portfolio-tag {
      font-size: 0.7rem;
      font-family: monospace;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      background: rgba(22, 13, 27, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-muted);
    }

    .portfolio-info {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
    }

    .portfolio-client {
      font-family: var(--font-heading);
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .portfolio-summary {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .portfolio-cta-row {
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(183, 154, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }

    /* ==========================================================================
       POR QUE A ZYPHOROS (ANIMATED LIST WITH BIG NUMBERS)
       ========================================================================== */
    .why-section-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    @media (min-width: 992px) {
      .why-section-grid {
        grid-template-columns: 5fr 7fr;
      }
    }

    .why-item {
      display: flex;
      gap: 1.5rem;
      padding: 1.75rem;
      margin-bottom: 1.5rem;
      opacity: 0;
      transform: translateY(25px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .why-item.revealed {
      opacity: 1;
      transform: translateY(0);
    }

    .why-num {
      font-family: var(--font-heading);
      font-size: 3rem;
      font-weight: 800;
      color: rgba(183, 154, 255, 0.4);
      line-height: 1;
      font-mono: monospace;
      flex-shrink: 0;
    }

    .why-item:hover .why-num {
      color: var(--neon-lime);
    }

    .why-title {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }

    .why-desc {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* ==========================================================================
       NOVIDADES DO MUNDO TECH (INSTAGRAM CARDS)
       ========================================================================== */
    .tech-cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-top: 3.5rem;
    }

    @media (min-width: 768px) {
      .tech-cards-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .tech-post-card {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .tech-post-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    .tech-post-author {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-family: monospace;
      color: var(--text-muted);
    }

    .tech-post-title {
      font-family: var(--font-heading);
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.35;
      margin-bottom: 0.75rem;
    }

    .tech-post-excerpt {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .tech-post-footer {
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(183, 154, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .btn-instagram {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      background: linear-gradient(135deg, #20132b, #2d183d);
      border: 1px solid rgba(183, 154, 255, 0.4);
      color: #ffffff;
      font-weight: 700;
      font-size: 0.85rem;
      transition: all 0.3s;
    }

    .btn-instagram:hover {
      border-color: var(--brand-lilac);
      box-shadow: 0 0 20px rgba(183, 154, 255, 0.3);
      color: var(--neon-lime);
    }

    /* ==========================================================================
       FINAL CTA SECTION
       ========================================================================== */
    .final-cta-section {
      text-align: center;
      padding: 8rem 0;
      position: relative;
      overflow: hidden;
    }

    .final-cta-glow-lilac {
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: var(--brand-lilac);
      filter: blur(180px);
      opacity: 0.18;
      pointer-events: none;
    }

    .final-cta-glow-lime {
      position: absolute;
      top: 50%;
      right: 25%;
      transform: translateY(-50%);
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: var(--neon-lime);
      filter: blur(180px);
      opacity: 0.15;
      pointer-events: none;
    }

    /* ==========================================================================
       FOOTER
       ========================================================================== */
    footer {
      background: #100814;
      border-top: 1px solid rgba(183, 154, 255, 0.15);
      padding: 4rem 0 2rem 0;
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      margin-bottom: 3rem;
    }

    @media (min-width: 768px) {
      .footer-grid {
        grid-template-columns: 2fr 1fr 1fr;
      }
    }

    .footer-col h4 {
      font-family: var(--font-heading);
      font-size: 0.9rem;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .footer-links a:hover {
      color: var(--neon-lime);
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(183, 154, 255, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
      font-size: 0.75rem;
    }

    @media (min-width: 640px) {
      .footer-bottom {
        flex-direction: row;
      }
    }

    /* ==========================================================================
       FLOATING WHATSAPP BUTTON
       ========================================================================== */
    .floating-whatsapp-container {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 999;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .floating-whatsapp-tooltip {
      background: #1c1124;
      border: 1px solid rgba(183, 154, 255, 0.4);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.4rem 0.85rem;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.2s;
      pointer-events: none;
      white-space: nowrap;
    }

    .floating-whatsapp-container:hover .floating-whatsapp-tooltip {
      opacity: 1;
      transform: translateX(0);
    }

    .floating-whatsapp-btn {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: #25d366;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      box-shadow: 0 0 25px rgba(37, 211, 102, 0.5);
      position: relative;
      transition: transform 0.3s var(--ease-snappy), box-shadow 0.3s;
    }

    .floating-whatsapp-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 0 35px rgba(37, 211, 102, 0.8);
    }

    .floating-pulse-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: #25d366;
      opacity: 0.6;
      animation: pulse-ring 2.5s infinite;
      z-index: -1;
    }

    @keyframes pulse-ring {
      0% {
        transform: scale(1);
        opacity: 0.6;
      }
      100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    /* Accessibility: Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  </style>
</head>
<body class="tech-grid">

  <!-- ==================== HEADER ==================== -->
  <header id="header">
    <div class="container header-content">
      <a href="#" class="brand-logo" aria-label="Página inicial Zyphoros">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="340 260 820 820" fill="#c1ff72">
            <g transform="matrix(1, 0, 0, 1, 438, 49)">
              <g transform="translate(0.932427, 983.707625)">
                <path d="M 311.0625 -287.875 C 340.59375 -308.257812 364.492188 -324.25 382.765625 -335.84375 C 401.046875 -347.445312 420.03125 -358.171875 439.71875 -368.015625 L 439.71875 -517.75 L 311.0625 -587.34375 L 311.0625 -616.859375 L 149.734375 -527.234375 L 50.609375 -587.34375 L 311.0625 -737.078125 L 569.40625 -587.34375 L 569.40625 -287.875 L 311.0625 -138.140625 Z M 311.0625 -587.34375 C 266.070312 -562.738281 221.429688 -537.957031 177.140625 -513 C 132.859375 -488.039062 90.679688 -462.910156 50.609375 -437.609375 L 50.609375 -138.140625 L 311.0625 11.59375 L 569.40625 -138.140625 L 459.75 -198.234375 L 311.0625 -108.609375 L 311.0625 -138.140625 L 180.3125 -218.28125 L 180.3125 -368.015625 L 311.0625 -437.609375 Z M 311.0625 -587.34375 "></path>
              </g>
            </g>
          </svg>
        </div>
        <div style="display: flex; flex-direction: column;">
          <div class="brand-name">
            ZYPHOROS<span class="brand-dot"></span>
          </div>
          <span class="brand-subtitle">digital experiences</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#sobre">Sobre Nós</a>
      </nav>

      <!-- Header CTA -->
      <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zyphoros%20e%20quero%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites." target="_blank" rel="noopener noreferrer" class="header-cta">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
        </svg>
        Fale no WhatsApp
      </a>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Abrir Menu">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-menu-drawer" id="mobile-drawer">
      <a href="#servicos" class="mobile-nav-link">Serviços</a>
      <a href="#portfolio" class="mobile-nav-link">Portfólio</a>
      <a href="#sobre" class="mobile-nav-link">Sobre Nós</a>
      <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zyphoros%20e%20quero%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites." target="_blank" rel="noopener noreferrer" style="margin-top: 1rem; color: var(--neon-lime); font-weight: 700;">
        Fale no WhatsApp →
      </a>
    </div>
  </header>

  <!-- ==================== HERO SECTION ==================== -->
  <section class="hero-section" id="hero">
    <canvas id="circuit-canvas" class="hero-canvas"></canvas>
    <div id="cursor-glow" class="cursor-glow"></div>

    <div class="container hero-content">
      <div class="badge-pill">
        <span class="badge-dot"></span>
        <span class="badge-text">Engenharia Digital & Design Cinematográfico</span>
      </div>

      <h1 class="hero-title">
        Criamos sites e soluções <br>
        <span class="hero-title-gradient">de impacto implacável.</span>
      </h1>

      <p class="hero-desc">
        Design cinematográfico, carregamento sub-segundo e arquitetura digital de elite construída sob medida para transformar visitantes em contratos fechados.
      </p>

      <div class="hero-ctas">
        <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zyphoros%20e%20quero%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites." target="_blank" rel="noopener noreferrer" class="btn-primary-lime">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
          </svg>
          Falar no WhatsApp →
        </a>

        <a href="#portfolio" class="btn-secondary-outline">
          Ver Portfólio ↓
        </a>
      </div>

      <!-- Quick Proofs -->
      <div class="hero-stats">
        <div>
          <div class="stat-num" style="color: var(--neon-lime);">99+</div>
          <div class="stat-label">Google PageSpeed Score</div>
        </div>
        <div>
          <div class="stat-num" style="color: var(--brand-lilac);">&lt; 0.8s</div>
          <div class="stat-label">Carregamento Médio</div>
        </div>
        <div>
          <div class="stat-num" style="color: #ffffff;">100%</div>
          <div class="stat-label">Design Autoral & Exclusivo</div>
        </div>
        <div>
          <div class="stat-num" style="color: var(--neon-lime);">24/7</div>
          <div class="stat-label">Estabilidade Blindada</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== SERVIÇOS SECTION ==================== -->
  <section id="servicos">
    <div class="container">
      <div style="text-align: center; max-width: 680px; margin: 0 auto 3.5rem auto;">
        <span class="section-tag">Especialidades</span>
        <h2 class="section-title">Soluções digitais arquitetadas para <span style="color: var(--brand-lilac);">dominar mercados</span></h2>
        <p class="section-desc" style="margin: 0 auto;">Zero templates pré-moldados. Construímos ferramentas sob medida com rigor de engenharia.</p>
      </div>

      <div class="services-grid">
        <!-- Service 1 -->
        <div class="service-card-wrapper">
          <div class="glass-card service-card js-tilt">
            <div>
              <div class="service-header">
                <div class="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-lilac)" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <span class="service-pill">Web Flagship</span>
              </div>
              <h3 class="service-title">Criação de Sites de Alta Performance</h3>
              <p class="service-desc">Construção sob medida com carregamento sub-segundo, SEO técnico e experiência estética cinematográfica.</p>
              <div class="service-deliverables">
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Carregamento ultrarrápido (&lt; 1s)</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Design 100% responsivo e autoral</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Otimização avançada para Google</div>
              </div>
            </div>
            <div class="service-footer">
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Cria%C3%A7%C3%A3o%20de%20Sites." target="_blank" rel="noopener noreferrer" class="service-link">
                Solicitar proposta técnica →
              </a>
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="service-card-wrapper">
          <div class="glass-card service-card js-tilt">
            <div>
              <div class="service-header">
                <div class="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-lime)" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <span class="service-pill">Foco em ROI</span>
              </div>
              <h3 class="service-title">Landing Pages de Alta Conversão</h3>
              <p class="service-desc">Páginas desenhadas psicologicamente para transformar cliques em clientes qualificados no WhatsApp e CRM.</p>
              <div class="service-deliverables">
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Copywriting persuasivo de alto impacto</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Arquitetura de conversão sem atrito</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Integração instantânea com WhatsApp</div>
              </div>
            </div>
            <div class="service-footer">
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Landing%20Pages." target="_blank" rel="noopener noreferrer" class="service-link">
                Solicitar proposta técnica →
              </a>
            </div>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="service-card-wrapper">
          <div class="glass-card service-card js-tilt">
            <div>
              <div class="service-header">
                <div class="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-lilac)" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <span class="service-pill">Custom Software</span>
              </div>
              <h3 class="service-title">Aplicações Web & Portais Sob Medida</h3>
              <p class="service-desc">Sistemas complexos transformados em interfaces intuitivas, seguras e preparadas para escalabilidade.</p>
              <div class="service-deliverables">
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Dashboards e painéis de controle</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Autenticação e proteção de dados</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Conexão com APIs e bancos modernos</div>
              </div>
            </div>
            <div class="service-footer">
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Aplica%C3%A7%C3%B5es%20Web." target="_blank" rel="noopener noreferrer" class="service-link">
                Solicitar proposta técnica →
              </a>
            </div>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="service-card-wrapper">
          <div class="glass-card service-card js-tilt">
            <div>
              <div class="service-header">
                <div class="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-lime)" stroke-width="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                  </svg>
                </div>
                <span class="service-pill">Inovação & IA</span>
              </div>
              <h3 class="service-title">Soluções Tecnológicas & IA Integrada</h3>
              <p class="service-desc">Automação de processos repetitivos e integração de inteligência artificial aplicada para enxugar custos.</p>
              <div class="service-deliverables">
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Chatbots com IA para qualificação</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Automação de pipelines operacionais</div>
                <div class="deliverable-item"><span class="deliverable-dot">✔</span> Sincronização automática com CRM</div>
              </div>
            </div>
            <div class="service-footer">
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Automa%C3%A7%C3%A3o%20e%20IA." target="_blank" rel="noopener noreferrer" class="service-link">
                Solicitar proposta técnica →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== PORTFÓLIO SECTION ==================== -->
  <section id="portfolio" style="border-top: 1px solid rgba(183, 154, 255, 0.1);">
    <div class="container">
      <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; margin-bottom: 3.5rem;">
        <span class="section-tag" style="color: var(--neon-lime); border-color: rgba(193, 255, 114, 0.3);">Cases de Sucesso</span>
        <h2 class="section-title">Resultados reais construídos com precisão cirúrgica</h2>
        <p class="section-desc">Projetos onde arquitetura técnica e design geram crescimento mensurável de faturamento.</p>
      </div>

      <div class="portfolio-grid">
        <!-- Case 1: Gole de Poesia -->
        <div class="glass-card portfolio-card js-carousel-card">
          <div class="portfolio-visual">
            <div class="carousel-container">
              <img src="https://drive.google.com/uc?export=view&id=1eWeFo899Yqay74nVfwQlNC3_jeIqDtwv" alt="Gole de Poesia 1" referrerpolicy="no-referrer" class="carousel-slide active" />
              <img src="https://drive.google.com/uc?export=view&id=1OqmT5PMqaYF30IgKoQzJ1-1Y15qQ6Emz" alt="Gole de Poesia 2" referrerpolicy="no-referrer" class="carousel-slide" />
              <img src="https://drive.google.com/uc?export=view&id=14t59nbbI8EOcuurqnVgKapzdX4jrqn4m" alt="Gole de Poesia 3" referrerpolicy="no-referrer" class="carousel-slide" />
              <div class="carousel-overlay"></div>
              <div class="carousel-dots">
                <span class="carousel-dot active"></span>
                <span class="carousel-dot"></span>
                <span class="carousel-dot"></span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5;">
              <span style="font-family: monospace; font-size: 0.75rem; color: #ffffff; background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15);">gole-de-poesia.vercel.app</span>
              <span class="service-pill" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);">Cultura & Literatura</span>
            </div>
            <div class="portfolio-tags" style="position: relative; z-index: 5;">
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Next.js</span>
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Tailwind</span>
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Vercel</span>
            </div>
          </div>
          <div class="portfolio-info">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3 class="portfolio-client" style="margin-bottom: 0;">Gole de Poesia</h3>
                <a href="https://gole-de-poesia.vercel.app" target="_blank" rel="noopener noreferrer" style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">gole-de-poesia.vercel.app ↗</a>
              </div>
              <p class="portfolio-summary">Plataforma imersiva de literatura contemporânea e poesia, unindo design editorial minimalista e experiência de leitura fluida.</p>
            </div>
            <div class="portfolio-cta-row">
              <a href="https://gole-de-poesia.vercel.app" target="_blank" rel="noopener noreferrer" style="color: var(--brand-lilac); font-weight: 500;">Acessar projeto online →</a>
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Gostei%20do%20projeto%20Gole%20de%20Poesia%20e%20quero%20algo%20nesse%20n%C3%ADvel." target="_blank" rel="noopener noreferrer" style="color: var(--neon-lime); font-weight: 600;">Quero similar</a>
            </div>
          </div>
        </div>

        <!-- Case 2: Fergon Filtros -->
        <div class="glass-card portfolio-card js-carousel-card">
          <div class="portfolio-visual">
            <div class="carousel-container">
              <img src="https://drive.google.com/uc?export=view&id=1ERjgeQbqt2DWSuW9KfjUVMhFpQsOrOJz" alt="Fergon Filtros 1" referrerpolicy="no-referrer" class="carousel-slide active" />
              <img src="https://drive.google.com/uc?export=view&id=1PTCR6dVQ1il0kjjZsmOwZrDTwKzineZ6" alt="Fergon Filtros 2" referrerpolicy="no-referrer" class="carousel-slide" />
              <img src="https://drive.google.com/uc?export=view&id=1waTrPu4CdAFRuaagxB8BJoz70necheq4" alt="Fergon Filtros 3" referrerpolicy="no-referrer" class="carousel-slide" />
              <div class="carousel-overlay"></div>
              <div class="carousel-dots">
                <span class="carousel-dot active"></span>
                <span class="carousel-dot"></span>
                <span class="carousel-dot"></span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5;">
              <span style="font-family: monospace; font-size: 0.75rem; color: #ffffff; background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15);">fergon-filtros.vercel.app</span>
              <span class="service-pill" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);">Indústria & E-commerce</span>
            </div>
            <div class="portfolio-tags" style="position: relative; z-index: 5;">
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">React</span>
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Tailwind</span>
            </div>
          </div>
          <div class="portfolio-info">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3 class="portfolio-client" style="margin-bottom: 0;">Fergon Filtros</h3>
                <a href="https://fergon-filtros.vercel.app" target="_blank" rel="noopener noreferrer" style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">fergon-filtros.vercel.app ↗</a>
              </div>
              <p class="portfolio-summary">Catálogo digital e plataforma institucional para fabricante de filtragem industrial, otimizando cotações e apresentação técnica.</p>
            </div>
            <div class="portfolio-cta-row">
              <a href="https://fergon-filtros.vercel.app" target="_blank" rel="noopener noreferrer" style="color: var(--brand-lilac); font-weight: 500;">Acessar projeto online →</a>
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Gostei%20do%20projeto%20Fergon%20Filtros%20e%20quero%20algo%20nesse%20n%C3%ADvel." target="_blank" rel="noopener noreferrer" style="color: var(--neon-lime); font-weight: 600;">Quero similar</a>
            </div>
          </div>
        </div>

        <!-- Case 3: Prompt Antigenérico -->
        <div class="glass-card portfolio-card js-carousel-card">
          <div class="portfolio-visual">
            <div class="carousel-container">
              <img src="https://drive.google.com/uc?export=view&id=1d8hZLElEV6fRe-6YMbdI3RP8fU_SpwJQ" alt="Prompt Antigenérico 1" referrerpolicy="no-referrer" class="carousel-slide active" />
              <img src="https://drive.google.com/uc?export=view&id=1YYbkeL-IayTxkrf-9Y9chRMLE1ANwDMf" alt="Prompt Antigenérico 2" referrerpolicy="no-referrer" class="carousel-slide" />
              <img src="https://drive.google.com/uc?export=view&id=1ZpTDn0MH6yifg1A8w6LxuSHGWdp8y3Ad" alt="Prompt Antigenérico 3" referrerpolicy="no-referrer" class="carousel-slide" />
              <div class="carousel-overlay"></div>
              <div class="carousel-dots">
                <span class="carousel-dot active"></span>
                <span class="carousel-dot"></span>
                <span class="carousel-dot"></span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5;">
              <span style="font-family: monospace; font-size: 0.75rem; color: #ffffff; background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15);">prompt-antigenerico.vercel.app</span>
              <span class="service-pill" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);">IA & Produtividade</span>
            </div>
            <div class="portfolio-tags" style="position: relative; z-index: 5;">
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Next.js</span>
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">IA</span>
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Vercel</span>
            </div>
          </div>
          <div class="portfolio-info">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3 class="portfolio-client" style="margin-bottom: 0;">Prompt Antigenérico</h3>
                <a href="https://prompt-antigenerico.vercel.app" target="_blank" rel="noopener noreferrer" style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">prompt-antigenerico.vercel.app ↗</a>
              </div>
              <p class="portfolio-summary">Ferramenta para criação, refinamento e engenharia de prompts de alto rendimento, eliminando respostas genéricas de modelos de IA.</p>
            </div>
            <div class="portfolio-cta-row">
              <a href="https://prompt-antigenerico.vercel.app" target="_blank" rel="noopener noreferrer" style="color: var(--brand-lilac); font-weight: 500;">Acessar projeto online →</a>
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Gostei%20do%20projeto%20Prompt%20Antigen%C3%A9rico%20e%20quero%20algo%20nesse%20n%C3%ADvel." target="_blank" rel="noopener noreferrer" style="color: var(--neon-lime); font-weight: 600;">Quero similar</a>
            </div>
          </div>
        </div>

        <!-- Case 4: Juliana Brown -->
        <div class="glass-card portfolio-card js-carousel-card">
          <div class="portfolio-visual">
            <div class="carousel-container">
              <img src="https://drive.google.com/uc?export=view&id=1xgqaf8c86clBEyCTHQhBFLx5PwtgddUL" alt="Juliana Brown 1" referrerpolicy="no-referrer" class="carousel-slide active" />
              <img src="https://drive.google.com/uc?export=view&id=1EEOLrx_bAtrzY07LgyPHUg_srALvcT8P" alt="Juliana Brown 2" referrerpolicy="no-referrer" class="carousel-slide" />
              <img src="https://drive.google.com/uc?export=view&id=1zpnE4q9HMtmWtLOnoQDm_rx3YOYchzI6" alt="Juliana Brown 3" referrerpolicy="no-referrer" class="carousel-slide" />
              <div class="carousel-overlay"></div>
              <div class="carousel-dots">
                <span class="carousel-dot active"></span>
                <span class="carousel-dot"></span>
                <span class="carousel-dot"></span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5;">
              <span style="font-family: monospace; font-size: 0.75rem; color: #ffffff; background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15);">julianabrown.vercel.app</span>
              <span class="service-pill" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);">Portfólio Pessoal</span>
            </div>
            <div class="portfolio-tags" style="position: relative; z-index: 5;">
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">React</span>
              <span class="portfolio-tag" style="background: rgba(0,0,0,0.7); color: #fff;">Framer Motion</span>
            </div>
          </div>
          <div class="portfolio-info">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3 class="portfolio-client" style="margin-bottom: 0;">Juliana Brown</h3>
                <a href="https://julianabrown.vercel.app" target="_blank" rel="noopener noreferrer" style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">julianabrown.vercel.app ↗</a>
              </div>
              <p class="portfolio-summary">Portfólio autoral com transições elegantes, tipografia de alto impacto e narrativa visual refinada para posicionamento de marca pessoal.</p>
            </div>
            <div class="portfolio-cta-row">
              <a href="https://julianabrown.vercel.app" target="_blank" rel="noopener noreferrer" style="color: var(--brand-lilac); font-weight: 500;">Acessar projeto online →</a>
              <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Gostei%20do%20projeto%20Juliana%20Brown%20e%20quero%20algo%20nesse%20n%C3%ADvel." target="_blank" rel="noopener noreferrer" style="color: var(--neon-lime); font-weight: 600;">Quero similar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== POR QUE A ZYPHOROS SECTION ==================== -->
  <section id="sobre">
    <div class="container">
      <div class="why-section-grid">
        <div>
          <span class="section-tag">O Padrão Zyphoros</span>
          <h2 class="section-title">A diferença entre um site comum e uma <span style="color: var(--brand-lilac);">potência comercial.</span></h2>
          <p class="section-desc" style="margin-bottom: 2rem;">
            Se o seu site for lento, genérico ou amador, seu cliente simplesmente fechará a aba e comprará do concorrente. Nós eliminamos essa brecha.
          </p>
          <div class="glass-card" style="padding: 1.5rem; border-color: rgba(183, 154, 255, 0.3);">
            <div style="font-family: monospace; font-size: 0.75rem; text-transform: uppercase; color: var(--neon-lime); margin-bottom: 0.5rem;">Compromisso Irreversível</div>
            <p style="font-size: 0.9rem; color: #e2e8f0;">Desenvolvemos cada aplicação sob medida, sem atalhos que comprometam a velocidade e a escala do seu negócio.</p>
          </div>
        </div>

        <div>
          <div class="glass-card why-item js-reveal">
            <div class="why-num">01</div>
            <div>
              <h3 class="why-title">Engenharia de Performance Extrema</h3>
              <p class="why-desc">Zero sites pesados. Código esculpido para notas 95+ no Google PageSpeed e carregamento sub-segundo em conexões 4G.</p>
            </div>
          </div>

          <div class="glass-card why-item js-reveal">
            <div class="why-num">02</div>
            <div>
              <h3 class="why-title">Design Cinematográfico & 100% Exclusivo</h3>
              <p class="why-desc">Banimos templates batidos do WordPress. Criamos uma identidade magnética que eleva o valor percebido da sua marca.</p>
            </div>
          </div>

          <div class="glass-card why-item js-reveal">
            <div class="why-num">03</div>
            <div>
              <h3 class="why-title">Foco Obsessivo em Conversão & ROI</h3>
              <p class="why-desc">Beleza sem faturamento é desperdício. Toda a estrutura e hierarquia visual são desenhadas para direcionar o cliente ao fechamento.</p>
            </div>
          </div>

          <div class="glass-card why-item js-reveal">
            <div class="why-num">04</div>
            <div>
              <h3 class="why-title">Código Moderno, Seguro e Escalável</h3>
              <p class="why-desc">Construído com padrões que acompanham a evolução do seu negócio sem necessidade de retrabalho futuro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== FINAL CTA SECTION ==================== -->
  <section class="final-cta-section">
    <div class="final-cta-glow-lilac"></div>
    <div class="final-cta-glow-lime"></div>

    <div class="container" style="position: relative; z-index: 5;">
      <div class="badge-pill" style="margin-bottom: 1.5rem;">
        <span class="badge-dot" style="background: var(--neon-lime);"></span>
        <span class="badge-text" style="color: var(--neon-lime);">Agenda Aberta para Novos Projetos</span>
      </div>

      <h2 class="hero-title" style="font-size: clamp(2.2rem, 5vw, 4.2rem); max-width: 820px; margin: 0 auto 1.5rem auto;">
        Pronto para transformar sua presença digital em uma <br>
        <span class="hero-title-gradient">máquina de resultados?</span>
      </h2>

      <p class="hero-desc" style="max-width: 620px; margin-bottom: 2.5rem;">
        Cada semana com um site lento e amador custa contratos valiosos. Fale diretamente com nosso arquiteto técnico agora e receba um diagnóstico exclusivo.
      </p>

      <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zyphoros%20e%20quero%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites." target="_blank" rel="noopener noreferrer" class="btn-primary-lime" style="font-size: 1.1rem; padding: 1.25rem 2.5rem;">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
        </svg>
        Chamar no WhatsApp agora →
      </a>

      <div style="margin-top: 1.25rem; font-size: 0.8rem; font-family: monospace; color: var(--text-muted);">
        WhatsApp Direto: (61) 99835-8397 • Resposta rápida em horário comercial
      </div>
    </div>
  </section>

  <!-- ==================== FOOTER ==================== -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <div class="brand-icon">
              <svg width="22" height="22" viewBox="340 260 820 820" fill="#c1ff72">
                <g transform="matrix(1, 0, 0, 1, 438, 49)">
                  <g transform="translate(0.932427, 983.707625)">
                    <path d="M 311.0625 -287.875 C 340.59375 -308.257812 364.492188 -324.25 382.765625 -335.84375 C 401.046875 -347.445312 420.03125 -358.171875 439.71875 -368.015625 L 439.71875 -517.75 L 311.0625 -587.34375 L 311.0625 -616.859375 L 149.734375 -527.234375 L 50.609375 -587.34375 L 311.0625 -737.078125 L 569.40625 -587.34375 L 569.40625 -287.875 L 311.0625 -138.140625 Z M 311.0625 -587.34375 C 266.070312 -562.738281 221.429688 -537.957031 177.140625 -513 C 132.859375 -488.039062 90.679688 -462.910156 50.609375 -437.609375 L 50.609375 -138.140625 L 311.0625 11.59375 L 569.40625 -138.140625 L 459.75 -198.234375 L 311.0625 -108.609375 L 311.0625 -138.140625 L 180.3125 -218.28125 L 180.3125 -368.015625 L 311.0625 -437.609375 Z M 311.0625 -587.34375 "></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="brand-name">ZYPHOROS<span class="brand-dot"></span></div>
          </div>
          <p style="max-width: 380px; line-height: 1.6;">
            Desenvolvimento de sites de alta performance, landing pages que convertem e soluções tecnológicas sob medida para empresas em expansão.
          </p>
        </div>

        <div class="footer-col">
          <h4>Navegação</h4>
          <ul class="footer-links">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Canais Diretos</h4>
          <ul class="footer-links">
            <li><a href="https://instagram.com/Zyphoros_Tech" target="_blank" rel="noopener noreferrer">Instagram @Zyphoros_Tech ↗</a></li>
            <li><a href="https://wa.me/5561998358397" target="_blank" rel="noopener noreferrer">WhatsApp (61) 99835-8397 ↗</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 Zyphoros Soluções Tecnológicas. Todos os direitos reservados.
        </div>
        <div>
          Engenharia Digital de Alta Performance • Feito para Converter
        </div>
      </div>
    </div>
  </footer>

  <!-- ==================== FLOATING WHATSAPP BUTTON ==================== -->
  <div class="floating-whatsapp-container">
    <div class="floating-whatsapp-tooltip">
      <span style="color: var(--neon-lime);">●</span> Fale conosco no WhatsApp
    </div>
    <a href="https://wa.me/5561998358397?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zyphoros%20e%20quero%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites." target="_blank" rel="noopener noreferrer" class="floating-whatsapp-btn" aria-label="WhatsApp Direto">
      <div class="floating-pulse-ring"></div>
      <svg width="30" height="30" fill="#ffffff" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
      </svg>
    </a>
  </div>

  <!-- ==================== JAVASCRIPT VANILLA INTERATIVO ==================== -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Header Scroll Blur Effect
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, { passive: true });

      // 2. Mobile Menu Toggle
      const mobileToggle = document.getElementById('mobile-toggle');
      const mobileDrawer = document.getElementById('mobile-drawer');
      if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
          mobileDrawer.classList.toggle('open');
        });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
          });
        });
      }

      // 3. Hero Cursor Glow Effect
      const hero = document.getElementById('hero');
      const glow = document.getElementById('cursor-glow');
      if (hero && glow) {
        hero.addEventListener('mousemove', (e) => {
          const rect = hero.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          glow.style.left = x + 'px';
          glow.style.top = y + 'px';
          glow.style.opacity = '1';
        });

        hero.addEventListener('mouseleave', () => {
          glow.style.opacity = '0';
        });
      }

      // 4. Interactive Circuit Network Canvas
      const canvas = document.getElementById('circuit-canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = hero.clientWidth;
        let height = canvas.height = hero.clientHeight;

        window.addEventListener('resize', () => {
          if (!hero) return;
          width = canvas.width = hero.clientWidth;
          height = canvas.height = hero.clientHeight;
        });

        const nodeCount = Math.min(Math.floor((width * height) / 18000), 50);
        const nodes = [];
        const colors = ['rgba(183, 154, 255, 0.7)', 'rgba(193, 255, 114, 0.65)', 'rgba(255, 255, 255, 0.5)'];

        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }

        let mouseX = -1000;
        let mouseY = -1000;

        hero.addEventListener('mousemove', (e) => {
          const rect = hero.getBoundingClientRect();
          mouseX = e.clientX - rect.left;
          mouseY = e.clientY - rect.top;
        });

        hero.addEventListener('mouseleave', () => {
          mouseX = -1000;
          mouseY = -1000;
        });

        function animateCanvas() {
          ctx.clearRect(0, 0, width, height);

          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            // Mouse proximity repulsion
            const dx = node.x - mouseX;
            const dy = node.y - mouseY;
            const dist = Math.hypot(dx, dy);
            if (dist < 110 && dist > 0) {
              const force = (110 - dist) / 110;
              node.x += (dx / dist) * force * 1.5;
              node.y += (dy / dist) * force * 1.5;
            }

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();

            // Connections
            for (let j = i + 1; j < nodes.length; j++) {
              const other = nodes[j];
              const d = Math.hypot(node.x - other.x, node.y - other.y);
              if (d < 130) {
                const alpha = (1 - d / 130) * 0.2;
                ctx.strokeStyle = 'rgba(183, 154, 255, ' + alpha + ')';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
              }
            }
          }

          requestAnimationFrame(animateCanvas);
        }
        animateCanvas();
      }

      // 5. 3D Tilt for Service Cards
      const tiltCards = document.querySelectorAll('.js-tilt');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;
          card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
      });

      // 6. Scroll Reveal with Intersection Observer
      const reveals = document.querySelectorAll('.js-reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.15 });

      reveals.forEach(el => observer.observe(el));

      // 7. Automatic Crossfade Screenshot Carousel for Portfolio Cards
      const carouselCards = document.querySelectorAll('.js-carousel-card');
      carouselCards.forEach((card) => {
        const slides = card.querySelectorAll('.carousel-slide');
        const dots = card.querySelectorAll('.carousel-dot');
        if (slides.length <= 1) return;

        let currentIndex = 0;
        let isHovered = false;

        card.addEventListener('mouseenter', () => {
          isHovered = true;
        });

        card.addEventListener('mouseleave', () => {
          isHovered = false;
        });

        // Error fallback for Google Drive images
        slides.forEach((img) => {
          img.addEventListener('error', function() {
            const currentSrc = this.getAttribute('src');
            if (currentSrc && currentSrc.includes('id=')) {
              const fileId = currentSrc.split('id=')[1].split('&')[0];
              if (!currentSrc.includes('googleusercontent.com')) {
                this.src = 'https://lh3.googleusercontent.com/d/' + fileId;
              }
            }
          });
        });

        setInterval(() => {
          if (isHovered) return;
          slides[currentIndex].classList.remove('active');
          if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

          currentIndex = (currentIndex + 1) % slides.length;

          slides[currentIndex].classList.add('active');
          if (dots[currentIndex]) dots[currentIndex].classList.add('active');
        }, 3000);
      });
    });
  </script>
</body>
</html>`;
