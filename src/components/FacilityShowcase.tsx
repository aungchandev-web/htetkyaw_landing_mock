import { Eye, HardHat, Warehouse, Milestone, Compass } from 'lucide-react';
import sortingImg from '../assets/images/rice_processing_sorting_1784174749103.jpg';
import storageImg from '../assets/images/rice_warehouse_storage_1784174760654.jpg';

export default function FacilityShowcase() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest font-mono">
            Our Operations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Advanced Milling Facilities & Industrial Capacity
          </h2>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded"></div>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            HtetKyaw operates a fully automated milling plant utilizing state-of-the-art machinery to achieve optimal yield, precise grading, and unmatched hygiene.
          </p>
        </div>

        {/* Facility Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Optical Color Sorting */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <img 
                src={sortingImg} 
                alt="Optical Color Sorting Machine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono uppercase flex items-center gap-1.5 shadow">
                <Eye className="w-3.5 h-3.5" />
                Optical Sort Line
              </div>
            </div>
            <div className="p-8 flex-grow space-y-4">
              <h3 className="font-display font-extrabold text-xl text-gray-900">
                Multi-Spectral AI Color Sorting
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                Our plant integrates modern photoelectric color sorters. These machines examine every single grain on a high-speed conveyor using advanced sensors, instantly blasting away discolored, chalky, or damaged grains using precision micro-air nozzles.
              </p>
              
              {/* Technical Specifications checklist */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Capacity</p>
                  <p className="text-sm font-bold text-gray-800">15 Tons / Hour</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Sensors</p>
                  <p className="text-sm font-bold text-gray-800">CCD Multi-Chamber</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Purification Rate</p>
                  <p className="text-sm font-bold text-brand-green">99.98% True Grain</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Defect Removal</p>
                  <p className="text-sm font-bold text-gray-800">Chalky, Yellow, Stone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Silos & Storage */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <img 
                src={storageImg} 
                alt="Modern Rice Storage Warehouse Silos" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono uppercase flex items-center gap-1.5 shadow">
                <Warehouse className="w-3.5 h-3.5" />
                Silo & Logistics Park
              </div>
            </div>
            <div className="p-8 flex-grow space-y-4">
              <h3 className="font-display font-extrabold text-xl text-gray-900">
                Climate-Controlled Storage & Warehousing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                To guarantee persistent year-round supplies, we house raw and processed grains in high-grade steel silos. These structures have integrated temperature, moisture, and airflow sensors that maintain grain viability, completely halting mold or pest developments.
              </p>
              
              {/* Technical Specifications checklist */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Silo Capacity</p>
                  <p className="text-sm font-bold text-gray-800">35,000 Metric Tons</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Climate Tracking</p>
                  <p className="text-sm font-bold text-gray-800">Automated 24/7 Sensors</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Hygienic Rating</p>
                  <p className="text-sm font-bold text-brand-green">Food-Grade Stainless</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium uppercase font-mono">Pest Mitigation</p>
                  <p className="text-sm font-bold text-gray-800">Gas-Tight Aeration</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Operational Flow banner */}
        <div className="mt-12 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-2">
              <Milestone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-gray-900">1. Raw Paddy Intake</h4>
            <p className="text-xs text-gray-500">De-stoning, cleaning, and preliminary grading.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-2">
              <HardHat className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-gray-900">2. Multi-Stage Hulling</h4>
            <p className="text-xs text-gray-500">Separating husks with computerized rubber roll hullers.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-2">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-gray-900">3. Polishing & Sorting</h4>
            <p className="text-xs text-gray-500">Double-silk water polishing & AI optical sorting.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-2">
              <Warehouse className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-gray-900">4. Precision Packaging</h4>
            <p className="text-xs text-gray-500">Automated weights, sealing, and immediate shipping.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
