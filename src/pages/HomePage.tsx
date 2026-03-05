// src/pages/HomePage.tsx
import React from 'react';
import { Beaker, Package, ClipboardList, Monitor } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import ImpactStats from '@/components/ImpactStats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Newsletter from '@/components/Newsletter';
import Gallery, { ImageItem } from '@/components/Gallery';
import AgroCommodityExport from '@/components/AgroCommodityExport';

const IMAGES: ImageItem[] = [
  { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop', alt: 'Farmer in field', caption: 'Farm visit — Enugu', tag: 'fields' },
  { src: 'https://images.unsplash.com/photo-1589923188651-268a9765e432?w=600&h=400&fit=crop', alt: 'Woman farmer', caption: 'Rice farm — Kebbi', tag: 'people' },
  { src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop', alt: 'Chinedu Okeke', caption: 'Cassava Farmer — Enugu', tag: 'people' },
  { src: 'https://images.unsplash.com/photo-1595928796655-da1bfc322c6b?w=600&h=400&fit=crop', alt: 'Ngozi Umeh', caption: 'Vegetable Farmer — Imo', tag: 'people' },
];

const services = [
  {
    icon: <Beaker className="h-7 w-7" />,
    title: 'Fertilizer Blending',
    description: 'Custom NPK formulations tailored to your specific soil and crop requirements.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649956214_0a045282.webp',
    link: '/services'
  },
  {
    icon: <Package className="h-7 w-7" />,
    title: 'Input Supply',
    description: 'Quality seeds, fertilizers, chemicals, and farming tools from trusted brands.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649958165_0c643f7a.webp',
    link: '/services'
  },
  {
    icon: <ClipboardList className="h-7 w-7" />,
    title: 'Project Management',
    description: 'End-to-end agricultural project planning, execution, and monitoring.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649959108_f4bc7b5f.webp',
    link: '/services'
  },
  {
    icon: <Monitor className="h-7 w-7" />,
    title: 'Agri Software',
    description: 'Smart farm management software for data-driven agricultural decisions.',
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649957169_eb6b50d3.webp',
    link: '/services'
  },
];

const HomePage: React.FC = () => {
  return (
      <div>
        <HeroSlider />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">Welcome to Ifarmers Agricultural Products Services Limited</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We are a leading agricultural solutions provider dedicated to empowering farmers across Africa with innovative technologies, quality inputs, and expert guidance for sustainable farming success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <AgroCommodityExport />
        <ImpactStats />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
        <CTASection />

        {/* Pass local images into the reusable Gallery component */}
        <Gallery images={IMAGES} initialFilter="all" />
      </div>
  );
};

export default HomePage;
