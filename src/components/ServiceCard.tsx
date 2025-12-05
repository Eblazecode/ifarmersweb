import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="w-14 h-14 bg-[#7CB342]/20 rounded-lg flex items-center justify-center mb-4 text-[#2D5016]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#2D5016] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-[#7CB342] font-semibold hover:text-[#2D5016] transition-colors"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;