
import React from "react";
import { Shield, Leaf, Zap, HeartHandshake } from "lucide-react";

/* Export images */
import export1 from "@/assets/gallery/ginger.jpg";
import export2 from "@/assets/gallery/soyabeans.jpg";
import export3 from "@/assets/gallery/cocoa.jpg";

/* Commodity images */
import ginger from "@/assets/gallery/ginger.jpg";
import soybean from "@/assets/gallery/soyabeans.jpg";
import sesame from "@/assets/gallery/sesame.jpg";
import cashew from "@/assets/gallery/cashew.webp";
import tigernut from "@/assets/gallery/tiggernut.jpeg";
import hibiscus from "@/assets/gallery/hibiscus.jpg";
import cocoa from "@/assets/gallery/cocoa.jpg";

/* Certification logos */
import nepc from "@/assets/gallery/NEPC.png";
import naqs from "@/assets/gallery/naqs.jpg";
import fpis from "@/assets/gallery/fpis.webp";

const reasons = [
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Quality Assured",
    description:
      "Our agricultural commodities meet international export standards through strict inspection and quality control.",
  },
  {
    icon: <Leaf className="h-7 w-7" />,
    title: "Sustainable Practices",
    description:
      "We promote environmentally responsible farming and supply chains across Africa.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Innovation Driven",
    description:
      "Modern agricultural technology powers our production and export systems.",
  },
  {
    icon: <HeartHandshake className="h-7 w-7" />,
    title: "Farmer First",
    description:
      "We empower farmers with access to markets, resources, and agricultural opportunities.",
  },
];

const commodities = [
  { name: "Ginger", img: ginger },
  { name: "Soya Beans", img: soybean },
  { name: "Sesame Seed", img: sesame },
  { name: "Cashew", img: cashew },
  { name: "Tigernut", img: tigernut },
  { name: "Hibiscus", img: hibiscus },
  { name: "Cocoa", img: cocoa },
];

const certifications = [
  { name: "Nigeria Export Promotion Council", logo: nepc },
  { name: "Nigeria Agricultural Quarantine Service", logo: naqs },
  { name: "Federal Produce Inspection Service", logo: fpis },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* WHY CHOOSE US */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
            Why Choose iFarmers
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine agricultural expertise, sustainability, and technology to
            connect African farmers to global markets.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 text-center hover:shadow-xl transition"
            >

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[#2D5016] text-white">
                {reason.icon}
              </div>

              <h3 className="font-semibold text-lg text-[#2D5016] mb-2">
                {reason.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>

            </div>
          ))}

        </div>


        {/* CERTIFICATION BODIES */}
        <div className="mb-24">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-3">
              Certified By
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our export operations comply with national agricultural and international export regulations.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {certifications.map((cert, index) => (
                <div
                    key={index}
                    className="bg-white border rounded-2xl p-10 text-center hover:shadow-xl transition duration-300"
                >

                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <img
                        src={cert.logo}
                        alt={cert.name}
                        className="h-24 object-contain"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-[#2D5016]">
                    {cert.name}
                  </h3>

                </div>
            ))}

          </div>

        </div>


        {/* EXPORT COMMODITIES */}
        <div className="mb-24">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-[#2D5016] mb-3">
              Export Commodities
            </h2>

            <p className="text-gray-600">
              Premium agricultural commodities sourced directly from Nigerian farmers.
            </p>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {commodities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4 text-center">

                  <h4 className="font-semibold text-[#2D5016]">
                    {item.name}
                  </h4>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* EXPORT GALLERY
        <div className="mb-20">

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src={export1}
              className="rounded-xl shadow-lg h-64 object-cover w-full"
              alt="Export produce"
            />

            <img
              src={export2}
              className="rounded-xl shadow-lg h-64 object-cover w-full"
              alt="Commodity warehouse"
            />

            <img
              src={export3}
              className="rounded-xl shadow-lg h-64 object-cover w-full"
              alt="Agricultural export"
            />

          </div>

        </div>*/}

        {/* ADDRESS */}
        <div className="text-center">



          <a
            href="https://wa.me/2349046050154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            Chat With Us on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;