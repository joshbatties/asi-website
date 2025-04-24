import { Metadata } from 'next'
import ProjectSpotlight from '@/components/ProjectSpotlight'
import ProjectsWrapper from '@/components/ProjectsWrapper'
import { projects } from './projects-data'
import styles from './projects.module.css'

// Create a helper function to generate next IDs for scroll navigation
const getNextId = (currentIndex: number): string | undefined => {
  const nextProject = projects[currentIndex + 1];
  return nextProject ? nextProject.id : undefined;
}

export const metadata: Metadata = {
  title: 'Steel Construction Projects | ASI Steel Melbourne',
  description: 'Explore our portfolio of completed steel construction projects across Melbourne. Quality steel solutions for commercial and industrial projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/projects'
  }
}

export default function Projects() {
  return (
    <ProjectsWrapper>
      <div className={styles.projectsContainer}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Thing",
                  "name": "Commercial Construction Projects",
                  "description": "Major commercial construction projects completed by ASI Steel"
                },
                {
                  "@type": "Thing",
                  "name": "Industrial Projects",
                  "description": "Industrial steel fabrication and construction projects"
                },
                {
                  "@type": "Thing",
                  "name": "Infrastructure Projects",
                  "description": "Infrastructure development projects using ASI Steel products"
                }
              ]
            })
          }}
        />
        
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container mx-auto px-4">
            <h2>Our Projects</h2>
            <p>Browse some of our recent projects.</p>
          </div>
        </section>
        
        {/* Project Spotlights */}
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <ProjectSpotlight
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              mobileImageSrc={project.mobileImageSrc}
              isVideo={project.isVideo}
              videoSrc={project.videoSrc}
              position={project.position}
              actionLink={project.actionLink}
              actionText={project.actionText}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </ProjectsWrapper>
  )
}