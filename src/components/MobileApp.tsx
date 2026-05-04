import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { QrCode, Smartphone, Zap, Shield, Database, Users, Layers, Layout, Camera, Sparkles } from 'lucide-react';

export function MobileApp() {
  const { t } = useTranslation();

  const manifesto = t('mobile.manifesto', { returnObjects: true }) as string[];
  const modules = t('mobile.modules', { returnObjects: true }) as any;

  const moduleConfigs = [
    { key: 'creation', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { key: 'management', icon: Shield, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { key: 'enterprise', icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-500/10' }
  ];

  return (
    <section className="py-32 px-6 bg-black overflow-hidden relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="flex-1 text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
                {t('mobile.title')}
              </h2>
              <p className="text-2xl text-white/40 max-w-xl leading-relaxed mb-12 font-medium">
                {t('mobile.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {manifesto.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  </div>
                  <span className="text-sm font-medium text-white/60 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-12">
              <div className="p-6 bg-white rounded-[2.5rem] group cursor-pointer hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <div className="w-40 h-40 bg-neutral-100 flex items-center justify-center rounded-3xl overflow-hidden group-hover:bg-neutral-200 transition-colors">
                  <QrCode className="w-24 h-24 text-black" />
                </div>
                <p className="text-xs font-black text-black text-center mt-4 uppercase tracking-[0.2em]">
                  {t('mobile.cta')}
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-white group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-widest text-[10px] text-white/40 mb-1">Experience</p>
                    <p className="font-bold text-sm">原生商拍体感</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-widest text-[10px] text-white/40 mb-1">Collaboration</p>
                    <p className="font-bold text-sm">全栈团队协作</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              className="relative w-[320px] h-[650px] mx-auto bg-neutral-900 border-[12px] border-neutral-800 rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-10 flex justify-center items-end py-3 z-20">
                <div className="w-24 h-6 bg-neutral-800 rounded-b-2xl" />
              </div>
              
              {/* App UI Simulation */}
              <div className="h-full bg-[#050505] flex flex-col pt-12 pb-8 px-6 overflow-y-auto no-scrollbar">
                <div className="flex items-center justify-between mb-8 leading-none">
                  <div>
                    <p className="text-[10px] text-white/40 font-black tracking-widest uppercase">Overview</p>
                    <p className="text-xl font-bold text-white">图蝇 AI Pro</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white/60" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex flex-col gap-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <p className="text-xs font-bold text-white">模特换脸</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex flex-col gap-3">
                    <Camera className="w-5 h-5 text-blue-400" />
                    <p className="text-xs font-bold text-white">商品换背景</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex flex-col gap-3">
                    <Layers className="w-5 h-5 text-emerald-400" />
                    <p className="text-xs font-bold text-white">多图融合</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex flex-col gap-3">
                    <Zap className="w-5 h-5 text-orange-400" />
                    <p className="text-xs font-bold text-white">极速出图</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-2 w-20 bg-white/10 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-32 w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative">
                       <img src="https://picsum.photos/seed/tf1/400/300" className="w-full h-full object-cover opacity-40" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                         <p className="text-[10px] font-black text-white/80 uppercase">Recent Creative</p>
                       </div>
                    </div>
                    <div className="h-32 w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative">
                       <img src="https://picsum.photos/seed/tf2/400/300" className="w-full h-full object-cover opacity-40" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                         <p className="text-[10px] font-black text-white/80 uppercase">Template shared</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full" />
          </div>
        </div>

        {/* Detailed Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
          {moduleConfigs.map((config, idx) => {
            const moduleData = modules[config.key];
            return (
              <motion.div
                key={config.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[3rem] border-white/5 flex flex-col shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-2xl ${config.bg} flex items-center justify-center mb-8`}>
                  <config.icon className={`w-8 h-8 ${config.color}`} />
                </div>
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{moduleData.title}</h3>
                <div className="space-y-8 flex-grow">
                  {moduleData.items.map((item: any, i: number) => (
                    <div key={i} className="group cursor-default">
                      <p className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors uppercase tracking-widest text-[11px]">{item.name}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
