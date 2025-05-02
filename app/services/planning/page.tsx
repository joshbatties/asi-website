import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../services.module.css';
import ProductsHero from '@/components/ProductsHero';

export const metadata: Metadata = {
  title: 'Plan Scheduling | ASI Steel Melbourne',
  description: 'Our expert team provides detailed schedules, plans, and estimations of reinforcement products based on architectural drawings for all projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/planning'
  }
}

export default function PlanScheduling() {
  return (
    <div className={styles.productsWrapper}>
      <ProductsHero 
        title="Plan Scheduling" 
        subtitle="Our expert team provides detailed schedules, plans, and estimations of reinforcement products based on architectural drawings for all projects."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Detailed Reinforcement Schedules Section */}
        <div className="flex flex-col-reverse lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Detailed Reinforcement Schedules</h2>
            <p className="text-blue-100/80 mb-6">
              Our reinforcement schedules provide a comprehensive breakdown of all reinforcement requirements for your project:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Precise bar sizes, lengths, and quantities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Bending schedules for complex shapes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Clear identification of different steel grades</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Organized by structural elements (e.g., columns, beams, slabs)</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/reinforcement-schedules.jpg" 
                alt="Detailed reinforcement schedules" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Annotated Plans Section */}
        <div className="flex flex-col lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/annotated-plans.jpg" 
                alt="Annotated construction plans" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Annotated Plans</h2>
            <p className="text-blue-100/80 mb-6">
              Our expertly annotated plans provide clear and concise information for efficient on-site execution:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Detailed reinforcement layouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Clear labeling of bar placements and spacings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Identification of critical structural details</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Cross-referencing with reinforcement schedules</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Additional sections will be added next */}
        
        {/* Reinforcement Product Estimation Section */}
        <div className="flex flex-col-reverse lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Reinforcement Product Estimation</h2>
            <p className="text-blue-100/80 mb-6">
              We provide accurate estimations of reinforcement products based on your architectural drawings:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Detailed quantity take-offs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Optimisation of bar lengths to minimise waste</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Consideration of splice lengths and development requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Recommendations for cost-effective reinforcement solutions</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/product-estimation.jpg" 
                alt="Reinforcement product estimation" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Comprehensive Project Support Section */}
        <div className="flex flex-col lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/project-support.jpg" 
                alt="Comprehensive project support" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Comprehensive Project Support</h2>
            <p className="text-blue-100/80 mb-6">
              Our plan scheduling service goes beyond just paperwork:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Collaboration with your design team to ensure accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Regular updates to reflect design changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>On-site support for interpretation of schedules and plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Integration with our material delivery and fabrication services</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact form will be added next */}
        
        {/* Contact Form Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Request Plan Scheduling</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            Ready to get started with our plan scheduling services? Fill out the form below, and our planning team will contact you to discuss your project requirements.
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
                  required
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Company Field */}
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company (Optional)"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Project Type */}
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled selected className="bg-gray-900">Project Type</option>
                  <option value="commercial" className="bg-gray-900">Commercial</option>
                  <option value="residential" className="bg-gray-900">Residential</option>
                  <option value="industrial" className="bg-gray-900">Industrial</option>
                  <option value="infrastructure" className="bg-gray-900">Infrastructure</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>
              
              {/* Service Type */}
              <div className="relative">
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled selected className="bg-gray-900">Service Required</option>
                  <option value="schedules" className="bg-gray-900">Reinforcement Schedules</option>
                  <option value="plans" className="bg-gray-900">Annotated Plans</option>
                  <option value="estimation" className="bg-gray-900">Product Estimation</option>
                  <option value="comprehensive" className="bg-gray-900">Comprehensive Support</option>
                  <option value="full" className="bg-gray-900">Full Package (All Services)</option>
                </select>
              </div>
              
              {/* Project Timeline */}
              <div className="relative sm:col-span-2">
                <input
                  type="date"
                  id="projectDate"
                  name="projectDate"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <label htmlFor="projectDate" className="absolute -top-6 left-0 text-gray-400 text-sm">
                  Project Start Date
                </label>
              </div>
              
              {/* Message Field - spans 2 columns */}
              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Please provide details about your project and planning requirements"
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
                  Submit Request
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
    </div>
  );
}