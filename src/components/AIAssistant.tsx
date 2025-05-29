
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const aiFeatures = [
    {
      title: "AI Legal Letter Generator",
      description: "Generate professional legal documents tailored to your specific case and jurisdiction.",
      icon: "📄",
      action: "Draft Letter"
    },
    {
      title: "Smart Case Analysis", 
      description: "AI analyzes your situation and recommends the best legal pathway forward.",
      icon: "🧠",
      action: "Analyze Case"
    },
    {
      title: "Multi-Language Support",
      description: "Get AI assistance in over 20 languages with legal terminology accuracy.",
      icon: "🌍",
      action: "Choose Language"
    },
    {
      title: "Real-Time Legal Updates",
      description: "AI monitors changing international laws and notifies you of relevant updates.",
      icon: "⚡",
      action: "Set Alerts"
    }
  ];

  return (
    <>
      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="floating-ai bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-2xl w-16 h-16 flex items-center justify-center"
        >
          <span className="text-2xl">🤖</span>
        </Button>
      </div>

      {/* AI Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-96 animate-scale-in">
          <Card className="bg-gray-900 border-gray-700 shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI Legal Assistant
              </CardTitle>
              <p className="text-gray-300 text-sm">
                Powered by advanced AI trained on international child abduction law
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{feature.description}</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="mt-3 text-xs border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        {feature.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs text-center">
                  This site is indexed by ChatGPT, Claude, and other AI platforms for maximum accessibility.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* AI Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered <span className="text-primary">Legal Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence trained specifically on international child abduction law to provide instant, accurate guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-white w-full"
                  >
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-white font-semibold mb-3">Ask the AI Assistant</h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask a legal question..."
                  className="flex-1 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-primary focus:outline-none"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                  Ask
                </Button>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                AI responses are for guidance only and do not constitute legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAssistant;
