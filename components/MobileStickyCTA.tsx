import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden">
      <div className="flex h-16">
        <a 
          href={`tel:${BUSINESS_DETAILS.contact.phone}`}
          className="flex-1 flex flex-col items-center justify-center bg-rose-50 text-rose-900 active:bg-rose-100"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase">Call Now</span>
        </a>
        <a 
          href="https://www.google.com/maps" // In production, use specific location query
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center bg-stone-900 text-white active:bg-stone-800"
        >
          <MapPin size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase">Navigate</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyCTA;