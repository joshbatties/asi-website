import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../services.module.css';
import ProductsHero from '@/components/ProductsHero';

export const metadata: Metadata = {
  title: 'Material Delivery | ASI Steel Melbourne',
  description: 'Reliable steel materials delivery across Melbourne and Victoria with our HVNL-certified in-house fleet. We offer timely, safe and secure delivery options for all your steel products.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/delivery'
  }
}

export default function MaterialsDelivery() {
  return (
    <div className={styles.productsWrapper}>
      <ProductsHero 
        title="Material Delivery" 
        subtitle="We understand that timely delivery is crucial to your project's success. Trust our HVNL-certified in-house fleet for prompt, safe and secure delivery."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Efficient Fleet Management Section */}
        <div className="flex flex-col-reverse lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Efficient Fleet Management</h2>
            <p className="text-blue-100/80 mb-6">
              Our HVNL-certified in-house fleet of delivery vehicles is equipped with the latest technology to ensure efficient and timely deliveries:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>GPS-tracked vehicles for real-time delivery updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Specialized equipment for safe handling of steel products</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Environmentally friendly vehicles to reduce our carbon footprint</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Experienced drivers trained in material handling and safety procedures</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/fleet-management.jpg" 
                alt="Efficient fleet management vehicles" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Flexible Delivery Options Section */}
        <div className="flex flex-col lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/flexible-delivery.jpg" 
                alt="Flexible delivery options" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Flexible Delivery Options</h2>
            <p className="text-blue-100/80 mb-6">
              We offer a range of delivery options to suit your project needs:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Same-day delivery for urgent requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Scheduled deliveries to align with your project timeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Off-hours delivery to minimise disruption to your work site</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Custom delivery solutions for special project requirements</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* More sections will be added in the next edit */}
        
        {/* Quality Assurance Section */}
        <div className="flex flex-col-reverse lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Quality Assurance</h2>
            <p className="text-blue-100/80 mb-6">
              Our commitment to quality extends to our delivery service:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Rigorous quality checks before dispatch</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Secure packaging to prevent damage during transit</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Detailed delivery documentation for easy verification</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Post-delivery follow-up to ensure customer satisfaction</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/quality-control.jpg" 
                alt="Quality assurance checklist" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Customer Support Section */}
        <div className="flex flex-col lg:flex-row mb-24 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <div className="lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/customer-support.jpg" 
                alt="Customer support team" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Customer Support</h2>
            <p className="text-blue-100/80 mb-6">
              Our dedicated customer support team is always ready to assist you:
            </p>
            
            <ul className="text-blue-100/80 space-y-5 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>24/7 customer service for delivery inquiries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Real-time order tracking and status updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Prompt resolution of delivery-related issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Customized delivery reports for your project management needs</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact form will be added in the next edit */}
        
        {/* Contact Form Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Schedule a Delivery</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            Ready to arrange delivery for your steel materials? Fill out the form below, and our logistics team will contact you to discuss your delivery requirements.
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
              
              {/* Delivery Address */}
              <div className="relative sm:col-span-2">
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="Delivery Address"
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              {/* Delivery Date */}
              <div className="relative">
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <label htmlFor="deliveryDate" className="absolute -top-6 left-0 text-gray-400 text-sm">
                  Preferred Delivery Date
                </label>
              </div>
              
              {/* Delivery Time */}
              <div className="relative">
                <select
                  id="deliveryTime"
                  name="deliveryTime"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled selected className="bg-gray-900">Preferred Delivery Time</option>
                  <option value="morning" className="bg-gray-900">Morning (8am - 12pm)</option>
                  <option value="afternoon" className="bg-gray-900">Afternoon (12pm - 5pm)</option>
                  <option value="flexible" className="bg-gray-900">Flexible (Any Time)</option>
                  <option value="offhours" className="bg-gray-900">Off Hours (Evening/Night)</option>
                </select>
              </div>
              
              {/* Message Field - spans 2 columns */}
              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Please provide details about your delivery requirements (materials, quantities, special handling instructions, etc.)"
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
                  Schedule Delivery
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