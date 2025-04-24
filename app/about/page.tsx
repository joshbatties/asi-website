import { Metadata } from 'next'
import AboutSection from '@/components/AboutSection'
import AboutHero from '@/components/AboutHero'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About ASI Steel | Steel Suppliers Melbourne',
  description: 'Learn about ASI Steel, Melbourne\'s leading steel supplier. Our history, commitment to quality, and dedication to excellent service.',
  alternates: {
    canonical: 'https://asisteel.com.au/about'
  }
}

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <AboutHero 
        title="About Us" 
        subtitle="ASI: The smart choice for steel fabrication."
      />

      <AboutSection 
        id="expertise"
        title="Our Expertise"
        content="We excel in rapidly creating custom solutions that fit your needs precisely. Our experienced team of professionals brings over 60 years of combined industry experience to every project, ensuring high-quality results and efficient service from concept to completion."
        className={styles.sectionBorder}
      />

      <AboutSection 
        id="difference"
        title="Our Difference"
        content="We are committed to flexible scheduling, innovation and sustainability. Work with us and we will seamlessly handle the entire process, from initial drawings and designs to final manufacturing, always mindful of your budget and project timelines. Our goal is to foster long-term relationships with our clients by delivering fast turnaround times and outstanding results backed by free, competitive quotes."
        align="right"
        className={`${styles.sectionBorder} ${styles.rightAligned}`}
      />

      <AboutSection 
        id="commitment"
        title="Our Commitment"
        content="We are committed to meeting your project specifications and regulatory standards with precision. Whether you need structural steelwork, custom metal parts, or specialised components, we have the expertise to deliver."
        className={styles.sectionBorder}
      />

      <AboutSection 
        id="approach"
        title="Our Approach"
        content="We prioritize your satisfaction, offering friendly, professional service throughout your project journey. Our goal is to exceed your expectations with every service we provide."
        align="right"
        className={`${styles.sectionBorder} ${styles.rightAligned}`}
      />

      <AboutSection 
        id="services"
        title="Our Services"
        content="We offer a comprehensive range of engineering and manufacturing solutions, consistently delivering high-quality, turnkey products on time and within budget. Our hands-on management style ensures strict quality control and adherence to ethical standards."
        className={styles.sectionBorder}
      />

      <AboutSection 
        id="technology"
        title="Our Technology"
        content="Our state-of-the-art CNC technology, combined with CAD/CAM design and manufacturing, guarantees precision, structural durability, and a flawless finish for every product."
        align="right"
        className={`${styles.sectionBorder} ${styles.rightAligned}`}
      />

      <AboutSection 
        id="people"
        title="Our People"
        content="We recognise that people are at the heart of our success. Through teamwork, respect, and a shared vision, our team of experienced engineers is dedicated to delivering top-tier service and quality."
      />
    </div>
  )
}