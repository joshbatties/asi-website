import Hero from '@/components/hero'
import Introduction from '@/components/introduction'
import ProductCards from '@/components/product-cards'
import ServiceCards from '@/components/service-cards'
import FeaturedProjects from '@/components/FeaturedProjects'
import ContactForm from '@/components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASI Steel | Leading Steel Suppliers Melbourne',
  description: 'Melbourne\'s trusted steel supplier. Quality steel products, fabrication services, and construction solutions. Expert service across Australia.',
  alternates: {
    canonical: 'https://asisteel.com.au'
  }
}

export default function Home() {
  return (
    <>
    <Hero />
    <Introduction />
    <ProductCards />
    <FeaturedProjects />
    <h2 className="text-5xl font-light tracking-tight text-center mb-4">Our Services</h2>
        
        {/* Underline */}
        <div className="w-56 h-0.5 bg-blue-500 mx-auto mb-4"></div>
    <ServiceCards />
    <ContactForm />
    </>
  )
}