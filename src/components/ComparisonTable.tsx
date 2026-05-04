import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Check, X, Shield, Zap, Sparkles, Globe, Cpu, Layers } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function ComparisonTable() {
  const { t } = useTranslation();

  const features = [
    { name: t('comparisonTable.row1.name'), v1: t('comparisonTable.row1.v1'), v2: t('comparisonTable.row1.v2'), icon: Shield },
    { name: t('comparisonTable.row2.name'), v1: t('comparisonTable.row2.v1'), v2: t('comparisonTable.row2.v2'), icon: Sparkles },
    { name: t('comparisonTable.row3.name'), v1: t('comparisonTable.row3.v1'), v2: t('comparisonTable.row3.v2'), icon: Cpu },
    { name: t('comparisonTable.row4.name'), v1: t('comparisonTable.row4.v1'), v2: t('comparisonTable.row4.v2'), icon: Layers },
    { name: t('comparisonTable.row5.name'), v1: t('comparisonTable.row5.v1'), v2: t('comparisonTable.row5.v2'), icon: Zap },
    { name: t('comparisonTable.row6.name'), v1: t('comparisonTable.row6.v1'), v2: t('comparisonTable.row6.v2'), icon: Globe },
    { name: t('comparisonTable.row7.name'), v1: t('comparisonTable.row7.v1'), v2: t('comparisonTable.row7.v2'), icon: Check },
  ];

  return (
    <section className="py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
            {t('comparisonTable.title')}
          </h2>
          <p className="text-white/40 font-medium tracking-widest uppercase text-xs">{t('comparisonTable.subtitle')}</p>
        </div>

        <div className="glass-card rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{t('comparisonTable.col1')}</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 text-center">{t('comparisonTable.col2')}</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-white text-center bg-white/5">{t('comparisonTable.col3')}</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <motion.tr
                    key={f.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="p-8">
                      <div className="flex items-center gap-4">
                        <f.icon className="w-5 h-5 text-white/20 group-hover:text-purple-400 transition-colors" />
                        <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{f.name}</span>
                      </div>
                    </td>
                    <td className="p-8 text-center border-l border-white/5">
                      <div className="flex items-center justify-center gap-2 text-white/40">
                        {f.v1 === '无' || f.v1 === 'None' ? (
                          <X className="w-4 h-4 opacity-40 text-red-500" />
                        ) : (
                          <span className="text-xs font-bold">{f.v1}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-8 text-center bg-white/5 relative border-l border-white/5">
                      <div className="relative inline-flex items-center justify-center gap-2">
                        <span className="text-sm font-black text-purple-400 relative z-10">{f.v2}</span>
                        <div className="absolute inset-0 bg-purple-400/10 blur-xl rounded-full" />
                      </div>
                      {i < 3 && (
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 px-3 py-1 bg-purple-500 rounded-full text-[8px] font-black uppercase tracking-tighter text-white whitespace-nowrap shadow-lg shadow-purple-500/50">
                          {t('comparisonTable.exclusive')}
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
