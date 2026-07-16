import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Award } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none py-5'
      }`}
    >
      {/* Top Bar for Business Contacts - Only visible on desktop/scrolled */}
      <div className={`border-b border-gray-100 pb-2 mb-3 text-xs text-gray-500 hidden lg:flex justify-between items-center px-6 max-w-7xl mx-auto transition-all duration-300 ${
        isScrolled ? 'opacity-0 h-0 overflow-hidden m-0 p-0 border-none' : 'opacity-100'
      }`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium">
            <Award className="w-3.5 h-3.5 text-brand-green" /> Myanmar's Premium Rice Mill Industry Partner
          </span>
          <span className="h-3 w-px bg-gray-200"></span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Facility Status: Operational
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+95912345678" className="flex items-center gap-1.5 hover:text-brand-green transition-colors">
            <Phone className="w-3.5 h-3.5 text-brand-green" /> +95 9 123 45678
          </a>
          <a href="mailto:info@htetkyaw.com" className="flex items-center gap-1.5 hover:text-brand-green transition-colors">
            <Mail className="w-3.5 h-3.5 text-brand-red" /> info@htetkyaw.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand with CSS Vector representation matching the user's logo */}
          <a href="#home" id="brand-logo" className="flex items-center gap-3 group">
            {/* Circular Rice emblem with "HK" */}
            <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full border-2 border-brand-green p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.5">
                {/* Outer concentric circle */}
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" />
                {/* Rice ears illustration */}
                <path d="M50 85 C50 65 30 45 25 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M50 85 C50 65 70 45 75 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                {/* Grains */}
                <circle cx="28" cy="38" r="3" fill="currentColor" />
                <circle cx="34" cy="44" r="3" fill="currentColor" />
                <circle cx="41" cy="52" r="3" fill="currentColor" />
                <circle cx="72" cy="38" r="3" fill="currentColor" />
                <circle cx="66" cy="44" r="3" fill="currentColor" />
                <circle cx="59" cy="52" r="3" fill="currentColor" />
                {/* Central Rice leaf */}
                <path d="M50 85 C50 50 42 30 50 12 C58 30 50 50 50 85 Z" fill="currentColor" opacity="0.15" />
                <path d="M50 85 C50 55 50 20 50 15" stroke="currentColor" strokeWidth="1.5" />
                {/* HK Lettering */}
                <text x="50" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="sans-serif">HK</text>
              </svg>
            </div>
            
            {/* Typography matching branding */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-brand-green transition-colors">
                  HTET KYAW
                </span>
                <span className="font-semibold text-brand-red text-base tracking-wide font-sans">
                  ထက်ကျော်
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 font-mono -mt-1 block">
                Advanced Rice Mill &bull; အဆင့်မြင့်ဆန်စက်
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                    : 'text-gray-800 lg:text-gray-900 lg:hover:text-brand-green lg:hover:bg-white/80'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 rounded-lg bg-brand-green text-white text-sm font-semibold hover:bg-brand-green-hover shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Partner With Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-brand-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 border-t border-gray-100 bg-white shadow-xl' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 px-4 space-y-4">
            <div className="text-xs text-gray-500 space-y-2">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-green" /> +95 9 123 45678</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-red" /> info@htetkyaw.com</p>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg bg-brand-green text-white font-semibold hover:bg-brand-green-hover transition-colors shadow"
            >
              Get Wholesale Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
