import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <Services />
        <Ecosystem />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;