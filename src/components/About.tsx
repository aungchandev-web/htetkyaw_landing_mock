import { motion } from 'motion/react';
import { Shield, Settings, Archive, Landmark, FileText } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest font-mono">
            Company Overview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Nurturing Trust, Refining Agriculture
          </h2>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded"></div>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto text-base">
            From the fertile soil of Myanmar's heartland to dinner tables and manufacturing lines worldwide, HtetKyaw represents the highest standard in grain refinement.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Interactive Graphic & Focus Points */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-green/[0.02] to-brand-green/[0.05] border border-brand-green/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-full blur-xl"></div>
              
              <h3 className="font-display font-bold text-xl text-brand-green flex items-center gap-2">
                <Landmark className="w-5 h-5" />
                The HtetKyaw Foundation
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                For over two decades, we have partnered with Myanmar’s local rice farmers and farming cooperatives. We buy premium raw paddy directly, supporting the local agricultural community with fair, transparent pricing and immediate financial settlement.
              </p>
              
              <div className="border-t border-brand-green/10 pt-4 grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase font-mono">Est.</p>
                  <p className="text-lg font-bold text-gray-900">2001</p>
                </div>
                <div className="space-y-1 border-l border-brand-green/10">
                  <p className="text-xs text-gray-500 font-medium uppercase font-mono">Purity</p>
                  <p className="text-lg font-bold text-brand-green">99.9%</p>
                </div>
                <div className="space-y-1 border-l border-brand-green/10">
                  <p className="text-xs text-gray-500 font-medium uppercase font-mono">Standard</p>
                  <p className="text-lg font-bold text-brand-red">ISO-Grade</p>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-200">
                <Settings className="w-6 h-6 text-brand-green mb-3" />
                <h4 className="font-bold text-sm text-gray-900 mb-1">State Milling</h4>
                <p className="text-xs text-gray-500">Milled with high precision sorting.</p>
              </div>
              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-200">
                <Archive className="w-6 h-6 text-brand-green mb-3" />
                <h4 className="font-bold text-sm text-gray-900 mb-1">Moisture Control</h4>
                <p className="text-xs text-gray-500">Ensured microclimate stability.</p>
              </div>
              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-200">
                <Shield className="w-6 h-6 text-brand-red mb-3" />
                <h4 className="font-bold text-sm text-gray-900 mb-1">Secure Logistics</h4>
                <p className="text-xs text-gray-500">Reliable delivery nationwide.</p>
              </div>
            </div>

          </div>

          {/* Right: Detailed About Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-gray-900 tracking-tight">
              A Complete Supply Chain Under One Professional Standard
            </h3>
            
            <p className="text-gray-600 leading-relaxed font-sans text-base">
              HtetKyaw stands as a premier agricultural enterprise. We manage every phase of the rice lifecycle — from harvesting coordination and premium selection, to multi-tier cleaning, milling, color-sorting, and packaging. This vertical integration allows us to guarantee perfect product consistency for our clients.
            </p>

            <div className="space-y-4">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex-shrink-0 flex items-center justify-center text-brand-green font-bold text-sm">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Advanced Rice Milling</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Transforming raw paddy into bright, polished, uniform grains. Our mill features custom de-stoners, huskers, color sorters, and graded sieves.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex-shrink-0 flex items-center justify-center text-brand-red font-bold text-sm">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Strategic Inventory Handling</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Safeguarding grains in temperature-monitored bulk silos. Continuous aeration prevents humidity buildup, protecting nutritional content and grain texture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex-shrink-0 flex items-center justify-center text-brand-green font-bold text-sm">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Global & Local Distribution</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Direct access to shipping lines and domestic transport fleets. We distribute standard bags, bulk containers, and private-label packaged rice.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 text-brand-red font-bold hover:text-brand-red-hover transition-colors text-sm uppercase tracking-wider font-mono"
              >
                Learn More About Our Quality Policies
                <FileText className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
