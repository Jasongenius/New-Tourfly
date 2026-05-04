import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/src/lib/utils';
import { Wand2, X, AlertCircle, Zap } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  prompt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/seed/tf-gal-bag1/1200/800', prompt: 'Luxury leather bag, high-end studio lighting, 8k commercial photography' },
  { id: '2', url: 'https://picsum.photos/seed/tf-gal-shoe1/800/1200', prompt: 'Sneaker product shot, urban street environment, cinematic fog' },
  { id: '3', url: 'https://picsum.photos/seed/tf-gal-fash1/800/800', prompt: 'High fashion portrait, oriental beauty, silk garment, soft lighting' },
  { id: '4', url: 'https://picsum.photos/seed/tf-gal-print1/1200/1200', prompt: 'Abstract floral pattern on apparel, high texture detail' },
  { id: '5', url: 'https://picsum.photos/seed/tf-gal-cosm1/800/1200', prompt: 'Cosmetic bottle on marble, water ripples, soft sunlight' },
  { id: '6', url: 'https://picsum.photos/seed/tf-gal-watch1/800/800', prompt: 'Minimalist watch rendering, titanium finish, dark background' },
  { id: '7', url: 'https://picsum.photos/seed/tf-gal-fash2/1200/800', prompt: 'Ins style street snap, trench coat, autumn paris background' },
  { id: '8', url: 'https://picsum.photos/seed/tf-gal-food1/800/800', prompt: 'High-end food photography, minimalist presentation' },
];

export function Gallery({ credits, onRemix }: { credits: number; onRemix: () => void }) {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isRemixing, setIsRemixing] = useState(false);
  const [showCreditError, setShowCreditError] = useState(false);

  const handleRemix = () => {
    if (credits <= 0) {
      setShowCreditError(true);
      return;
    }

    setIsRemixing(true);
    // Simulate remixing process
    setTimeout(() => {
      setIsRemixing(false);
      onRemix();
      setSelectedImage(null);
    }, 2000);
  };

  const scrollToPricing = () => {
    setSelectedImage(null);
    setShowCreditError(false);
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
              {t('gallery.title1')} <br />
              <span className="text-white/40">{t('gallery.title2')}</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl font-medium">
              {t('gallery.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-black uppercase tracking-widest text-[10px]">{t('gallery.credits')}: {credits}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(img)}
              className={cn(
                "rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 group relative transition-all duration-700",
                i === 1 || i === 4 ? "row-span-2" : "row-span-1",
                i === 0 || i === 6 ? "lg:col-span-2" : "col-span-1"
              )}
            >
              <img 
                src={img.url} 
                alt={img.prompt} 
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-3 mb-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Wand2 className="w-4 h-4" />
                  {t('gallery.remix')}
                </div>
                <p className="text-white/60 text-xs italic line-clamp-2 max-w-xs transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  "{img.prompt}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Remix Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-neutral-900 border border-white/10 w-full max-w-4xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 aspect-square">
                <img 
                  src={selectedImage.url} 
                  alt="Selected" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t('gallery.remixTitle')}</h3>
                    <button onClick={() => setSelectedImage(null)} className="text-white/40 hover:text-white transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block mb-3">{t('gallery.originalPrompt')}</label>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/60 text-sm italic">
                        "{selectedImage.prompt}"
                      </div>
                    </div>
                    
                    <p className="text-white/40 text-sm leading-relaxed">
                      {t('gallery.remixDesc')}
                    </p>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  {showCreditError ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3"
                    >
                      <AlertCircle className="text-red-400 w-5 h-5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">{t('gallery.errorTitle')}</p>
                        <button 
                          onClick={scrollToPricing}
                          className="text-white text-[10px] font-black uppercase underline tracking-widest"
                        >
                          {t('gallery.errorLink')}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <button
                      onClick={handleRemix}
                      disabled={isRemixing}
                      className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/90 transition-all disabled:opacity-50"
                    >
                      {isRemixing ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Wand2 className="w-5 h-5" />
                          </motion.div>
                          {t('gallery.btnRemixing')}
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-5 h-5" />
                          {t('gallery.btnConfirm')}
                        </>
                      )}
                    </button>
                  )}
                  
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-4 text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {t('gallery.btnCancel')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
