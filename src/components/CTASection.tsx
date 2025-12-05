import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2D5016] to-[#1a3009] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7CB342] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B4513] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Agricultural Operations?
        </h2>
        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
          Partner with iFarmers Limited and unlock the full potential of your farm with our innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-[#7CB342] hover:bg-[#689f38] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a 
            href="tel:+254700123456"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#2D5016] font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;