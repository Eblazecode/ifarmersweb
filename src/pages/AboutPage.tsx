// src/pages/AboutPage.tsx
import React from 'react';
import {
  Target,
  Eye,
  Heart,
  Award,
  Shield,
  Leaf,
  Globe,
  Sprout,
  Users,
  Archive,
  CheckCircle,
} from 'lucide-react';

/**
 * SafeImg helper: uses src, but falls back to a neutral inline SVG if the image 404s.
 * This prevents broken external image requests from leaving empty broken icons and
 * avoids noisy errors in the console when remotes are unavailable.
 */
const PLACEHOLDER_SVG =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240'>
      <rect width='100%' height='100%' fill='#F3F7EF'/>
      <g fill='#9BAF88' transform='translate(60,40)'>
        <circle cx='40' cy='40' r='36' />
        <rect x='0' y='90' width='160' height='80' rx='8' />
      </g>
    </svg>`
    );

const SafeImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { src, alt = '', ...rest } = props;
  return (
      <img
          src={src}
          alt={alt}
          {...rest}
          onError={(e) => {
            const target = e.currentTarget;
            // prevent infinite loop if placeholder somehow errors
            if (target.getAttribute('data-fallback') !== 'true') {
              target.setAttribute('data-fallback', 'true');
              target.src = PLACEHOLDER_SVG;
            }
          }}
      />
  );
};

const team = [
  {
    name: 'Dr. James Mwangi',
    role: 'CEO & Founder',
    image:
        'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649940212_17901219.webp',
  },
  {
    name: 'Sarah Odhiambo',
    role: 'Operations Director',
    image:
        'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649942214_28fdab96.webp',
  },
  {
    name: 'Michael Kiprop',
    role: 'Technical Lead',
    image:
        'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649944150_0a789710.webp',
  },
  {
    name: 'Grace Wambui',
    role: 'Head of Research',
    image:
        'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649946227_1f23f7ee.webp',
  },
];

const values = [
  { icon: <Heart className="h-6 w-6" />, title: 'Integrity', desc: 'We operate with honesty and transparency.' },
  { icon: <Target className="h-6 w-6" />, title: 'Professionalism', desc: 'We deliver with discipline and accountability.' },
  { icon: <Leaf className="h-6 w-6" />, title: 'Innovation', desc: 'We continuously adopt modern solutions for better farm outcomes.' },
  { icon: <Award className="h-6 w-6" />, title: 'Excellence', desc: 'We strive for the highest quality in all we do.' },
  { icon: <CheckCircle className="h-6 w-6" />, title: 'High-Level Productivity', desc: 'We focus on measurable impact and results.' },
];

const partners = [
  'Martix Fertilizers — Kaduna State',
  'Greenwell Fertilizers — Akwa Ibom State',
  'United Fertilizers — Kogi State',
  'White Fog Environmental Limited — Kano',
  'PEDA (Produce Export Development Alliance)',
  'NEXTAR Quantum Systems',
];

const certifications = [
  'FISS — Fertilizers Input Support Services',
  'NESREA — Sustainability & Environmental Management',
  'CropLife Nigeria — Agro Chemicals Regulator',
  'OFPSAN — Organic Fertilizer Producers & Suppliers Association of Nigeria',
];

const services = [
  'Fertilizer blending',
  'Input supply',
  'Agricultural project management',
  'Agric software',
  'Agricultural export',
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
            <p className="text-gray-600 mb-4">
              Founded in 2013, iFarmers Limited emerged from a vision to revolutionize agriculture across Africa. We
              recognized the challenges facing smallholder farmers and set out to provide comprehensive solutions that
              combine traditional wisdom with modern technology.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of farmers across Nigeria, providing everything from custom fertilizer blends to
              cutting-edge farm management software. Our integrated approach ensures farmers have access to quality inputs,
              expert guidance, and the tools they need to succeed.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-[#F5F5DC]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Target className="h-12 w-12 text-[#7CB342] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D5016] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower farmers with innovative agricultural solutions that increase productivity, profitability, and
                sustainability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Eye className="h-12 w-12 text-[#7CB342] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D5016] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Africa's leading agricultural solutions provider, transforming farming into a profitable and
                sustainable enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2D5016] mb-6">Achievements</h2>

            <div className="bg-[#F9FFF4] border border-[#E6F6DA] p-6 rounded-lg shadow-sm">
              <p className="mb-4 text-gray-700">
                <strong>Supplied in 2023/2024 and 2025 dry and wet season programs</strong> by Nations Agricultural Growth Scheme and Agro Pocket.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li><strong>Nationwide Reach:</strong> We have successfully supplied our products to <strong>23 states</strong> in Nigeria, supporting farmers across the country.</li>
                <li><strong>Government Intervention Programs:</strong> Participated in government intervention programs, demonstrating our commitment to agricultural development and food security.</li>
                <li><strong>Quality Products:</strong> Formulated to meet the specific needs of Nigerian farmers, ensuring optimal crop yields and soil health.</li>
                <li><strong>Train-the-Trainer:</strong> Delivered a <strong>Train the Trainer</strong> program across <strong>37 states</strong> for the AFAN ICT project.</li>
              </ul>

              <p className="text-sm text-gray-600">Programs supplied: dry & wet season support under national schemes (2023, 2024 and 2025).</p>
            </div>
          </div>
        </section>

        {/* Strategic partners */}
        <section className="py-12 bg-[#F5F5DC]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2D5016] mb-6">Strategic Partners</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Users className="h-6 w-6 text-[#7CB342]" />
                    <div className="text-sm">{p}</div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Certifications & Compliance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2D5016] text-center mb-12">
              Certifications & Compliance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#F5F5DC] rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-7 w-7 text-[#7CB342]" />
                  <h3 className="font-semibold text-[#2D5016]">FISS</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Fertilizer Input Support Services certified for quality fertilizer blending & distribution.
                </p>
              </div>

              <div className="bg-[#F5F5DC] rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-7 w-7 text-[#7CB342]" />
                  <h3 className="font-semibold text-[#2D5016]">NESREA</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Recognized for environmental sustainability & regulatory compliance in agro operations.
                </p>
              </div>

              <div className="bg-[#F5F5DC] rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="h-7 w-7 text-[#7CB342]" />
                  <h3 className="font-semibold text-[#2D5016]">CropLife Nigeria</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Certified partner under national Agro-Chemical safety & stewardship standards.
                </p>
              </div>

              <div className="bg-[#F5F5DC] rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-7 w-7 text-[#7CB342]" />
                  <h3 className="font-semibold text-[#2D5016]">OFPSAN</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Certified organic fertilizer producer & supplier meeting national quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 bg-[#F5FFF6]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2D5016] mb-6 text-center">Our Services</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Archive className="h-6 w-6 text-[#7CB342]" />
                      <h4 className="font-semibold text-[#2D5016]">{s}</h4>
                    </div>
                    <p className="text-sm text-gray-600">We offer professional {s.toLowerCase()} with strong quality control and customer support.</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2D5016] text-center mb-8">Core Values</h2>

            <div className="grid md:grid-cols-5 gap-6">
              {values.map((v, i) => (
                  <div key={i} className="text-center p-6 border-2 border-[#7CB342] rounded-xl hover:shadow-lg transition-shadow bg-[#FCFFF8]">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#7CB342] text-white rounded-full mb-4">{v.icon}</div>
                    <h3 className="text-lg font-bold text-[#2D5016] mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-600">{v.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability & Impact */}
        <section className="py-20 bg-gradient-to-br from-[#2D5016] via-[#3b6a28] to-[#F5F5DC] text-white">
          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-4xl font-bold text-center mb-14">
              Sustainability & Community Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              {/* Card 1 */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                <Globe className="h-14 w-14 mx-auto mb-6 text-[#A0E86F]" />
                <h3 className="text-2xl font-semibold mb-3">Environmental Stewardship</h3>
                <p className="text-gray-200">
                  Advancing eco-friendly farming solutions that conserve soil, water, and biodiversity.
                </p>
              </div>

              {/* Card 2 */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                <Sprout className="h-14 w-14 mx-auto mb-6 text-[#A0E86F]" />
                <h3 className="text-2xl font-semibold mb-3">Farmer Empowerment</h3>
                <p className="text-gray-200">
                  Equipping smallholder farmers with tools, training, and support to scale sustainably.
                </p>
              </div>

              {/* Card 3 */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                <Heart className="h-14 w-14 mx-auto mb-6 text-[#A0E86F]" />
                <h3 className="text-2xl font-semibold mb-3">Community Development</h3>
                <p className="text-gray-200">
                  Strengthening rural communities through infrastructure, education, and long-term support.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutPage;
