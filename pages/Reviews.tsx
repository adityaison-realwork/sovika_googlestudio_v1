
import React from 'react';
import { Star, Quote, ThumbsUp, Users } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  const averageRating = 4.5;
  const totalReviews = 48; // Mock number for "local ratings"

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-stone-900 text-white pt-20 pb-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <h1 className="text-4xl md:text-5xl font-serif mb-4 relative z-10">Customer Stories</h1>
        <p className="text-stone-300 text-lg max-w-2xl mx-auto font-light relative z-10">
          Trusted by the women of Vadodara for quality and elegance.
        </p>
      </div>

      {/* Overall Rating Header - New Requirement */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-16">
        <div className="bg-white shadow-2xl p-8 md:p-12 rounded-sm max-w-4xl mx-auto border-t-4 border-rose-900">
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
             
             {/* Big Rating */}
             <div className="flex flex-col items-center">
               <span className="text-7xl font-serif font-bold text-stone-800 leading-none">{averageRating}</span>
               <div className="flex text-yellow-500 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className={i < Math.floor(averageRating) ? "fill-current" : i === Math.floor(averageRating) ? "fill-current opacity-50" : "text-gray-200"} />
                  ))}
               </div>
               <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Overall Rating</span>
             </div>

             {/* Divider */}
             <div className="hidden md:block w-[1px] h-24 bg-stone-200"></div>

             {/* Stats */}
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-rose-50 p-3 rounded-full text-rose-900">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-stone-900 font-bold text-lg">{totalReviews}+</p>
                    <p className="text-stone-500 text-sm">Happy Customers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-rose-50 p-3 rounded-full text-rose-900">
                    <ThumbsUp size={24} />
                  </div>
                  <div>
                    <p className="text-stone-900 font-bold text-lg">98%</p>
                    <p className="text-stone-500 text-sm">Recommended</p>
                  </div>
                </div>
             </div>

           </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-stone-50 p-8 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100 group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <Quote className="text-rose-200 group-hover:text-rose-400 transition-colors" size={32} />
              </div>
              
              <p className="text-stone-700 mb-8 leading-relaxed text-sm md:text-base italic flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-3 border-t border-stone-200 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-200 to-rose-100 flex items-center justify-center text-rose-900 font-bold text-sm shadow-inner">
                    {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-sm font-serif">{review.author}</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-stone-900 text-white py-16 px-4 rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-4">Share Your Experience</h3>
            <p className="text-stone-300 mb-8 text-sm max-w-xl mx-auto">
              We value every piece of feedback. If you've visited Sovika, please let us know how we did on Google.
            </p>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-white text-stone-900 px-8 py-3 hover:bg-rose-100 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
