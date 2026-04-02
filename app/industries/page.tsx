import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Industries | Solyio — Redefining Value in Legacy Sectors",
  description:
    "Solyio deploys proprietary AI engines to rewire global industries — E-commerce, Fintech, Healthcare, EdTech, and Logistics. The Kinetic Method converts friction into exponential growth.",
  alternates: { canonical: "https://solyio.com/industries" },
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative px-8 py-32 md:py-48 overflow-hidden bg-white">
      {/* Ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF1E41]/5 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF1E41]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF1E41]/5 rounded-full border border-[#FF1E41]/10 mb-8">
          <span className="w-2 h-2 bg-[#FF1E41] rounded-full animate-pulse" />
          <span className="font-headline text-[10px] font-bold tracking-[0.3em] uppercase text-[#FF1E41]">
            Kinetic Intelligence v4.0
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-[#1c1b1b] mb-8">
              Redefining{" "}
              <span className="bg-gradient-to-r from-[#FF1E41] to-[#bb0029] bg-clip-text text-transparent italic">
                Value
              </span>{" "}
              In Legacy Sectors.
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4">
            <p className="text-xl text-[#534342] font-light leading-relaxed mb-8 border-l-2 border-[#FF1E41]/20 pl-6">
              We deploy proprietary AI engines to rewire global industries.
              Solyio&apos;s &ldquo;Kinetic Method&rdquo; converts friction into exponential
              growth cycles.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-black text-[#FF1E41]">2X</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Profit Goals
                </span>
              </div>
              <div className="w-px h-10 bg-[#d8c2c1]/30" />
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-black text-[#1c1b1b]">Neural</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── INDUSTRY SHOWCASE ──────────────────────────────────────────── */

function IndustrySection() {
  return (
    <section className="px-8 py-32 bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between items-end mb-16 border-b border-[#d8c2c1]/30 pb-10">
          <div>
            <h2 className="font-headline text-4xl font-black tracking-tight text-[#1c1b1b]">
              Industry Deployments
            </h2>
            <p className="text-[#534342] mt-2 uppercase text-xs tracking-widest font-bold">
              Selected Case Studies
            </p>
          </div>
          <Link
            href="/portfolio"
            className="font-headline text-xs font-bold tracking-[0.2em] uppercase text-[#FF1E41] border-b-2 border-[#FF1E41] pb-1 hover:opacity-70 transition-opacity"
          >
            View Portfolio
          </Link>
        </div>

        {/* Row 1: E-commerce (8) + Fintech (4) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* E-commerce */}
          <div className="md:col-span-8 group bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] transition-transform duration-500 hover:-translate-y-2">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-12 flex flex-col justify-between order-2 md:order-1">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#FF1E41]/5 text-[#FF1E41] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
                    Retail &amp; E-comm
                  </div>
                  <h3 className="font-headline text-4xl font-black mb-4 leading-none text-[#1c1b1b]">
                    Hyper-Predictive Personalization
                  </h3>
                  <p className="text-[#534342] text-sm leading-relaxed mb-8">
                    Implementing intent-prediction engines that eliminate cart
                    abandonment and maximize customer lifetime value.
                  </p>
                </div>
                <div className="bg-[#FF1E41]/5 rounded-2xl p-6 border border-[#FF1E41]/10">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#FF1E41] mb-1">
                    Solyio Impact
                  </div>
                  <div className="text-4xl font-headline font-black text-[#FF1E41]">
                    +142%{" "}
                    <span className="text-sm font-normal text-[#534342] uppercase tracking-tighter">
                      Rev Growth
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden order-1 md:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="E-commerce"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxatwIPCTLKa3p7LMX4hUUmGWpz83kDhLHSx68PVWyDaC0POc298nq9X--UGd55dYKQtFyEhZjwAdUQVq2dy6mWd4DVQmpe7F_q0fzPkx9xlKqzKh79O0sFWtceASrYioGLznGPew5C8gH7g5nKML7dyzOtfyg9StctyB58RvpeC56RCLnk0uu24aL1HxU3FFLHmXM013kFiyWkzF8xdm1A7oV2bzQL_Z4VHe9t4EyyT6RshHIJYahC6txJ-LSk1l_Hd6CAIEDO380"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Fintech */}
          <div className="md:col-span-4 group bg-[#1c1b1b] rounded-3xl p-10 flex flex-col justify-between text-white overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1E41]/20 blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#FF1E41] text-white rounded-xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_balance
                </span>
              </div>
              <h3 className="font-headline text-3xl font-black mb-4">
                Fintech Core Intelligence
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                Precision risk assessment and high-frequency fraud detection at
                the neural level.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#FF1E41]">
                  <span className="material-symbols-outlined text-sm">security</span>
                  Real-time Neural Audit
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#FF1E41]">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Algorithmic Yield Optimization
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1 text-white">
                Solyio Impact
              </div>
              <div className="text-5xl font-headline font-black text-[#FF1E41]">
                2.4x{" "}
                <span className="text-xs font-normal text-white uppercase tracking-tighter">
                  Risk Mitigation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Healthcare (4) + EdTech (4) + Logistics (4) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Healthcare */}
          <div className="md:col-span-4 group bg-white/70 backdrop-blur-2xl border border-[#FF1E41]/8 rounded-3xl p-10 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] transition-transform duration-500 hover:-translate-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Healthcare"
              className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw-xX1f1MGAOxiehVT8hFYOFc1HXVcPXvVqbGagEAmOnOzxzISQ6uLNO9YT8IJJ5Z8LiKijFQqYd5tLk7YhTbREQ90dJRySxzC-JAaRx6zBNifQHCcWvXTfYHqYr5xvWJ87nUTeVFxvNz_QtF1D5yfcb3ZJ81dufujA9YF1zfF_GKjXi_i_EwlhE9xdvC4xXc-BeSJdtMSX5CG9UB3yBwVjAs7DNEBM5emKZWaHpiCNvTLzPZA39pwTAapmohHJUU45xNeAYshjnpk"
            />
            <div className="relative z-10 flex flex-col h-full">
              <span
                className="material-symbols-outlined text-[#FF1E41] text-4xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                health_and_safety
              </span>
              <h3 className="font-headline text-2xl font-black mb-4 text-[#1c1b1b]">
                Health Systems
              </h3>
              <p className="text-[#534342] text-sm mb-auto">
                Accelerating diagnostic precision through predictive clinical
                modeling.
              </p>
              <div className="mt-12 pt-8 border-t border-[#d8c2c1]/30">
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#FF1E41] mb-1">
                  Solyio Impact
                </div>
                <div className="text-4xl font-headline font-black text-[#1c1b1b]">
                  35%{" "}
                  <span className="text-xs font-normal opacity-60 uppercase tracking-tighter">
                    Opex Reduction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* EdTech */}
          <div className="md:col-span-4 group bg-white border border-[#d8c2c1]/20 rounded-3xl p-10 overflow-hidden relative transition-transform duration-500 hover:-translate-y-2 shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] [&::after]:content-[''] [&::after]:absolute [&::after]:left-0 [&::after]:top-0 [&::after]:w-[2px] [&::after]:h-full [&::after]:bg-[#FF1E41] [&::after]:scale-y-0 [&::after]:origin-top [&::after]:transition-transform [&::after]:duration-400 hover:[&::after]:scale-y-100">
            <div className="flex justify-between items-start mb-10">
              <div className="w-12 h-12 bg-[#1c1b1b]/5 rounded-full flex items-center justify-center text-[#FF1E41]">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
            </div>
            <h3 className="font-headline text-2xl font-black mb-4 text-[#1c1b1b]">
              Ed-Tech Evolution
            </h3>
            <p className="text-[#534342] text-sm mb-auto">
              Adaptive learning paths that evolve with student mastery in
              real-time.
            </p>
            <div className="mt-12 pt-8 border-t border-[#d8c2c1]/30">
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#FF1E41] mb-1">
                Solyio Impact
              </div>
              <div className="text-4xl font-headline font-black text-[#1c1b1b]">
                3.8x{" "}
                <span className="text-xs font-normal opacity-60 uppercase tracking-tighter">
                  Retention Rate
                </span>
              </div>
            </div>
          </div>

          {/* Travel & Logistics */}
          <div className="md:col-span-4 group bg-[#FF1E41] rounded-3xl p-10 text-white overflow-hidden relative transition-transform duration-500 hover:-translate-y-2 shadow-[0_40px_100px_-20px_rgba(255,30,65,0.25)]">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="material-symbols-outlined text-white text-4xl mb-8">
                logistics
              </span>
              <h3 className="font-headline text-2xl font-black mb-4">
                Global Logistics
              </h3>
              <p className="text-white/80 text-sm mb-auto">
                Dynamic routing engines and yield management at planetary scale.
              </p>
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-1">
                  Solyio Impact
                </div>
                <div className="text-4xl font-headline font-black text-white">
                  22%{" "}
                  <span className="text-xs font-normal opacity-60 uppercase tracking-tighter">
                    Fuel Efficiency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── THE SOLYIO METHOD ──────────────────────────────────────────── */

function MethodSection() {
  const steps = [
    {
      n: "01",
      title: "Neural Audit",
      body: "We map your entire data ecosystem to identify hidden inefficiencies and dormant value streams.",
    },
    {
      n: "02",
      title: "Engine Deployment",
      body: "Integration of custom AI engines into your core stack, focused on 2x growth metrics.",
    },
    {
      n: "03",
      title: "Kinetic Scaling",
      body: "Continuous algorithmic refinement to ensure your competitive advantage compounds over time.",
    },
  ]

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="font-headline text-xs font-black tracking-[0.4em] uppercase text-[#FF1E41] mb-4 block">
            The Process
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-[#1c1b1b]">
            The Solyio{" "}
            <span className="italic text-[#FF1E41]">/</span> Method
          </h2>
          <p className="mt-6 text-xl text-[#534342] font-light">
            A rigorous consultancy framework designed to extract maximum value
            from legacy industrial infrastructure.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="relative group">
              <div className="text-[120px] font-headline font-black text-[#FF1E41]/5 absolute -top-20 -left-4 select-none group-hover:text-[#FF1E41]/10 transition-colors leading-none">
                {n}
              </div>
              <div className="relative pt-4">
                <h4 className="font-headline text-xl font-extrabold text-[#1c1b1b] mb-4">
                  {title}
                </h4>
                <p className="text-[#534342] text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video teaser */}
        <div className="mt-32 relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)]">
          <div className="aspect-[21/9] bg-[#1c1b1b] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Process Demo"
              className="w-full h-full object-cover opacity-30 transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAczctFFdRW5ryBHa48ERNKCiAjCoy-dx0j-bYkrJTt9mkFY3MGQkFknlKjzllJUPq10lAWhDZRHiYoSU3KZsVA8nBv8zckmLB79pGMQCq4jwqyEs8zg6taGpYN9SaMt98f4gD4ABMZsSlH1hnXPmqxTs4nbeAD2YOaaHGnhf3_4eaqbDqTWb3Gn-iMCxk4aru80ZPSZee8kATnmTylwZY8OCLFLc7HhUK2W77eI1PlWJ28v3jrGSEc2zNIhvmg5Skh_Cz8Pw3rpbZ"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="w-24 h-24 bg-[#FF1E41] rounded-full flex items-center justify-center shadow-2xl mb-6 transition-transform group-hover:scale-110">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
            </div>
            <p className="font-headline text-xs font-bold tracking-[0.3em] uppercase">
              Watch the 2X Profit Framework
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="px-8 py-40 text-center relative overflow-hidden bg-[#1c1b1b] text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF1E41] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-headline text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
          Start Your{" "}
          <span className="text-[#FF1E41] italic">Kinetic</span> Journey.
        </h2>
        <p className="text-white/60 text-xl mb-16 font-light max-w-2xl mx-auto leading-relaxed">
          Join market leaders who have already rewired their sectors for the AI
          age. Your growth engine is one call away.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/book"
            className="bg-[#FF1E41] text-white px-12 py-6 rounded-full font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#FF1E41] transition-all shadow-xl"
          >
            Scale My Business
          </Link>
          <Link
            href="/book"
            className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-full font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function IndustriesPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-20">
        <HeroSection />
        <IndustrySection />
        <MethodSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
