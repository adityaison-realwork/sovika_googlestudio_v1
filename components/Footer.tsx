import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-12 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-rose-100">SOVIKA</h3>
            <p className="text-stone-400 mb-4 leading-relaxed text-sm">
              Your destination for curated women's fashion in Vadodara. We bring you the latest trends in ethnic and western wear from top manufacturers across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-rose-200 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-rose-200 hover:text-white transition-colors"><Facebook /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-rose-100">Explore</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><Link to="/collections" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Ethnic Wear</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Western Wear</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Visit Store</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-rose-100">Visit Us</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-rose-400" size={18} />
                <span>
                  {BUSINESS_DETAILS.address.shopNumber},<br />
                  {BUSINESS_DETAILS.address.street},<br />
                  {BUSINESS_DETAILS.address.area},<br />
                  {BUSINESS_DETAILS.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-rose-400" size={18} />
                <a href={`tel:${BUSINESS_DETAILS.contact.phone}`}>{BUSINESS_DETAILS.contact.displayPhone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="flex-shrink-0 text-rose-400" size={18} />
                <span>{BUSINESS_DETAILS.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
          <p className="mt-2">Designed with elegance for Vadodara's fashion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;