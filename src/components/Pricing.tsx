import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight, Zap, Sparkles, Shield } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Pricing() {
  const { t } = useTranslation();

  const getFeatures = (planId: string) => {
    const featuresResp = t(`pricing.${planId}.features`, { returnObjects: true });
    return Array.isArray(featuresResp) ? featuresResp : [];
  };

  const plans = [
    {
      id: 'standard',
      name: t('pricing.standard.name'),
      price: t('pricing.standard.price'),
      credits: t('pricing.standard.credits'),
      images: t('pricing.standard.images'),
      desc: t('pricing.standard.desc'),
      features: getFeatures('standard'),
      cta: t('pricing.standard.cta'),
      popular: false,
    },
    {
      id: 'flagship',
      name: t('pricing.flagship.name'),
      price: t('pricing.flagship.price'),
      credits: t('pricing.flagship.credits'),
      images: t('pricing.flagship.images'),
      desc: t('pricing.flagship.desc'),
      features: getFeatures('flagship'),
      cta: t('pricing.flagship.cta'),
      popular: true,
    },
    {
      id: 'enterprise',
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      credits: t('pricing.enterprise.credits'),
      images: t('pricing.enterprise.images'),
      desc: t('pricing.enterprise.desc'),
      features: getFeatures('enterprise'),
      cta: t('pricing.enterprise.cta'),
      popular: false,
    },
    {
      id: 'custom',
      name: t('pricing.custom.name'),
      price: t('pricing.custom.price'),
      credits: t('pricing.custom.credits'),
      images: t('pricing.custom.images'),
      desc: t('pricing.custom.desc'),
      features: getFeatures('custom'),
      cta: t('pricing.custom.cta'),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
            {t('pricing.title1')} <br />
            <span className="text-white/40">{t('pricing.title2')}</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full",
                plan.popular 
                  ? "bg-white text-black border-white scale-105 z-10 shadow-2xl shadow-purple-500/20" 
                  : "glass-card glass-card-hover text-white"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {t('pricing.mostPopular')}
                </div>
              )}

              <div className="mb-10 text-center">
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">{plan.name}</h3>
                <div className="flex flex-col items-center gap-1 mb-4">
                  <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                </div>
                <p className={cn("text-xs font-bold leading-relaxed", plan.popular ? "text-black/60" : "text-white/40")}>
                  {plan.desc}
                </p>
              </div>

              {/* Stats Section */}
              <div className={cn("grid grid-cols-1 gap-3 p-6 rounded-2xl mb-10", plan.popular ? "bg-black/5" : "bg-white/5")}>
                <div className="flex flex-col text-center">
                  <span className={cn("text-[10px] uppercase tracking-widest font-black mb-1", plan.popular ? "text-black/40" : "text-white/40")}>
                    {t('pricing.creditsLabel')}
                  </span>
                  <span className="text-lg font-black tracking-tight">{plan.credits}</span>
                </div>
                <div className="h-px bg-current opacity-10" />
                <div className="flex flex-col text-center">
                  <span className={cn("text-[10px] uppercase tracking-widest font-black mb-1", plan.popular ? "text-black/40" : "text-white/40")}>
                    {t('pricing.imagesLabel')}
                  </span>
                  <span className="text-lg font-black tracking-tight">{plan.images}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={cn("w-4 h-4 mt-0.5 shrink-0", plan.popular ? "text-purple-600" : "text-purple-400")} />
                    <span className={cn("text-xs font-bold leading-snug", plan.popular ? "text-black/80" : "text-white/80")}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 flex items-center justify-center gap-2",
                plan.popular 
                  ? "bg-black text-white hover:bg-neutral-800" 
                  : "bg-white text-black hover:bg-neutral-100"
              )}>
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-20 rounded-[4rem] glass-card shadow-[0_0_80px_rgba(168,85,247,0.1)] relative overflow-hidden animate-border-flow border-2"
        >
          <Sparkles className="w-16 h-16 text-white mx-auto mb-10 animate-pulse" />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/40 max-w-xl mx-auto leading-relaxed mb-16">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-2xl shadow-white/5 flex items-center justify-center gap-4">
              {t('cta.primary')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto text-white font-black uppercase tracking-widest text-sm hover:text-white/80 transition-colors flex items-center justify-center gap-4">
              {t('cta.secondary')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
