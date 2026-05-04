import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function TrustLogos() {
  const { t } = useTranslation();

  const brands = [
    { name: 'Brand 1', logo: 'https://picsum.photos/seed/brand1/200/80?grayscale' },
    { name: 'Brand 2', logo: 'https://picsum.photos/seed/brand2/200/80?grayscale' },
    { name: 'Brand 3', logo: 'https://picsum.photos/seed/brand3/200/80?grayscale' },
    { name: 'Brand 4', logo: 'https://picsum.photos/seed/brand4/200/80?grayscale' },
    { name: 'Brand 5', logo: 'https://picsum.photos/seed/brand5/200/80?grayscale' },
    { name: 'Brand 6', logo: 'https://picsum.photos/seed/brand6/200/80?grayscale' },
  ];

  return (
    <section className="py-32 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">
            Trusted by Industry Leaders
          </p>
          <div className="w-12 h-px bg-white/10 mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          {brands.map((brand, i) => (
            <motion.img
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-12 w-auto object-contain cursor-pointer hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
