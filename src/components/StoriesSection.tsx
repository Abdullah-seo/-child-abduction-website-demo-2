
import React from 'react';

const StoriesSection = () => {
  const stories = [
    {
      quote: "My daughter was taken to another country. I didn't know where to start, what laws applied, or who could help me.",
      location: "Munich, Germany",
      outcome: "Reunited after 8 months"
    },
    {
      quote: "The language barrier made everything harder. I needed help in Spanish, but most resources were only in English.",
      location: "Barcelona, Spain", 
      outcome: "Connected with local advocates"
    },
    {
      quote: "I felt completely alone until I found this community. Now I help other parents navigate the same nightmare.",
      location: "Toronto, Canada",
      outcome: "Now a volunteer advocate"
    }
  ];

  return (
    <section className="py-20 emotional-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            What If It Were <span className="text-primary">Your Child?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These are real stories from real families. Every case is unique, but no parent should face this alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="story-card p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <blockquote className="text-lg text-white mb-6 italic leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              <div className="border-t border-gray-600 pt-4">
                <p className="text-primary font-semibold mb-1">{story.location}</p>
                <p className="text-green-400 text-sm font-medium">{story.outcome}</p>
              </div>

              {/* Blurred profile placeholder for privacy */}
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 blur-sm" />
                <div className="text-gray-400 text-sm">Identity protected</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Every story matters. Every child deserves to come home.</p>
          <button className="text-primary hover:text-primary/80 font-semibold underline transition-colors">
            Share Your Story (Anonymous)
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
