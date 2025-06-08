import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      period: "2024 – Aujourd'hui",
      title: "Élève ingénieure en 1ʳᵉ année du cycle ingénieur",
      specialty: "Spécialité Cybersécurité",
      institution: "Institut National des Postes et Télécommunications (INPT)",
      location: "Rabat",
      current: true
    },
    {
      period: "2022 – 2024",
      title: "Classes préparatoires aux grandes écoles (CPGE)",
      specialty: "Filière Physique et Sciences de l'Ingénieur (PSI)",
      institution: "Lycée Moulay Al Hassan",
      location: "Tanger",
      current: false
    },
    {
      period: "2022",
      title: "Baccalauréat Sciences Mathématiques B",
      specialty: "Mention Très Bien",
      institution: "Lycée Technique Moulay Youssef",
      location: "Tanger",
      current: false
    }
  ];

  return (
    <section id="parcours" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold mb-6">
            <span className="text-gradient">Parcours</span> Académique
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-body">
            Mon cheminement éducatif vers l'excellence en cybersécurité
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white hidden md:block"></div>
                  
                  <Card className={`ml-0 md:ml-20 transition-all duration-300 hover:shadow-lg bg-white border-primary/20 ${item.current ? 'border-accent shadow-md' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full font-body ${
                          item.current ? 'bg-black text-white' : 'bg-primary text-black'
                        }`}>
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="text-xs text-black font-medium mt-2 sm:mt-0 font-body">
                            En cours
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-elegant font-semibold mb-2 text-black">
                        {item.title}
                      </h3>
                      <p className="text-black font-medium mb-2 font-body">{item.specialty}</p>
                      <p className="text-gray-700 font-body">
                        <span className="font-medium">{item.institution}</span> – {item.location}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
