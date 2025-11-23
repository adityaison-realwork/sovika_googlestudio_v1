import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-rose-50 py-12 text-center px-4">
        <h1 className="text-4xl font-serif text-stone-800 mb-2">Contact Us</h1>
        <p className="text-stone-600">We'd love to see you at our store</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
        
        {/* Info Side */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif text-stone-800 mb-6">Store Information</h2>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-rose-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Address</h3>
                  <p className="text-stone-600 mt-1">
                    {BUSINESS_DETAILS.address.shopNumber}, {BUSINESS_DETAILS.address.street},<br />
                    {BUSINESS_DETAILS.address.area},<br />
                    {BUSINESS_DETAILS.address.city}
                  </p>
                  <p className="text-rose-700 text-sm mt-2 font-medium">
                    Landmark: {BUSINESS_DETAILS.address.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-rose-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Phone</h3>
                  <p className="text-stone-600 mt-1">
                    <a href={`tel:${BUSINESS_DETAILS.contact.phone}`} className="hover:text-rose-700 transition-colors">
                      {BUSINESS_DETAILS.contact.displayPhone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-rose-900">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Opening Hours</h3>
                  <p className="text-stone-600 mt-1">
                    {BUSINESS_DETAILS.hours}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-rose-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Email</h3>
                  <p className="text-stone-600 mt-1">
                    {BUSINESS_DETAILS.contact.email}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-stone-900 text-white p-8 rounded-lg">
            <h3 className="text-xl font-serif mb-4">Coming from Sevasi?</h3>
            <p className="text-stone-300 mb-6">
              We are located just opposite Zydex Industries on the main Canal Road. 
              Look for the Altus 99 building; we are on the first floor (FF-16).
            </p>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center bg-white text-stone-900 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              <Navigation size={18} className="mr-2" /> Open in Google Maps
            </a>
          </div>
        </div>

        {/* Map Side */}
        <div className="h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
          <iframe 
            src={BUSINESS_DETAILS.address.mapLink} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Sovika Location Map"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;