'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import ProductsHero from '@/components/ProductsHero';
import { projects, getSectors, getLocations } from './projects-data';

export default function ProjectsClient() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const sectors = getSectors();
  const locations = getLocations();
  
  // Apply filters when sector or location changes
  useEffect(() => {
    let result = projects;
    
    if (selectedSector) {
      result = result.filter(project => project.sector === selectedSector);
    }
    
    if (selectedLocation) {
      result = result.filter(project => project.location === selectedLocation);
    }
    
    setFilteredProjects(result);
  }, [selectedSector, selectedLocation]);
  
  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSector(value === "" ? null : value);
  };
  
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedLocation(value === "" ? null : value);
  };
  
  const resetFilters = () => {
    setSelectedSector(null);
    setSelectedLocation(null);
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Schema.org data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Thing",
                "name": "Commercial Construction Projects",
                "description": "Major commercial construction projects completed by ASI Steel"
              },
              {
                "@type": "Thing",
                "name": "Residential Projects",
                "description": "Residential steel fabrication and construction projects"
              },
              {
                "@type": "Thing",
                "name": "Infrastructure Projects",
                "description": "Infrastructure development projects using ASI Steel products"
              }
            ]
          })
        }}
      />
      
      {/* Hero Section */}
      <ProductsHero 
        title="Our Projects" 
        subtitle="Discover our portfolio of successful steel construction projects across Australia"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Filters Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xl text-blue-400 font-medium">Filter by</span>
            
            {/* Sector Filter Dropdown */}
            <div className="relative flex-grow max-w-xs">
              <select
                value={selectedSector || ""}
                onChange={handleSectorChange}
                className="appearance-none w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="bg-gray-900">Select Sector</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector} className="bg-gray-900">
                    {sector}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Location Filter Dropdown */}
            <div className="relative flex-grow max-w-xs">
              <select
                value={selectedLocation || ""}
                onChange={handleLocationChange}
                className="appearance-none w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="bg-gray-900">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location} className="bg-gray-900">
                    {location}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Reset Button */}
            <button 
              onClick={resetFilters}
              className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-md transition-colors min-w-[120px]"
            >
              Reset
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Empty state if no projects match filters */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-blue-100/80 mb-6">Try adjusting your filters to see more projects</p>
            <button 
              onClick={resetFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md 
                        transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 