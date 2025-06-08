
import React from 'react';
import { Card } from '@/components/ui/card';

const Header = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-pink opacity-40"></div>
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-elegant font-bold mb-6 leading-tight">
              <span className="text-gradient">Meriame</span>{' '}
              <span className="text-foreground">El Ouahabi</span>
            </h1>
            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-accent font-medium mb-4 font-elegant">
                Étudiante en Cybersécurité
              </p>
              <p className="text-lg text-muted-foreground font-body">
                Institut National des Postes et Télécommunications (INPT)
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl font-body leading-relaxed">
              Passionnée par la sécurité matérielle et logicielle, ainsi que par l'intelligence artificielle appliquée à la cybersécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl font-body"
              >
                Me contacter
              </a>
              <a 
                href="#projets" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-body"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 animate-slide-in">
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-primary/30">
              <div className="w-80 h-80 bg-gradient-accent rounded-full flex items-center justify-center text-white text-lg font-medium">
                {/* Placeholder pour votre photo */}
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <p className="text-sm opacity-90 font-body">Votre photo ici</p>
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
