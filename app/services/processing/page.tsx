import { Metadata } from 'next'
import Image from 'next/image';
import ProductsHero from '@/components/ProductsHero';

export const metadata: Metadata = {
  title: 'Steel Processing Services | ASI Steel Melbourne',
  description: 'Professional steel processing services including cutting, bending, and shaping. Expert steel processing solutions in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/processing'
  }
}

export default function ProcessingBar() {
  return (
    <>
      <ProductsHero 
        title="Processing Bar" 
        subtitle="We offer state-of-the-art steel reinforcing bar processing services, providing precision cutting and shaping to meet your exact specifications."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Wide landscape image - fixed height on all screen sizes */}
        <div className="w-full mb-12 relative h-[250px] sm:h-[300px] md:h-[400px]">
          <Image 
            src="/images/site.jpg" 
            alt="Steel reinforcing bar processing" 
            fill
            className="object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* 2-column layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column with text boxes */}
          <div className="w-full md:w-3/5 space-y-8">
            {/* First text box */}
            <div className="bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                            shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                            hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                            transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Processing Services</h3>
              <p className="text-blue-100/80 mb-4">We offer a comprehensive range of steel reinforcing bar processing services, including:</p>
              <ul className="space-y-2 text-blue-100/80">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><span className="font-bold">Precision Cutting:</span> Custom lengths to fit your project needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><span className="font-bold">Bending:</span> Accurate shaping for complex structural requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><span className="font-bold">Threading:</span> For specialized connections and joints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><span className="font-bold">Welding:</span> Joining bars for reinforced structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><span className="font-bold">Coating:</span> Corrosion protection for extended durability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><span className="font-bold">Bundle Preparation:</span> Organized for efficient on-site handling</span>
                </li>
              </ul>
            </div>
            
            {/* Second text box */}
            <div className="bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                            shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                            hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                            transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Assurance</h3>
              <p className="text-blue-100/80 mb-4">Our processing services adhere to the highest industry standards:</p>
              <ul className="space-y-2 text-blue-100/80 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Strict quality control measures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Advanced processing equipment for precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Experienced technicians ensuring accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Compliance with relevant building codes and regulations</span>
                </li>
              </ul>
              
              {/* Certifications grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-black/30 p-3 rounded flex items-center justify-center h-24">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/ACRS.png" 
                      alt="Quality Certification" 
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
                <div className="bg-black/30 p-3 rounded flex items-center justify-center h-24">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/ISO9001.png" 
                      alt="Quality Certification" 
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
                <div className="bg-black/30 p-3 rounded flex items-center justify-center h-24">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/ISO14001.png" 
                      alt="Quality Certification" 
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
                <div className="bg-black/30 p-3 rounded flex items-center justify-center h-24">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/ISO45001.webp" 
                      alt="Quality Certification" 
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with vertical image - fixed for mobile */}
          <div className="w-full md:w-2/5 relative">
            {/* On mobile, use fixed height div instead of sticky positioning */}
            <div className="block md:hidden relative w-full h-[400px] mb-8 mt-4">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-blue-500/20 
                            shadow-[0_0_15px_rgba(128,128,128,0.3)]
                            transition-all duration-300">
                <Image 
                  src="/images/crane.png" 
                  alt="Steel processing facility" 
                  fill
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* On desktop, use sticky positioning */}
            <div className="hidden md:block sticky top-24 h-full min-h-[600px] md:h-[calc(100vh-200px)]">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-blue-500/20 
                              shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                              hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                              transition-all duration-300">
                <Image 
                  src="/images/crane.png" 
                  alt="Steel processing facility" 
                  fill
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Section replaced with Contact Form */}
        <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Get a Free Quote</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            If you are interested in processing steel reinforcing bar, please contact us to help us understand your needs. 
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
                  placeholder="Please describe your processing requirements"
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
