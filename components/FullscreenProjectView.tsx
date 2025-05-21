'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/app/projects/projects-data';
import styles from './fullscreen-projects.module.css';

interface FullscreenProjectViewProps {
  projects: Project[];
}

export default function FullscreenProjectView({ projects }: FullscreenProjectViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default placeholder image if none is provided
  const defaultImage = '/images/ACRS.png';

  return (
    <div ref={containerRef} className={`${styles.container} fullscreen-projects-view`}>
      {projects.map((project, index) => {
        // Ensure we have a valid image URL - use a known existing image as fallback
        const imageUrl = project.imageSrc && project.imageSrc.trim() !== '' 
          ? project.imageSrc 
          : (project.mobileImageSrc && project.mobileImageSrc.trim() !== '' 
              ? project.mobileImageSrc 
              : defaultImage);
        
        return (
          <div 
            key={project.id}
            className={`${styles.projectSection} snap-start`}
            id={`project-${project.id}`}
          >
            {/* Fullscreen image background */}
            <div className={styles.backgroundImage}>
              <Image 
                src={imageUrl}
                alt={project.title || 'Project Image'}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={85}
              />
            </div>
            
            {/* Content overlay at bottom */}
            <div className={styles.contentOverlay}>
              <div className="container mx-auto px-4">
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.meta}>
                  <span>{project.sector}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 