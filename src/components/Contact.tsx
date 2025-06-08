
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Me</span> Contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité ou collaboration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-primary/20 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading mb-4">
                Restons en contact !
              </CardTitle>
              <p className="text-muted-foreground">
                Vous pouvez me contacter directement par e-mail ou me retrouver sur les réseaux professionnels.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Email principal */}
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:meriameelouahabi@gmail.com"
                  className="text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                >
                  meriameelouahabi@gmail.com
                </a>
              </div>

              {/* Réseaux sociaux */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-6">Suivez-moi sur :</h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="[VOTRE_LIEN_LINKEDIN]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/5"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl group-hover:bg-blue-700 transition-colors">
                      💼
                    </div>
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">LinkedIn</span>
                  </a>

                  <a 
                    href="[VOTRE_LIEN_GITHUB]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/5"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xl group-hover:bg-gray-900 transition-colors">
                      👩‍💻
                    </div>
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Note pour les liens */}
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note :</strong> Remplacez [VOTRE_LIEN_LINKEDIN] et [VOTRE_LIEN_GITHUB] par vos liens réels dans le code source.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
