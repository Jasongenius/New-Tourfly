import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/src/lib/utils';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Cpu, 
  Layers, 
  Palette, 
  Maximize2, 
  Wand2,
  Camera,
  Shirt,
  Home,
  Brush,
  Box,
  Globe,
  Heart,
  Gift,
  Image as ImageIcon,
  Package,
  ShoppingBag,
  Megaphone,
  Building2,
  Gem
} from 'lucide-react';

export function SolutionsHero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://picsum.photos/seed/fashion-model-clean/1920/1080',
      title: t('solutions.hero.title'),
      subtitle: t('solutions.hero.subtitle'),
    },
    {
      image: 'https://picsum.photos/seed/product-minimal/1920/1080',
      title: t('solutions.hero.title2'),
      subtitle: t('solutions.hero.subtitle2'),
    },
    {
      image: 'https://picsum.photos/seed/textile-fabric/1920/1080',
      title: t('solutions.hero.title3'),
      subtitle: t('solutions.hero.subtitle3'),
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Hero Slide" 
            loading="lazy"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-normal mb-8 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-3">
              {t('solutions.hero.cta')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
              {t('solutions.hero.watchDemo')}
            </button>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "w-12 h-1 rounded-full transition-all duration-500",
                currentSlide === i ? "bg-white" : "bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionModules() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('creation');
  
  const modules = [
    {
      id: 'creation',
      icon: Brush,
      title: t('solutions.modules.creation.title'),
      desc: t('solutions.modules.creation.desc'),
      demo: 'https://picsum.photos/seed/tf-cre/1200/800',
      features: ['文生图', '图生图', '统一画布', '提示词字典'],
    },
    {
      id: 'workflow',
      icon: Zap,
      title: t('solutions.modules.workflow.title'),
      desc: t('solutions.modules.workflow.desc'),
      demo: 'https://picsum.photos/seed/tf-wf/1200/800',
      features: ['多模型融合', '电商流水线', '批量处理', '定制化管道'],
    },
    {
      id: 'tools',
      icon: Wand2,
      title: t('solutions.modules.tools.title'),
      desc: t('solutions.modules.tools.desc'),
      demo: 'https://picsum.photos/seed/tf-tl/1200/800',
      features: ['ControlNet', 'AI分色', '智能换色', '4K超分辨率'],
    },
    {
      id: 'training',
      icon: Cpu,
      title: t('solutions.modules.training.title'),
      desc: t('solutions.modules.training.desc'),
      demo: 'https://picsum.photos/seed/tf-tr/1200/800',
      features: ['Dreambooth', 'LoRA训练', 'SDXL适配', '模型管理'],
    },
    {
      id: 'enterprise',
      icon: Shield,
      title: t('solutions.modules.enterprise.title'),
      desc: t('solutions.modules.enterprise.desc'),
      demo: 'https://picsum.photos/seed/tf-dep/1200/800',
      features: ['私有化部署', 'API 接入', '数据安全', '多端支持'],
    },
    {
      id: 'hardware',
      icon: Box,
      title: t('solutions.modules.hardware.title'),
      desc: t('solutions.modules.hardware.desc'),
      demo: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1200',
      features: ['本地化部署', '桌面级算力', '数据绝对隐私', 'AI助手'],
    }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={cn(
                  "w-full text-left p-8 rounded-[2.5rem] transition-all duration-500 border group",
                  activeId === m.id 
                    ? "bg-white text-black border-white shadow-2xl shadow-purple-500/20" 
                    : "glass-card glass-card-hover text-white"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-inner",
                    activeId === m.id ? "bg-black text-white" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white"
                  )}>
                    <m.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight">{m.title}</h3>
                    <p className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.2em] mt-1",
                      activeId === m.id ? "text-black/60" : "text-white/30 group-hover:text-white/50"
                    )}>
                      {m.features[0]} & More
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Large Display Area */}
          <div className="lg:w-2/3 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative glass-card border-white/5 rounded-[4rem] p-12 lg:p-16 h-full flex flex-col justify-between overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none" />
                <div className="relative z-10 max-w-xl mb-12">
                  <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                    {modules.find(m => m.id === activeId)?.title}
                  </h2>
                  <p className="text-xl text-white/40 leading-relaxed font-medium">
                    {modules.find(m => m.id === activeId)?.desc}
                  </p>
                  
                  <div className="mt-10 flex flex-wrap gap-4">
                    {modules.find(m => m.id === activeId)?.features.map(f => (
                      <span key={f} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl animate-border-flow">
                  <img 
                    src={modules.find(m => m.id === activeId)?.demo} 
                    alt={activeId}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-10 left-10">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <Zap className="text-black w-6 h-6" />
                      </div>
                      <span className="font-black uppercase tracking-[0.3em] text-[10px] text-white/80">AI Interaction Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryFocus() {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  
  const scenarios = [
    {
      id: 'ecommerce',
      icon: Camera,
      title: t('solutions.scenarios.ecommerce.title'),
      intro: t('solutions.scenarios.ecommerce.intro'),
      items: (t('solutions.scenarios.ecommerce.items', { returnObjects: true }) || []) as string[],
      footer: t('solutions.scenarios.ecommerce.footer'),
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fashion',
      icon: Shirt,
      title: t('solutions.scenarios.fashion.title'),
      intro: t('solutions.scenarios.fashion.intro'),
      items: (t('solutions.scenarios.fashion.items', { returnObjects: true }) || []) as string[],
      metrics: (t('solutions.scenarios.fashion.metrics', { returnObjects: true }) || []) as string[],
      footerText: t('solutions.scenarios.fashion.footerText'),
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'textile',
      icon: Home,
      title: t('solutions.scenarios.textile.title'),
      intro: t('solutions.scenarios.textile.intro'),
      items: (t('solutions.scenarios.textile.items', { returnObjects: true }) || []) as string[],
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'pod',
      icon: Package,
      title: t('solutions.scenarios.pod.title'),
      intro: t('solutions.scenarios.pod.intro'),
      items: (t('solutions.scenarios.pod.items', { returnObjects: true }) || []) as string[],
      metrics: (t('solutions.scenarios.pod.metrics', { returnObjects: true }) || []) as string[],
      footerText: t('solutions.scenarios.pod.footerText'),
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'bags',
      icon: ShoppingBag,
      title: t('solutions.scenarios.bags.title'),
      intro: t('solutions.scenarios.bags.intro'),
      items: (t('solutions.scenarios.bags.items', { returnObjects: true }) || []) as string[],
      metrics: (t('solutions.scenarios.bags.metrics', { returnObjects: true }) || []) as string[],
      footerText: t('solutions.scenarios.bags.footerText'),
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'jewelry',
      icon: Gem,
      title: t('solutions.scenarios.jewelry.title'),
      intro: t('solutions.scenarios.jewelry.intro'),
      items: (t('solutions.scenarios.jewelry.items', { returnObjects: true }) || []) as string[],
      footer: t('solutions.scenarios.jewelry.footer'),
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'beauty',
      icon: Sparkles,
      title: t('solutions.scenarios.beauty.title'),
      intro: t('solutions.scenarios.beauty.intro'),
      items: (t('solutions.scenarios.beauty.items', { returnObjects: true }) || []) as string[],
      footer: t('solutions.scenarios.beauty.footer'),
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: t('solutions.scenarios.marketing.title'),
      intro: t('solutions.scenarios.marketing.intro'),
      items: (t('solutions.scenarios.marketing.items', { returnObjects: true }) || []) as string[],
      footer: t('solutions.scenarios.marketing.footer'),
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'enterprise',
      icon: Building2,
      title: t('solutions.scenarios.enterprise.title'),
      intro: t('solutions.scenarios.enterprise.intro'),
      items: (t('solutions.scenarios.enterprise.items', { returnObjects: true }) || []) as string[],
      footer: t('solutions.scenarios.enterprise.footer'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    }
  ];

  const itemIcons = [Globe, Heart, ImageIcon, Gift];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Vertical Industry</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
            {isZh ? '行业深耕' : 'Industry Focus'}
          </h2>
          <p className="text-xl text-white/40 max-w-xl leading-relaxed">
            {isZh ? '深耕垂直行业，为纺服时尚、电商、家纺等领域提供定制化 AI 生成方案，赋能从设计到生产的全面跨越。' : 'Deeply rooted in vertical industries, providing customized AI generation solutions for fashion, e-commerce, and home textiles.'}
          </p>
        </div>

        <div className="space-y-32">
          {scenarios.map((s: any, i) => (
            <div 
              key={s.id}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-16 md:gap-24",
                i % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-10"
              >
                <div className="w-20 h-20 glass-card rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  <s.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
                  {s.title}
                </h2>
                
                {s.items ? (
                  <div className="space-y-8">
                    <p className="text-xl text-white/40 leading-relaxed font-medium">
                      {s.intro}
                    </p>
                    <div className="space-y-4">
                      {s.items?.map((item: string, idx: number) => {
                        const Icon = itemIcons[idx % itemIcons.length];
                        return (
                          <div key={item} className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-500">
                              <Icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="text-lg text-white font-bold tracking-tight">{item}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {(s.id === 'fashion' || s.id === 'pod' || s.id === 'bags') && (
                      <div className="pt-8 border-t border-white/5 space-y-6">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-white/40">{s.footerText}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {s.metrics?.map((m: string) => (
                            <div key={m} className="p-6 rounded-[2rem] bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-500">
                              <div className="text-xl font-black text-white group-hover:scale-105 transition-transform origin-left">{m}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(s.id === 'ecommerce' || s.id === 'marketing' || s.id === 'enterprise' || s.id === 'jewelry' || s.id === 'beauty') && (
                      <p className="text-base text-purple-400/60 font-medium italic border-l-2 border-purple-500/20 pl-6">
                        {s.footer}
                      </p>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="text-xl text-white/40 leading-relaxed font-medium whitespace-pre-line">
                      {s.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-4 text-white/60 font-black uppercase tracking-[.2em] text-[10px]">
                          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center gap-4 text-white font-black uppercase tracking-[.3em] text-[10px] group transition-all hover:gap-6">
                      {t('solutions.hero.learnMore')}
                      <div className="w-12 h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </button>
                  </>
                )}
              </motion.div>
  
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative aspect-[4/3] rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl group animate-border-flow"
              >
                <img 
                  src={s.image} 
                  alt={s.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default function Solutions() {
  return (
    <div className="bg-black">
      <SolutionsHero />
      <SolutionModules />
      <IndustryFocus />
    </div>
  );
}
