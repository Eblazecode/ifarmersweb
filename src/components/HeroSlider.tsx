import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649933376_4b50541b.webp',
    title: 'Innovating Agriculture for a Sustainable Future',
    subtitle: 'Precision solutions for modern farming across Africa.',
    cta: 'Explore Services',
    link: '/services'
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649935341_b87aeae1.webp',
    title: 'Premium Fertilizer Blending Solutions',
    subtitle: 'Custom NPK formulations designed for your soil needs.',
    cta: 'Request Custom Blend',
    link: '/contact'
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649937319_f0d6bf14.webp',
    title: 'Reliable Input Supply for Farmers',
    subtitle: 'Seeds, fertilizers, chemicals, tools, and more.',
    cta: 'Request a Quote',
    link: '/contact'
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649939264_c6d85e71.webp',
    title: 'Agri Software for Smarter Decisions',
    subtitle: 'Farm management, monitoring, and analytics in one platform.',
    cta: 'Request a Demo',
    link: '/contact'
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="flex flex-col lg:flex-row min-h-[600px]">
      <div className="lg:w-1/2 relative overflow-hidden">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
          <ChevronLeft className="h-6 w-6 text-[#2D5016]" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
          <ChevronRight className="h-6 w-6 text-[#2D5016]" />
        </button>
      </div>

      <div className="lg:w-1/2 bg-gradient-to-br from-[#2D5016] to-[#1a3009] flex items-center justify-center p-8 lg:p-16">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 transition-all duration-500">{slides[current].title}</h1>
          <p className="text-lg text-gray-200 mb-8">{slides[current].subtitle}</p>
          <Link to={slides[current].link} className="inline-block bg-[#7CB342] hover:bg-[#689f38] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            {slides[current].cta}
          </Link>
          <div className="flex justify-center lg:justify-start space-x-2 mt-8">
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-[#7CB342]' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;