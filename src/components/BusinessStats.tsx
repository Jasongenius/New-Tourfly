import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function BusinessStats() {
  const { t } = useTranslation();

  const stats = [
    { key: 'images', label: t('stats.imagesLabel'), value: t('stats.images') },
    { key: 'clients', label: t('stats.clientsLabel'), value: t('stats.clients') },
    { key: 'speed', label: t('stats.speedLabel'), value: t('stats.speed') },
    { key: 'cost', label: t('stats.costLabel'), value: t('stats.cost') },
  ];

  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                {s.value}
              </div>
              <div className="text-xs font-bold tracking-tight text-white/40 leading-relaxed max-w-[150px] mx-auto">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
