import React from 'react';
import { Shield, Leaf, Zap, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Quality Assured',
    description: 'All our products meet international quality standards with rigorous testing protocols.'
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Sustainable Practices',
    description: 'We prioritize environmentally friendly solutions that protect our planet for future generations.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Innovation Driven',
    description: 'Cutting-edge technology and research power our agricultural solutions.'
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: 'Farmer First',
    description: 'Our success is measured by the success of the farmers we serve across Africa.'
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">Why Choose iFarmers?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine decades of agricultural expertise with modern technology to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl border-2 border-transparent hover:border-[#7CB342] hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7CB342] to-[#2D5016] text-white rounded-full mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2D5016] mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;