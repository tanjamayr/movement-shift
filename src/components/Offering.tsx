import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Activity, Wind, CircleDashed } from 'lucide-react';

const Offering = () => {
  const { t } = useTranslation();

  const offerings = [
    {
      icon: <Activity className="w-8 h-8 text-lightGreen" />,
      title: t('offering.item1_title'),
      text: t('offering.item1_text'),
    },
    {
      icon: <Wind className="w-8 h-8 text-darkGreen" />,
      title: t('offering.item2_title'),
      text: t('offering.item2_text'),
    },
    {
      icon: <CircleDashed className="w-8 h-8 text-petrol" />,
      title: t('offering.item3_title'),
      text: t('offering.item3_text'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="offering" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-petrol/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t('offering.title')}</h2>
            <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
              {t('offering.subtitle')}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offering;
