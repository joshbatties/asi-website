'use client';

import { useState, useEffect, useRef } from 'react';
import ProductsHero from '@/components/ProductsHero';
import { projects, getSectors, getLocations } from './projects-data';
import FullscreenProjectView from '@/components/FullscreenProjectView';

export default function ProjectsClient() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  
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
    
    // Ensure all projects have valid image sources
    result = result.map(project => {
      if (project.imageSrc === '') {
        return {
          ...project,
          imageSrc: '/images/projects/placeholder.jpg'
        };
      }
      return project;
    });
    
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
  
  const toggleFilters = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

  return (
    <>
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
                "description": "Infrastructure development projects using ASI Steel projects"
              }
            ]
          })
        }}
      />
      
      {/* Hero & Filters Section */}
      <section className="snap-start h-screen">
        <div className="h-screen flex flex-col">
          <div className="flex-grow">
            <ProductsHero 
              title="Our Projects" 
              subtitle="Explore our portfolio of completed steel construction projects across Melbourne and beyond."
            />
            
            {/* Filters Section */}
            <div className="container mx-auto px-4 py-4 max-w-2xl">
              {/* Mobile Filter Toggle Button */}
              <div className="md:hidden mb-4 flex justify-center">
                <button 
                  onClick={toggleFilters}
                  className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-md py-2 px-4 text-white"
                >
                  <span>Filter Projects</span>
                  <svg 
                    className={`h-5 w-5 transition-transform duration-300 ${isFilterExpanded ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Filter Content - Hidden on mobile unless expanded */}
              <div className={`md:block ${isFilterExpanded ? 'block' : 'hidden'}`}>
                <div className="bg-blue-950/60 backdrop-blur-sm p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Sector Filter */}
                    <div>
                      <label htmlFor="sector-filter" className="block text-blue-300 text-sm mb-2">
                        Filter by Sector
                      </label>
                      <select
                        id="sector-filter"
                        value={selectedSector || ""}
                        onChange={handleSectorChange}
                        className="w-full px-4 py-2 bg-blue-950/70 border border-blue-800 rounded-md text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">All Sectors</option>
                        {sectors.map((sector) => (
                          <option key={sector} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Location Filter */}
                    <div>
                      <label htmlFor="location-filter" className="block text-blue-300 text-sm mb-2">
                        Filter by Location
                      </label>
                      <select
                        id="location-filter"
                        value={selectedLocation || ""}
                        onChange={handleLocationChange}
                        className="w-full px-4 py-2 bg-blue-950/70 border border-blue-800 rounded-md text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">All Locations</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Reset Filters Button */}
                  {(selectedSector || selectedLocation) && (
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={resetFilters}
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      >
                        <svg 
                          className="w-4 h-4 mr-1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        Reset Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      {filteredProjects.length === 0 ? (
        <section className="snap-start h-screen flex items-center justify-center">
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
        </section>
      ) : (
        <FullscreenProjectView projects={filteredProjects} />
      )}
    </>
  );
} 