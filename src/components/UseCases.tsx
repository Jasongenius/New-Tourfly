import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/src/lib/utils';
import { Sparkles, ArrowRight, Layout, Camera, Home, Shirt } from 'lucide-react';

interface UseCase {
  id: string;
  titleKey: string;
  descKey: string;
  before: string;
  after: string;
  icon: any;
}

const USE_CASES: UseCase[] = [
  {
    id: 'product',
    titleKey: 'templates.product.title',
    descKey: 'templates.product.desc',
    before: 'https://picsum.photos/seed/tf-prod-before/1200/800?grayscale',
    after: 'https://picsum.photos/seed/tf-prod-after/1200/800',
    icon: Camera,
  },
  {
    id: 'interior',
    titleKey: 'templates.interior.title',
    descKey: 'templates.interior.desc',
    before: 'https://picsum.photos/seed/tf-int-before/1200/800?grayscale',
    after: 'https://picsum.photos/seed/tf-int-after/1200/800',
    icon: Home,
  },
  {
    id: 'fashion',
    titleKey: 'templates.fashion.title',
    descKey: 'templates.fashion.desc',
    before: 'https://picsum.photos/seed/tf-fash-before/1200/800?grayscale',
    after: 'https://picsum.photos/seed/tf-fash-after/1200/800',
    icon: Shirt,
  },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && event.type !== 'mousemove') return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video rounded-[3rem] overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl shadow-black/50"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-1 bg-white z-10 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-black/20 rounded-full" />
            <div className="w-1 h-4 bg-black/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white text-[10px] font-black uppercase tracking-widest">
        Before
      </div>
      <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest">
        After
      </div>
    </div>
  );
}

export function UseCases() {
  const { t } = useTranslation();
  const [activeCase, setActiveCase] = useState(USE_CASES[0]);

  return (
    <section id="templates" className="py-32 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
              {t('templates.title1')} <br />
              <span className="text-white/40">{t('templates.title2')}</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl">
              {t('templates.subtitle')}
            </p>
          </div>
          <div className="flex gap-4">
            {USE_CASES.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveCase(uc)}
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border",
                  activeCase.id === uc.id 
                    ? "bg-white border-white text-black shadow-lg shadow-white/10" 
                    : "bg-white/5 border-white/10 text-white/40 hover:text-white/60"
                )}
              >
                <uc.icon className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{t('templates.badge')}</span>
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
                {t(activeCase.titleKey)}
              </h3>
              <p className="text-lg text-white/40 leading-relaxed mb-10">
                {t(activeCase.descKey)}
              </p>
              <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs group">
                {t('templates.cta')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={activeCase.id + '-slider'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <BeforeAfterSlider 
                before={activeCase.before} 
                after={activeCase.after} 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
