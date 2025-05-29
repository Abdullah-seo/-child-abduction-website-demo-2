
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" type="video/mp4" />
        </video>
        {/* Fallback image for browsers that don't support video */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-video-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 cinematic-text leading-tight">
            Child Abduction
            <br />
            <span className="text-primary text-glow">Knows No Borders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto cinematic-text font-light">
            Every language. Every country. Every child deserves to be found.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              See Real Stories
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Get Immediate Help
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
