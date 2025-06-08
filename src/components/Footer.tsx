
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-elegant font-bold mb-4 text-white">
            Meriame El Ouahabi
          </h3>
          <p className="text-white/80 mb-6 font-body">
            Étudiante en cybersécurité à l'INPT • Passionnée par la sécurité informatique
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:meriameelouahabi@gmail.com"
              className="text-white/80 hover:text-accent transition-colors font-body"
            >
              Email
            </a>
            <a 
              href="[VOTRE_LIEN_LINKEDIN]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors font-body"
            >
              LinkedIn
            </a>
            <a 
              href="[VOTRE_LIEN_GITHUB]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors font-body"
            >
              GitHub
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm font-body">
              © 2024 Meriame El Ouahabi. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
