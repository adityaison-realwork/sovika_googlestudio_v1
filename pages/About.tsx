import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-96 bg-stone-900 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: "url('https://picsum.photos/1200/600?random=about')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="relative z-10 text-center px-4">
           <h1 className="text-5xl font-serif text-white mb-4">Our Story</h1>
           <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-stone-800 mb-6">A Boutique Experience in Gotri</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Sovika Women's Clothing was established with a simple mission: to bring high-quality, trendy, and affordable fashion to the women of Vadodara. Located in the bustling hub of Gotri-Sevasi Road, we are a retail destination that understands the modern woman's need for both elegance and comfort.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            Unlike mass-market chains, we take pride in being a specialized retailer. We do not manufacture; instead, we curate. Our team spends countless hours sourcing the finest readymade garments from top textile hubs across India, ensuring that every piece on our shelf meets our high standards for fabric quality and stitching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <div className="relative h-80 bg-rose-100 rounded-lg overflow-hidden">
             <img src="https://picsum.photos/600/800?random=interior" alt="Shop Interior" className="w-full h-full object-cover" />
           </div>
           <div>
             <h3 className="text-2xl font-serif text-stone-800 mb-6">Why Shop at Sovika?</h3>
             <ul className="space-y-4">
               {[
                 "Curated Selection: We pick the best so you don't have to search.",
                 "Quality Fabrics: Breathable cottons, rich silks, and durable blends.",
                 "Fair Pricing: Affordable luxury for everyday and festive wear.",
                 "Personal Attention: We help you find the fit that flatters you."
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <CheckCircle2 className="text-rose-600 flex-shrink-0 mt-1" size={20} />
                   <span className="text-stone-700">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>

        <div className="bg-stone-50 p-8 border-l-4 border-rose-900">
          <h3 className="text-xl font-serif text-stone-900 mb-2">A Note to Our Customers</h3>
          <p className="text-stone-600 italic">
            "We believe fashion is personal. Whether you are looking for a professional outfit for work or a dazzling set for a wedding, we are here to assist you. Step into Altus 99 and explore fashion that feels like you."
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;