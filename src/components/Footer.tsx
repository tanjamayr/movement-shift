import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-darker py-8 border-t border-white/5 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Movement Shift. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#impressum" className="hover:text-white transition-colors">Impressum</a>
          <a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
