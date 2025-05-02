import { Metadata } from 'next';
import ProjectsClient from './client';

export const metadata: Metadata = {
  title: 'Steel Construction Projects | ASI Steel Melbourne',
  description: 'Explore our portfolio of completed steel construction projects across Australia. Quality steel solutions for commercial, residential, and infrastructure projects.',
  keywords: 'steel construction projects, commercial steel projects, residential steel projects, infrastructure steel projects, ASI Steel projects, construction portfolio',
  alternates: {
    canonical: 'https://asisteel.com.au/projects'
  },
  openGraph: {
    title: 'Steel Construction Projects | ASI Steel Melbourne',
    description: 'View our showcase of successful steel construction projects across Australia including commercial buildings, residential developments and critical infrastructure.',
    url: 'https://asisteel.com.au/projects',
    siteName: 'ASI Steel',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function Projects() {
  return <ProjectsClient />;
}