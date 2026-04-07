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
  { id: '1', url: 'https://picsum.photos/seed/tf-gal-1/800/800', prompt: 'Cyberpunk street photography, neon rain, 8k' },
  { id: '2', url: 'https://picsum.photos/seed/tf-gal-2/800/800', prompt: 'Ethereal forest spirit, glowing flora, cinematic lighting' },
  { id: '3', url: 'https://picsum.photos/seed/tf-gal-3/800/800', prompt: 'Minimalist architectural render, concrete and glass, sunset' },
  { id: '4', url: 'https://picsum.photos/seed/tf-gal-4/800/800', prompt: 'Surrealist portrait, melting clocks, desert background' },
  { id: '5', url: 'https://picsum.photos/seed/tf-gal-5/800/800', prompt: 'Futuristic sneaker design, holographic materials' },
  { id: '6', url: 'https://picsum.photos/seed/tf-gal-6/800/800', prompt: 'Macro shot of a mechanical butterfly, intricate gears' },
  { id: '7', url: 'https://picsum.photos/seed/tf-gal-7/800/800', prompt: 'Abstract liquid metal sculpture, chrome finish' },
  { id: '8', url: 'https://picsum.photos/seed/tf-gal-8/800/800', prompt: 'Vintage sci-fi poster, retro-futurism, grain texture' },
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
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
              {t('gallery.title1')} <br />
              <span className="text-white/40">{t('gallery.title2')}</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl">
              {t('gallery.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-bold uppercase tracking-widest text-xs">{t('gallery.credits')}: {credits}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(img)}
              className="aspect-square rounded-3xl overflow-hidden cursor-pointer border border-white/10 group relative"
            >
              <img 
                src={img.url} 
                alt={img.prompt} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Wand2 className="w-3 h-3" />
                  {t('gallery.remix')}
                </div>
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
