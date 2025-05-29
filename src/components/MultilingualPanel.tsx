
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const MultilingualPanel = () => {
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'NL', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'IT', name: 'Italiano', flag: '🇮🇹' }
  ];

  const resources = {
    EN: [
      "Emergency Legal Assistance",
      "International Court Procedures", 
      "Embassy Contact Directory",
      "Child Recovery Resources",
      "24/7 Crisis Hotline"
    ],
    NL: [
      "Juridische Noodhulp",
      "Internationale Rechtsprocedures",
      "Ambassade Contacten",
      "Kinderherstel Bronnen",
      "24/7 Crisis Hulplijn"
    ],
    ES: [
      "Asistencia Legal de Emergencia",
      "Procedimientos Judiciales Internacionales",
      "Directorio de Embajadas",
      "Recursos de Recuperación Infantil",
      "Línea de Crisis 24/7"
    ],
    DE: [
      "Rechtliche Nothilfe",
      "Internationale Gerichtsverfahren",
      "Botschafts-Kontaktverzeichnis",
      "Kinderrückführungs-Ressourcen",
      "24/7 Krisen-Hotline"
    ],
    FR: [
      "Assistance Juridique d'Urgence",
      "Procédures Judiciaires Internationales",
      "Répertoire des Ambassades",
      "Ressources de Récupération d'Enfants",
      "Ligne de Crise 24/7"
    ],
    IT: [
      "Assistenza Legale di Emergenza",
      "Procedure Giudiziarie Internazionali",
      "Elenco Contatti Ambasciate",
      "Risorse per il Recupero dei Bambini",
      "Linea di Crisi 24/7"
    ]
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Help in <span className="text-primary">Your Language</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Critical information available in multiple languages. No barriers when every second counts.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={activeLanguage === lang.code ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeLanguage === lang.code 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'border-gray-600 text-gray-300 hover:border-primary hover:text-primary'
              }`}
              onClick={() => setActiveLanguage(lang.code)}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.code}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {resources[activeLanguage as keyof typeof resources].map((resource, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">
                {resource}
              </div>
              <div className="text-gray-400 text-sm">
                Click for instant access →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            All resources are updated daily and reviewed by legal experts.
          </p>
          <button className="text-primary hover:text-primary/80 font-semibold underline transition-colors">
            Request a New Language
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultilingualPanel;
