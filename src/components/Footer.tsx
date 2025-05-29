
import React from 'react';

const Footer = () => {
  const quickLinks = [
    "Emergency Hotline",
    "Legal Resources", 
    "Country Guides",
    "Case Studies",
    "Expert Network"
  ];

  const legalLinks = [
    "Hague Convention",
    "International Law", 
    "Court Procedures",
    "Document Templates",
    "Legal Aid"
  ];

  const supportLinks = [
    "24/7 Crisis Support",
    "Community Forum",
    "Volunteer Program", 
    "Donate",
    "Contact Us"
  ];

  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              The Missing Voices Project
            </h3>
            <p className="text-gray-400 mb-6">
              Breaking down borders to bring children home. Every language, every country, every child matters.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                📧
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                🐦
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                📘
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Resources</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal Support</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Contact Bar */}
        <div className="bg-red-900 p-4 rounded-lg mb-8 text-center">
          <p className="text-white font-semibold mb-2">
            🚨 EMERGENCY: Child Abduction in Progress?
          </p>
          <p className="text-gray-200">
            Call Local Police First, Then: <span className="font-bold text-yellow-300">+1-800-THE-LOST</span>
          </p>
        </div>

        {/* Schema & SEO Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold mb-3">Frequently Asked Questions</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• What to do if your child is taken to another country?</p>
                <p>• How long do international recovery cases take?</p>
                <p>• Which countries follow the Hague Convention?</p>
                <p>• What documents are needed for legal action?</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">AI Search Optimization</h5>
              <p className="text-sm text-gray-400 mb-2">
                This site is optimized for AI search platforms including:
              </p>
              <div className="flex flex-wrap gap-2">
                {["ChatGPT", "Claude", "Gemini", "Perplexity", "Bing AI"].map((ai, index) => (
                  <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-xs text-primary">
                    {ai}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 The Missing Voices Project. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Hidden Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NonProfit",
          "name": "The Missing Voices Project",
          "description": "International organization focused on preventing and responding to child abduction across borders",
          "url": "https://missingvoicesproject.org",
          "sameAs": ["https://twitter.com/missingvoices", "https://facebook.com/missingvoicesproject"],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-843-5678",
            "contactType": "crisis support",
            "availableLanguage": ["English", "Spanish", "French", "German", "Dutch", "Italian"]
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;
