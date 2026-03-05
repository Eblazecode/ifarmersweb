import React from 'react';
import { BadgeCheck, Ship, Leaf } from 'lucide-react';

const certifications = [
  'Nigeria Export Promotion Council',
  'Nigeria Agricultural Quarantine Service',
  'Federal Produce Inspection',
];

const produceItems = [
  {
    name: 'Ginger',
    image: 'https://images.unsplash.com/photo-1615485500710-aa71fed89456?w=400&h=300&fit=crop',
  },
  {
    name: 'Soya Beans',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
  },
  {
    name: 'Sesame Seed',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=300&fit=crop',
  },
  {
    name: 'Cashew',
    image: 'https://images.unsplash.com/photo-1563292769-4e05b684851a?w=400&h=300&fit=crop',
  },
  {
    name: 'Tigernut',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=300&fit=crop',
  },
  {
    name: 'Hibiscus',
    image: 'https://images.unsplash.com/photo-1596438459194-f275867d42fb?w=400&h=300&fit=crop',
  },
  {
    name: 'Cocoa',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop',
  },
];

const AgroCommodityExport: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8faf5] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2D5016]/10 text-[#2D5016] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Ship className="h-4 w-4" />
            Part of Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">
            Agro Commodity Export
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We export premium quality Nigerian agricultural products to global markets, 
            ensuring the highest standards of quality and compliance.
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-xl font-semibold text-[#2D5016] mb-6 flex items-center gap-2">
            <BadgeCheck className="h-6 w-6 text-[#7CB342]" />
            We are Certified by
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-[#f8faf5] rounded-xl border border-[#7CB342]/20"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#7CB342] rounded-full flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Produce Ready for Export */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-6 flex items-center gap-2">
            <Leaf className="h-6 w-6 text-[#7CB342]" />
            Produce Ready for Export
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produceItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold text-lg">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-6 text-center italic">
            ...and other raw materials
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/2349046050154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgroCommodityExport;
