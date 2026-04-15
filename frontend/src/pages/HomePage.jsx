import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import DesignInspiration from '../components/DesignInspiration';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <StatsSection />
        <DesignInspiration />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
