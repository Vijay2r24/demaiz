import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-3 border-white"></div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">LIVSPACE</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's Most Trusted Home Interiors Brand. Transform your space with end-to-end interior solutions, 
              from design to installation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#ff6b6b] flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#ff6b6b] flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#ff6b6b] flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#ff6b6b] flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#ff6b6b] flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-[#ff6b6b] transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#ff6b6b] transition-colors">How It Works</Link></li>
              <li><Link to="/projects" className="hover:text-[#ff6b6b] transition-colors">Projects</Link></li>
              <li><Link to="/store-locator" className="hover:text-[#ff6b6b] transition-colors">Store Locator</Link></li>
              <li><Link to="/franchise" className="hover:text-[#ff6b6b] transition-colors">Own a Franchise</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/modular-interiors" className="hover:text-[#ff6b6b] transition-colors">Modular Interiors</Link></li>
              <li><Link to="/full-home" className="hover:text-[#ff6b6b] transition-colors">Full Home Interiors</Link></li>
              <li><Link to="/luxury" className="hover:text-[#ff6b6b] transition-colors">Luxury Interiors</Link></li>
              <li><Link to="/renovations" className="hover:text-[#ff6b6b] transition-colors">Renovations</Link></li>
              <li><Link to="/commercial" className="hover:text-[#ff6b6b] transition-colors">Commercial Interiors</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/magazine" className="hover:text-[#ff6b6b] transition-colors">Magazine</Link></li>
              <li><Link to="/design-ideas" className="hover:text-[#ff6b6b] transition-colors">Design Ideas</Link></li>
              <li><Link to="/price-calculators" className="hover:text-[#ff6b6b] transition-colors">Price Calculators</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff6b6b] transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#ff6b6b] transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Livspace. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-[#ff6b6b] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#ff6b6b] transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-[#ff6b6b] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
