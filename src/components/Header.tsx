
import React from 'react';
import { Card } from '@/components/ui/card';

const Header = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-pink opacity-30"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Meriame</span>{' '}
              <span className="text-foreground">El Ouahabi</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Étudiante en <span className="font-semibold text-accent">cybersécurité</span> à l'INPT
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionnée par la sécurité matérielle et logicielle, ainsi que par l'intelligence artificielle appliquée à la cybersécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Me contacter
              </a>
              <a 
                href="#projets" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 animate-slide-in">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
              <div className="w-80 h-80 bg-gradient-accent rounded-full flex items-center justify-center text-white text-lg font-medium">
                {/* Placeholder pour votre photo */}
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <p className="text-sm opacity-90">Votre photo ici</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
