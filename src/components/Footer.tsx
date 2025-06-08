import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <h3 className="text-xl font-bold font-elegant mb-2">Meriame El Ouahabi</h3>
      <p className="mb-4">
        Étudiante en cybersécurité à l'INPT • Passionnée par la sécurité informatique
      </p>
      <div className="flex justify-center gap-6 mb-4">
        <a href="mailto:meriameelouahabi@gmail.com" className="hover:underline">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/meriame-el-ouahabi-5a6467322/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/miiiims"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
      <hr className="border-white/20 mb-4" />
      <p className="text-sm text-white/70">
        © 2024 Meriame El Ouahabi. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
