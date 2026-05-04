import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Minus, 
  Plus, 
  Target, 
  TrendingUp, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Globe,
  Rocket,
  Eye,
  Briefcase,
  X,
  QrCode
} from 'lucide-react';
import { useState } from 'react';

export function About() {
  const { t } = useTranslation();
  const [showQR, setShowQR] = useState(false);

  const whyItems = (t('about.whyUs.items', { returnObjects: true }) as any[]);
  const whyIcons = [Target, TrendingUp, Layers, Cpu, ShieldCheck, Globe];

  const problemItems = (t('about.problemBox.traditional.items', { returnObjects: true }) as string[]);
  const solutionItems = (t('about.problemBox.tourfly.items', { returnObjects: true }) as string[]);

  return (
    <div className="bg-black text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background Animation Simulation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-black" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-purple-600/20 blur-[150px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase mb-8 leading-tight whitespace-nowrap"
          >
            {t('about.hero.subtitle')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {t('about.hero.desc')}
          </motion.p>
        </div>
      </section>

      {/* 2. Problem/Solution */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center tracking-tighter uppercase mb-24 lg:whitespace-nowrap">
            {t('about.problemBox.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Traditional */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[4rem] bg-neutral-900/50 border border-white/5 relative group overflow-hidden"
            >
              <h3 className="text-2xl font-black text-white/20 uppercase tracking-widest mb-12 flex items-center gap-4">
                <Minus className="w-6 h-6" /> {t('about.problemBox.traditional.title')}
              </h3>
              <div className="space-y-6">
                {problemItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/30 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tourfly AI */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[4rem] bg-purple-600/10 border border-purple-500/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full -mr-32 -mt-32" />
              <h3 className="text-2xl font-black text-purple-400 uppercase tracking-widest mb-12 flex items-center gap-4">
                <Plus className="w-6 h-6" /> {t('about.problemBox.tourfly.title')}
              </h3>
              <div className="space-y-6">
                {solutionItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white font-bold group/item">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center tracking-tighter uppercase mb-24 lg:whitespace-nowrap">
            {t('about.whyUs.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((item, idx) => {
              const Icon = whyIcons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all duration-500 group"
                >
                  <Icon className="w-10 h-10 text-white/60 mb-8 group-hover:text-purple-400 transition-colors group-hover:rotate-6 duration-500" />
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-purple-600/10 border border-purple-500/20 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <Rocket className="w-16 h-16 text-purple-400 mb-10 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500" />
              <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">{t('about.mission.mission.title')}</h3>
              <p className="text-white/60 text-xl leading-relaxed font-medium">{t('about.mission.mission.desc')}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-blue-600/10 border border-blue-500/20 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <Eye className="w-16 h-16 text-blue-400 mb-10 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">{t('about.mission.vision.title')}</h3>
              <p className="text-white/60 text-xl leading-relaxed font-medium">{t('about.mission.vision.desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-48 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-tight whitespace-nowrap">
              {t('about.finalCta.title')}
            </h2>
            <p className="text-xl text-white/40 font-medium leading-relaxed max-w-2xl mx-auto">
              {t('about.finalCta.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Footer for About Page or ensure global footer is fine */}
      <footer className="py-32 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <div className="max-w-sm">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{t('about.footer.brand')}</h2>
            <p className="text-xs font-black text-white/20 uppercase tracking-[0.3em] mb-8">{t('about.footer.subtitle')}</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <Globe className="w-4 h-4 text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <Briefcase className="w-4 h-4 text-white/60" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
            <div className="space-y-6">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Explore</p>
              <ul className="space-y-4">
                {['solutions', 'templates', 'wechat', 'pricing', 'about'].map(key => (
                  <li key={key} className="text-sm font-bold text-white/40 hover:text-purple-400 transition-colors cursor-pointer uppercase tracking-widest">
                    {t(`about.footer.nav.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Contact</p>
              <ul className="space-y-4">
                <li className="text-sm font-bold text-white/40 uppercase tracking-widest">{t('about.footer.contact.email')}</li>
                <li 
                  className="text-sm font-bold text-purple-400 uppercase tracking-widest cursor-pointer hover:text-purple-300 transition-colors"
                  onClick={() => setShowQR(true)}
                >
                  {t('about.footer.contact.support')}
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Legal</p>
              <ul className="space-y-4">
                <li className="text-sm font-bold text-white/40 uppercase tracking-widest">{t('faq.privacy')}</li>
                <li className="text-sm font-bold text-white/40 uppercase tracking-widest">{t('faq.terms')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-black text-white/10 tracking-[0.3em] uppercase">{t('footer.rights')}</p>
           <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">System Status: Online</span>
           </div>
        </div>
      </footer>

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQR(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-neutral-900 border border-white/10 p-12 rounded-[3rem] text-center shadow-2xl"
            >
              <button 
                onClick={() => setShowQR(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
              
              <div className="w-20 h-20 rounded-3xl bg-purple-500/20 flex items-center justify-center mx-auto mb-8">
                <QrCode className="w-10 h-10 text-purple-400" />
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                {t('about.footer.contact.support')}
              </h3>
              <p className="text-white/40 text-sm mb-10 font-medium leading-relaxed">
                {t('about.footer.contact.qrLabel')}
              </p>
              
              <div className="aspect-square w-full rounded-[2.5rem] bg-white p-4 mb-4 overflow-hidden relative group">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TOURFLY_AI_SUPPORT" 
                  className="w-full h-full object-contain grayscale"
                  alt="QR Code"
                />
                <div className="absolute inset-0 bg-purple-500/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest mt-6">
                Scan to add on WeChat
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
