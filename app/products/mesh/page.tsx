import Image from 'next/image';
import ProductsHero from '@/components/ProductsHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steel Mesh Products | ASI Steel Melbourne',
  description: 'High-quality steel mesh for construction and reinforcement. Available in standard and custom sizes, compliant with Australian Standards.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/mesh'
  }
}

export default function SteelMesh() {
  return (
    <>
      <ProductsHero 
        title="Steel Mesh" 
        subtitle="Discover our comprehensive range of steel mesh products designed to meet your project's reinforcement needs."
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Square Reinforcing Mesh Section */}
        <div className="mb-16 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <h2 className="text-3xl font-light mb-6 text-white">Square Reinforcing Mesh</h2>
          
          <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image 
              src="/images/steel-mesh.jpg" 
              alt="Square Reinforcing Mesh" 
              fill
              className="object-cover" 
            />
          </div>
          
          <p className="text-blue-100/80 mb-6">
            Square mesh is manufactured from L grade ribbed wires (D500L) that are welded together with equal spacing in both directions to form square apertures. Standard sheets of reinforcing mesh are 2.4m x 6.0m.
          </p>
          
          <p className="text-blue-100/80 mb-8">
            All mesh complies with AS/NZS 4671
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/50 text-white">
                <tr>
                  <th className="p-3 border border-gray-700">Product</th>
                  <th className="p-3 border border-gray-700">Long Wire (mm)</th>
                  <th className="p-3 border border-gray-700">Cross Wire (mm)</th>
                  <th className="p-3 border border-gray-700">Approx. Mass/ Sheet (kg)</th>
                </tr>
              </thead>
              <tbody className="text-blue-100/80">
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">SL62</td>
                  <td className="p-3 border border-gray-700">6.00 @ 200</td>
                  <td className="p-3 border border-gray-700">6.00 @ 200</td>
                  <td className="p-3 border border-gray-700">33</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">SL72</td>
                  <td className="p-3 border border-gray-700">6.75 @ 200</td>
                  <td className="p-3 border border-gray-700">6.75 @ 200</td>
                  <td className="p-3 border border-gray-700">40</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">SL82</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">52</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">SL92</td>
                  <td className="p-3 border border-gray-700">8.55 @ 200</td>
                  <td className="p-3 border border-gray-700">8.55 @ 200</td>
                  <td className="p-3 border border-gray-700">65</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">SL102</td>
                  <td className="p-3 border border-gray-700">9.50 @ 200</td>
                  <td className="p-3 border border-gray-700">9.50 @ 200</td>
                  <td className="p-3 border border-gray-700">80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Rectangular Reinforcing Mesh Section */}
        <div className="mb-16 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <h2 className="text-3xl font-light mb-6 text-white">Rectangular Reinforcing Mesh</h2>
          
          <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image 
              src="/images/rectangularmesh.jpg" 
              alt="Rectangular Reinforcing Mesh" 
              fill
              className="object-cover" 
            />
          </div>
          
          <p className="text-blue-100/80 mb-8">
            Rectangular mesh is manufactured from L grade ribbed wires (D500L) that are welded together with different spacing in each direction to form rectangular apertures. Standard sheets of reinforcing mesh are 2.4m x 6.0m.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/50 text-white">
                <tr>
                  <th className="p-3 border border-gray-700">Product</th>
                  <th className="p-3 border border-gray-700">Long Wire (mm)</th>
                  <th className="p-3 border border-gray-700">Cross Wire (mm)</th>
                  <th className="p-3 border border-gray-700">Approx Mass per sheet (kg)</th>
                </tr>
              </thead>
              <tbody className="text-blue-100/80">
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">RL718</td>
                  <td className="p-3 border border-gray-700">6.75 @ 100</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">68</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">RL818</td>
                  <td className="p-3 border border-gray-700">7.60 @ 100</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">79</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">RL918</td>
                  <td className="p-3 border border-gray-700">8.55 @ 100</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">93</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">RL1018</td>
                  <td className="p-3 border border-gray-700">9.50 @ 100</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">109</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">RL1118</td>
                  <td className="p-3 border border-gray-700">10.65 @ 100</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">131</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">RI1218</td>
                  <td className="p-3 border border-gray-700">11.90 @ 100</td>
                  <td className="p-3 border border-gray-700">7.60 @ 200</td>
                  <td className="p-3 border border-gray-700">157</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Trench Mesh Section */}
        <div className="mb-16 bg-black/20 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                       shadow-[0_0_15px_rgba(128,128,128,0.3)] 
                       hover:shadow-[0_0_25px_rgba(150,150,150,0.4)] 
                       transition-all duration-300">
          <h2 className="text-3xl font-light mb-6 text-white">Trench Mesh</h2>
          
          <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image 
              src="/images/trenchmesh.jpg" 
              alt="Trench Mesh" 
              fill
              className="object-cover" 
            />
          </div>
          
          <p className="text-blue-100/80 mb-8">
            Trench mesh is manufactured from ribbed wire in 6.0m lengths and complies with AS/NZS 4671
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/50 text-white">
                <tr>
                  <th className="p-3 border border-gray-700">Product Code</th>
                  <th className="p-3 border border-gray-700">Width (mm)</th>
                  <th className="p-3 border border-gray-700">No. of Wires</th>
                  <th className="p-3 border border-gray-700">Approx. Mass per sheet (kg)</th>
                </tr>
              </thead>
              <tbody className="text-blue-100/80">
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L8TM3</td>
                  <td className="p-3 border border-gray-700">200</td>
                  <td className="p-3 border border-gray-700">3</td>
                  <td className="p-3 border border-gray-700">7</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L8TM4</td>
                  <td className="p-3 border border-gray-700">300</td>
                  <td className="p-3 border border-gray-700">4</td>
                  <td className="p-3 border border-gray-700">9</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L8TM5</td>
                  <td className="p-3 border border-gray-700">400</td>
                  <td className="p-3 border border-gray-700">5</td>
                  <td className="p-3 border border-gray-700">11</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L11TM3</td>
                  <td className="p-3 border border-gray-700">200</td>
                  <td className="p-3 border border-gray-700">3</td>
                  <td className="p-3 border border-gray-700">13</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L11TM4</td>
                  <td className="p-3 border border-gray-700">300</td>
                  <td className="p-3 border border-gray-700">4</td>
                  <td className="p-3 border border-gray-700">18</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L11TM5</td>
                  <td className="p-3 border border-gray-700">400</td>
                  <td className="p-3 border border-gray-700">5</td>
                  <td className="p-3 border border-gray-700">22</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L12TM3</td>
                  <td className="p-3 border border-gray-700">200</td>
                  <td className="p-3 border border-gray-700">3</td>
                  <td className="p-3 border border-gray-700">16</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L12TM4</td>
                  <td className="p-3 border border-gray-700">300</td>
                  <td className="p-3 border border-gray-700">4</td>
                  <td className="p-3 border border-gray-700">22</td>
                </tr>
                <tr className="hover:bg-blue-900/10">
                  <td className="p-3 border border-gray-700">L12TM5</td>
                  <td className="p-3 border border-gray-700">400</td>
                  <td className="p-3 border border-gray-700">5</td>
                  <td className="p-3 border border-gray-700">27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Get a Free Quote</h2>
          <p className="text-blue-100/80 mb-10 text-center max-w-3xl mx-auto">
            If you are interested in our steel mesh products, please contact us to help us understand your needs.
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
                  placeholder="Please describe your steel mesh requirements"
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
