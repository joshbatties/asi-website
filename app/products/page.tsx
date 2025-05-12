import Image from 'next/image';
import Link from 'next/link';
import ProductsHero from '@/components/ProductsHero';
import metadata from './metadata';

export { metadata };

export default function Products() {
  const productCategories = [
    {
      id: 1,
      title: 'Steel Reinforcing Bar',
      description: 'High-quality reinforcing bar available in various sizes and grades, compliant with Australian Standards.',
      image: '/images/steel-reinforcing-bar.jpg',
      link: '/products/bar'
    },
    {
      id: 2,
      title: 'Steel Fabrication',
      description: 'Custom steel fabrication services including cutting, bending, and welding to meet your construction requirements.',
      image: '/images/steel-fabrication.jpg',
      link: '/products/fabrication'
    },
    {
      id: 3,
      title: 'Steel Mesh',
      description: 'Precision-engineered steel mesh products for reinforcement in concrete structures, available in standard and custom sizes.',
      image: '/images/steel-mesh.jpg',
      link: '/products/mesh'
    },
    {
      id: 4,
      title: 'Tools & Accessories',
      description: 'Professional-grade construction tools and accessories to complement our steel products and enhance your construction projects.',
      image: '/images/tools-accessories.jpeg',
      link: '/products/tools'
    },
  ];

  return (
    <div>
      <ProductsHero 
        title="Our Steel Products" 
        subtitle="Discover our comprehensive range of high-quality steel products for construction and infrastructure projects."
      />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl"> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {productCategories.map((category) => (
            <Link 
              href={category.link} 
              key={category.id}
              className="group bg-black/20 backdrop-blur-sm border border-blue-500/20 rounded-lg overflow-hidden
                        shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                        hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                        transition-all duration-300"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-blue-100/80 mb-4">{category.description}</p>
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  Explore Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Information Section */}
        <div className="mt-20 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-8 rounded-lg
                     shadow-[0_0_15px_rgba(128,128,128,0.3)]">
          <h2 className="text-3xl font-bold mb-6 text-white">Quality You Can Trust</h2>
          <p className="text-blue-100/80 mb-4">
            At ASI Steel, we pride ourselves on providing only the highest quality steel products that meet or exceed Australian Standards. 
            Our commitment to excellence ensures that every product we supply is reliable, durable, and perfect for your construction needs.
          </p>
          <p className="text-blue-100/80 mb-4">
            Whether you're working on a residential project, commercial building, or infrastructure development, our products are designed to provide 
            the strength and performance you require.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md 
                              transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                              mb-4 sm:mb-0">
              Contact Us
            </Link>
            <p className="text-blue-300 italic">
              Servicing Melbourne and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}