import Image from 'next/image';
import Link from 'next/link';
import styles from '../services/services.module.css';
import ProductsHero from '@/components/ProductsHero';
import metadata from './metadata';

export { metadata };

export default function Contact() {
  return (
    <div className={styles.productsWrapper}>
      {/* Schema.org data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ASI Steel",
            "url": "https://asisteel.com.au",
            "logo": "https://asisteel.com.au/images/logo.png",
            "description": "Quality steel suppliers in Melbourne offering reinforcing bar, mesh, fabrication and construction tools.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Steel Street",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3000",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-37.8136",
              "longitude": "144.9631"
            },
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+61 3 9555 5555",
              "contactType": "sales",
              "areaServed": "Victoria",
              "availableLanguage": "English"
            }],
            "sameAs": [
              "https://facebook.com/asisteel",
              "https://twitter.com/asisteel",
              "https://linkedin.com/company/asisteel",
              "https://instagram.com/asissteelau"
            ]
          })
        }}
      />
      
      <ProductsHero 
        title="Contact Us" 
        subtitle="Get in touch with our team for expert assistance with your steel requirements."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Contact Information Section */}
        <div className="flex flex-col lg:flex-row mb-16 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                      shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                      hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                      transition-all duration-300">
          <div className="lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Our Location</h2>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/site.jpg" 
                alt="ASI Steel Location" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <span className="text-blue-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Phone</h3>
                  <p className="text-blue-100/80">
                    <a href="tel:+6139555555" className="hover:text-blue-400 transition-colors">
                      +61 3 9555 5555
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-blue-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Email</h3>
                  <p className="text-blue-100/80">
                    <a href="mailto:info@asisteel.com.au" className="hover:text-blue-400 transition-colors">
                      info@asisteel.com.au
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-blue-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Address</h3>
                  <p className="text-blue-100/80">
                    123 Steel Street<br />
                    Melbourne, VIC 3000<br />
                    Australia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-blue-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Business Hours</h3>
                  <p className="text-blue-100/80">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                      shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                      hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                      transition-all duration-300">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white text-center">Send Us a Message</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            Fill out the form below, and our team will get back to you as soon as possible to discuss your steel requirements.
          </p>
          
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
            
            {/* Inquiry Type */}
            <div className="relative sm:col-span-2">
              <select
                id="inquiryType"
                name="inquiryType"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                <option value="" disabled selected className="bg-gray-900">Select Inquiry Type</option>
                <option value="quote" className="bg-gray-900">Request a Quote</option>
                <option value="information" className="bg-gray-900">Product Information</option>
                <option value="support" className="bg-gray-900">Technical Support</option>
                <option value="delivery" className="bg-gray-900">Delivery Inquiry</option>
                <option value="other" className="bg-gray-900">Other</option>
              </select>
            </div>
            
            {/* Message Field - spans 2 columns */}
            <div className="relative sm:col-span-2">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Please provide details about your inquiry"
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
        
        {/* Follow Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}