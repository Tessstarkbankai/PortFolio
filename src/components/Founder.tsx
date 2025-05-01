import React from 'react';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function Founder() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "50+",
      label: "Student Partners"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "10+",
      label: "Projects Completed"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "90%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <Award className="text-[#00ffaa] w-12 h-12 mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Founder of Octocult Services LLP</h2>
              <p className="text-xl text-[#00ffaa] mb-6">Empowering Students Through Digital Innovation</p>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Leading a student-driven agency that revolutionizes digital services by providing cost-effective solutions 
                while nurturing young talent.
              </p>
              <p className="text-lg">
                At Octocult, we believe in bridging the gap between education and industry by offering real-world 
                experience to students while delivering exceptional digital services to our clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-black/50 backdrop-blur-lg border border-[#00ffaa]/20 rounded-xl p-6
                          hover:border-[#00ffaa] transition-all duration-300
                          transform hover:-translate-y-2"
              >
                <div className="text-[#00ffaa] mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}