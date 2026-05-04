import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  MessageSquare, 
  Rocket, 
  Play,
  Search,
  Sparkles,
  HelpCircle,
  X,
  QrCode,
  MonitorPlay
} from 'lucide-react';

export function FAQ() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const demoVideos = [
    { title: 'AI Commerce Photography', desc: 'Transform simple product shots into professional studio scenes in seconds.', id: 'v1' },
    { title: 'Batch SKU Processing', desc: 'Process hundreds of product variations with consistent lighting and angles.', id: 'v2' },
    { title: 'Apparel & Virtual Models', desc: 'Place your clothing designs on virtual models with realistic draped effects.', id: 'v3' },
    { title: 'Background Innovation', desc: 'Generate unique, brand-aligned environments for any product category.', id: 'v4' }
  ];

  const categories = ['all', 'product', 'pricing', 'industry', 'enterprise', 'account'];
  const faqItems = (t('faq.items', { returnObjects: true }) as any[]);

  const filteredItems = activeTab === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeTab);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-black min-h-screen pt-40 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Center of Excellence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]"
          >
            {t('faq.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-400 font-bold mb-4"
          >
            {t('faq.subtitle')}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/40 max-w-4xl mx-auto leading-relaxed mb-12 font-medium md:whitespace-nowrap"
          >
            {t('faq.desc')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl hover:shadow-white/20 group">
               <span className="flex items-center gap-3">
                {t('faq.stillHaveQuestions.btns.experience')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => setShowQR(true)}
              className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
            >
              {t('faq.stillHaveQuestions.btns.service')}
            </button>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setExpandedIndex(null);
              }}
              className={`px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat 
                ? 'bg-purple-600 text-white shadow-xl shadow-purple-600/20' 
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {t(`faq.categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.q}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group rounded-[2.5rem] border bg-neutral-900/50 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                  expandedIndex === i 
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/10' 
                  : 'border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full p-8 md:p-10 text-left flex items-start justify-between gap-6"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-purple-500 mb-4 block">
                      {t(`faq.categories.${item.category}`)}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase">
                      {item.q}
                    </h3>
                  </div>
                  <div className={`mt-2 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    expandedIndex === i ? 'bg-purple-600 text-white rotate-180' : 'bg-white/5 text-white/40 group-hover:bg-white/10'
                  }`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 md:px-10 pb-10 border-t border-white/5 pt-8">
                        <div className="relative">
                          {/* Answer Badge */}
                          <div className="absolute -left-4 top-0 w-1 h-full bg-purple-600 rounded-full" />
                          <p className="text-white/60 text-lg leading-relaxed font-medium whitespace-pre-line">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 text-center relative overflow-hidden group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-700" />
          
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-10" />
          
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
            {t('faq.stillHaveQuestions.title')}
          </h2>
          <p className="text-xl text-white/40 font-medium mb-16 max-w-2xl mx-auto">
            {t('faq.stillHaveQuestions.desc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button 
              onClick={() => setShowQR(true)}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-white">{t('faq.stillHaveQuestions.btns.service')}</span>
              <span className="text-[10px] font-bold text-white/20 uppercase">Immediate Support</span>
            </button>
            
            <button className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white text-black hover:scale-105 transition-all group shadow-2xl shadow-white/10">
              <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-black" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest">{t('faq.stillHaveQuestions.btns.experience')}</span>
              <span className="text-[10px] font-bold text-black/40 uppercase">Global Access</span>
            </button>

            <button 
              onClick={() => setShowVideos(true)}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <MonitorPlay className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-white">{t('faq.stillHaveQuestions.btns.demo')}</span>
              <span className="text-[10px] font-bold text-white/20 uppercase">Core Features</span>
            </button>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-32 border-t border-white/5 pt-12 text-center">
          <p className="text-2xl font-black text-white uppercase tracking-tight mb-2">图蝇AI</p>
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">企业级AI商业视觉生产平台</p>
        </div>
      </div>

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
                {t('faq.stillHaveQuestions.btns.service')}
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

      {/* Video Modal */}
      <AnimatePresence>
        {showVideos && (
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
              onClick={() => setShowVideos(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-[80vh] bg-neutral-900 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setShowVideos(false)}
                className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white/60" />
              </button>

              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative group p-12">
                <div className="aspect-video w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden">
                   <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-10 h-10 fill-current ml-2" />
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent" />
              </div>

              <div className="w-full md:w-2/5 p-12 overflow-y-auto border-l border-white/5 flex flex-col">
                <div className="mb-12">
                   <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
                    {t('faq.stillHaveQuestions.btns.demo')}
                  </h3>
                  <p className="text-white/40 font-medium">Explore how Tourfly AI revolutionizes commercial visual production.</p>
                </div>

                <div className="space-y-6">
                  {demoVideos.map((video, idx) => (
                    <div key={video.id} className={`p-6 rounded-3xl border transition-all cursor-pointer ${idx === 0 ? 'bg-white/5 border-purple-500/50' : 'bg-transparent border-white/5 hover:border-white/20'}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${idx === 0 ? 'bg-purple-600' : 'bg-white/5'}`}>
                          <Play className={`w-4 h-4 ${idx === 0 ? 'text-white' : 'text-white/40'}`} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{video.title}</h4>
                          <p className="text-white/30 text-xs leading-relaxed">{video.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-12">
                  <button className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">
                    Unlock Full Potential
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
