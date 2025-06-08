import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-elegant mb-4">Restons en contact !</h2>
          <p className="text-gray-700 text-lg">
            Vous pouvez me contacter directement par e-mail ou me retrouver sur les réseaux professionnels.
          </p>
        </div>

        <div className="bg-primary text-white text-center rounded-xl py-8 mb-12">
          <div className="text-4xl mb-4">📧</div>
          <p className="text-xl font-semibold">Email</p>
          <a
            href="mailto:meriameelouahabi@gmail.com"
            className="text-lg underline hover:text-white/80 transition"
          >
            meriameelouahabi@gmail.com
          </a>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Suivez-moi sur :</h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/meriame-el-ouahabi-5a6467322/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="text-2xl">💼</span>
              <p className="text-sm mt-2">LinkedIn</p>
            </a>
            <a
              href="https://github.com/miiiims"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="text-2xl">👩‍💻</span>
              <p className="text-sm mt-2">GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
