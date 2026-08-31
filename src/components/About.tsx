import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import movementPortrait from '../assets/movement-portrait.webp';
import movementInMotion from '../assets/movement-in-motion.webp';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-darker text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative pb-10 pr-8 md:pb-14 md:pr-12">
              {/* Image Frame */}
              <div className="absolute inset-0 border border-white/10 rounded-lg transform -rotate-3 transition-transform hover:rotate-0 duration-500" />
              <img
                src={movementPortrait}
                alt="Tanja in Bewegung"
                className="relative rounded-lg w-full aspect-[3/4] object-cover object-top shadow-2xl transition-all duration-700"
              />
              <img
                src={movementInMotion}
                alt="Bewegung als Ausdruck von Lebendigkeit"
                className="absolute bottom-0 right-0 w-5/12 aspect-[3/4] object-cover object-top rounded-lg border-4 border-darker shadow-2xl transition-transform duration-500 hover:-translate-y-2"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {t('about.title')}
            </h2>
            <p className="text-petrol font-medium tracking-wide uppercase text-sm mb-8">
              {t('about.subtitle')}
            </p>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>{t('about.text1')}</p>
              <p className="text-white font-medium border-l-4 border-lightGreen pl-4 py-2 italic">
                {t('about.text2')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
