import { Header } from "@/components/header"
import { ContactPageContent } from "@/components/contact-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Solyio | Let's Build Your AI MVP",
  description: "Get in touch with Solyio to discuss your AI-powered SaaS MVP project.",
}

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-background" role="main" aria-label="Contact Solyio">
        <Header />
        <ContactPageContent />
        <Footer />
      </main>
    </>
  )
}
