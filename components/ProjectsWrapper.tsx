'use client';

import { ReactNode } from 'react';
import useScrollEffect from '@/app/projects/useScrollEffect';

interface ProjectsWrapperProps {
  children: ReactNode;
}

/**
 * Client component wrapper for the Projects page
 * This enables us to use hooks for scroll effects while keeping
 * the main page component a server component
 */
export default function ProjectsWrapper({ children }: ProjectsWrapperProps) {
  // Use the scroll effect hook
  useScrollEffect();
  
  return <>{children}</>;
} 