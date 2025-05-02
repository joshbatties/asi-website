'use client'

import React from 'react';
import Image from 'next/image';
import Button from './button';

const ServiceCards: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Processing Bar',
      image: '/images/processing-bar-white.png',
      hoverImage: '/images/processing-bar-blue.png',
      description: 'We provide comprehensive cutting and bending of steel bars to match your precise specifications.',
      link: '/services/processing'
    },
    {
      id: 2,
      title: 'Steel Fabrication',
      image: '/images/steel-fabrication-white.png',
      hoverImage: '/images/steel-fabrication-blue.png',
      description: 'From design to assembly, we create durable, custom steel structures for some of the largest projects in Australia.',
      link: '/products/fabrication'
    },
    {
      id: 3,
      title: 'Technical Support',
      image: '/images/technical-support-white.png',
      hoverImage: '/images/technical-support-blue.png',
      description: 'Our experienced engineers and technicians provide tailored guidance and problem-solving solutions.',
      link: '/services/support'
    },
    {
      id: 4,
      title: 'Materials Delivery',
      image: '/images/materials-delivery-white.png',
      hoverImage: '/images/materials-delivery-blue.png',
      description: 'We ensure prompt, safe, and secure delivery of materials with our HVNL certified in-house fleet.',
      link: '/services/delivery'
    },
    {
      id: 5,
      title: 'Plan Scheduling',
      image: '/images/plan-scheduling-white.png',
      hoverImage: '/images/plan-scheduling-blue.png',
      description: 'Our engineering team meticulously plans every aspect of your build, providing you with comprehensive schedules to coordinate your project.',
      link: '/services/planning'
    },
    {
      id: 6,
      title: 'Tools & Accessories',
      image: '/images/steel-accessories-white.png',
      hoverImage: '/images/steel-accessories-blue.png',
      description: 'We offer a wide range of high-quality construction tools and accessories to complement our primary products and services.',
      link: '/products/tools'
    },
  ];

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto">
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-7xl gap-8 px-4 mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative overflow-hidden group bg-black rounded-lg shadow-[0_8px_20px_rgba(150,150,150,0.3)] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(59,130,246,0.7)] hover:-translate-y-2"
            >
              {/* Service Card */}
              <div className="relative p-8 text-center flex flex-col items-center h-full">
                {/* Icon with hover effect */}
                <div className="relative h-20 w-20 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={service.hoverImage}
                    alt={`${service.title} active`}
                    width={80}
                    height={80}
                    className="object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                
                {/* Service Title and Description */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {/* Button with slide-up animation */}
                <div className="mt-auto transform translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button 
                    href={service.link}
                    label="Learn more" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards; 