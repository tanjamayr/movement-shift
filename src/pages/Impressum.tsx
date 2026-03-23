import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Impressum = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-gray-300"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Impressum</h1>
      
      <div className="space-y-10 text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="leading-relaxed">
            Movement Shift Coaching<br />
            [Vorname Name]<br />
            [Straße Hausnummer]<br />
            [PLZ Ort]<br />
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Kontakt</h2>
          <p className="leading-relaxed">
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]<br />
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Umsatzsteuer-ID</h2>
          <p className="leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [DE XXX XXX XXX] (Falls zutreffend)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p className="leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Haftung für Inhalte</h2>
          <p className="leading-relaxed text-base text-gray-400">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Impressum;
