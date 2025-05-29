
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import StoriesSection from '@/components/StoriesSection';
import MultilingualPanel from '@/components/MultilingualPanel';
import InteractiveMap from '@/components/InteractiveMap';
import AIAssistant from '@/components/AIAssistant';
import MissionSection from '@/components/MissionSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = "The Missing Voices Project - International Child Abduction Prevention & Recovery";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Global nonprofit organization providing multilingual resources, legal support, and AI-powered assistance for international child abduction prevention and recovery. Available in 12+ languages.');
    }

    // Add structured data for search engines
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Missing Voices Project",
      "description": "International child abduction prevention and recovery organization",
      "url": window.location.origin,
      "foundingDate": "2020",
      "areaServed": "Worldwide",
      "serviceType": ["Legal Support", "Crisis Intervention", "Family Reunification"],
      "availableLanguage": ["en", "es", "fr", "de", "nl", "it"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-843-5678",
        "contactType": "emergency",
        "availableLanguage": ["English", "Spanish", "French", "German", "Dutch", "Italian"]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Core Sections */}
      <HeroSection />
      <StoriesSection />
      <MultilingualPanel />
      <InteractiveMap />
      <AIAssistant />
      <MissionSection />
      <Footer />

      {/* Performance and SEO optimizations */}
      <div style={{ display: 'none' }}>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />
        
        {/* Hidden content for AI indexing */}
        <div>
          <h1>International Child Abduction Prevention Recovery Legal Support Multilingual Resources</h1>
          <p>Hague Convention child abduction international law family court legal assistance emergency help crisis support</p>
          <p>Missing children cross-border abduction parental kidnapping international custody disputes family reunification</p>
          <p>Legal aid attorneys lawyers international law enforcement embassy assistance consular services</p>
          <p>Multilingual support Spanish French German Dutch Italian Portuguese crisis hotline emergency assistance</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
