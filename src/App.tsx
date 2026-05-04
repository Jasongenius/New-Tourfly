import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Header, Footer } from '@/src/components/Layout';
import { Hero } from '@/src/components/Hero';
import { BusinessStats } from '@/src/components/BusinessStats';
import { IndustriesGrid } from '@/src/components/IndustriesGrid';
import { UseCases } from '@/src/components/UseCases';
import { ComparisonTable } from '@/src/components/ComparisonTable';
import { MobileApp } from '@/src/components/MobileApp';
import { FAQ } from '@/src/components/FAQ';
import { Pricing } from '@/src/components/Pricing';
import { About } from '@/src/components/About';
import { FinalCTA } from '@/src/components/FinalCTA';
import Solutions from '@/src/components/Solutions';
import { useTranslation } from 'react-i18next';
import { Zap } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FloatingCTA() {
  const { t } = useTranslation();
  const location = useLocation();
  
  if (location.pathname === '/' || location.pathname === '/faq') return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
    >
      <button className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-white/20 hover:scale-105 transition-all active:scale-95 flex items-center gap-3 whitespace-nowrap">
        <Zap className="w-4 h-4 fill-black" />
        {t('hero.ctaStart')}
      </button>
    </motion.div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <BusinessStats />
      <IndustriesGrid />
      <ComparisonTable />
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/templates" element={<UseCases />} />
            <Route path="/wechat" element={<MobileApp />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}
