import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Shirt, Palette, Megaphone, Share2, Building2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function IndustriesGrid() {
  const { t } = useTranslation();

  const industries = [
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: t('industries.ecommerce.title'),
      desc: t('industries.ecommerce.desc'),
      gradient: 'from-purple-500/10 to-transparent'
    },
    {
      id: 'fashion',
      icon: Shirt,
      title: t('industries.fashion.title'),
      desc: t('industries.fashion.desc'),
      gradient: 'from-blue-500/10 to-transparent'
    },
    {
      id: 'factory',
      icon: Palette,
      title: t('industries.factory.title'),
      desc: t('industries.factory.desc'),
      gradient: 'from-emerald-500/10 to-transparent'
    },
    {
      id: 'agency',
      icon: Megaphone,
      title: t('industries.agency.title'),
      desc: t('industries.agency.desc'),
      gradient: 'from-orange-500/10 to-transparent'
    },
    {
      id: 'media',
      icon: Share2,
      title: t('industries.media.title'),
      desc: t('industries.media.desc'),
      gradient: 'from-red-500/10 to-transparent'
    },
    {
      id: 'enterprise',
      icon: Building2,
      title: t('industries.enterprise.title'),
      desc: t('industries.enterprise.desc'),
      gradient: 'from-indigo-500/10 to-transparent'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6"
          >
            {t('industries.title')}
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-10 rounded-[3rem] relative overflow-hidden group"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", ind.gradient)} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ind.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                  {ind.title}
                </h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
