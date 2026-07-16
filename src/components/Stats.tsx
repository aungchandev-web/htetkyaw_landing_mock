import { STATS_DATA, StatItem } from '../data';
import { Award, Compass, Users, Warehouse } from 'lucide-react';

export default function Stats() {
  
  // Icon finder helper for stats cards
  const renderStatIcon = (id: string) => {
    switch (id) {
      case 'years':
        return <Award className="w-5 h-5 text-brand-red" />;
      case 'capacity':
        return <Compass className="w-5 h-5 text-brand-green" />;
      case 'partners':
        return <Users className="w-5 h-5 text-brand-green" />;
      case 'silo_cap':
        return <Warehouse className="w-5 h-5 text-brand-red" />;
      default:
        return <Award className="w-5 h-5 text-brand-green" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro subtitle */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <p className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest mb-1.5">
            Operational Footprint
          </p>
          <h3 className="font-display font-extrabold text-2xl text-gray-900 tracking-tight">
            Credibility in Figures
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 font-sans mt-2">
            Our established physical facilities and trading volume speak to our capacity to fulfill high-volume orders without delay.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat: StatItem) => (
            <div 
              key={stat.id}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green/20 via-brand-green to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Top Row: Icon */}
              <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center mb-5 border border-gray-100">
                {renderStatIcon(stat.id)}
              </div>

              {/* Big Value Number */}
              <p className="font-display font-extrabold text-4xl lg:text-5xl text-brand-green tracking-tight group-hover:scale-102 transition-transform">
                {stat.value}
              </p>

              {/* Label */}
              <h4 className="font-display font-bold text-base text-gray-900 mt-3">
                {stat.label}
              </h4>

              {/* Sublabel */}
              <p className="text-xs text-gray-500 mt-1 font-sans leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
