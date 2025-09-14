import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full h-400">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {project.title}
        </h2>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full transition-colors duration-200"
              style={{
                backgroundColor: project.colors2[index],
                color: project.colors1[index],
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

    </div >
  );
};

export default ProjectCard;