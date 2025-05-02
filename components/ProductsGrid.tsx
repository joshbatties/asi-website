'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/products/products.module.css';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 'reinforcing-bar',
      title: 'Steel Reinforcing Bar',
      description: 'Premium quality reinforcing bars for concrete structures in various sizes and grades.',
      image: '/images/steel-reinforcing-bar.jpg',
      link: '/products/bar'
    },
    {
      id: 'fabrication',
      title: 'Steel Fabrication',
      description: 'Custom steel fabrication services for construction, infrastructure, and architectural applications.',
      image: '/images/steel-fabrication.jpg',
      link: '/products/fabrication'
    },
    {
      id: 'mesh',
      title: 'Steel Mesh',
      description: 'Reinforcing mesh products designed for concrete reinforcement in construction projects.',
      image: '/images/steel-mesh.jpg',
      link: '/products/mesh'
    },
    {
      id: 'tools',
      title: 'Tools & Accessories',
      description: 'Quality tools, accessories, and supplies for steel handling and construction applications.',
      image: '/images/tools-accessories.jpeg',
      link: '/products/tools'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0"
        >
          {products.map((product) => (
            <Link key={product.id} href={product.link} className={`${styles.productCard} block bg-black/40 rounded-lg overflow-hidden`}>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                <p className="text-blue-100/80 line-clamp-2">{product.description}</p>
                
                <div className="mt-4 inline-flex items-center text-blue-400 font-medium">
                  View details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 