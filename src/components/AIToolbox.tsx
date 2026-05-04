import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { 
  ArrowRight, 
  Download, 
  Eraser, 
  Image as ImageIcon, 
  Loader2, 
  Maximize2, 
  Palette, 
  RefreshCw, 
  Sparkles, 
  Upload, 
  Wand2,
  AlertCircle
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/src/lib/utils";

const getAI = () => {
  if (typeof process === 'undefined' || !process.env.GEMINI_API_KEY) return null;
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
};

type ToolType = 'generate' | 'edit' | 'upscale';

export function AIToolbox() {
  const { t } = useTranslation();
  const [activeTool, setActiveTool] = useState<ToolType>('generate');
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    aiRef.current = getAI();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateImage = async () => {
    if (!prompt.trim() || !aiRef.current) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await aiRef.current.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

      const part = response.candidates?.[0].content.parts[0];
      if (part?.inlineData) {
        const base64Data = part.inlineData.data;
        setResultImage(`data:image/png;base64,${base64Data}`);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const editImage = async (instruction: string) => {
    if (!sourceImage || !aiRef.current) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const base64Data = sourceImage.split(',')[1];
      const mimeType = sourceImage.split(';')[0].split(':')[1];

      const response = await aiRef.current.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [{
          role: 'user',
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            { text: instruction },
          ],
        }],
      });

      const part = response.candidates?.[0].content.parts[0];
      if (part?.inlineData) {
        const editedBase64 = part.inlineData.data;
        setResultImage(`data:image/png;base64,${editedBase64}`);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to edit image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!resultImage) return;
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = `tourfly-${Date.now()}.png`;
    link.click();
  };

  return (
    <section id="tools" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Controls Side */}
          <div className="w-full lg:w-2/5 space-y-10">
            <div>
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase mb-6 leading-tight">{t('tools.title')}</h2>
              <p className="text-xl text-white/40 leading-relaxed">{t('tools.subtitle')}</p>
            </div>

            {/* Tool Selector */}
            <div className="flex gap-2 p-2 bg-white/5 rounded-3xl border border-white/10">
              {(['generate', 'edit', 'upscale'] as ToolType[]).map((tool) => (
                <button
                  key={tool}
                  onClick={() => {
                    setActiveTool(tool);
                    setResultImage(null);
                  }}
                  className={cn(
                    "flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                    activeTool === tool 
                      ? "bg-white text-black shadow-xl" 
                      : "text-white/40 hover:text-white/60"
                  )}
                >
                  {t(`tools.${tool}`)}
                </button>
              ))}
            </div>

            {/* Tool Specific Inputs */}
            <div className="space-y-8">
              {activeTool === 'generate' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t('tools.promptLabel')}</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder={t('tools.promptPlaceholder')}
                      className="w-full h-40 bg-white/5 border border-white/10 rounded-[2rem] p-6 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all resize-none text-lg"
                    />
                  </div>
                  <button
                    onClick={generateImage}
                    disabled={isGenerating || !prompt.trim()}
                    className="w-full bg-white text-black py-6 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-2xl shadow-white/5"
                  >
                    {isGenerating ? <Loader2 className="animate-spin w-6 h-6" /> : <Wand2 className="w-6 h-6" />}
                    {t('tools.btnGenerate')}
                  </button>
                </div>
              )}

              {(activeTool === 'edit' || activeTool === 'upscale') && (
                <div className="space-y-8">
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "group relative aspect-video rounded-[3rem] border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:border-white/20 transition-all overflow-hidden",
                      sourceImage && "border-none"
                    )}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      className="hidden" 
                      accept="image/*"
                    />
                    {sourceImage ? (
                      <>
                        <img src={sourceImage} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <RefreshCw className="text-white w-10 h-10 mb-4" />
                          <span className="text-white text-xs font-black uppercase tracking-widest">{t('tools.changeImage')}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                          <Upload className="text-white/20 w-8 h-8 group-hover:text-white/40 transition-colors" />
                        </div>
                        <span className="text-white/40 text-xs font-black uppercase tracking-widest">{t('tools.uploadLabel')}</span>
                      </>
                    )}
                  </div>

                  {sourceImage && activeTool === 'edit' && (
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => editImage("remove the background")}
                        className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group"
                      >
                        <Eraser className="text-white/40 w-6 h-6 mb-4 group-hover:text-purple-400 transition-colors" />
                        <span className="text-white text-xs font-black uppercase tracking-widest block">{t('tools.btnRemoveBG')}</span>
                      </button>
                      <button 
                        onClick={() => editImage("change the color palette to vibrant neon colors")}
                        className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group"
                      >
                        <Palette className="text-white/40 w-6 h-6 mb-4 group-hover:text-blue-400 transition-colors" />
                        <span className="text-white text-xs font-black uppercase tracking-widest block">{t('tools.btnColorway')}</span>
                      </button>
                    </div>
                  )}

                  {sourceImage && activeTool === 'upscale' && (
                    <button
                      onClick={() => editImage("increase the resolution and detail of this image significantly")}
                      disabled={isGenerating}
                      className="w-full bg-white text-black py-6 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-neutral-200 disabled:opacity-50 transition-all active:scale-95 shadow-2xl shadow-white/5"
                    >
                      {isGenerating ? <Loader2 className="animate-spin w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                      {t('tools.btnUpscale')}
                    </button>
                  )}
                </div>
              )}
            </div>

            {error && (
              <div className="p-6 rounded-[2rem] bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold flex items-center gap-3">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}
          </div>

          {/* Preview Side */}
          <div className="flex-1 min-h-[700px] bg-white/5 rounded-[4rem] border border-white/10 p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl shadow-purple-500/5">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-8 z-10"
                >
                  <div className="relative">
                    <div className="w-32 h-32 border-4 border-white/5 border-t-white rounded-full animate-spin" />
                    <Sparkles className="absolute inset-0 m-auto text-white w-10 h-10 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-3">{t('tools.processing')}</p>
                    <p className="text-white/40 text-sm animate-pulse">{t('tools.processingSub')}</p>
                  </div>
                </motion.div>
              ) : resultImage ? (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col items-center justify-center gap-12 z-10"
                >
                  <div className="relative group max-w-2xl w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-black/80 border border-white/10">
                    <img src={resultImage} alt="AI Result" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                      <button 
                        onClick={downloadImage}
                        className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Download className="w-8 h-8" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <button 
                      onClick={() => setResultImage(null)}
                      className="px-10 py-5 rounded-2xl bg-white/5 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
                    >
                      {t('tools.btnStartOver')}
                    </button>
                    <button 
                      onClick={downloadImage}
                      className="px-10 py-5 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl shadow-white/5"
                    >
                      {t('tools.btnDownload')}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center z-10"
                >
                  <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/10">
                    <ImageIcon className="text-white/20 w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight uppercase">{t('tools.previewTitle')}</h3>
                  <p className="text-xl text-white/40 max-w-sm mx-auto leading-relaxed">
                    {t('tools.previewSubtitle')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
