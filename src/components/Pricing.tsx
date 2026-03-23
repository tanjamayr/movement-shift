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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

          {/* Social Tarif Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 rounded-2xl border-t-4 border-t-petrol flex flex-col justify-center"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-petrol/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-petrol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-petrol mb-4">
                {t('pricing.social_title')}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('pricing.social_text')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
