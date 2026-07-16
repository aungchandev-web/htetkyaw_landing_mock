import { ShieldCheck, Award, Zap, CalendarCheck, Users, Check } from 'lucide-react';
import { FEATURES_DATA, FeatureItem } from '../data';

export default function WhyChooseUs() {
  
  // Icon selector helper
  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-green" />;
      case 'Award':
        return <Award className="w-5 h-5 text-brand-green" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-brand-green" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-brand-green" />;
      case 'Users':
        return <Users className="w-5 h-5 text-brand-green" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-green" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Big Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest font-mono">
              Our Core Edge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Setting the Standard in Myanmar Rice Trading
            </h2>
            <div className="h-1 w-16 bg-brand-green rounded"></div>
            
            <p className="text-gray-600 font-sans text-base leading-relaxed">
              Rice trading is a matter of volume, precision, and absolute trust. Over the years, HtetKyaw has aligned our infrastructure with modern standards to eliminate supply bottlenecks, quality drift, and logistics delays.
            </p>

            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Advanced Japanese Satake machinery lines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Moisture-adjusted packaging for maximum shelf life</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <span className="text-sm font-semibold text-gray-800">100% transparent and contract-compliant trading</span>
              </div>
            </div>

            {/* Accent badge showing national reputation */}
            <div className="p-5 rounded-2xl bg-brand-red/[0.03] border border-brand-red/10 flex items-center gap-4">
              <Award className="w-10 h-10 text-brand-red flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">National Trusted Mill Award</h4>
                <p className="text-xs text-gray-600">Recognized for outstanding support of local farming ecosystems.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion/Tile blocks of features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {FEATURES_DATA.map((feature: FeatureItem, index: number) => (
                <div 
                  key={feature.id}
                  className="p-6 sm:p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:border-brand-green/10 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5"
                >
                  {/* Circle Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm flex-shrink-0 self-start sm:self-center">
                    {renderFeatureIcon(feature.iconName)}
                  </div>

                  {/* Feature Content */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-brand-red">0{index + 1}</span>
                      <h3 className="font-display font-bold text-base text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
