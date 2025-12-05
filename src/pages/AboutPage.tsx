import React from 'react';
import { Target, Eye, Heart, Award, Shield, Leaf, Globe, Sprout } from 'lucide-react';

const team = [
  { name: 'Dr. James Mwangi', role: 'CEO & Founder', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649940212_17901219.webp' },
  { name: 'Sarah Odhiambo', role: 'Operations Director', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649942214_28fdab96.webp' },
  { name: 'Michael Kiprop', role: 'Technical Lead', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649944150_0a789710.webp' },
  { name: 'Grace Wambui', role: 'Head of Research', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649946227_1f23f7ee.webp' },
];

const values = [
  { icon: <Heart className="h-6 w-6" />, title: 'Integrity', desc: 'We operate with honesty and transparency.' },
  { icon: <Target className="h-6 w-6" />, title: 'Excellence', desc: 'We strive for the highest quality in all we do.' },
  { icon: <Leaf className="h-6 w-6" />, title: 'Sustainability', desc: 'We protect our environment for future generations.' },
];

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#2D5016] to-[#1a3009] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About iFarmers Limited</h1>
          <p className="text-xl text-gray-200">Transforming African agriculture through innovation</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">Founded in 2013, iFarmers Limited emerged from a vision to revolutionize agriculture across Africa. We recognized the challenges facing smallholder farmers and set out to provide comprehensive solutions that combine traditional wisdom with modern technology.</p>
          <p className="text-gray-600">Today, we serve over 50,000 farmers across East Africa, providing everything from custom fertilizer blends to cutting-edge farm management software. Our integrated approach ensures farmers have access to quality inputs, expert guidance, and the tools they need to succeed.</p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Target className="h-12 w-12 text-[#7CB342] mb-4" />
            <h3 className="text-2xl font-bold text-[#2D5016] mb-4">Our Mission</h3>
            <p className="text-gray-600">To empower farmers with innovative agricultural solutions that increase productivity, profitability, and sustainability.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Eye className="h-12 w-12 text-[#7CB342] mb-4" />
            <h3 className="text-2xl font-bold text-[#2D5016] mb-4">Our Vision</h3>
            <p className="text-gray-600">To be Africa's leading agricultural solutions provider, transforming farming into a profitable and sustainable enterprise.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D5016] text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6 border-2 border-[#7CB342] rounded-xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#7CB342] text-white rounded-full mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-[#2D5016] mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2D5016] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sustainability & Community Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Globe className="h-12 w-12 mx-auto mb-4 text-[#7CB342]" />
              <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
              <p className="text-gray-300">Promoting eco-friendly farming practices that protect our planet.</p>
            </div>
            <div className="text-center p-6">
              <Sprout className="h-12 w-12 mx-auto mb-4 text-[#7CB342]" />
              <h3 className="text-xl font-bold mb-2">Farmer Empowerment</h3>
              <p className="text-gray-300">Training and supporting smallholder farmers to achieve food security.</p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 mx-auto mb-4 text-[#7CB342]" />
              <h3 className="text-xl font-bold mb-2">Community Development</h3>
              <p className="text-gray-300">Investing in rural communities through education and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D5016] text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#7CB342]" />
                <h3 className="font-bold text-[#2D5016]">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-8">Certifications & Compliance</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-[#F5F5DC] px-6 py-4 rounded-lg shadow"><Award className="h-6 w-6 text-[#7CB342]" /><span className="font-medium">ISO 9001:2015</span></div>
            <div className="flex items-center space-x-2 bg-[#F5F5DC] px-6 py-4 rounded-lg shadow"><Shield className="h-6 w-6 text-[#7CB342]" /><span className="font-medium">KEBS Certified</span></div>
            <div className="flex items-center space-x-2 bg-[#F5F5DC] px-6 py-4 rounded-lg shadow"><Leaf className="h-6 w-6 text-[#7CB342]" /><span className="font-medium">Green Certified</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;