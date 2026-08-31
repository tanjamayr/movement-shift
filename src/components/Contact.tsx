import React, { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Video, Map } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Anfrage von ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);

    window.location.href = `mailto:tanjamayr1990@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            {t('contact.subtitle')}
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Video className="w-5 h-5 text-lightGreen" />
              </div>
              <span className="text-lg">{t('contact.location_online')}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-darkGreen" />
              </div>
              <span className="text-lg">{t('contact.location_berlin')}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Map className="w-5 h-5 text-petrol" />
              </div>
              <span className="text-lg">{t('contact.location_walk')}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                {t('contact.form_name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-petrol transition-colors"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                {t('contact.form_email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-petrol transition-colors"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                {t('contact.form_message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-petrol transition-colors resize-none"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-darker font-bold py-4 rounded-lg hover:bg-lightGreen transition-colors duration-300"
            >
              {t('contact.form_submit')}
            </button>
            {submitted && (
              <p className="text-sm text-lightGreen" role="status">
                {t('contact.mailClientNotice')}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
