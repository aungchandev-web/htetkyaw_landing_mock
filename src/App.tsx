/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FacilityShowcase from './components/FacilityShowcase';
import ProductCatalog from './components/ProductCatalog';
import Stats from './components/Stats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-green/20 selection:text-brand-green-hover">
      {/* Navigation Header */}
      <Header />
      
      <main>
        {/* Hero Banner Section */}
        <Hero />
        
        {/* Company Overview Section */}
        <About />
        
        {/* What We Offer / Services Section */}
        <Services />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Operations & Facility Showcase */}
        <FacilityShowcase />
        
        {/* Product Catalog with interactive filter and pre-fill callback */}
        <ProductCatalog onSelectProductForEnquiry={setSelectedProduct} />
        
        {/* Trust Stats Section */}
        <Stats />
        
        {/* Contact/CTA Section with pre-filled state */}
        <ContactSection selectedProduct={selectedProduct} />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

