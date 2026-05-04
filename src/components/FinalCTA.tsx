import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-40 px-6 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[160px] animate-pulse rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card shadow-[0_0_100px_rgba(168,85,247,0.15)] p-20 md:p-32 rounded-[4rem] text-center border-t border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12 leading-tight"
          >
            {t('cta.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="w-full sm:w-auto px-20 py-8 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-lg hover:scale-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-6 group">
              {t('cta.primary')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
