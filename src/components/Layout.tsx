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
    { name: t('nav.tools'), href: '/tools' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.about'), href: '/about' },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Wand2 className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">TOURFLY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === item.href ? "text-white" : "text-white/60 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'EN' : '中文'}</span>
          </button>

          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all active:scale-95">
            {t('nav.getStarted')}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
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
            <button className="bg-white text-black w-full py-3 rounded-xl font-bold">
              {t('nav.getStarted')}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Wand2 className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">Tourfly</span>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.platform')}</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><Link to="/solutions" className="hover:text-white transition-colors">{t('nav.solutions')}</Link></li>
            <li><Link to="/templates" className="hover:text-white transition-colors">{t('nav.templates')}</Link></li>
            <li><Link to="/tools" className="hover:text-white transition-colors">{t('nav.tools')}</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.company')}</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-white/20 text-xs">{t('footer.rights')}</p>
        <div className="flex gap-6">
          {/* Social Icons would go here */}
        </div>
      </div>
    </footer>
  );
}
