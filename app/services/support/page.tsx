import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../services.module.css';
import ProductsHero from '@/components/ProductsHero';

export const metadata: Metadata = {
  title: 'Technical Support | ASI Steel Melbourne',
  description: 'Expert technical support and consultation for steel construction projects. Professional guidance, troubleshooting, and innovative solutions for all your steel-related challenges.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/support'
  }
}

export default function TechnicalSupport() {
  return (
    <div className={styles.productsWrapper}>
      <ProductsHero 
        title="Technical Support" 
        subtitle="Our team of experts is here to provide guidance, troubleshooting, and innovative solutions for all your steel-related challenges."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Expert Consultation Section */}
        <div className="flex flex-col-reverse lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Expert Consultation</h2>
            <p className="text-blue-100/80 mb-6">
              Our team of seasoned professionals is ready to assist you with:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Material selection and specifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Design optimisation for steel structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Compliance with building codes and standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Cost-effective solutions for your project requirements</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/consultation.jpg" 
                alt="Expert consultation team meeting" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* On-Site Support Section */}
        <div className="flex flex-col lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/on-site-support.png" 
                alt="On-site technical support" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">On-Site Support</h2>
            <p className="text-blue-100/80 mb-6">
              We provide hands-on assistance at your project location:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Installation guidance and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Quality control and inspection services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Troubleshooting and problem-solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Safety consultations and risk assessments</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Technical Documentation Section */}
        <div className="flex flex-col-reverse lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Technical Documentation</h2>
            <p className="text-blue-100/80 mb-6">
              Access comprehensive resources to support your projects:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Detailed product specifications and data sheets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Installation guides and manuals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Technical drawings and CAD files</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Material Safety Data Sheets (MSDS)</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/technical-docs.jpg" 
                alt="Technical documentation and blueprints" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Training and Education Section */}
        <div className="flex flex-col lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/training.jpg" 
                alt="Training and education session" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Training and Education</h2>
            <p className="text-blue-100/80 mb-6">
              Enhance your team&apos;s knowledge and skills:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Product-specific workshops and seminars</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Best practices in steel construction techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Safety training for handling steel products</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Updates on industry standards and regulations</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Request Technical Support</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            Our technical team is here to help with your steel-related challenges. 
            Fill out the form below, and we&apos;ll connect you with the right specialist for your needs.
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
              
              {/* Support Type */}
              <div className="relative">
                <select
                  id="supportType"
                  name="supportType"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled className="bg-gray-900">Select Support Type</option>
                  <option value="consultation" className="bg-gray-900">Expert Consultation</option>
                  <option value="onsite" className="bg-gray-900">On-Site Support</option>
                  <option value="documentation" className="bg-gray-900">Technical Documentation</option>
                  <option value="training" className="bg-gray-900">Training & Education</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>
              
              {/* Project Timeline */}
              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled className="bg-gray-900">Project Timeline</option>
                  <option value="urgent" className="bg-gray-900">Urgent (within 48 hours)</option>
                  <option value="soon" className="bg-gray-900">This Week</option>
                  <option value="planning" className="bg-gray-900">Planning Phase (1-4 weeks)</option>
                  <option value="future" className="bg-gray-900">Future Project ({'>'}1 month)</option>
                </select>
              </div>
              
              {/* Message Field - spans 2 columns */}
              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Please describe your technical support needs"
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