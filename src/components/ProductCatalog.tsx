import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, CheckCircle, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data';
import packagedRiceImg from '../assets/images/rice_packaged_products_1784174771036.jpg';

interface ProductCatalogProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export default function ProductCatalog({ onSelectProductForEnquiry }: ProductCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'premium' | 'standard' | 'byproduct'>('all');

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (activeFilter === 'all') return true;
    return product.type === activeFilter;
  });

  const handleInquireProduct = (productName: string) => {
    onSelectProductForEnquiry(productName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'all', name: 'All Products' },
    { id: 'premium', name: 'Premium Aromatic' },
    { id: 'standard', name: 'Standard Long-Grain' },
    { id: 'byproduct', name: 'Milling Byproducts' },
  ] as const;

  return (
    <section id="products" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest font-mono">
              Product Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Fine-Milled Rice Output Catalog
            </h2>
            <div className="h-1 w-16 bg-brand-green rounded"></div>
          </div>
          
          {/* Dynamic Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-brand-green text-white shadow-sm'
                    : 'text-gray-600 hover:text-brand-green hover:bg-gray-100/50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: ProductItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-green/15 transition-all duration-300 flex flex-col group"
              >
                {/* Image Showcase */}
                <div className="relative aspect-video w-full bg-gray-50 overflow-hidden">
                  <img 
                    src={packagedRiceImg} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-md text-[10px] font-bold font-mono uppercase tracking-wider ${
                    product.type === 'premium' 
                      ? 'bg-brand-green text-white shadow-sm' 
                      : product.type === 'standard' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-amber-600 text-white'
                  }`}>
                    {product.type === 'premium' ? 'Premium Aromatic' : product.type === 'standard' ? 'Standard Grade' : 'Byproduct'}
                  </span>
                </div>

                {/* Content Frame */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3.5">
                    {/* Titles */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-display font-extrabold text-lg text-gray-900 group-hover:text-brand-green transition-colors">
                          {product.name}
                        </h3>
                        {product.type === 'premium' && (
                          <Sparkles className="w-4 h-4 text-brand-red flex-shrink-0" />
                        )}
                      </div>
                      {/* Myanmar Script styled nicely */}
                      <p className="text-sm font-semibold text-brand-red tracking-wide font-sans">
                        {product.myanmarName}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {product.description}
                    </p>

                    {/* Specifications List */}
                    <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                      <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                        <Tag className="w-3 h-3" /> Technical Specifications
                      </p>
                      <div className="grid grid-cols-1 gap-1.5 pt-1">
                        {product.specifications.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="pt-6 border-t border-gray-100">
                    <button
                      onClick={() => handleInquireProduct(product.name)}
                      className="w-full py-3 px-4 rounded-xl border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                    >
                      Inquire Bulk & Specs
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Quality Assurance banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-gray-900">Need specific customized blending ratios?</h4>
              <p className="text-sm text-gray-500 font-sans">We support blending standard and premium grains to hit specific targets for exports.</p>
            </div>
          </div>
          <a 
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold text-xs uppercase tracking-widest hover:bg-black transition-colors"
          >
            Custom Blending Setup
          </a>
        </div>

      </div>
    </section>
  );
}
