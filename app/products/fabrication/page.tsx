import Image from 'next/image';
import ProductsHero from '@/components/ProductsHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steel Fabrication Services | ASI Steel Melbourne',
  description: 'Professional steel fabrication services in Melbourne. Custom fabrication solutions for construction and industrial projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/fabrication'
  }
}

export default function SteelFabrication() {
  // Fabrication products data
  const fabricationProducts = [
    {
      title: 'Cages',
      image: '/images/cages.png',
      description: 'Custom-made steel cages for reinforcement in concrete structures, available in various sizes and configurations.'
    },
    {
      title: 'Starter Cages',
      image: '/images/startercages.jpg',
      description: 'Prefabricated starter cages designed for efficient and accurate placement of reinforcement in foundation and column construction.'
    },
    {
      title: 'Bar Mats',
      image: '/images/barmats.webp',
      description: 'Pre-assembled reinforcement mats for quick and easy installation in slabs, walls, and other concrete elements.'
    },
    {
      title: 'Circular Cages',
      image: '/images/circularcages.jpg',
      description: 'Specially designed circular reinforcement cages for cylindrical structures such as columns and piers.'
    },
    {
      title: 'Rectangular Cages',
      image: '/images/rectangularcages.png',
      description: 'Customizable rectangular cages for beams, columns, and other linear structural elements.'
    },
    {
      title: 'Round Cages',
      image: '/images/roundcages.jpg',
      description: 'Precision-fabricated round cages for applications requiring circular reinforcement structures.'
    },
    {
      title: 'Panels',
      image: '/images/panels.jpg',
      description: 'Prefabricated reinforcement panels for walls, slabs, and other large surface area applications.'
    }
  ];

  return (
    <>
      <ProductsHero 
        title="Steel Fabrication" 
        subtitle="Discover our comprehensive range of fabricated steel which can be precisely designed to meet your project's needs"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fabricationProducts.map((product, index) => (
            <div 
              key={index} 
              className="bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                         shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                         hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                         transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl mb-4 text-white">{product.title}</h3>
              
              <div className="relative w-full h-[250px] my-4 rounded-lg overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              
              <p className="text-blue-100/80 mt-2 flex-grow">{product.description}</p>
            </div>
          ))}
        </div>
        
        {/* Quote Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Get a Free Quote</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            If you are interested in steel fabrication, please contact us to help us understand your needs.
            A team member will reach out to you with a customized quote as soon as possible.
          </p>
          
          {/* Contact Form */}
          <div className="p-6 bg-black/20 backdrop-blur-sm border border-blue-500/20 rounded-lg 
                         shadow-[0_0_15px_rgba(128,128,128,0.3)]">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone (Optional)"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Company Field (Optional) */}
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company (Optional)"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Message Field - spans 2 columns */}
              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Please describe your fabrication requirements"
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                ></textarea>
              </div>
              
              {/* Form Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:col-span-2 justify-center mt-2">
                {/* Send Message Button (Primary) */}
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                >
                  Send Message
                </button>
                
                {/* Reset Form Button (Secondary) */}
                <button
                  type="reset"
                  className="border border-gray-500 text-gray-400 bg-transparent rounded-md py-3 px-8
                          transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                          hover:border-blue-300 hover:text-blue-200 backdrop-blur-sm"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}