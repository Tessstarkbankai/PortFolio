import React from 'react';
import { Laptop, Palette, PenTool, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-12 h-12" />,
    title: "Website Development",
    description: "Custom-built, responsive websites that deliver exceptional user experiences across all devices."
  },
  {
    icon: <PenTool className="w-12 h-12" />,
    title: "Logo Design",
    description: "Unique and memorable logo designs that capture your brand's essence and values."
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces with seamless user experiences that delight your customers."
  },
  {
    icon: <Share2 className="w-12 h-12" />,
    title: "Social Media Management",
    description: "Strategic social media management to boost your brand's online presence and engagement."
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-300">Transforming ideas into digital excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/50 backdrop-blur-lg border border-[#00ffaa]/20 rounded-xl p-6
                        hover:border-[#00ffaa] transition-all duration-300
                        hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-[#00ffaa]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-[#00ffaa] mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute inset-0 border border-[#00ffaa]/0 rounded-xl group-hover:border-[#00ffaa]/50
                            group-hover:shadow-[0_0_30px_rgba(0,255,170,0.2)] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}