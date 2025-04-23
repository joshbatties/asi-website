'use client'

import React, { useState } from 'react';
import Button from './button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light tracking-tight text-center mb-4">Get in touch</h2>
        
        {/* Underline */}
        <div className="w-56 h-0.5 bg-blue-500 mx-auto mb-16"></div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-8">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            
            {/* Company Field (Optional) */}
            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (Optional)"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            
            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows={8}
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              ></textarea>
            </div>
          </div>
          
          {/* Form Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Send Message Button (Primary) */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              Send Message
            </button>
            
            {/* Reset Form Button (Secondary) */}
            <button
              type="button"
              onClick={handleReset}
              className="border border-gray-500 text-gray-400 bg-transparent rounded-md py-3 px-8
                      transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                      hover:border-blue-300 hover:text-blue-200 backdrop-blur-sm"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 