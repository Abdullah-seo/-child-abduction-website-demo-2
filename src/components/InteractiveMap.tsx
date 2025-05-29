
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Spain', 'Italy', 'Netherlands', 'Australia', 'Japan', 'Mexico', 'Brazil'
  ];

  const legalInfo = {
    'United States': 'Hague Convention signatory. Federal courts have jurisdiction over international abduction cases.',
    'Canada': 'Strong enforcement of Hague Convention. Provincial courts work with federal authorities.',
    'United Kingdom': 'Comprehensive child protection laws. Swift court procedures for return orders.',
    'Germany': 'Efficient legal system for international child return. Strong cooperation with EU partners.',
    'France': 'Active in international cooperation. Specialized family courts for abduction cases.',
    'Spain': 'Regional variations in procedures. Strong EU cooperation mechanisms.',
    'Italy': 'Centralized authority for Hague cases. Improving response times.',
    'Netherlands': 'Exemplary Hague Convention implementation. Fast-track court procedures.',
    'Australia': 'Federal Family Court jurisdiction. Strong enforcement mechanisms.',
    'Japan': 'Recent Hague Convention signatory. Evolving enforcement procedures.',
    'Mexico': 'Federal and state court coordination required. Improving international cooperation.',
    'Brazil': 'Complex federal system. Working to streamline international procedures.'
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-primary">Where</span> is Your Child Now?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every country has different laws. Get the exact legal guidance you need based on location.
          </p>
        </div>

        {/* Interactive World Map Placeholder */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="aspect-video bg-gray-700 rounded-xl mb-6 relative overflow-hidden">
              {/* SVG World Map Simplified */}
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <rect width="1000" height="500" fill="#374151" />
                
                {/* Continents as simplified shapes with hover effects */}
                <g className="cursor-pointer">
                  {/* North America */}
                  <path d="M150 120 L300 100 L320 180 L280 220 L200 240 L120 200 Z" 
                        fill="#6b7280" 
                        className="hover:fill-primary transition-colors map-pulse"
                        onClick={() => setSelectedCountry('United States')} />
                  
                  {/* Europe */}
                  <path d="M450 140 L520 130 L540 180 L500 200 L460 190 Z" 
                        fill="#6b7280" 
                        className="hover:fill-primary transition-colors map-pulse"
                        onClick={() => setSelectedCountry('Germany')} />
                  
                  {/* Asia */}
                  <path d="M600 120 L750 110 L780 200 L720 230 L650 210 Z" 
                        fill="#6b7280" 
                        className="hover:fill-primary transition-colors map-pulse"
                        onClick={() => setSelectedCountry('Japan')} />
                  
                  {/* Australia */}
                  <path d="M700 350 L800 340 L820 380 L750 390 Z" 
                        fill="#6b7280" 
                        className="hover:fill-primary transition-colors map-pulse"
                        onClick={() => setSelectedCountry('Australia')} />
                </g>
                
                {/* Pulsing dots for active cases */}
                <circle cx="200" cy="160" r="5" fill="#ff6b35" className="animate-pulse" />
                <circle cx="480" cy="165" r="5" fill="#ff6b35" className="animate-pulse" />
                <circle cx="680" cy="170" r="5" fill="#ff6b35" className="animate-pulse" />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold mb-2">Click on a region or use the dropdown below</p>
                  <p className="text-gray-300">Red dots indicate active recovery cases</p>
                </div>
              </div>
            </div>

            {/* Country Selector */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full md:w-64 bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {countries.map((country) => (
                    <SelectItem key={country} value={country} className="text-white hover:bg-gray-700">
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedCountry && (
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
                  Get Legal Guide for {selectedCountry}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Legal Information Display */}
        {selectedCountry && (
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">{selectedCountry} - Legal Overview</h3>
            <p className="text-gray-300 text-lg mb-6">
              {legalInfo[selectedCountry as keyof typeof legalInfo]}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Download Legal Guide
              </Button>
              <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                Contact Local Experts
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                Embassy Information
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveMap;
