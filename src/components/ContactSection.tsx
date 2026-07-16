import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import { PRODUCTS_DATA } from '../data';

interface ContactSectionProps {
  selectedProduct: string;
}

export default function ContactSection({ selectedProduct }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    productInterest: 'general',
    orderVolume: '10-50',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill product interest when user selects a product from the catalog
  useEffect(() => {
    if (selectedProduct) {
      // Find matching product id or name
      const matchedProduct = PRODUCTS_DATA.find(
        (p) => p.name.toLowerCase().includes(selectedProduct.toLowerCase())
      );
      if (matchedProduct) {
        setFormData((prev) => ({ ...prev, productInterest: matchedProduct.name }));
      } else {
        setFormData((prev) => ({ ...prev, productInterest: selectedProduct }));
      }
    }
  }, [selectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Phone number, and Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      productInterest: 'general',
      orderVolume: '10-50',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Information & Mock Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-brand-red uppercase tracking-widest font-mono">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Establish a Reliable Bulk Supply Partner
              </h2>
              <div className="h-1 w-16 bg-brand-green rounded"></div>
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                Contact our corporate sales division to request price quotes, grain grade specifications, private labeling options, or to arrange a site visit to our mill.
              </p>
            </div>

            {/* Direct Contact Blocks */}
            <div className="space-y-4.5">
              
              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide font-mono">Call Operations</h4>
                  <p className="text-base font-semibold text-gray-800 mt-1 hover:text-brand-green transition-colors">
                    <a href="tel:+95912345678">+95 9 123 45678</a>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Corporate & Wholesale Desk</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide font-mono">Email Inquiry</h4>
                  <p className="text-base font-semibold text-gray-800 mt-1 hover:text-brand-green transition-colors">
                    <a href="mailto:sales@htetkyaw.com">sales@htetkyaw.com</a>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Expected response within 4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide font-mono">Mill & Warehouse Facility</h4>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    Plot 12A, Industrial Zone 3, Shwe Bo City, Sagaing Region, Myanmar
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Sagaing Region Rice Production Hub</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide font-mono">Business Hours</h4>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Monday &ndash; Saturday: 8:00 AM &ndash; 6:00 PM
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold mt-0.5">&bull; Milling Operations: 24/7 active</p>
                </div>
              </div>

            </div>

            {/* Micro Trust Indicator */}
            <div className="p-5 rounded-2xl bg-brand-green/[0.03] border border-brand-green/10 space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-green" />
                <span className="text-xs font-bold text-gray-900 uppercase font-mono tracking-wider">Myanmar Rice Association</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                HtetKyaw is a fully registered member of the Myanmar Rice Federation (MRF) and compliant with international sanitary certifications.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Request Form */}
          <div className="lg:col-span-7" id="inquiry-form-container">
            <div className="bg-gray-50/70 border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 mb-2">
                    <h3 className="font-display font-extrabold text-xl text-gray-900">
                      Send Commercial Inquiry
                    </h3>
                    <p className="text-xs text-gray-500">
                      Submit details of your volume requirements. Our trading officers will respond with custom pricing.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                        Contact Person <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="U Aung Kyaw / Ko Htin"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800"
                        required
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Co., Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                        Phone Number <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+95 9"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="buyer@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Product of Interest */}
                    <div className="space-y-1.5">
                      <label htmlFor="productInterest" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                        Product of Interest
                      </label>
                      <select 
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800 appearance-none cursor-pointer"
                      >
                        <option value="general">General Partnership / Grain Trading</option>
                        {PRODUCTS_DATA.map((product) => (
                          <option key={product.id} value={product.name}>
                            {product.name} ({product.myanmarName})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Order Volume */}
                    <div className="space-y-1.5">
                      <label htmlFor="orderVolume" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                        Estimated Order Volume
                      </label>
                      <select 
                        id="orderVolume"
                        name="orderVolume"
                        value={formData.orderVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800 appearance-none cursor-pointer"
                      >
                        <option value="under-10">Less than 10 Metric Tons (Sample Batch)</option>
                        <option value="10-50">10 &ndash; 50 Metric Tons (Standard FCL)</option>
                        <option value="50-200">50 &ndash; 200 Metric Tons (Bulk Wholesaler)</option>
                        <option value="over-200">More than 200 Metric Tons (Large Contract)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase tracking-wide font-mono block">
                      Inquiry Details & Requirements <span className="text-brand-red">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please specify grain grade requirements, desired packing sizes, transport logistics, or timeline of supply..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all font-sans text-gray-800 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Registering Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request for Quote
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Message Dialog */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto shadow-inner animate-pulse">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-gray-900">
                      Inquiry Logged Successfully
                    </h3>
                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                      Thank you, <strong className="text-gray-800">{formData.name}</strong>. Your bulk purchase interest has been routed directly to our Sagaing sales department.
                    </p>
                  </div>

                  {/* Receipt Summary block */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 text-left text-xs max-w-md mx-auto space-y-3.5">
                    <p className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest border-b border-gray-100 pb-2">
                      Inquiry Summary Receipt
                    </p>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-600">
                      <div>
                        <span className="font-medium">Company:</span>
                        <p className="font-bold text-gray-800">{formData.company || 'Not Specified'}</p>
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span>
                        <p className="font-bold text-gray-800">{formData.phone}</p>
                      </div>
                      <div>
                        <span className="font-medium">Product Select:</span>
                        <p className="font-bold text-brand-green">
                          {formData.productInterest === 'general' ? 'General Partnership' : formData.productInterest}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Est. Volume:</span>
                        <p className="font-bold text-gray-800">{formData.orderVolume} Tons</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:text-brand-green hover:border-brand-green font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
