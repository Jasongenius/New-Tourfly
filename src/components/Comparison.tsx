import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Check, X, Zap, Shield, Target } from 'lucide-react';

export function Comparison() {
  const { t } = useTranslation();

  const comparisons = [
    {
      feature: t('comparison.cost'),
      traditional: t('comparison.cost'),
      tourfly: t('comparison.costAI'),
      icon: Shield,
    },
    {
      feature: t('comparison.time'),
      traditional: t('comparison.time'),
      tourfly: t('comparison.timeAI'),
      icon: Zap,
    },
    {
      feature: t('comparison.iteration'),
      traditional: t('comparison.iteration'),
      tourfly: t('comparison.iterationAI'),
      icon: Target,
    },
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">{t('comparison.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
              {t('comparison.title1')} <br />
              <span className="text-white/40">{t('comparison.title2')}</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed font-medium">
              {t('comparison.subtitle')}
            </p>
          </div>
          <div className="lg:w-1/3 p-8 glass-card rounded-3xl border-purple-500/20">
            <p className="text-white/60 text-lg italic leading-relaxed relative">
              <span className="text-5xl text-purple-500 absolute -top-4 -left-4 opacity-40 font-serif">"</span>
              {t('comparison.quote')}
              <span className="text-5xl text-purple-500 absolute -bottom-8 -right-4 opacity-40 font-serif">"</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Card */}
          <div className="p-12 rounded-[4rem] glass-card border-white/5 opacity-60">
            <h3 className="text-2xl font-black text-white/40 uppercase tracking-widest mb-12 flex items-center gap-4">
              <X className="w-6 h-6 text-red-500/40" />
              {t('comparison.mainTitle1')}
            </h3>
            <div className="space-y-10">
              {comparisons.map((item) => (
                <div key={item.feature} className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{item.feature}</span>
                  <div className="text-2xl font-black text-white/40 uppercase tracking-tight">{item.traditional}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tourfly Card - The Hero */}
          <div className="relative p-12 rounded-[4rem] bg-white text-black overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.3)] animate-border-flow border-4 border-transparent">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Zap className="w-80 h-80" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-widest mb-12 flex items-center gap-4">
                <Check className="w-8 h-8 text-purple-600" />
                {t('comparison.mainTitle2')}
              </h3>
              
              <div className="space-y-10">
                {comparisons.map((item) => (
                  <div key={item.feature} className="flex flex-col gap-2 group">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">{item.feature}</span>
                    <div className="text-3xl font-black uppercase tracking-tight transition-all group-hover:translate-x-2">
                      {item.tourfly}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="font-black uppercase tracking-[0.3em] text-[10px] text-black/60">Efficiency Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
