
import React from 'react';
import { COLLECTION_CATEGORIES } from '../constants';

const Collections: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-rose-50 pt-20 pb-16 text-center px-4">
        <span className="text-rose-900 text-xs font-bold uppercase tracking-[0.2em] mb-3 block animate-fade-in">Browse by Category</span>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 animate-fade-in delay-100">Our Collections</h1>
        <p className="text-stone-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in delay-200">
          We specialize in a wide variety of readymade garments. 
          <br/>Explore our categories below. All items are available exclusively at our Gotri store.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 
          Updated Grid Layout:
          - Mobile: 2 columns (standard, but with gap to keep size managed)
          - Tablet: 3 columns
          - Desktop: 4-5 columns to reduce image size and show more variety
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
          {COLLECTION_CATEGORIES.map((category, idx) => (
            <div 
              key={category.id} 
              className="group cursor-pointer flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 rounded-sm shadow-sm group-hover:shadow-md transition-all duration-300">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] uppercase font-bold text-stone-800">
                  {category.title.split(' ')[0]}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center px-1">
                <h3 className="font-serif text-base text-stone-900 group-hover:text-rose-900 transition-colors mb-1">
                  {category.title}
                </h3>
                <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-2 group-hover:bg-rose-300 transition-colors"></div>
                <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 border-t border-stone-100 pt-16 text-center">
          <h3 className="font-serif text-2xl text-stone-800 mb-4">Don't see what you're looking for?</h3>
          <p className="text-stone-600 mb-8 font-light">
            We receive new stock every week. Call us or visit to check availability for specific items.
          </p>
          <a href="/contact" className="inline-block border-2 border-stone-900 text-stone-900 px-10 py-3 hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold rounded-sm">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collections;
