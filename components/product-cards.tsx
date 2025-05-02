'use client'

import React from 'react';
import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

const ProductCards: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Steel Reinforcing Bar',
      image: '/images/steel-reinforcing-bar.jpg',
      link: '/products/bar'
    },
    {
      id: 2,
      title: 'Steel Fabrication',
      image: '/images/steel-fabrication.jpg',
      link: '/products/fabrication'
    },
    {
      id: 3,
      title: 'Steel Mesh',
      image: '/images/steel-mesh.jpg',
      link: '/products/mesh'
    },
    {
      id: 4,
      title: 'Tools & Accessories',
      image: '/images/tools-accessories.jpeg',
      link: '/products/tools'
    },
  ];

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-light tracking-tight text-center mb-4">Our Products</h2>
        
        {/* Underline */}
        <div className="w-56 h-0.5 bg-blue-500 mx-auto mb-16"></div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:w-1/2 mx-auto">
          {products.map((product) => (
            <div key={product.id} className="relative overflow-hidden group bg-black rounded-lg shadow-[0_8px_20px_rgba(150,150,150,0.3)] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(200,200,200,0.4)]">
              {/* Product Card */}
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/30 group-hover:from-black/90 group-hover:to-black/60 transition-all duration-300"></div>
                
                {/* Product Title */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">{product.title}</h3>
                  <Button 
                    href={product.link} 
                    label="Learn more" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products Button */}
        <div className="flex justify-center mt-14">
          <Link href="/products" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;