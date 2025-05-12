// app/products/bar/page.tsx
import Image from 'next/image';
import ProductsHero from '@/components/ProductsHero';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Reinforcing Bar | ASI Steel Melbourne',
  description: 'High-quality steel reinforcing bar for construction projects. Available in various sizes and grades, compliant with Australian Standards.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/bar'
  }
}

export default function SteelReinforcingBar() {
  // Stock products data
  const stockProducts = [
    {
      title: 'Deformed Bar in Length',
      image: '/images/DBIL.png',
      description: 'Standard lengths of deformed bars ready for immediate use.'
    }
  ];

  // Processed products data
  const processedProducts = [
    {
      title: 'Deformed Bar in Coil',
      image: '/images/DBIC.jpg',
      description: 'Compact coils processed to your specifications, ready for various construction needs.'
    },
    {
      title: 'Deformed Bar in Length',
      image: '/images/DBIL.png',
      description: 'Deformed bars processed to your precise specifications.'
    },
    {
      title: 'Ligatures',
      image: '/images/ligs.png',
      description: 'Smaller bent pieces of rebar, ideal for holding main reinforcement in place within concrete structures.'
    },
    {
      title: 'Bent Bars',
      image: '/images/bent.webp',
      description: 'Reinforcing bars bent into specific shapes for construction projects.'
    }
  ];

  return (
    <>
      <ProductsHero 
        title="Steel Reinforcing Bar" 
        subtitle="Explore our selection of stock bars, processed bars, and custom-cut products designed to strengthen and support your building structures."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Stock Section */}
        <h2 className="text-3xl font-light mb-8 mt-4 text-white border-l-4 border-blue-500 pl-4">Stock</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stockProducts.map((product, index) => (
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
        
        {/* Processed Section */}
        <h2 className="text-3xl font-light mb-8 mt-12 text-white border-l-4 border-blue-500 pl-4">Processed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processedProducts.map((product, index) => (
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
            If you are interested in our steel reinforcing bar, please contact us to help us understand your needs.
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
                  placeholder="Please describe your reinforcing bar requirements"
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