import { Header } from "@/components/header"
import { BookingPageContent } from "@/components/booking-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Call | Solyio",
  description: "Schedule a free discovery call with the Solyio team to discuss your MVP project.",
}

export default function BookingPage() {
  return (
    <>
      <main className="min-h-screen bg-background" role="main" aria-label="Book a Discovery Call">
        <Header />
        <BookingPageContent />
        <Footer />
      </main>
    </>
  )
}
