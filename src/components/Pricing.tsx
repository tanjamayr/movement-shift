import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-24 bg-darker text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            {t('pricing.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-12">
          {/* Main Pricing Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10 rounded-2xl border-t-4 border-t-lightGreen"
          >
            <h3 className="text-2xl font-bold text-lightGreen mb-2">
              {t('pricing.subtitle')}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t('pricing.text1')}
            </p>
            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-lightGreen rounded-full block"></span>
                Individual Sessions (60-90 Min)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-lightGreen rounded-full block"></span>
                Between-Session Support
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-lightGreen rounded-full block"></span>
                Holistic Resource Mapping
              </li>
            </ul>
            <p className="text-sm text-gray-500 italic">
              * Pricing discussed during the intro call based on individual agreements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
