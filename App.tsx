
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper to handle top padding for fixed navbar
const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-stone-800 antialiased selection:bg-rose-200 selection:text-rose-900">
        <ScrollToTop />
        <Navbar />
        <MainContent />
        <Footer />
        <MobileStickyCTA />
      </div>
    </HashRouter>
  );
};

export default App;
