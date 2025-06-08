
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <Education />
      <Projects />
      <Skills />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
