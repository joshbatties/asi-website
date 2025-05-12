import Image from 'next/image';
import ProductsHero from '@/components/ProductsHero';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Tools & Accessories | ASI Steel Melbourne',
  description: 'Professional-grade construction tools and steel working accessories. Quality tools for construction and steel fabrication projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/tools'
  }
}

export default function ToolsAndAccessories() {
  // List of tool and accessory products
  const toolCategories = [
    "Plastic Bar Chairs, Plastic Tipped Bar Chairs",
    "Polyethylene Builders Film",
    "Bag Ties",
    "Jointex, Abelflex & Sticky Back",
    "Storm Water Drainage Product Range",
    "Galvanized Grates",
    "Range of concreting tools",
    "and many more....."
  ];

  return (
    <>
      <ProductsHero 
        title="Tools & Accessories" 
        subtitle="Discover our comprehensive range of tools and accessories designed to complement our steel products and enhance your construction projects."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Main content box */}
        <div className="mb-16 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <h2 className="text-3xl font-light mb-6 text-white">Available Products</h2>
          
          <p className="text-blue-100/80 mb-6">
            We stock a large range of tools and accessories, including the following:
          </p>
          
          <ul className="text-blue-100/80 space-y-3 mb-8 pl-4">
            {toolCategories.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          {/* Large image */}
          <div className="mt-12 mb-12">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/tools-and-accessories.png" 
                alt="Construction tools and accessories" 
                fill
                className="object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-blue-100/80 mb-8">
              For specific tools or accessories not listed here, please contact our team. We can source and supply a wide range of construction tools and accessories to meet your project requirements.
            </p>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Get a Free Quote</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            If you are interested in our tools and accessories, please contact us to help us understand your needs.
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
                  placeholder="Please describe what tools or accessories you need"
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