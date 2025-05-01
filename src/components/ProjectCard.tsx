import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  id: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  tags,
  id,
}: ProjectCardProps) {
  return (
    <div id='Projects' className="card-hover bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden border border-[#00ffaa]/20">
      <Link to={`/project/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <Link to={`/project/${id}`}>
          <h3 className="text-xl font-bold text-white mb-2 hover:text-[#00ffaa] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[#00ffaa]/10 text-[#00ffaa]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#00ffaa] transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#00ffaa] transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}