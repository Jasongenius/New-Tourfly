import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Layers } from 'lucide-react';

export function Workflow() {
  const { t } = useTranslation();
  const steps = [
    {
      number: '01',
      title: t('workflow.step1.title'),
      description: t('workflow.step1.desc'),
    },
    {
      number: '02',
      title: t('workflow.step2.title'),
      description: t('workflow.step2.desc'),
    },
    {
      number: '03',
      title: t('workflow.step3.title'),
      description: t('workflow.step3.desc'),
    },
    {
      number: '04',
      title: t('workflow.step4.title'),
      description: t('workflow.step4.desc'),
    },
  ];

  return (
    <section id="workflow" className="py-32 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
              {t('workflow.title1')} <br />
              <span className="text-white/40">{t('workflow.title2')}</span>
            </h2>
            <p className="text-xl text-white/40 max-w-md leading-relaxed mb-12">
              {t('workflow.subtitle')}
            </p>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 group">
                  <span className="text-4xl font-black text-white/10 group-hover:text-white/40 transition-colors duration-500">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 bg-white/5 p-12">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-white/5 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-2/3 h-2/3 border border-white/10 rounded-full"
              />
              <div className="z-10 bg-white text-black p-8 rounded-3xl shadow-2xl shadow-purple-500/20 flex flex-col items-center gap-4">
                <Layers className="w-12 h-12" />
                <span className="font-black uppercase tracking-widest text-xs">Processing Node</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
