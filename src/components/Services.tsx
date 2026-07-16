import { Cpu, Eye, Truck, Database, ChevronRight } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data';

export default function Services() {
  
  // Icon mapper function to safely assign Lucide icons based on string ID
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-green" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-brand-green" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-brand-green" />;
      case 'Database':
        return <Database className="w-6 h-6 text-brand-green" />;
      default:
        return <Cpu className="w-6 h-6 text-brand-green" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest font-mono">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Industrial Rice Solutions & Bulk Supply Services
            </h2>
            <div className="h-1 w-16 bg-brand-green rounded"></div>
          </div>
          <p className="text-gray-500 font-sans max-w-sm text-sm leading-relaxed">
            HtetKyaw provides fully modernized solutions designed specifically for global importers, local wholesalers, and consumer packaging houses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 flex flex-col group"
            >
              {/* Icon Frame */}
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green/20 transition-all duration-300">
                {renderServiceIcon(service.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6 flex-grow">
                {service.description}
              </p>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-brand-green transition-colors"
                >
                  Inquire Now
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                </a>
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Milled In MM
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-green text-white relative overflow-hidden shadow-lg">
          {/* Decorative graphic backdrop */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial from-white/10 to-transparent opacity-60 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2">
              <h4 className="font-display font-bold text-xl">Looking for Custom Processing and Bag Branding?</h4>
              <p className="text-sm text-emerald-100 max-w-2xl font-sans">
                We accommodate customized milling runs (different broken-rice percentages) and offer custom brand packaging (5kg, 10kg, 25kg, and 50kg PP/PE bags) for wholesale clients.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a 
                href="#contact" 
                className="px-6 py-3.5 rounded-xl bg-white text-brand-green font-bold text-sm shadow hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
              >
                Contact Distribution Team
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
