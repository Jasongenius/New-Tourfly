import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from '@/src/components/Layout';
import { Hero, Features } from '@/src/components/Hero';
import { AIToolbox } from '@/src/components/AIToolbox';
import { Gallery } from '@/src/components/Gallery';
import { UseCases } from '@/src/components/UseCases';
import { About } from '@/src/components/About';
import { Workflow } from '@/src/components/Workflow';
import { Pricing } from '@/src/components/Pricing';
import { useTranslation } from 'react-i18next';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      {/* Final CTA */}
      <section className="py-32 px-6 bg-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-[0.85]">
            Ready to <br />
            <span className="text-black/20">Transform?</span>
          </h2>
          <button className="bg-black text-white px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all active:scale-95">
            {t('nav.getStarted')}
          </button>
        </div>
      </section>
    </>
  );
}

function SolutionsPage() {
  return (
    <>
      <Features />
      <Workflow />
    </>
  );
}

export default function App() {
  const [credits, setCredits] = useState(3);

  const handleRemix = () => {
    setCredits(prev => Math.max(0, prev - 1));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/templates" element={<UseCases />} />
            <Route path="/tools" element={<AIToolbox />} />
            <Route path="/gallery" element={<Gallery credits={credits} onRemix={handleRemix} />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
