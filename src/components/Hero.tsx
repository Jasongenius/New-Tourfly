import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Wand2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-black">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold tracking-widest text-white/80 uppercase">{t('hero.badge')}</span>
        </div>

        <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter text-white uppercase mb-8">
          {t('hero.title1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
            {t('hero.title2')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/90 transition-all active:scale-95 flex items-center gap-3 overflow-hidden">
            <span className="relative z-10">{t('hero.ctaStart')}</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          <button className="px-10 py-5 rounded-2xl font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all active:scale-95">
            {t('hero.ctaShowcase')}
          </button>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-24 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6"
      >
        {[
          'https://picsum.photos/seed/tourfly1/800/1000',
          'https://picsum.photos/seed/tourfly2/800/1000',
          'https://picsum.photos/seed/tourfly3/800/1000',
          'https://picsum.photos/seed/tourfly4/800/1000',
        ].map((src, i) => (
          <motion.div
            key={src}
            initial={{ y: 20 * (i + 1) }}
            animate={{ y: 0 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'reverse', 
              duration: 3 + i,
              ease: "easeInOut"
            }}
            className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <img 
              src={src} 
              alt="AI Generated" 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function Features() {
  const { t } = useTranslation();
  const features = [
    {
      title: t('features.t2i.title'),
      description: t('features.t2i.desc'),
      icon: Wand2,
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: t('features.i2i.title'),
      description: t('features.i2i.desc'),
      icon: Sparkles,
      color: 'from-blue-500 to-emerald-500',
    },
    {
      title: t('features.hiRes.title'),
      description: t('features.hiRes.desc'),
      icon: ArrowRight,
      color: 'from-emerald-500 to-yellow-500',
    },
    {
      title: t('features.smartEdit.title'),
      description: t('features.smartEdit.desc'),
      icon: Sparkles,
      color: 'from-yellow-500 to-purple-500',
    },
  ];

  return (
    <section id="solutions" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
            {t('features.title1')} <br />
            <span className="text-white/40">{t('features.title2')}</span>
          </h2>
          <p className="text-xl text-white/40 max-w-xl">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg shadow-black/50`}>
                <feature.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
