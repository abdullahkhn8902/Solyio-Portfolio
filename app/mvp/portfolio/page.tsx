import { Header } from "@/components/header"
import { PortfolioPageContent } from "@/components/portfolio-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Solyio - AI MVP Projects",
  description:
    "Explore our portfolio of successful AI-powered MVP projects across healthcare, fintech, education, and more.",
}

export default function PortfolioPage() {
  return (
    <>
      <main className="min-h-screen bg-background" role="main" aria-label="Solyio Portfolio">
        <Header />
        <PortfolioPageContent />
        <Footer />
      </main>
    </>
  )
}
