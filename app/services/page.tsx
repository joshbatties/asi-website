import ProductsHero from '@/components/ProductsHero'
import ServiceCards from '@/components/service-cards'
import ProductsCta from '@/components/ProductsCta'
import styles from './services.module.css'
import metadata from './metadata';

export { metadata };

export default function Services() {
  return (
    <div className={styles.productsWrapper}>
      <ProductsHero 
        title="Our Services" 
        subtitle="Comprehensive steel services including processing, fabrication, technical support, delivery, and project planning across Melbourne and Victoria."
      />
      
      <ServiceCards />
      <ProductsCta />
    </div>
  )
}