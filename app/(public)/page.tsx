import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Rocket, Brain } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solyio | AI-Powered SaaS MVP Development",
  description:
    "Transform your startup idea into a revenue-ready AI-powered SaaS MVP. Solyio delivers custom AI agents, automated workflows, and scalable products in 10 days.",
  alternates: {
    canonical: "https://solyio.com",
  },
}

export default function PublicHome() {
  return (
    <>
      <main className="min-h-screen bg-background" role="main" aria-label="Solyio - AI MVP Development">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-slate-900/5 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-medium">
              AI-Powered MVP Development in 10 Days
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Launch Your AI-Powered Startup
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Transform your idea into a revenue-ready SaaS MVP with intelligent AI agents, automated workflows, and
              scalable infrastructure—faster than you thought possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73] text-base" asChild>
                <Link href="/mvp">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-base hover:bg-slate-50"
                asChild
              >
                <Link href="/mvp/book">Book a Free Call</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">10 Days</div>
                <p className="text-sm text-muted-foreground">From idea to launch</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">80%</div>
                <p className="text-sm text-muted-foreground">Cost savings vs traditional dev</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">Revenue Ready</div>
                <p className="text-sm text-muted-foreground">With AI agents included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Solyio?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge AI technology with proven startup expertise to deliver results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-border hover:border-[#1e3a5f]/20 transition-colors">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-4">
                  <Zap className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Built with modern frameworks and AI-first architecture for instant responsiveness and scalability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border hover:border-[#1e3a5f]/20 transition-colors">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-4">
                  <Brain className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Custom AI agents handle customer support, content creation, and business automation 24/7.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border hover:border-[#1e3a5f]/20 transition-colors">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-4">
                  <Rocket className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Revenue Ready</h3>
                <p className="text-muted-foreground">
                  Every MVP includes analytics, payment processing, and marketing setup to start earning immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What We Build</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From MVPs to full platforms, every project includes AI agents designed for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-foreground mb-3">AI-Powered MVP</h3>
                <p className="text-muted-foreground mb-4">
                  Your custom SaaS product built with Next.js, TypeScript, and intelligent AI agents. Full backend,
                  database, and authentication included.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1e3a5f]">✓</span> Custom AI agents
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1e3a5f]">✓</span> Scalable architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1e3a5f]">✓</span> Payment processing
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-foreground mb-3">AI Agent Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Add intelligent agents to your existing product. Automated support, content generation, data analysis,
                  and more.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1e3a5f]">✓</span> Integration with your stack
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1e3a5f]">✓</span> Custom training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1e3a5f]">✓</span> 24/7 automation
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1e3a5f]/5 to-blue-500/5 border border-border rounded-lg p-12 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Let's discuss your idea and create a roadmap for your AI-powered SaaS product.
              </p>
              <Button size="lg" className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]" asChild>
                <Link href="/mvp/book">Book Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Startups Worldwide</h2>
              <p className="text-muted-foreground">
                See what we&apos;ve built for companies across healthcare, fintech, education, and more.
              </p>
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild className="border-2">
                <Link href="/mvp/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
