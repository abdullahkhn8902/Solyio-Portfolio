import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PortfolioGallerySection } from "@/components/portfolio-gallery-section"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Products | Solyio — Technologies Designed for Impact",
  description:
    "High-performance AI engines that translate complex data into exponential profitability. Predictive Analytics, Custom AI Chatbots, and the Profit Optimizer Framework.",
  alternates: { canonical: "https://solyio.com/products" },
}

/* ─── NAV ────────────────────────────────────────────────────────── */

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-8 py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF1E41] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#006a66] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0eded] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF1E41]">
              Intelligence in Motion
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-[#1c1b1b]">
            Technologies
            <br />
            Designed for{" "}
            <span className="text-[#FF1E41]">Impact.</span>
          </h1>

          <p className="text-xl text-[#5e3f3e] max-w-lg leading-relaxed">
            We build high-performance AI engines that translate complex data
            into exponential profitability. Your growth is our primary
            algorithm.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#forge"
              className="kinetic-gradient text-white font-headline font-bold px-8 py-4 rounded-full text-lg shadow-2xl shadow-[#FF1E41]/20 hover:scale-105 transition-transform"
            >
              Explore Frameworks
            </Link>
            <Link
              href="/book"
              className="bg-[#e5e0e0] text-[#1c1b1b] border border-[#d5c2c1]/30 font-headline font-bold px-8 py-4 rounded-full text-lg hover:bg-[#f0eded] transition-colors"
            >
              Book a Briefing
            </Link>
          </div>
        </div>

        {/* Right: predictive engine card */}
        <div className="hidden lg:block relative">
          <div className="glass-panel rounded-xl p-8 border border-[#d5c2c1]/30 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
            {/* Window dots */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF1E41]/30" />
                <div className="w-3 h-3 rounded-full bg-[#006a66]/30" />
                <div className="w-3 h-3 rounded-full bg-black/10" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold">
                Predictive_Engine_v4.0
              </span>
            </div>

            {/* Skeleton lines */}
            <div className="space-y-6">
              <div className="h-4 bg-[#f0eded] rounded-full w-3/4" />
              <div className="h-4 bg-[#f0eded] rounded-full w-1/2" />

              {/* Bar chart */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-[#FF1E41]/10 rounded-lg flex items-end p-2">
                  <div className="w-full bg-[#FF1E41] h-1/2 rounded-full" />
                </div>
                <div className="h-24 bg-[#FF1E41]/10 rounded-lg flex items-end p-2">
                  <div className="w-full bg-[#FF1E41] h-3/4 rounded-full" />
                </div>
                <div className="h-24 bg-[#FF1E41]/10 rounded-lg flex items-end p-2">
                  <div className="w-full bg-[#FF1E41] h-full rounded-full" />
                </div>
              </div>

              {/* Stats row */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-[#5e3f3e] uppercase">
                    Profit Projection
                  </p>
                  <p className="text-3xl font-headline font-bold text-[#FF1E41]">
                    +214%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#5e3f3e] uppercase">
                    Confidence Score
                  </p>
                  <p className="text-xl font-headline font-bold text-[#006a66]">
                    98.2%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative slash */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 kinetic-gradient opacity-10 slash-mask blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

/* ─── THE FORGE ──────────────────────────────────────────────────── */

function ForgeSection() {
  return (
    <section id="forge" className="py-24 px-8 bg-[#f7f4f4]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-[#d5c2c1] pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#1c1b1b] mb-4 italic">
              The Forge
            </h2>
            <p className="text-[#5e3f3e] text-lg">
              Proprietary frameworks engineered for rapid deployment and
              immediate competitive advantage.
            </p>
          </div>
          <div className="text-right">
            <span className="text-[#FF1E41] font-headline font-bold text-6xl tracking-tighter">
              03
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5e3f3e]">
              Active Core Modules
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Product 1: Predictive Analytics Engine – wide */}
          <div className="md:col-span-8 bg-white rounded-xl overflow-hidden group border border-[#d5c2c1]/30 hover:border-[#FF1E41]/50 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-[#FF1E41] text-4xl">
                      query_stats
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-[#1c1b1b] mb-4">
                    Predictive Analytics Engine
                  </h3>
                  <p className="text-[#5e3f3e] mb-6 leading-relaxed">
                    A high-velocity processing layer that identifies market
                    anomalies and consumer behavior shifts before they manifest
                    in standard reports.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-[#5e3f3e] font-medium">
                      <span className="material-symbols-outlined text-[#FF1E41] text-sm">
                        check_circle
                      </span>
                      Real-time stream processing
                    </li>
                    <li className="flex items-center gap-3 text-sm text-[#5e3f3e] font-medium">
                      <span className="material-symbols-outlined text-[#FF1E41] text-sm">
                        check_circle
                      </span>
                      Autonomous bias correction
                    </li>
                  </ul>
                </div>
                <button className="mt-8 text-[#FF1E41] font-headline font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Technical Specs{" "}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>

              {/* Image */}
              <div className="relative min-h-[300px] bg-[#e5e0e0] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr9fnTW_6E-Y2bV4Kr_g3FBVcPc_oWjazgYVtcrL2g8a2eachaPcPHEoCneE62ZIIAQm_QR0K85jTmvkWu6Cb0ro7kuGKxnXlicgioW0KzSbiOyRwwrrifI4rE125N9M56f5sr-LHA__QM89RPWcXXI-V03aN_LIwTio-se2sDknXG5rLLEEWi-SLof1LJGR6oAn4T9bxaqvWtVonQL2i2OlM7VYIUjMGGDHpBVcNjZH1ks_Sz48N1H74_Cka7jIYVj99oTGiy-U1v"
                  alt="Data visualization dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Product 2: Custom AI Chatbots */}
          <div className="md:col-span-4 bg-white rounded-xl p-10 flex flex-col justify-between border border-[#d5c2c1]/30 hover:border-[#FF1E41]/50 transition-all duration-500 group shadow-sm hover:shadow-xl">
            <div>
              <div className="mb-6">
                <span className="material-symbols-outlined text-[#FF1E41] text-4xl">
                  smart_toy
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-[#1c1b1b] mb-4">
                Custom AI Chatbots
              </h3>
              <p className="text-[#5e3f3e] leading-relaxed">
                Enterprise-grade LLM implementations that handle complex
                customer reasoning while maintaining your exact brand voice.
              </p>
            </div>

            {/* Latency badge */}
            <div className="mt-12 bg-[#f7f4f4] p-6 rounded-xl flex items-center gap-4 border border-[#d5c2c1]/10">
              <div className="w-12 h-12 rounded-full bg-[#FF1E41]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#FF1E41] text-xl">
                  bolt
                </span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#5e3f3e]">
                  Latency
                </p>
                <p className="text-xl font-bold text-[#1c1b1b]">&lt; 150ms</p>
              </div>
            </div>
          </div>

          {/* Product 3: Profit Optimizer Framework – full width */}
          <div className="md:col-span-12 glass-panel rounded-xl p-12 border border-[#d5c2c1]/30 relative overflow-hidden group shadow-md">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="inline-block px-4 py-1 bg-[#FF1E41] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
                  Flagship Framework
                </div>
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-[#1c1b1b] mb-6">
                  Profit Optimizer Framework
                </h3>
                <p className="text-[#5e3f3e] text-xl leading-relaxed">
                  The ultimate mathematical engine for resource allocation. Our
                  optimizer balances operational costs against market
                  opportunities to automate the path to 2x profit.
                </p>
                <div className="flex gap-12 mt-10">
                  <div>
                    <p className="text-[#FF1E41] text-4xl font-headline font-bold">
                      40%
                    </p>
                    <p className="text-xs uppercase font-bold tracking-widest text-[#5e3f3e] mt-1">
                      Efficiency Gain
                    </p>
                  </div>
                  <div>
                    <p className="text-[#006a66] text-4xl font-headline font-bold">
                      12x
                    </p>
                    <p className="text-xs uppercase font-bold tracking-widest text-[#5e3f3e] mt-1">
                      ROI Multiplier
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated logo orb */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative w-full aspect-square max-w-[300px]">
                  <div className="absolute inset-0 bg-[#FF1E41] opacity-5 rounded-full animate-pulse" />
                  <div className="absolute inset-4 border-2 border-[#FF1E41]/20 rounded-full border-dashed animate-spin [animation-duration:15s]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.svg"
                      alt="Solyio"
                      className="w-24 h-24 object-contain opacity-10"
                    />
                    <span className="material-symbols-outlined text-[#FF1E41] text-6xl absolute">
                      diamond
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Radial glow bg */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_#FF1E4119_0%,_transparent_70%)] -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "Solyio didn't just build us a tool; they redefined our entire delivery logic. Our predictive accuracy tripled within the first quarter.",
    name: "Marcus Thorne",
    role: "CTO, Vertex Capital",
    accentColor: "#FF1E41",
    roleColor: "text-[#FF1E41]",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpfEO692i8mMlyRuZqWY-5NZO7NVdQpz-9OV3QQtiHjBkyeQq_9TL87QkV1u_Wf5dyJd8ghpxPDSo8EJTz5JiIMswNZyNpwIYM-e2XB5EFzabUWx6xLuRkNnZ1ZrPiaKWW0Jiql5BJZjIrxMxgIsxjEQo052MBo76GKCX8PUPxrQleEv6gh90I2D7OuPdeUSvXktNmAcdAAMY5gymnPVmJiqfynFOqtHo_Mg2qHeswy2bKaDLqxPNPEVQRm9yk8fKZA51Mgc6lOO40",
  },
  {
    quote:
      "The Custom AI Chatbot integration handles 85% of our tier-1 support with zero human intervention. The cost savings were immediate.",
    name: "Elena Rodriguez",
    role: "Head of CX, Aura Retail",
    accentColor: "#006a66",
    roleColor: "text-[#006a66]",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQwv9re5C09oOzpw6UZJNJ2EOF7r2LLEpv-W_qcOTarCoqHnZvwwefawt_9_AkH5pluZAT9QRm3nTTnrYMr-8XX8JCEGYU79-xa-1_THjur_5Pxl0yg5HxBOFxej0m20GDwNf9qPZPRRtpklGNUwLX2N4GNAehAkNOoipkdxg9gjdtYXUdyKNGE6Ko8Hps6wxnRpBVAsQs_2cmBSq0pBbJp1zpd28U22l8tJY3QQ7GVzHTQ_mRYWFMZEaxpF7L78A1fbG4TB6I9Sao",
  },
  {
    quote:
      "The Profit Optimizer Framework identified $4.2M in hidden operational waste. Solyio is the engine behind our Series B growth.",
    name: "David Chen",
    role: "Founder, NexaFlow",
    accentColor: "#1c1b1b",
    roleColor: "text-[#5e3f3e]",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbROVfk79kvj3O2slEgtuSQ2Z5WNficL6wLS8x405X2TGR7kI0jm9aQ4Ajbmz8S1kEZrFS2xWIO9qpgO_EJj0oaUYAxEBaEUsGLFGD4uJXzi8-P0Fak7jkpD4F7nEtlB4dyq0faPpQeSkmjoT5CBWVZjeZoxTVMrk7ggksasnkjBDPRPJb-5e_ROyhQVRYqQFw8VqUp2NYltrL3fvgEYA5PXP3Xbm6OgPY_K15x2CZhdx7K5fC6bsXZdLYsCfTiWS87bQwSOKbDl3I",
  },
]

function TestimonialsSection() {
  return (
    <section className="py-32 px-8 overflow-hidden bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-[#1c1b1b] mb-6">
            Proven Velocity.
          </h2>
          <div className="w-24 h-1.5 kinetic-gradient mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-10 rounded-xl relative group border border-[#d5c2c1]/30 shadow-sm hover:shadow-lg transition-all"
              style={{ borderLeftWidth: 8, borderLeftColor: t.accentColor }}
            >
              <div className="mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-8 opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-lg italic text-[#1c1b1b] mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-headline font-bold text-[#1c1b1b]">
                  {t.name}
                </p>
                <p className={`text-[10px] uppercase font-bold tracking-widest ${t.roleColor}`}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto kinetic-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(255,30,65,0.2)]">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tighter">
            Ready to Scale to 2x?
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Your industry is moving fast. Our technologies are designed to make
            you move faster. Let&apos;s engineer your competitive edge.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/book"
              className="bg-white text-[#FF1E41] font-headline font-bold px-10 py-5 rounded-full text-xl shadow-xl hover:scale-105 transition-transform"
            >
              Initialize Project
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white font-headline font-bold px-10 py-5 rounded-full text-xl hover:bg-white hover:text-[#FF1E41] transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function ProductsPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-24">
        <HeroSection />
        <ForgeSection />
        <TestimonialsSection />
        <PortfolioGallerySection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
