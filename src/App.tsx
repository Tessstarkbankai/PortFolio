import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Send, Code, User, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import Scene from './components/Scene';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import Services from './components/Services';
import Founder from './components/Founder';
import Footer from './components/Footer';
import inc from '../assets/inc.png'
import waste from '../assets/smart.png'
import iot from '../assets/iot.png'

function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const projects = [
    {
      title: "Invertis Innovation & Incubation Official Website",
      description: "The official website of IIIC showcases Invertis University's innovation, incubation programs, and entrepreneurial initiatives in a dynamic digital space..",
      image: inc,
      githubUrl: "https://github.com/Tessstarkbankai/IncubationIIIF",
      liveUrl: "https://www.invertisincubation.com/",
      tags: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
      id: "ai-analytics"
    },
    {
      title: "Smart Waste Management System",
      description: "The Smart Waste Management System is an AI-powered solution that classifies waste types using machine learning and generates a real-time dashboard for efficient monitoring and analysis; this innovative project secured 2nd prize at the Hackathon organized by Invertis University.",
      image: waste,
      githubUrl: "https://github.com/Tessstarkbankai/Smart-Waste-Management",
      liveUrl: "https://smart-waste-management-iota.vercel.app/",
      tags: ["Gemini AI", "TypeScript", "Node.js"],
      id: "blockchain-exchange"
    },
    {
      title: "Smart Gen Set with IoT & ThingxWorx",
      description: "Centralized IoT management system for smart GenSet with real-time monitoring.",
      image: iot,
      githubUrl: "#",
      liveUrl: "#",
      tags: ["IoT & ThingxWorx", "React", "Node.js", "MQTT"],
      id: "iot-hub"
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: "https://github.com/Tessstarkbankai", label: "GitHub" },
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/ayushrai1092/", label: "LinkedIn" },
    { icon: <Instagram size={24} />, url: "https://www.instagram.com/ayushmaan_rai_7?igsh=MXkyazRqaGw5a2Y2dA==", label: "Instagram" },
    { icon: <MessageSquare size={24} />, url: "#", label: "WhatsApp" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
  };

  return (
    <div className="min-h-screen grid-background bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute ml-50 inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Scene />
          </Canvas>
        </div>
        <div className="relative z-20 h-full container mx-auto px-4">
          <div className="h-full flex flex-col">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 m-auto items-center">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h1 className="text-6xl font-bold neon-text">
                  Ayush Rai
                </h1>
                <p className="text-2xl text-[#00ffaa]">
                  Full Stack Developer & AI Enthusiast
                </p>
                <p className="text-gray-300 text-lg max-w-lg">
                  Crafting digital experiences with code, bringing ideas to life through elegant solutions.
                </p>
                <div className="flex gap-4">
                  <a href="#Projects"><button className="px-6 py-3 bg-[#00ffaa] text-black font-semibold rounded-lg hover:bg-[#00ffaa]/90 transition-colors">
                    View Projects
                  </button>
                  </a>
                  <a href="#contact"><button className="px-6 py-3 border border-[#00ffaa] text-[#00ffaa] font-semibold rounded-lg hover:bg-[#00ffaa]/10 transition-colors">
                    Contact Me
                  </button>
                  </a>
                </div>
              </div>
              
              {/* Right side - 3D Scene (Canvas already positioned absolutely) */}
              <div className="hidden lg:block" /> {/* Placeholder for layout */}
            </div>

            {/* Social Media Icons - Centered at bottom */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm p-4 rounded-2xl border border-[#00ffaa]/20">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target='blank'
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-black/50 border border-[#00ffaa]/20 hover:border-[#00ffaa] 
                             transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="text-[#00ffaa] transition-all duration-300 
                                group-hover:text-[#00ffaa] group-hover:animate-pulse 
                                group-hover:shadow-[0_0_15px_#00ffaa]">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-[#00ffaa]" size={24} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate developer with expertise in building modern web applications,
            AI systems, and blockchain solutions. With over 5 years of experience,
            I specialize in creating scalable and innovative solutions that push
            the boundaries of what's possible on the web.
          </p>
        </div>
      </section>

      <Services />
      
      <Founder />

      <section className="py-20 px-4 md:px-8 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code className="text-[#00ffaa]" size={24} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Send className="text-[#00ffaa]" size={24} />
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-[#00ffaa]/20 focus:border-[#00ffaa] focus:ring-1 focus:ring-[#00ffaa] outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-[#00ffaa]/20 focus:border-[#00ffaa] focus:ring-1 focus:ring-[#00ffaa] outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#00ffaa] text-black font-semibold rounded-lg hover:bg-[#00ffaa]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;