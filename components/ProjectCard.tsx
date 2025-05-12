'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/projects/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
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
      
      {/* Dark overlay that always appears but gets darker on hover */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20
                  opacity-40 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
      
      {/* Mobile title - always visible at top on mobile */}
      <div className="absolute inset-x-0 top-0 p-6 z-10 md:hidden">
        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
      </div>
      
      {/* Mobile description and info - always visible at bottom on mobile */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10 md:hidden">
        <p className="text-lg text-blue-100/70 mb-3">{project.description}</p>
        <div className="flex justify-between text-sm text-blue-300">
          <span>{project.sector}</span>
          <span>{project.location}</span>
        </div>
      </div>
      
      {/* Desktop title at top - slides in from top on hover */}
      <div 
        className="absolute inset-x-0 top-0 p-6 z-10 hidden md:block 
                  transform -translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 ease-out"
      >
        <h3 className="text-4xl font-bold text-white">{project.title}</h3>
      </div>
      
      {/* Desktop description at bottom - slides up from bottom on hover */}
      <div 
        className="absolute inset-x-0 bottom-0 p-6 z-10 hidden md:block
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
  );
} 