
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "SafeShare",
      description: "Plateforme web sécurisée de partage de fichiers entre utilisateurs",
      features: [
        "Authentification JWT",
        "Chiffrement AES",
        "Gestion des autorisations d'accès",
        "Espaces collaboratifs",
        "Protection contre XSS et SQLi"
      ],
      technologies: ["Flask (Python)", "React", "MySQL", "JWT", "HTML/CSS"],
      category: "Développement Web Sécurisé"
    },
    {
      title: "Système IoT de détection de présence",
      description: "Système de détection basé sur ESP32 et capteur à ultrasons HC-SR04",
      features: [
        "Détection de présence en temps réel",
        "Alertes via plateforme Blynk",
        "Mesure de distance précise",
        "Transmission sans fil",
        "Notifications mobiles"
      ],
      technologies: ["ESP32", "Arduino IDE", "Capteurs à ultrasons", "Blynk", "C/C++"],
      category: "IoT & Sécurité Matérielle"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations techniques en cybersécurité et développement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-primary/20 bg-white" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-black bg-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-2xl font-elegant group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Fonctionnalités principales :</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-primary text-black px-2 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
