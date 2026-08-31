import { useEffect } from 'react';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Datenschutzerklärung</h1>
      <div className="space-y-10 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Verantwortliche Stelle</h2>
          <p>Tanja Mayr<br />Schudomastraße 49<br />12055 Berlin<br />E-Mail: tanjamayr1990@gmail.com</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Kontaktaufnahme</h2>
          <p>Wenn du per E-Mail Kontakt aufnimmst, verarbeiten wir deine Angaben zur Bearbeitung deiner Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag gerichtet ist, sonst Art. 6 Abs. 1 lit. f DSGVO.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Deine Rechte</h2>
          <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung deiner personenbezogenen Daten. Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-petrol mb-4">Wichtiger Hinweis</h2>
          <p>Diese Seite verwendet aktuell keine Analyse- oder Marketing-Tools. Angaben zum Hosting, Server-Logfiles und gegebenenfalls künftig eingebundenen Diensten müssen vor Veröffentlichung durch die tatsächlichen Angaben des Hosting-Anbieters ergänzt und rechtlich geprüft werden.</p>
        </section>
      </div>
    </main>
  );
};

export default Datenschutz;
