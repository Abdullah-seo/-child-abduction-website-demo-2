
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission in <span className="text-primary">60 Seconds</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Watch how we're revolutionizing international child recovery through technology, community, and unwavering determination.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Placeholder */}
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-3">▶</span>
                  Play Mission Video
                </Button>
              </div>
            </div>
            
            {/* Video overlay stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">247</div>
                    <div className="text-xs text-gray-300">Children Recovered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">54</div>
                    <div className="text-xs text-gray-300">Countries Reached</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-gray-300">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            { number: "12", label: "Languages Supported", suffix: "+" },
            { number: "89", label: "Legal Experts", suffix: "%" },
            { number: "3.2", label: "Million Families Reached", suffix: "M" },
            { number: "72", label: "Hour Average Response", suffix: "hrs" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Join Our Network
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Make a Donation
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Become a Volunteer
          </Button>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl text-gray-300 italic font-light max-w-4xl mx-auto mb-6">
            "Every child deserves to be safe, loved, and home. Technology and compassion combined can move mountains—and bring families back together."
          </blockquote>
          <cite className="text-primary font-semibold">
            — Dr. Sarah Martinez, Founder & Director
          </cite>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
