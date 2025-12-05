import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Package, ClipboardList, Monitor, Check, ArrowRight, Truck, FlaskConical, Cpu, Users } from 'lucide-react';

const services = [
  {
    id: 'fertilizer',
    icon: <Beaker className="h-8 w-8" />,
    title: 'Fertilizer Blending',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649956214_0a045282.webp',
    description: 'Our state-of-the-art blending facility produces custom NPK formulations tailored to your specific soil and crop requirements. We use precision technology to ensure consistent quality in every batch.',
    features: ['Custom NPK ratios based on soil analysis', 'Micro-nutrient enrichment options', 'Bulk and retail packaging available', 'Quality tested and certified', 'Fast turnaround times', 'Technical support included'],
    cta: 'Request Custom Blend',
    highlights: [
      { icon: <FlaskConical className="h-5 w-5" />, text: '50+ NPK Variants' },
      { icon: <Check className="h-5 w-5" />, text: 'ISO Certified' },
      { icon: <Truck className="h-5 w-5" />, text: 'Nationwide Delivery' }
    ]
  },
  {
    id: 'input',
    icon: <Package className="h-8 w-8" />,
    title: 'Input Supply',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649958165_0c643f7a.webp',
    description: 'We supply high-quality agricultural inputs including certified seeds, fertilizers, crop protection chemicals, and farming tools from trusted global and local brands.',
    features: ['Certified seeds from leading breeders', 'Premium fertilizers and soil amendments', 'Crop protection chemicals', 'Modern farming equipment', 'Irrigation supplies', 'Competitive pricing'],
    cta: 'Request a Quote',
    highlights: [
      { icon: <Package className="h-5 w-5" />, text: '500+ Products' },
      { icon: <Check className="h-5 w-5" />, text: 'Quality Guaranteed' },
      { icon: <Truck className="h-5 w-5" />, text: 'Bulk Discounts' }
    ]
  },
  {
    id: 'project',
    icon: <ClipboardList className="h-8 w-8" />,
    title: 'Agricultural Project Management',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649959108_f4bc7b5f.webp',
    description: 'End-to-end agricultural project management from farm setup through training, monitoring, and yield optimization. Our experts guide you through every stage of your farming journey.',
    features: ['Farm planning and design', 'Farmer training programs', 'Monitoring and evaluation', 'Yield optimization strategies', 'Market linkage support', 'Financial advisory'],
    cta: 'Book a Consultation',
    highlights: [
      { icon: <Users className="h-5 w-5" />, text: '50,000+ Farmers' },
      { icon: <Check className="h-5 w-5" />, text: 'Proven Results' },
      { icon: <ClipboardList className="h-5 w-5" />, text: 'Full Support' }
    ]
  },
  {
    id: 'software',
    icon: <Monitor className="h-8 w-8" />,
    title: 'Agri Software Solutions',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649957169_eb6b50d3.webp',
    description: 'Smart farm management software that provides real-time monitoring, analytics, and decision support for modern farming. Make data-driven decisions to maximize your yields.',
    features: ['Farm management dashboard', 'Real-time crop monitoring', 'Weather integration', 'Expense tracking', 'Yield predictions', 'Mobile app access'],
    cta: 'Request a Demo',
    highlights: [
      { icon: <Cpu className="h-5 w-5" />, text: 'AI-Powered' },
      { icon: <Monitor className="h-5 w-5" />, text: 'Cloud-Based' },
      { icon: <Check className="h-5 w-5" />, text: '24/7 Support' }
    ]
  },
];

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fertilizer');
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div>
      <section className="bg-gradient-to-r from-[#2D5016] to-[#1a3009] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Comprehensive agricultural solutions for modern farming</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <button key={s.id} onClick={() => setActiveTab(s.id)} className={`flex items-center space-x-2 px-5 py-3 rounded-lg font-medium transition-all ${activeTab === s.id ? 'bg-[#7CB342] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {s.icon}
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="sticky top-40">
              <img src={activeService.image} alt={activeService.title} className="rounded-2xl shadow-2xl w-full" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                {activeService.highlights.map((h, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
                    <div className="text-[#7CB342] flex justify-center mb-2">{h.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-[#7CB342] text-white rounded-lg flex items-center justify-center">{activeService.icon}</div>
                <h2 className="text-3xl font-bold text-[#2D5016]">{activeService.title}</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">{activeService.description}</p>
              <h3 className="font-bold text-[#2D5016] mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                {activeService.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <Check className="h-5 w-5 text-[#7CB342] flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center bg-[#2D5016] hover:bg-[#7CB342] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
                {activeService.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;