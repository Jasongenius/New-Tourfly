import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Layout, Menu, Wand2, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/src/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.templates'), href: '/templates' },
    { name: t('nav.wechat'), href: '/wechat' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.about'), href: '/about' },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        <Link to="/" className="flex items-center gap-3 z-50">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src="https://api.dicebear.com/7.x/shapes/svg?seed=tourfly&backgroundColor=ffdfbf,c0aede,d1f4ff&shape1Color=3b82f6,f97316,a855f7" 
              alt="Tourfly AI Logo" 
              className="w-8 h-8 relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase whitespace-nowrap">{t('nav.brandName')}</span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === item.href 
                  ? "bg-white text-black shadow-lg" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Controls - Language Switcher */}
        <div className="hidden md:flex items-center gap-6 z-50">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">{i18n.language.startsWith('zh') ? 'English' : '中文'}</span>
          </button>
        </div>

        {/* Mobile menu logic remains at the right edge */}
        <div className="flex items-center gap-4 md:hidden ml-auto">
          <button 
            onClick={toggleLanguage}
            className="text-white/60 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-lg font-medium",
                  location.pathname === item.href ? "text-white" : "text-white/60"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black border-t border-white/10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mt-20 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">{t('footer.rights')}</p>
          <div className="flex gap-6">
            {/* Social Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
