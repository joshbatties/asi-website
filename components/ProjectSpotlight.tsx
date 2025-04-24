'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/projects/projects.module.css';

interface ProjectSpotlightProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  mobileImageSrc?: string;
  isVideo?: boolean;
  videoSrc?: string;
  position: 'left' | 'right';
  actionLink?: string;
  actionText?: string;
  isLast?: boolean;
}

export default function ProjectSpotlight({
  id,
  title,
  description,
  imageSrc,
  mobileImageSrc,
  isVideo = false,
  videoSrc,
  position,
  actionLink,
  actionText,
  isLast = false
}: ProjectSpotlightProps) {
  // Create an ID for the next section (for scrolling navigation)
  const nextId = !isLast ? `${id}-next` : undefined;
  
  // Determine which style class to use based on position
  const spotlightPosition = position === 'left' ? 'left' : 'right';
  
  return (
    <section 
      id={id} 
      className={`${styles.spotlight} ${styles[spotlightPosition]}`}
    >
      {isVideo ? (
        <div className={styles.videoContainer}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover absolute"
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc?.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className={styles.imageContainer}>
          {mobileImageSrc ? (
            <>
              <div className={styles.desktopMedia}>
                <Image 
                  src={imageSrc} 
                  alt={`${title} Desktop View`} 
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className={styles.mobileMedia}>
                <Image 
                  src={mobileImageSrc} 
                  alt={`${title} Mobile View`} 
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </>
          ) : (
            <Image 
              src={imageSrc} 
              alt={title} 
              fill
              priority
              className="object-cover"
            />
          )}
        </div>
      )}
      
      <div className={`${styles.content} ${isVideo ? styles.videoContent : ''}`}>
        <header>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>
        {actionLink && actionText && (
          <ul className="actions">
            <li>
              <Link href={actionLink} className="button">
                {actionText}
              </Link>
            </li>
          </ul>
        )}
      </div>
      
      {nextId && (
        <Link href={`#${nextId}`} className={`${styles.gotoNext} scrolly`}>
          Next
        </Link>
      )}
    </section>
  );
} 