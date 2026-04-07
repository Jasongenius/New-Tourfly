import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Pricing() {
  const { t } = useTranslation();
  const plans = [
    {
      name: t('pricing.starter.name'),
      price: '$0',
      description: t('pricing.starter.desc'),
      features: t('pricing.starter.features', { returnObjects: true }) as string[],
      cta: t('pricing.starter.cta'),
      highlight: false,
    },
    {
      name: t('pricing.pro.name'),
      price: '$49',
      description: t('pricing.pro.desc'),
      features: t('pricing.pro.features', { returnObjects: true }) as string[],
      cta: t('pricing.pro.cta'),
      highlight: true,
    },
    {
      name: t('pricing.enterprise.name'),
      price: 'Custom',
      description: t('pricing.enterprise.desc'),
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[],
      cta: t('pricing.enterprise.cta'),
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">{t('pricing.title')}</h2>
          <p className="text-xl text-white/40 max-w-xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "p-10 rounded-[3rem] border transition-all duration-500 flex flex-col",
                plan.highlight 
                  ? "bg-white border-white text-black scale-105 shadow-2xl shadow-white/10 z-10" 
                  : "bg-white/5 border-white/10 text-white hover:bg-white/[0.08]"
              )}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-60">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-sm font-bold opacity-40">{t('pricing.mo')}</span>}
              </div>
              <p className={cn("text-sm mb-10 leading-relaxed", plan.highlight ? "text-black/60" : "text-white/40")}>
                {plan.description}
              </p>
              
              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className={cn("w-4 h-4", plan.highlight ? "text-black" : "text-white/40")} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95",
                plan.highlight 
                  ? "bg-black text-white hover:bg-black/90" 
                  : "bg-white text-black hover:bg-white/90"
              )}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
