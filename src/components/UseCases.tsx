import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/src/lib/utils';
import { 
  Sparkles, ArrowRight, Layout, Camera, Home, Shirt, Brush, 
  ShoppingBag, Gem, Utensils, Zap, Check, TrendingUp, Star, 
  ChevronRight, X, Upload, Image as ImageIcon, MessageSquare, 
  CheckCircle2, Trash2, Download, MousePointer2 
} from 'lucide-react';

interface UseCase {
  id: string;
  category: string;
  titleKey: string;
  suitableKey: string;
  effectsKey: string;
  tagsKey: string;
  before: string;
  after: string;
  icon: any;
  points: string;
  presetPrompt?: string;
  lockPrompt?: boolean;
}

const USE_CASES: UseCase[] = [
  // FEATURED 8
  {
    id: 'main-shot-pro',
    category: 'ecommerce',
    titleKey: 'templates.items.main_shot_pro.title',
    suitableKey: 'templates.items.main_shot_pro.suitable',
    effectsKey: 'templates.items.main_shot_pro.effects',
    tagsKey: 'templates.items.main_shot_pro.tags',
    before: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800&sat=50',
    icon: ShoppingBag,
    points: '15',
    presetPrompt: 'Professional studio product photography of a premium watch, minimalist light gray background, soft shadows, 8k resolution, cinematic lighting',
  },
  {
    id: 'model-face-pro',
    category: 'model',
    titleKey: 'templates.items.model_face_pro.title',
    suitableKey: 'templates.items.model_face_pro.suitable',
    effectsKey: 'templates.items.model_face_pro.effects',
    tagsKey: 'templates.items.model_face_pro.tags',
    before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&sat=-20',
    icon: Star,
    points: '15',
    presetPrompt: 'Close-up portrait of a high-fashion model, flawless skin texture, professional studio lighting, neutral background, sharp focus',
    lockPrompt: true,
  },
  {
    id: 'model-bg-pro',
    category: 'model',
    titleKey: 'templates.items.model_bg_pro.title',
    suitableKey: 'templates.items.model_bg_pro.suitable',
    effectsKey: 'templates.items.model_bg_pro.effects',
    tagsKey: 'templates.items.model_bg_pro.tags',
    before: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&con=30',
    icon: Camera,
    points: '15',
    presetPrompt: 'Fashion model in urban street setting, cinematic city background, evening lighting with neon accents, shallow depth of field',
  },
  {
    id: 'high-pattern',
    category: 'textile',
    titleKey: 'templates.items.high_pattern.title',
    suitableKey: 'templates.items.high_pattern.suitable',
    effectsKey: 'templates.items.high_pattern.effects',
    tagsKey: 'templates.items.high_pattern.tags',
    before: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800&hue=180',
    icon: Sparkles,
    points: '15',
    presetPrompt: 'Intricate seamless floral pattern, vibrant colors, detailed watercolor texture, high resolution fabric print design',
  },
  {
    id: 'fashion-concept',
    category: 'fashion',
    titleKey: 'templates.items.fashion_concept.title',
    suitableKey: 'templates.items.fashion_concept.suitable',
    effectsKey: 'templates.items.fashion_concept.effects',
    tagsKey: 'templates.items.fashion_concept.tags',
    before: 'https://images.unsplash.com/photo-1539109132272-3499955fa3f0?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1539109132272-3499955fa3f0?auto=format&fit=crop&q=80&w=800&exp=10',
    icon: Shirt,
    points: '15',
    presetPrompt: 'Futuristic fashion design concept, avant-garde silhouette, tech-wear aesthetic, high-contrast studio lighting',
  },
  {
    id: 'bedding-display',
    category: 'textile',
    titleKey: 'templates.items.bedding_display.title',
    suitableKey: 'templates.items.bedding_display.suitable',
    effectsKey: 'templates.items.bedding_display.effects',
    tagsKey: 'templates.items.bedding_display.tags',
    before: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800&bri=20',
    icon: Home,
    points: '15',
    presetPrompt: 'Luxurious bedroom scene, premium bedding set, soft natural morning light, realistic fabric textures, cozy atmosphere',
    lockPrompt: true,
  },
  {
    id: 'creative-gift',
    category: 'creative',
    titleKey: 'templates.items.creative_gift.title',
    suitableKey: 'templates.items.creative_gift.suitable',
    effectsKey: 'templates.items.creative_gift.effects',
    tagsKey: 'templates.items.creative_gift.tags',
    before: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800&sat=30',
    icon: Gem,
    points: '15',
    presetPrompt: 'Custom gift packaging design, elegant brand identity placement, luxury matte finish, top-down sophisticated layout',
  },
  {
    id: 'sku-batch-main',
    category: 'batch',
    titleKey: 'templates.items.sku_batch_main.title',
    suitableKey: 'templates.items.sku_batch_main.suitable',
    effectsKey: 'templates.items.sku_batch_main.effects',
    tagsKey: 'templates.items.sku_batch_main.tags',
    before: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&bri=10',
    icon: Zap,
    points: '15',
    presetPrompt: 'E-commerce product main shot, clean white background, uniform lighting, consistent perspective for SKU grid',
    lockPrompt: true,
  },
  // OTHERS
  {
    id: 'brand-vis-pro',
    category: 'brand',
    titleKey: 'templates.items.brand_vis_pro.title',
    suitableKey: 'templates.items.brand_vis_pro.suitable',
    effectsKey: 'templates.items.brand_vis_pro.effects',
    tagsKey: 'templates.items.brand_vis_pro.tags',
    before: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800&exp=20',
    icon: Brush,
    points: '5',
  },
  {
    id: 'brand-ad-pro',
    category: 'ad',
    titleKey: 'templates.items.brand_ad_pro.title',
    suitableKey: 'templates.items.brand_ad_pro.suitable',
    effectsKey: 'templates.items.brand_ad_pro.effects',
    tagsKey: 'templates.items.brand_ad_pro.tags',
    before: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800&con=40',
    icon: Layout,
    points: '5',
  },
  {
    id: 'premium-poster',
    category: 'ad',
    titleKey: 'templates.items.premium_poster.title',
    suitableKey: 'templates.items.premium_poster.suitable',
    effectsKey: 'templates.items.premium_poster.effects',
    tagsKey: 'templates.items.premium_poster.tags',
    before: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&sat=20',
    icon: Camera,
    points: '5',
  },
  {
    id: 'scene-display',
    category: 'ecommerce',
    titleKey: 'templates.items.scene_display.title',
    suitableKey: 'templates.items.scene_display.suitable',
    effectsKey: 'templates.items.scene_display.effects',
    tagsKey: 'templates.items.scene_display.tags',
    before: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800&bri=30',
    icon: Home,
    points: '15',
  },
  {
    id: 'model-outfit',
    category: 'model',
    titleKey: 'templates.items.model_outfit.title',
    suitableKey: 'templates.items.model_outfit.suitable',
    effectsKey: 'templates.items.model_outfit.effects',
    tagsKey: 'templates.items.model_outfit.tags',
    before: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800&sat=20',
    icon: Shirt,
    points: '15',
  },
  {
    id: 'lookbook-pro',
    category: 'fashion',
    titleKey: 'templates.items.lookbook_pro.title',
    suitableKey: 'templates.items.lookbook_pro.suitable',
    effectsKey: 'templates.items.lookbook_pro.effects',
    tagsKey: 'templates.items.lookbook_pro.tags',
    before: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800&con=20',
    icon: Layout,
    points: '15',
  },
  {
    id: 'tshirt-display',
    category: 'creative',
    titleKey: 'templates.items.tshirt_display.title',
    suitableKey: 'templates.items.tshirt_display.suitable',
    effectsKey: 'templates.items.tshirt_display.effects',
    tagsKey: 'templates.items.tshirt_display.tags',
    before: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800&hue=120',
    icon: Shirt,
    points: '5',
  },
  {
    id: 'brand-tonality',
    category: 'brand',
    titleKey: 'templates.items.brand_tonality.title',
    suitableKey: 'templates.items.brand_tonality.suitable',
    effectsKey: 'templates.items.brand_tonality.effects',
    tagsKey: 'templates.items.brand_tonality.tags',
    before: 'https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80&w=800&sepia=50',
    icon: Star,
    points: '5',
  },
];

function BeforeAfterSlider({ before, after, points }: { before: string; after: string; points?: string }) {
  const { t } = useTranslation();
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
        loading="lazy"
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
          loading="lazy"
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
        {t('impact.beforeLabel')}
      </div>
      
      <div className="absolute top-6 right-6 z-20 flex flex-col">
        <div className="px-4 py-2 bg-white text-black rounded-t-xl text-[10px] font-black uppercase tracking-widest text-center">
          {t('impact.afterLabel')}
        </div>
        {points && (
          <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-yellow-500 text-black rounded-b-xl shadow-2xl">
            <Zap className="w-3 h-3 fill-black" />
            <span className="text-[10px] font-black">{points} {t('templates.labels.points')}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function CaseCard({ item, onClick }: { item: UseCase; onClick: (item: UseCase) => void }) {
  const { t } = useTranslation();
  const effectsValue = t(item.effectsKey, { returnObjects: true });
  const tagsValue = t(item.tagsKey, { returnObjects: true });
  const effects = Array.isArray(effectsValue) ? effectsValue : [];
  const tags = Array.isArray(tagsValue) ? tagsValue : [];

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      className="break-inside-avoid mb-8 group"
    >
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] border border-white/5 group-hover:border-purple-500/30 transition-all duration-700 shadow-2xl hover:shadow-purple-500/10 flex flex-col">
        <div className="relative">
          <BeforeAfterSlider before={item.before} after={item.after} points={item.points} />
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all">
              <item.icon className="w-7 h-7 text-white/80 group-hover:text-purple-400 transition-colors" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">
                {t(item.titleKey)}
              </h4>
              <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mt-1">
                {t(`templates.categories.${item.category}`)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-10 pt-8 border-t border-white/5">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 flex items-center gap-2">
                <Star className="w-3 h-3" />
                {t('templates.labels.suitableFor')}
              </p>
              <p className="text-sm font-bold text-white/70 leading-relaxed">
                {t(item.suitableKey)}
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" />
                {t('templates.labels.effects')}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {effects.map((effect, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-purple-400" />
                    </div>
                    <span className="text-sm font-bold text-white/50">{effect}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => onClick(item)}
            className="w-full flex items-center justify-center gap-3 py-6 rounded-[1.5rem] bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all transform active:scale-95 duration-500 group/btn shadow-xl hover:shadow-purple-500/40"
          >
            {t('templates.cta')}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function TemplateModal({ item, onClose }: { item: UseCase; onClose: () => void }) {
  const { t } = useTranslation();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [prompt, setPrompt] = useState(item.presetPrompt || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerate = () => {
    if (uploadedFiles.length === 0) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setResultImage(item.after); // Use the "after" image as high-fidelity result simulation
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-neutral-900 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* Left Side: Input Controls */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto border-r border-white/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-2">
                {t('templates.modal.title')}
              </h3>
              <p className="text-[10px] text-purple-500 font-black uppercase tracking-widest">{t(item.titleKey)}</p>
            </div>
            <button onClick={onClose} className="p-3 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-10">
            {/* 1. Upload */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                <ImageIcon className="w-3 h-3" />
                {t('templates.modal.uploadTitle')}
              </label>
              
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group relative h-48 rounded-[2rem] border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-purple-500/50 transition-all cursor-pointer flex flex-col items-center justify-center p-6 text-center overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm text-white/50 font-bold mb-1">{t('templates.modal.uploadTitle')}</p>
                <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">{t('templates.modal.uploadDesc')}</p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  multiple 
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {uploadedFiles.map((file, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                    >
                      <img 
                        src={URL.createObjectURL(file)} 
                        className="w-full h-full object-cover" 
                        alt="Upload preview" 
                      />
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white/60 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Prompt */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                <MessageSquare className="w-3 h-3" />
                {t('templates.modal.promptTitle')}
              </label>
              
              <div className="relative group">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={item.lockPrompt}
                  placeholder={t('templates.modal.promptPlaceholder')}
                  className={cn(
                    "w-full h-32 bg-white/5 border rounded-[1.5rem] p-6 text-sm text-white/80 font-medium placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none",
                    item.lockPrompt ? "border-white/5 cursor-not-allowed italic" : "border-white/10 hover:border-white/20"
                  )}
                />
                {item.lockPrompt && (
                  <div className="absolute top-4 right-4 text-purple-400/60 pointer-events-none">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                )}
              </div>
              {item.lockPrompt && (
                <p className="text-[10px] font-black uppercase text-purple-500/60 tracking-widest text-center mt-2 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-3 h-3" />
                  {t('templates.modal.promptLocked')}
                </p>
              )}
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || uploadedFiles.length === 0}
              className="w-full h-20 rounded-[1.5rem] bg-white text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  {t('templates.modal.generating')}
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-black group-hover:scale-125 transition-transform" />
                  {t('templates.modal.generateBtn')}
                  <MousePointer2 className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Result Preview */}
        <div className="w-full md:w-1/2 h-full bg-black flex items-center justify-center relative p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] transition-all duration-1000" />
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] transition-all duration-1000" />
          </div>

          <AnimatePresence mode="wait">
            {!resultImage && !isGenerating && (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <ImageIcon className="w-10 h-10 text-white/20" />
                </div>
                <h4 className="text-xl font-black text-white/20 uppercase tracking-widest">{t('templates.modal.resultTitle')}</h4>
              </motion.div>
            )}

            {isGenerating && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10 w-full max-w-sm"
              >
                <div className="aspect-video w-full rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden relative">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent skew-x-12"
                  />
                </div>
                <p className="mt-8 text-[10px] font-black text-purple-400 uppercase tracking-widest animate-pulse text-center">
                  Vision Engine Processing...
                </p>
              </motion.div>
            )}

            {resultImage && !isGenerating && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full h-full flex flex-col"
              >
                <div className="relative flex-grow rounded-[2.5rem] overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 mb-10 group">
                  <img 
                    src={resultImage} 
                    className="w-full h-full object-cover" 
                    alt="Generation Result" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                    <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
                      <Download className="w-4 h-4" />
                      {t('templates.modal.download')}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-4">
                   <div className="flex items-center gap-4">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{t('templates.modal.feedback')}</p>
                    <div className="flex gap-2">
                       {[1, 2, 3, 4, 5].map(star => (
                         <Star key={star} className="w-4 h-4 text-yellow-500 hover:scale-125 transition-transform cursor-pointer" />
                       ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => { setResultImage(null); setUploadedFiles([]); }}
                    className="text-[10px] font-black text-purple-400 uppercase tracking-widest hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    <ImageIcon className="w-3 h-3" />
                    {t('templates.modal.reupload')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function UseCases() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<UseCase | null>(null);
  
  const filteredCases = activeCategory === 'all' 
    ? USE_CASES 
    : USE_CASES.filter(c => c.category === activeCategory);
  
  const categories = ['all', 'ecommerce', 'model', 'ad', 'fashion', 'textile', 'creative', 'brand', 'batch'] as const;

  return (
    <section id="templates" className="py-32 px-6 bg-black overflow-hidden relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-5 h-5 text-purple-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">{t('templates.marketplace')}</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mb-8">
              {t('templates.title')}
            </h2>
            <p className="text-2xl text-white/40 font-bold max-w-2xl mx-auto mb-16">
              {t('templates.subtitle')}
            </p>
          </motion.div>
        </div>
          
        <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] scale-105" 
                  : "bg-white/5 text-white/30 hover:text-white/60 border border-white/5"
              )}
            >
              {t(`templates.categories.${cat}`)}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <CaseCard key={item.id} item={item} onClick={setSelectedTemplate} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedTemplate && (
          <TemplateModal 
            item={selectedTemplate} 
            onClose={() => setSelectedTemplate(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
