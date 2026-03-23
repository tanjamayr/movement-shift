import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Using a high-quality abstract dark green/nature placeholder or the generated one. 
// We will replace this with the generated image.
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-petrol/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-darkGreen/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-lightGreen/80 uppercase tracking-widest text-sm font-semibold mb-6 block">
            Coaching & Prozessbegleitung
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
            {t('hero.headline')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-2xl md:text-3xl font-light italic text-gray-300 max-w-3xl mb-8 leading-relaxed">
            "{t('hero.subHeadline')}"
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            {t('hero.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-petrol rounded-full hover:bg-darkGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-petrol"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('hero.cta')}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
