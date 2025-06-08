import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Sécurité des Applications Web",
      icon: "🔐",
      skills: [
        "Prévention des vulnérabilités (XSS, SQLi)",
        "Authentification forte (JWT)",
        "Sécurisation des API",
        "Audit de sécurité"
      ]
    },
    {
      title: "Sécurité Système",
      icon: "🛡️",
      skills: [
        "Gestion des accès et permissions",
        "Hardening système",
        "Analyse forensique",
        "Détection d'intrusions"
      ]
    },
    {
      title: "Développement",
      icon: "💻",
      skills: [
        "Flask (Python)",
        "React & HTML/CSS",
        "MySQL & Bases de données",
        "Arduino & IoT"
      ]
    },
    {
      title: "Cybersécurité Avancée",
      icon: "⚡",
      skills: [
        "Cybersécurité offensive & défensive",
        "Défis CTF",
        "IA appliquée à la cybersécurité",
        "Technologies open source"
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold mb-6">
            Compétences <span className="text-gradient">Techniques</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mon expertise technique couvre tous les aspects de la cybersécurité moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in hover:border-accent/50 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-lg font-elegant text-black">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
