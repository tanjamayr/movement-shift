import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Impressum from './pages/Impressum';

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="font-sans text-gray-100 bg-dark selection:bg-petrol selection:text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {route === '#impressum' ? <Impressum /> : <Home />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
