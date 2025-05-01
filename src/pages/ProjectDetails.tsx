import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import inc from '../../assets/inc.png'
import smart from '../../assets/smart.png'


interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  longDescription: string;
  features: string[];
  technologies: string[];
}

const projects: { [key: string]: Project } = {
  'ai-analytics': {
    title: "Invertis Innovation & Incubation Official Website",
    description: "The official website of IIIC showcases Invertis University's innovation, incubation programs, and entrepreneurial initiatives in a dynamic digital space.",
    image: inc,
    githubUrl: "https://github.com/Tessstarkbankai/IncubationIIIF",
    liveUrl: "https://www.invertisincubation.com/",
    tags: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
    longDescription: "An advanced analytics platform that leverages artificial intelligence to provide real-time insights and predictive modeling capabilities. The system processes large datasets and presents information through interactive visualizations.",
    features: [
      "Real-time data processing",
      "Modern UI",
      "Interactive dashboards",
      "Custom report generation",
      "Automated insights"
    ],
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "MongoDB"
    ]
  },
  'blockchain-exchange': {
    title: "Smart Waste Management System",
    description: "The Smart Waste Management System is an AI-powered solution that classifies waste types using machine learning and generates a real-time dashboard for efficient monitoring and analysis; this innovative project secured 2nd prize at the Hackathon organized by Invertis University.",
    image: smart,
    githubUrl: "https://github.com/Tessstarkbankai/Smart-Waste-Management",
    liveUrl: "https://smart-waste-management-iota.vercel.app/",
    tags: ["Web3.js", "Solidity", "React", "Node.js"],
    longDescription: "A decentralized cryptocurrency exchange platform built on blockchain technology, enabling secure and transparent trading of digital assets with real-time market data and automated order matching.",
    features: [
      "AI powered Solution",
      "Waste Management",
      "Frontend + Backend",
      "Dashboard",
      "API"
    ],
    technologies: [
      "Next.js",
      "Gemini API",
      "Node.js",
      "MongoDB",
      "API"
    ]
  },
  'iot-hub': {
    title: "Smart Home IoT Hub",
    description: "Centralized IoT management system for smart home devices with real-time monitoring.",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#",
    tags: ["IoT", "React", "Node.js", "MQTT"],
    longDescription: "A comprehensive IoT management system that enables users to control and monitor smart home devices through a centralized hub. Features include real-time monitoring, automation rules, and device management.",
    features: [
      "Device management",
      "Real-time monitoring",
      "Automation rules",
      "Energy analytics",
      "Remote control"
    ],
    technologies: [
      "IoT",
      "React",
      "Node.js",
      "MQTT",
      "WebSockets",
      "MongoDB"
    ]
  }
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen grid-background bg-black text-white pt-20 px-4">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-2xl">Project not found</h1>
          <Link to="/" className="text-[#00ffaa] hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid-background bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-[#00ffaa] hover:underline mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[#00ffaa]/10 text-[#00ffaa]"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-lg mb-8">
          {project.longDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="w-2 h-2 bg-[#00ffaa] rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <ul className="space-y-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="w-2 h-2 bg-[#00ffaa] rounded-full mr-2" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ffaa]/10 text-[#00ffaa] hover:bg-[#00ffaa]/20 transition-colors"
          >
            <Github size={20} />
            <span>View Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ffaa]/10 text-[#00ffaa] hover:bg-[#00ffaa]/20 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}