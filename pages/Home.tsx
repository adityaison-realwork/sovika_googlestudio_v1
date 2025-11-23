
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Sparkles, Heart, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS, COLLECTION_CATEGORIES } from '../constants';

const Home: React.FC = () => {
  // Show a few categories on the home page, but use a denser grid
  const featuredCategories = COLLECTION_CATEGORIES.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen min-h-[600px] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 animate-ken-burns"
          style={{
            backgroundImage: "url('https://picsum.photos/1920/1080?random=99')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-block border border-white/30 backdrop-blur-sm px-4 py-1 rounded-full mb-6 animate-fade-in-up">
            <span className="text-rose-100 tracking-[0.2em] uppercase text-xs font-bold">Welcome to Vadodara's Finest</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-8 leading-none drop-shadow-2xl animate-fade-in-up delay-100">
            Sovika <span className="italic font-light text-rose-200">Clothing</span>
          </h1>
          <p className="text-stone-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed animate-fade-in-up delay-200">
            Where tradition meets contemporary elegance. <br className="hidden md:block"/>
            Discover our curated collection of readymade garments in Gotri.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
            <Link to="/collections" className="bg-rose-100 text-rose-900 hover:bg-white px-10 py-4 rounded-sm font-medium transition duration-300 uppercase tracking-[0.15em] text-xs shadow-xl transform hover:-translate-y-1">
              View Collections
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white px-10 py-4 rounded-sm font-medium hover:bg-white/10 transition duration-300 uppercase tracking-[0.15em] text-xs backdrop-blur-sm">
              Visit Our Store
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Brand Philosophy - Text Heavy */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-rose-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8 leading-tight">
            "We believe fashion is not just about looking good, but feeling confident in what you wear."
          </h2>
          <p className="text-stone-600 leading-loose font-light text-lg">
            Located in the heart of Gotri, Sovika is more than just a clothing shop. It is a destination for the modern woman who cherishes the grace of ethnic wear and the comfort of western silhouettes. We meticulously source each piece, ensuring high-quality fabrics and on-trend designs.
          </p>
          <div className="mt-10">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Signature_sample.svg/1200px-Signature_sample.svg.png" 
              alt="Signature" 
              className="h-12 mx-auto opacity-50 grayscale" 
            />
          </div>
        </div>
      </section>

      {/* Categories - Denser Grid */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10 px-2">
            <div>
              <h2 className="text-3xl font-serif text-stone-800 mb-2">Curated Collections</h2>
              <p className="text-stone-500 text-sm">Handpicked styles for every occasion</p>
            </div>
            <Link to="/collections" className="hidden md:flex items-center text-rose-900 text-xs font-bold uppercase tracking-widest hover:underline">
              See All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          {/* Grid: 2 cols mobile, 3 md, 5 lg for smaller, appealing images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredCategories.map((cat) => (
              <Link to="/collections" key={cat.id} className="group relative aspect-[3/4] overflow-hidden block bg-white shadow-sm hover:shadow-lg transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-sm md:text-base font-serif mb-1 leading-none">{cat.title}</h3>
                  <div className="w-8 h-[1px] bg-rose-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/collections" className="inline-block border border-stone-300 text-stone-800 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-colors">
                View All Categories
             </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights - Detailed */}
      <section className="py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-900">
                <Sparkles size={28} />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">New Arrivals Weekly</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We update our racks every week with the freshest trends from Mumbai, Surat, and Jaipur. There is always something new to discover.
              </p>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-stone-100">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-900">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">Premium Quality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our "Look and Feel" promise ensures that every garment, from daily wear kurtis to party wear gowns, meets strict quality standards.
              </p>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-stone-100">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-900">
                <Heart size={28} />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">Personalized Styling</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Not sure what suits you? Our friendly staff at Altus 99 will help you mix and match to find your perfect look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section: Style Focus */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
        <div className="md:w-1/2 relative min-h-[400px]">
           <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://picsum.photos/800/1200?random=festive')" }}
           ></div>
        </div>
        <div className="md:w-1/2 bg-stone-900 text-white flex items-center justify-center p-12 md:p-24">
           <div className="max-w-md">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4 block">This Season</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Festive <br/>Elegance</h2>
              <p className="text-stone-300 mb-8 leading-relaxed font-light">
                From intricate embroidery to subtle pastels, our latest festive collection is designed to make you shine. 
                Perfect for weddings, family gatherings, and festivals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-rose-400"></div>
                   <span className="uppercase tracking-wider text-sm">Anarkalis</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-rose-400"></div>
                   <span className="uppercase tracking-wider text-sm">Sharara Sets</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-rose-400"></div>
                   <span className="uppercase tracking-wider text-sm">Designer Gowns</span>
                </div>
              </div>
              <div className="mt-12">
                 <Link to="/contact" className="bg-white text-stone-900 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-rose-100 transition-colors">
                   Visit Store to Buy
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Location & Hours Teaser */}
      <section className="py-24 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row">
           <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Visit Us in Gotri</h2>
              <div className="space-y-6 text-stone-600">
                <div className="flex items-start gap-4">
                   <MapPin className="text-rose-900 mt-1 shrink-0" />
                   <div>
                     <p className="font-bold text-stone-900">Sovika Women's Clothing</p>
                     <p className="text-sm">FF-16, Altus 99, Gotri-Sevasi Road</p>
                     <p className="text-sm">Opp. Zydex Industries, Vadodara</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Clock className="text-rose-900 mt-1 shrink-0" />
                   <div>
                     <p className="font-bold text-stone-900">Operating Hours</p>
                     <p className="text-sm">{BUSINESS_DETAILS.hours}</p>
                   </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="text-rose-900 border-b border-rose-900 pb-1 uppercase text-xs font-bold tracking-widest hover:text-stone-900 hover:border-stone-900 transition-all">
                  Get Directions
                </Link>
              </div>
           </div>
           <div className="md:w-1/2 bg-stone-200 relative min-h-[300px]">
              <iframe 
                src={BUSINESS_DETAILS.address.mapLink} 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Location Map"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
