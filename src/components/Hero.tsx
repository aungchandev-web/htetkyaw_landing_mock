import { motion } from 'motion/react';
import { Shield, Sparkles, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import heroImg from '../assets/images/rice_mill_hero_1784174732788.jpg';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center bg-radial from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Absolute Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold uppercase tracking-wider font-mono"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Established Agricultural Excellence
            </motion.div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
              >
                Premium Rice Milling & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
                  Reliable Wholesale
                </span> Supply
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-xl font-sans font-normal leading-relaxed"
              >
                HtetKyaw is a premier state-of-the-art rice mill and bulk trading partner based in Myanmar. We leverage advanced automated milling and strict quality control to deliver consistent grain excellence for local and international markets.
              </motion.p>
            </div>
            
            {/* Value Checkmarks */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg"
            >
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium">99.9% Purity via AI Sorting</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium">Export-Grade Polishing & Finish</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium">120,000+ Tons Processed Yearly</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium">Continuous Year-Round Supply</span>
              </div>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-green text-white font-semibold hover:bg-brand-green-hover shadow-lg shadow-brand-green/10 hover:shadow-xl hover:shadow-brand-green/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Request Quotation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                View Output Catalog
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            </motion.div>
            
            {/* Supporting Trust Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-2.5 text-xs text-gray-500 font-medium pt-2 border-t border-gray-100"
            >
              <Shield className="w-4 h-4 text-brand-red" />
              <span>Certified under strict food safety and grain uniformity standards.</span>
            </motion.div>
          </div>
          
          {/* Right Hero Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glow backing */}
            <div className="absolute -inset-4 bg-brand-green/10 rounded-[2.5rem] blur-2xl -z-10"></div>
            
            {/* Main Industrial image wrapper */}
            <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl bg-gray-100 aspect-video lg:aspect-[4/5]">
              <img 
                src={heroImg} 
                alt="HtetKyaw High-Tech Rice Milling Facility" 
                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay styling - vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Interactive Floating Badge 1 - Capacity */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center text-white font-bold text-lg shadow-inner">
                  HK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">ထက်ကျော် အဆင့်မြင့်ဆန်စက်</h4>
                  <p className="text-xs text-gray-600">Leading Myanmar Rice Processor</p>
                </div>
              </div>
            </div>
            
            {/* Secondary Floating Badge - Tech Standard */}
            <div className="absolute -top-4 -right-4 bg-white border border-gray-100 px-4.5 py-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 animate-bounce-slow">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
              </span>
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">Machinery</p>
                <p className="text-xs font-extrabold text-gray-900">Optical Color Sorted</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
