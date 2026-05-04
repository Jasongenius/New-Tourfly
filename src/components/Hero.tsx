import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Wand2, Image as ImageIcon, Maximize2, Palette, Cpu, Shield, Layers, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/src/lib/utils';

export function Hero() {
  const { t } = useTranslation();
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const scenarios = [
    {
      id: 'model-snap',
      label: '模特街拍生成',
      items: [
        { before: 'https://picsum.photos/seed/tf-m1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-m1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-m2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-m2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-m3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-m3-a/1200/800' },
      ]
    },
    {
      id: 'apparel-dev',
      label: '服装款式开发',
      items: [
        { before: 'https://picsum.photos/seed/tf-a1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-a1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-a2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-a2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-a3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-a3-a/1200/800' },
      ]
    },
    {
      id: 'product-boost',
      label: '商品主图增强',
      items: [
        { before: 'https://picsum.photos/seed/tf-p1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-p1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-p2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-p2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-p3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-p3-a/1200/800' },
      ]
    },
    {
      id: 'ad-poster',
      label: '广告海报生成',
      items: [
        { before: 'https://picsum.photos/seed/tf-ad1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-ad1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-ad2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-ad2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-ad3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-ad3-a/1200/800' },
      ]
    },
    {
      id: 'brand-upgrade',
      label: '品牌视觉升级',
      items: [
        { before: 'https://picsum.photos/seed/tf-bu1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-bu1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-bu2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-bu2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-bu3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-bu3-a/1200/800' },
      ]
    },
    {
      id: 'print-design',
      label: '印花图案设计',
      items: [
        { before: 'https://picsum.photos/seed/tf-pd1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-pd1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-pd2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-pd2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-pd3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-pd3-a/1200/800' },
      ]
    },
    {
      id: 'bedding-display',
      label: '家纺床模展示',
      items: [
        { before: 'https://picsum.photos/seed/tf-bt1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-bt1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-bt2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-bt2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-bt3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-bt3-a/1200/800' },
      ]
    },
    {
      id: 'art-style',
      label: '艺术风格转换',
      items: [
        { before: 'https://picsum.photos/seed/tf-as1-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-as1-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-as2-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-as2-a/1200/800' },
        { before: 'https://picsum.photos/seed/tf-as3-b/1200/800?grayscale', after: 'https://picsum.photos/seed/tf-as3-a/1200/800' },
      ]
    },
  ];

  const [isDialHovered, setIsDialHovered] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<'primary' | 'secondary' | null>(null);

  // Unified auto-slideshow for scenarios and their sub-items
  useEffect(() => {
    if (isDialHovered) return;
    
    const interval = setInterval(() => {
      setActiveItemIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        const currentScenarioItems = scenarios[activeScenario].items.length;
        
        if (nextIndex >= currentScenarioItems) {
          // After all sub-items are shown (9s total if 3 items), move to next scenario
          setActiveScenario((prevScenario) => (prevScenario + 1) % scenarios.length);
          return 0;
        }
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeScenario, scenarios.length, isDialHovered, scenarios]);

  const currentItem = scenarios[activeScenario].items[activeItemIndex];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-black">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[2px] h-[400px] bg-gradient-to-b from-transparent via-white/10 to-transparent blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Centered Top Content */}
          <div className="max-w-4xl w-full mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">
                Industry Leading AI Visual Solution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center mb-12"
            >
              <span className="text-6xl md:text-[9.5rem] font-black text-white tracking-tighter leading-none uppercase mb-8">
                {t('hero.title1')}
              </span>
              <span className="text-2xl md:text-5xl font-black text-white/30 tracking-[0.2em] uppercase whitespace-nowrap">
                {t('hero.title2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <button 
                onMouseEnter={() => setHoveredBtn('primary')}
                onMouseLeave={() => setHoveredBtn(null)}
                className={cn(
                  "group w-full sm:w-auto flex items-center justify-center gap-6 px-20 py-8 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-lg transition-all duration-300",
                  hoveredBtn === 'secondary' ? "opacity-30 scale-95" : "hover:scale-110 shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
                )}
              >
                {t('hero.ctaStart')}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </button>

              <button 
                onMouseEnter={() => setHoveredBtn('secondary')}
                onMouseLeave={() => setHoveredBtn(null)}
                className={cn(
                  "group w-full sm:w-auto flex items-center justify-center gap-6 px-20 py-8 bg-black border border-white/20 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-lg transition-all duration-300 backdrop-blur-xl",
                  hoveredBtn === 'primary' ? "opacity-30 scale-95" : "hover:scale-110 hover:bg-white/5 hover:border-white/40 shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
                )}
              >
                <Layers className="w-6 h-6" />
                {t('hero.ctaShowcase')}
              </button>
            </motion.div>
          </div>

          {/* Centered Showcase Below */}
          <div className="w-full max-w-6xl relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative p-3 bg-white/5 border border-white/10 rounded-[4rem] overflow-hidden backdrop-blur-2xl shadow-[0_0_100px_rgba(168,85,247,0.1)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeScenario}-${activeItemIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <VisualImpact 
                    before={currentItem.before}
                    after={currentItem.after}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Dial Navigation - Moved below the showcase for better contrast */}
            <div className="mt-20">
              <DialNavigation 
                items={scenarios} 
                activeIndex={activeScenario} 
                onChange={(idx) => {
                  setActiveScenario(idx);
                  setActiveItemIndex(0);
                }} 
                onHover={setIsDialHovered}
              />

              {/* Sub-item Dots (Multiple pairs per category) */}
              {scenarios[activeScenario].items.length > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {scenarios[activeScenario].items.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveItemIndex(idx)}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all duration-300",
                        activeItemIndex === idx ? "bg-white w-6" : "bg-white/20 hover:bg-white/40"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Decorative element behind slider */}
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-[80px] -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DialNavigation({ items, activeIndex, onChange, onHover }: { 
  items: any[], 
  activeIndex: number, 
  onChange: (idx: number) => void,
  onHover?: (hovered: boolean) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 1 });
  
  const itemWidth = 320; // Increased width to prevent overlap
  
  useEffect(() => {
    x.set(-(activeIndex * itemWidth + itemWidth / 2));
  }, [activeIndex, x]);

  // Unified auto-rotation is handled by parent Hero component

  const onDragEnd = () => {
    const currentX = x.get();
    // Calculate which index is closest to the center line
    const calculatedIndex = Math.round((-(currentX + itemWidth / 2)) / itemWidth);
    const clampedIndex = Math.max(0, Math.min(items.length - 1, calculatedIndex));
    
    onChange(clampedIndex);
    
    // Always force the motion value to the precise grid point 
    // even if activeIndex didn't change (to ensure crisp centering)
    x.set(-(clampedIndex * itemWidth + itemWidth / 2));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onChange(Math.min(activeIndex + 1, items.length - 1));
      else if (e.key === 'ArrowLeft') onChange(Math.max(activeIndex - 1, 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length, onChange]);

  return (
    <div 
      className="relative h-44 w-full overflow-hidden flex items-center"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      style={{ perspective: '1200px' }}
    >
      {/* Central Focus Highlight - Improved contrast */}
      <div className="absolute inset-x-0 h-full pointer-events-none flex items-center justify-center z-0">
        <div className="w-[440px] h-32 border border-white/20 bg-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-[0_0_120px_rgba(0,0,0,0.6)]" />
        
        {/* Glow indicator below */}
        <div className="absolute bottom-4 w-40 h-2 bg-purple-500 rounded-full blur-[10px] opacity-80" />
        <div className="absolute bottom-4 w-28 h-1 bg-white/40 rounded-full" />
      </div>

      <motion.div
        ref={containerRef}
        drag="x"
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{ 
          left: -((items.length - 1) * itemWidth + itemWidth / 2), 
          right: -itemWidth / 2 
        }}
        style={{ x: springX, left: '50%', transformStyle: 'preserve-3d' }}
        onDragEnd={onDragEnd}
        className="flex items-center absolute cursor-grab active:cursor-grabbing z-10"
      >
        {items.map((item, i) => (
          <DialItem 
            key={item.id} 
            label={item.label} 
            index={i} 
            activeIndex={activeIndex} 
            x={springX}
            onClick={() => onChange(i)}
            itemWidth={itemWidth}
          />
        ))}
      </motion.div>
    </div>
  );
}

function DialItem({ label, index, activeIndex, x, onClick, itemWidth }: { 
  label: string, 
  index: number, 
  activeIndex: number, 
  x: any,
  onClick: () => void,
  itemWidth: number
}) {
  const itemX = index * itemWidth + itemWidth / 2;
  
  const distance = useTransform(x, (latestX: number) => latestX + itemX);
  const absDistance = useTransform(distance, (d: number) => Math.abs(d));
  
  // Balanced scaling for current focused item
  const scale = useTransform(absDistance, [0, itemWidth, itemWidth * 2], [1.3, 0.85, 0.6]);
  const opacity = useTransform(absDistance, [0, itemWidth, itemWidth * 2], [1, 0.4, 0.2]);
  const rotateY = useTransform(distance, [-itemWidth * 2, 0, itemWidth * 2], [-30, 0, 30]);
  const z = useTransform(absDistance, [0, itemWidth], [100, 0]);

  return (
    <motion.button
      onClick={onClick}
      style={{
        width: itemWidth,
        scale,
        opacity,
        rotateY,
        z,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        "flex flex-col items-center justify-center transition-all duration-500 px-4 h-40 shrink-0 select-none",
        index === activeIndex ? "text-white" : "text-white/50"
      )}
    >
      <span 
        className={cn(
          "text-lg md:text-2xl font-black uppercase tracking-tight text-center leading-none transition-all",
          "drop-shadow-[0_4px_12px_rgba(0,0,0,1)]", 
          index === activeIndex ? "text-white scale-110" : "text-white/40"
        )}
      >
        {label}
      </span>
      <motion.div 
        animate={{ 
          scale: index === activeIndex ? 3 : 1,
          opacity: index === activeIndex ? 1 : 0.3,
          backgroundColor: index === activeIndex ? "rgb(192, 132, 252)" : "rgba(255, 255, 255, 0.5)"
        }}
        className={cn(
          "w-2 h-2 rounded-full mt-8 transition-all",
          index === activeIndex ? "shadow-[0_0_30px_rgba(168,85,247,1)]" : ""
        )} 
      />
    </motion.button>
  );
}


function VisualImpact({ before, after }: { before: string; after: string }) {
  const { t } = useTranslation();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative aspect-video w-full rounded-[3.2rem] overflow-hidden border border-white/5 cursor-col-resize group shadow-2xl"
    >
      {/* After Image */}
      <img 
        src={after} 
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={before} 
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-[1px] bg-white/50 z-20 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-2xl rounded-full border border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <div className="flex gap-1.5 opacity-60">
            <div className="w-0.5 h-4 bg-white rounded-full" />
            <div className="w-0.5 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-30 px-5 py-2 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/50">
        Before
      </div>
      <div className="absolute top-6 right-6 z-30 px-5 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest">
        After AI
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useTranslation();
  const features = [
    {
      id: 'creation',
      icon: Wand2,
      title: t('solutions.modules.creation.title'),
      desc: t('solutions.modules.creation.desc'),
      color: 'from-purple-500/20 to-transparent',
    },
    {
      id: 'workflow',
      icon: Zap,
      title: t('solutions.modules.workflow.title'),
      desc: t('solutions.modules.workflow.desc'),
      color: 'from-blue-500/20 to-transparent',
    },
    {
      id: 'tools',
      icon: Maximize2,
      title: t('solutions.modules.tools.title'),
      desc: t('solutions.modules.tools.desc'),
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      id: 'training',
      icon: Cpu,
      title: t('solutions.modules.training.title'),
      desc: t('solutions.modules.training.desc'),
      color: 'from-orange-500/20 to-transparent',
    },
    {
      id: 'enterprise',
      icon: Shield,
      title: t('solutions.modules.enterprise.title'),
      desc: t('solutions.modules.enterprise.desc'),
      color: 'from-indigo-500/20 to-transparent',
    },
  ];

  return (
    <section id="solutions" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
            {t('hero.title1')}
          </h2>
          <p className="text-xl text-white/40 max-w-xl leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group p-12 rounded-[3rem] border border-white/10 bg-white/5 relative overflow-hidden transition-all hover:border-white/20",
                f.id === 'deployment' && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", f.color)} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">{f.title}</h3>
                <p className="text-lg text-white/40 leading-relaxed mb-8">
                  {f.desc}
                </p>
                <div className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('solutions.modules.learnMore')} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
