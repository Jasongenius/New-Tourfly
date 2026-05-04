import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Layers, Sparkles } from 'lucide-react';

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
    <section id="workflow" className="py-32 px-6 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
              {t('workflow.title1')} <br />
              <span className="text-white/40">{t('workflow.title2')}</span>
            </h2>
            <p className="text-xl text-white/40 max-w-md leading-relaxed mb-16">
              {t('workflow.subtitle')}
            </p>
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-black text-white/10 group-hover:text-white/40 transition-colors duration-500 leading-none">{step.number}</span>
                    <div className="w-px h-full bg-white/5 mt-4 group-last:hidden" />
                  </div>
                  <div className="pb-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">{step.title}</h3>
                    <p className="text-lg text-white/40 leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/5 bg-white/5 p-12 group shadow-[inset_0_0_100px_rgba(168,85,247,0.1)]">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            
            {/* Animated Workflow Graphic */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-white/5 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] border border-white/10 rounded-full border-dashed"
              />
              
              {/* Floating UI Elements with Glassmorphism */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-6 glass-card rounded-3xl shadow-2xl z-20"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="w-32 h-2 bg-white/5 rounded-full mb-2" />
                <div className="w-24 h-2 bg-white/5 rounded-full" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 p-6 bg-white rounded-3xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <Sparkles className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="w-20 h-2 bg-black/10 rounded-full mb-1" />
                    <div className="w-12 h-2 bg-black/10 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <div className="z-10 bg-gradient-to-br from-purple-500 to-blue-600 p-16 rounded-[4rem] shadow-[0_0_50px_rgba(168,85,247,0.4)] flex flex-col items-center gap-6 group-hover:scale-105 transition-transform duration-700 animate-border-flow border-4 border-transparent">
                <Layers className="w-20 h-20 text-white" />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-white/90">{t('workflow.coreEngine')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
