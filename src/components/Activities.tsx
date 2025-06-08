
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Activities = () => {
  const activities = [
    {
      title: "Co-cheffe média du Bureau des Étudiants (BDE)",
      organization: "INPT",
      description: "Organisation d'événements étudiants, gestion de la communication visuelle (affiches, vidéos, réseaux sociaux) et coordination de l'équipe média.",
      icon: "📢",
      skills: ["Communication", "Design graphique", "Management d'équipe", "Organisation d'événements"]
    },
    {
      title: "Membre active du CIT - Cellule Sécurité",
      organization: "Club Informatique et Télécommunication",
      description: "Participation à des ateliers de sensibilisation et conférences en cybersécurité.",
      icon: "🛡️",
      skills: ["Cybersécurité", "Sensibilisation", "Formation", "Veille technologique"]
    }
  ];

  const interests = [
    "Cybersécurité offensive & défensive",
    "Défis CTF",
    "Technologies open source",
    "Éthique numérique et inclusion"
  ];

  return (
    <section id="activites" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold mb-6">
            Activités <span className="text-gradient">Parascolaires</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engagement associatif et centres d'intérêt en cybersécurité
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in bg-white" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl">{activity.icon}</span>
                    <div>
                      <CardTitle className="text-xl font-elegant">{activity.title}</CardTitle>
                      <p className="text-accent font-medium">{activity.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs bg-primary text-black px-2 py-1 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-fade-in bg-white" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-elegant flex items-center gap-3">
                <span>🎯</span>
                Centres d'intérêt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-primary rounded-lg"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                    <span className="text-sm font-medium text-black">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;
