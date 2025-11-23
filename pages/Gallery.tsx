
import React from 'react';

const Gallery: React.FC = () => {
  // Generating random images for the gallery
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/600/${i % 3 === 0 ? '800' : '600'}?random=${i + 50}`,
    alt: `Gallery Image ${i + 1}`
  }));

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-100 py-16 text-center px-4">
        <span className="text-rose-900 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Inside Sovika</span>
        <h1 className="text-4xl font-serif text-stone-800 mb-2">Store Gallery</h1>
        <p className="text-stone-500 text-sm uppercase tracking-wide">A glimpse into our world</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 2 Columns on Mobile, 3 on md, 4 on lg */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid group relative overflow-hidden rounded-sm mb-4">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center border-t border-stone-100 pt-8">
          <p className="text-stone-400 text-xs italic">
            *Images displayed are for representation purposes. Actual stock varies weekly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
