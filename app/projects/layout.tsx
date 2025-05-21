import Header from '@/components/header'

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="projects-layout h-screen overflow-hidden">
        {children}
      </div>
    </>
  )
} 