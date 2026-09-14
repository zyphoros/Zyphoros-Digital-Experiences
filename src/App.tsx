/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyZyphoros } from './components/WhyZyphoros';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#160d1b] text-white selection:bg-[#c1ff72] selection:text-[#160d1b] font-body relative">
      {/* Navigation Header */}
      <Header />

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
    </div>
  );
}
