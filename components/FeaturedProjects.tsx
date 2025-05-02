'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/projects/projects-data';
import { projects } from '@/app/projects/projects-data';

// Select 4 diverse featured projects
const featuredProjects = [
  projects.find(p => p.sector === 'Commercial' && p.location === 'VIC'),
  projects.find(p => p.sector === 'Residential' && p.location === 'NSW'),
  projects.find(p => p.sector === 'Infrastructure' && p.location === 'VIC'),
  projects.find(p => p.sector === 'Commercial' && p.location === 'NSW')
].filter(Boolean) as Project[];

// Use backup projects if we don't have enough diverse ones
const getProjectsToDisplay = () => {
  if (featuredProjects.length >= 4) {
    return featuredProjects.slice(0, 4);
  }
  
  // Fall back to first 4 projects if we don't have diverse enough projects
  return projects.slice(0, 4);
};

export default function FeaturedProjects() {
  const projectsToDisplay = getProjectsToDisplay();
  
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light tracking-tight text-center mb-4">Featured Projects</h2>
        
        {/* Underline */}
        <div className="w-56 h-0.5 bg-blue-500 mx-auto mb-16"></div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsToDisplay.map((project) => (
            <div 
              key={project.id}
              className="relative overflow-hidden group rounded-lg aspect-square shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                        hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={project.imageSrc || '/images/placeholder.jpg'} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Dark overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20
                          opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              
              {/* Project title - slides in from top on hover */}
              <div 
                className="absolute inset-x-0 top-0 p-6 z-10
                          transform -translate-y-full group-hover:translate-y-0 
                          transition-transform duration-500 ease-out"
              >
                <h3 className="text-4xl font-bold text-white">{project.title}</h3>
              </div>
              
              {/* Project description - slides up from bottom on hover */}
              <div 
                className="absolute inset-x-0 bottom-0 p-6 z-10
                          transform translate-y-full group-hover:translate-y-0 
                          transition-transform duration-500 ease-out delay-100"
              >
                <p className="text-xl text-blue-100/90 mb-3">{project.description}</p>
                <div className="flex justify-between text-base text-blue-300">
                  <span>{project.sector}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="flex justify-center mt-14">
          <Link 
            href="/projects" 
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 