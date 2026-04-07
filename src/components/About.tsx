import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Shield, Zap, Globe, Sparkles } from 'lucide-react';

export function About() {
  const { t } = useTranslation();
  return (
    <section className="pt-32 pb-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8">
            {t('about.title1')} <br />
            <span className="text-white/40">{t('about.title2')}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase mb-6">{t('about.mission')}</h2>
            <p className="text-white/40 leading-relaxed text-lg">
              {t('about.missionDesc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-8">
              <Globe className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase mb-6">{t('about.vision')}</h2>
            <p className="text-white/40 leading-relaxed text-lg">
              {t('about.visionDesc')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Generations', value: '10M+' },
            { label: 'Active Users', value: '500K+' },
            { label: 'Countries', value: '120+' },
            { label: 'AI Models', value: '15+' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-widest text-white/20">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
