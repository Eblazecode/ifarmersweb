import React, { useState, useEffect, useRef } from 'react';
import { Users, MapPin, Handshake, Award } from 'lucide-react';

const stats = [
  { icon: <Users className="h-8 w-8" />, value: 50000, label: 'Farmers Reached', suffix: '+' },
  { icon: <MapPin className="h-8 w-8" />, value: 120000, label: 'Hectares Served', suffix: '+' },
  { icon: <Handshake className="h-8 w-8" />, value: 85, label: 'Partners', suffix: '+' },
  { icon: <Award className="h-8 w-8" />, value: 12, label: 'Years Experience', suffix: '' },
];

const ImpactStats: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={ref} className="bg-[#2D5016] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7CB342] rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;