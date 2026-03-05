// src/components/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const BRAND = 'Ifarmers Agricultural Products Services Limited';

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Chinedu Okeke',
    role: 'Cassava Farmer, Enugu',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    text: `${BRAND}'s custom fertilizer blends increased my cassava yield significantly. Their soil analysis solutions are excellent.`
  },
  {
    name: 'Aminat Bello',
    role: 'Rice Farmer, Kebbi',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
    text: `The digital farm management tools from ${BRAND} have helped me track production better and save hours each week.`
  },
  {
    name: 'Yakubu Ibrahim',
    role: 'Maize Farmer, Kaduna',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    text: `Working with ${BRAND} on input supply and agronomy support has greatly improved our cooperative's performance.`
  },
  {
    name: 'Ben Umeh',
    role: 'Vegetable Farmer, Imo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    text: `Their input supply chain is reliable and the fertilizer quality is consistently high. Highly recommended!`
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(
        () => setCurrent((prev) => (prev + 1) % testimonials.length),
        6000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D5016] mb-12">
            What Our Clients Say
          </h2>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-[#7CB342]/30" />

            <div className="text-center">
              <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-[#7CB342]"
              />

              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonials[current].text}"
              </p>

              <h4 className="font-bold text-[#2D5016]">{testimonials[current].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="p-2 bg-[#2D5016] text-white rounded-full hover:bg-[#7CB342] transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            i === current ? 'bg-[#7CB342]' : 'bg-gray-300'
                        }`}
                    />
                ))}
              </div>

              <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="p-2 bg-[#2D5016] text-white rounded-full hover:bg-[#7CB342] transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
