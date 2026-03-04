import { Header } from "@/components/header"
import { ProjectDetail } from "@/components/project-detail"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug} | Solyio Portfolio`,
    description: `Explore the ${slug} project from Solyio's portfolio of AI-powered MVPs.`,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  return (
    <>
      <main className="min-h-screen bg-background" role="main" aria-label={`${slug} Project Details`}>
        <Header />
        <ProjectDetail slug={slug} />
        <Footer />
      </main>
    </>
  )
}
