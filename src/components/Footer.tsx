import { Award, Phone, Mail, MapPin, Facebook, Linkedin, ArrowUp, Send } from 'lucide-react';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id="footer">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              {/* Circular Emblem */}
              <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-full border border-brand-green p-0.5 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-green" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 85 C50 65 30 45 25 35" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M50 85 C50 65 70 45 75 35" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="28" cy="38" r="3.5" fill="currentColor" />
                  <circle cx="34" cy="44" r="3.5" fill="currentColor" />
                  <circle cx="41" cy="52" r="3.5" fill="currentColor" />
                  <circle cx="72" cy="38" r="3.5" fill="currentColor" />
                  <circle cx="66" cy="44" r="3.5" fill="currentColor" />
                  <circle cx="59" cy="52" r="3.5" fill="currentColor" />
                  <path d="M50 85 C50 55 50 20 50 15" stroke="currentColor" strokeWidth="2" />
                  <text x="50" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor" stroke="none">HK</text>
                </svg>
              </div>
              <div>
                <h4 className="font-display font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  HTET KYAW <span className="text-brand-red font-semibold text-xs">ထက်ကျော်</span>
                </h4>
                <p className="text-[10px] text-gray-400 font-mono tracking-wider font-semibold">
                  Advanced Rice Milling & Trading
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              HtetKyaw is one of Myanmar's premier high-tech rice processors, supplying top-grade Pawsan Fragrant and Emata long-grain rice to domestic and international partners with certified operational consistency.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#facebook" 
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-green text-gray-300 hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#linkedin" 
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-green text-gray-300 hover:text-white flex items-center justify-center transition-all shadow"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {/* Viber/WhatsApp Mock */}
              <a 
                href="#viber" 
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-green text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all shadow"
                aria-label="Chat via Viber"
              >
                VB
              </a>
              <a 
                href="#wechat" 
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-green text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all shadow"
                aria-label="Chat via WeChat"
              >
                WC
              </a>
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase font-mono tracking-widest text-brand-red">
              Sitemap
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About HtetKyaw</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facility Tour</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Product Catalog</a></li>
            </ul>
          </div>

          {/* Col 3: Technical Docs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase font-mono tracking-widest text-brand-red">
              Standards & Specs
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><span className="text-white">Moisture Standard:</span> &le; 14.0% guaranteed</li>
              <li><span className="text-white">Sorting Purity:</span> 99.9% Color Sorted</li>
              <li><span className="text-white">Packaging:</span> 5kg / 25kg / 50kg PP Sacks</li>
              <li><span className="text-white">Certifications:</span> MRF registered member</li>
              <li><a href="#contact" className="text-brand-green font-bold hover:underline transition-all">Download Grain Brochure</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter/Updates Sign up */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase font-mono tracking-widest text-brand-green">
              Operations Hub
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Sign up for our monthly market pricing report, paddy harvest forecasts, and Sagaing export volumes.
            </p>
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Newsletter subscribed successfully!'); }}
              className="flex items-center bg-gray-800 rounded-xl overflow-hidden border border-gray-700 focus-within:border-brand-green transition-all"
            >
              <input 
                type="email" 
                placeholder="trade@htetkyaw.com"
                className="bg-transparent border-none outline-none px-4 py-3 text-xs w-full text-white placeholder-gray-500 font-sans"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-green hover:bg-brand-green-hover p-3 text-white transition-colors flex-shrink-0"
                aria-label="Send Email"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
        
        {/* Copyright notice */}
        <div className="text-center sm:text-left space-y-1">
          <p>&copy; {currentYear} HtetKyaw Co., Ltd. All rights reserved.</p>
          <p className="text-[10px]">Shwe Bo Advanced Milling Plant #1 &bull; Sagaing Region, Myanmar</p>
        </div>

        {/* Legal policies & Back To Top */}
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Trading Terms</a>
          
          <button 
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-green text-gray-400 hover:text-white flex items-center justify-center transition-all border border-gray-700 hover:border-transparent cursor-pointer"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
