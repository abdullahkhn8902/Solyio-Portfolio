import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { GlobalPresenceSection } from "@/components/global-presence-section"
import { HeroVisual } from "@/components/hero-visual"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Solyio | AI-Driven Exponential Growth",
  description:
    "Next-generation AI orchestration. 2x your profit with custom intelligence architectures engineered for scale.",
  alternates: { canonical: "https://solyio.com" },
}

/* ─── NAV ────────────────────────────────────────────────────────── */

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative pt-48 pb-32 px-12 overflow-hidden min-h-screen flex items-center bg-[#fcf9f8]">
      {/* Ambient glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[#FF1E41]/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#FF1E41]/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col justify-center reveal-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF1E41]/20 mb-10 w-fit bg-white/50 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">
              Kinetic Intelligence v2.0
            </span>
          </div>

            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-10 leading-[0.82] text-[#1c1b1b]">
  We Simplify your{" "}
  <span className="text-[#FF1E41] italic inline-block transform -skew-x-6">
    Business
  </span>{" "}
  with AI.
</h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#5e3f3e] max-w-xl mb-14 leading-relaxed font-light">
            Next-generation AI orchestration.{" "}
            <span className="text-[#FF1E41] font-bold border-b-4 border-[#FF1E41]/10 px-1 inline-block">
              2x your profit
            </span>{" "}
            with custom intelligence architectures engineered for scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              href="/book"
              className="kinetic-gradient text-white font-headline font-bold py-5 px-14 rounded-full text-lg shadow-2xl shadow-[#FF1E41]/25 hover:-translate-y-0.5 hover:shadow-[#FF1E41]/40 active:translate-y-0 transition-all"
            >
              Initialize Engine
            </Link>
            <Link
              href="/portfolio"
              className="bg-white border border-[#e8bcbb]/40 text-[#1c1b1b] font-headline font-bold py-5 px-14 rounded-full text-lg hover:bg-[#f7f4f3] hover:border-[#e8bcbb] transition-all"
            >
              Case Studies
            </Link>
          </div>
        </div>

        {/* Right: animated AI visual */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end py-16 lg:py-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

/* ─── VALUE PROP ─────────────────────────────────────────────────── */

const services = [
  {
    icon: "psychology",
    title: "Applied AI Architecture",
    desc: "Predictive analytics and custom LLM fine-tuning that automates complex decision cycles and maximizes margin.",
  },
  {
    icon: "language",
    title: "High-Velocity Platforms",
    desc: "Enterprise-grade web ecosystems optimized for sub-second performance and massive concurrent global scale.",
  },
  {
    icon: "smartphone",
    title: "Native Ecosystems",
    desc: "High-fidelity mobile experiences that turn users into evangelists, powered by real-time neural data sync.",
  },
  {
    icon: "trending_up",
    title: "Revenue Optimization",
    desc: "Proprietary algorithms designed specifically to identify leakages and amplify revenue streams across your stack.",
  },
]

function ValuePropSection() {
  return (
    <section className="py-40 bg-[#f7f4f3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          {/* Sticky left */}
          <div className="md:col-span-1 sticky top-32">
            <div className="mb-12">
              <h2 className="text-6xl font-headline font-bold text-[#1c1b1b] mb-8 tracking-tighter leading-[0.9]">
                The Power of{" "}
                <br />
                <span className="text-[#FF1E41] italic underline decoration-4 underline-offset-8">
                  2x Profit
                </span>
              </h2>
              <p className="text-[#5e3f3e] text-xl leading-relaxed opacity-80">
                We don&apos;t build features. We build growth engines. Every
                line of code is measured by its impact on your bottom line.
              </p>
            </div>

            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyLM5osB1-6CMK3Mg76HLntAj_KQkM-SoMncTxgqjMjIT0QqAVAArd8xOESXNoA9-NHLuObv_sV3YbKxx1CS6-QvlEHTRE7bRawoTFhDgC7faWWGUP__3qv06_Dp082K-Ku_u2c5wiR01lNoP0yNBJi1OcOS6Y51R6YdCQAYIU2yJkc1NCkhR4trAHBOVZpdNPVpzAhevT9Pz1yGaX1zZlfXjcXPAg55FtZXLUjw6BKAGWpU5cP6qSwfyzmevnhzLY6LaPDOEVEYZI"
                alt="Blockchain pattern"
                className="w-full h-80 object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#FF1E41]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
            </div>
          </div>

          {/* 2×2 cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-12 rounded-[2.5rem] border border-[#e8bcbb]/20 hover:border-[#FF1E41]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FF1E41]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <span className="material-symbols-outlined text-[#FF1E41] text-6xl mb-10 group-hover:scale-110 transition-transform block">
                  {s.icon}
                </span>
                <h3 className="text-2xl font-headline font-bold text-[#1c1b1b] mb-6">
                  {s.title}
                </h3>
                <p className="text-[#5e3f3e] leading-relaxed text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SPECIALIZATION BENTO ───────────────────────────────────────── */

function SpecializationSection() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        {/* Heading */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-7xl font-headline font-bold text-[#1c1b1b] mb-8 tracking-tighter uppercase italic leading-none">
            Our Specialization
          </h2>
          <div className="h-2 w-48 bg-[#FF1E41] rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-ping" />
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-8 h-auto lg:h-[800px]">
          {/* Enterprise Architecture – wide top-left */}
          <div className="col-span-12 lg:col-span-8 row-span-1 bg-[#f7f4f3] rounded-[3rem] p-16 flex flex-col justify-end relative overflow-hidden group border border-[#e8bcbb]/20 hover:shadow-2xl transition-all duration-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUj7sEBoM30ylGv_4gX0IYg8M5Zm14YJnQLhWkIvh7RKNgQJf2XiUDR3k_hQfUjSiTwJ815CsLDmXYwxloOiGDLWYkVPSIhsPDsB3k81MVrnYtQoj94pFhAE7jvVdpDBlZS_4fX4TWW_kcqUk2vlgentDWUH_7FPwwmQMWJrT7AI9UrTOGCHFzFGvNT9NXfTcK-9Curyr-ZZYCdhYdNIIyWPY9dCxhmdX_7F7l7aSfp0OHfTb_lcUrQALNyqQlAePcwuvRr4hwrd-o"
              alt="Code background"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000"
            />
            <div className="relative z-10">
              <h4 className="text-[#FF1E41] text-[11px] font-black uppercase tracking-[0.4em] mb-8">
                Core Competency
              </h4>
              <h3 className="text-5xl md:text-6xl font-headline font-bold text-[#1c1b1b] mb-8 tracking-tighter">
                Enterprise
                <br />
                Intelligence Architecture
              </h3>
              <p className="max-w-xl text-[#5e3f3e] text-xl leading-relaxed font-light">
                We architect the backbone of digital titans. Our engineering
                lifecycle is rooted in security, massive scale, and elite
                speed-to-market.
              </p>
            </div>
          </div>

          {/* Venture Acceleration – top-right */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 bg-[#ebe8e7] rounded-[3rem] p-16 flex flex-col justify-between border border-[#FF1E41]/5 hover:border-[#FF1E41]/30 transition-all duration-500 group shadow-sm hover:shadow-xl">
            <span className="material-symbols-outlined text-[#FF1E41] text-7xl group-hover:translate-x-4 transition-transform duration-500">
              rocket_launch
            </span>
            <div>
              <h3 className="text-3xl font-headline font-bold text-[#1c1b1b] mb-6 tracking-tight">
                Venture Acceleration
              </h3>
              <p className="text-[#5e3f3e] text-lg leading-relaxed opacity-90">
                Elite prototyping and MVP engineering for series-A funded
                startups looking to achieve market dominance.
              </p>
            </div>
          </div>

          {/* 2X red stat – bottom-left */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 bg-[#FF1E41] rounded-[3rem] p-16 flex flex-col justify-between text-white shadow-[0_40px_80px_-20px_rgba(255,30,65,0.4)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <div className="text-8xl font-headline font-black tracking-tighter relative z-10 leading-none">
              2X
            </div>
            <p className="font-bold text-2xl leading-tight relative z-10">
              Average annual profit increase reported by our partners after
              neural stack integration.
            </p>
          </div>

          {/* AI-First Engineering – bottom-right wide */}
          <div className="col-span-12 lg:col-span-8 row-span-1 glass-panel rounded-[3rem] p-16 flex items-center justify-between border border-[#e8bcbb]/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="flex-1 pr-12">
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-[#1c1b1b] mb-8 tracking-tighter">
                AI-First Engineering
              </h3>
              <p className="text-[#5e3f3e] text-xl max-w-lg leading-relaxed font-light">
                Our elite squad consists of PhD researchers and top 1% engineers
                focused exclusively on autonomous agent orchestration.
              </p>
            </div>
            <div className="hidden lg:block w-52 h-52 rotate-12 slash-mask bg-[#e5e2e1] overflow-hidden relative shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR_n247jvGbfR2rg5qz2UGcEO10wqwiqTOIZVpW-CmXi_ZSoN7b3OZH3mEiHqyvpPEhgStbTgewpi1e9WQ4fBqh14XNL4d0D3QAknZOk5j9NedN7cGdaIPuAX-vuBSaJFMYVBdJoV_Aq2i5KGOJS5uX6APBc7eGCRXYbYbJk5pstEbtZ-pm0wS-k1oEs17qJc5hX1XZ9TPKbbCWPFY_5QDdwR7YphwLnAv54fclMs7o9IrS_aZE3QYmoRK8Wnui3BcGUKXF3RhGTi4"
                alt="AI concept"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-8 md:px-12 bg-[#fcf9f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center bg-white px-6 py-16 sm:px-12 sm:py-20 md:p-24 rounded-[2rem] md:rounded-[5rem] relative overflow-hidden border border-[#e8bcbb]/20 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 kinetic-gradient opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-1 kinetic-gradient" />
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-[#1c1b1b] mb-8 md:mb-12 tracking-tighter leading-none">
          Ready to{" "}
          <span className="italic text-[#FF1E41] block sm:inline">
            Exponentially
          </span>{" "}
          Grow?
        </h2>
        <p className="text-lg sm:text-xl md:text-3xl text-[#5e3f3e] mb-10 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed opacity-80">
          Join the world&apos;s most aggressive market leaders using Kinetic
          Intelligence to redefine industry profit floors.
        </p>
        <Link
          href="/book"
          className="kinetic-gradient text-white font-headline font-bold py-4 px-10 md:py-7 md:px-20 rounded-full text-lg md:text-2xl shadow-[0_25px_60px_rgba(255,30,65,0.35)] hover:scale-105 hover:shadow-[0_30px_70px_rgba(255,30,65,0.5)] active:scale-95 transition-all inline-block"
        >
          Initialize Strategy
        </Link>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ValuePropSection />
        <SpecializationSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
