
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  // Dynamic styling based on scroll and route
  const isTransparent = isHome && !scrolled;

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-3'
  }`;

  const textClasses = isTransparent ? 'text-white hover:text-rose-200' : 'text-stone-600 hover:text-rose-900';
  const activeTextClasses = isTransparent ? 'text-rose-200' : 'text-rose-900';
  const logoTextClasses = isTransparent ? 'text-white' : 'text-stone-800';
  const logoSubClasses = isTransparent ? 'text-rose-100' : 'text-rose-900';
  const iconClasses = isTransparent ? 'text-white' : 'text-rose-900';
  const burgerClasses = isTransparent ? 'text-white' : 'text-stone-600';

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className={`transition-transform duration-300 group-hover:scale-110 ${iconClasses}`}>
                <ShoppingBag size={24} />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${logoTextClasses}`}>SOVIKA</span>
                <span className={`text-[10px] uppercase tracking-[0.25em] transition-colors ${logoSubClasses}`}>Women's Clothing</span>
              </div>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 relative group ${
                    isActive ? activeTextClasses : textClasses
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${burgerClasses} hover:opacity-80 focus:outline-none transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 text-sm font-medium tracking-wide border-b border-stone-100 ${
                  isActive ? 'text-rose-900 bg-rose-50/50 pl-4' : 'text-stone-600 hover:text-rose-900 hover:bg-rose-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
