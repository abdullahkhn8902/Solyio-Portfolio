import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Services | Solyio",
  description:
    "Strategic AI services for a digital world. We engineer intelligent systems that drive 2x Profit and market dominance through kinetic intelligence.",
  alternates: { canonical: "https://solyio.com/services" },
}

/* ─── NAV ────────────────────────────────────────────────────────── */

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF1E41] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eae7e7] rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#5e3f3e] font-label">
              Exponential Growth Engine
            </span>
          </div>

          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#1c1b1b] mb-8">
            Strategic{" "}
            <span className="text-[#FF1E41] italic">Services</span> for a
            Digital World.
          </h1>

          <p className="text-xl text-[#5e3f3e] max-w-xl mb-10 leading-relaxed">
            We don&apos;t just build software. We engineer intelligent systems
            that drive{" "}
            <span className="text-[#FF1E41] font-bold">2x Profit</span> and
            market dominance through kinetic intelligence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className="kinetic-gradient text-white px-8 py-4 rounded-full font-headline font-black text-lg tracking-tight hover:shadow-[0_0_30px_rgba(255,30,65,0.3)] transition-all"
            >
              Partner With Us
            </Link>
            <Link
              href="/portfolio"
              className="bg-[#e5e2e1] text-[#1c1b1b] px-8 py-4 rounded-full font-headline font-bold text-lg border-b-2 border-[#d8c2c1]/30 hover:bg-[#f0eded] transition-all"
            >
              Our Portfolio
            </Link>
          </div>
        </div>

        {/* Right: Glass stats card */}
        <div className="relative hidden lg:block">
          <div className="aspect-square bg-[#f0eded] rounded-3xl overflow-hidden glass-panel relative border border-[#d8c2c1]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF1E41]/5 to-transparent" />
            <div className="p-12 h-full flex flex-col justify-between">
              {/* Top stat */}
              <div className="flex justify-between items-start">
                <span
                  className="material-symbols-outlined text-[#FF1E41] text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
                <div className="text-right">
                  <div className="text-4xl font-headline font-black text-[#1c1b1b]">
                    99.9%
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#5e3f3e]">
                    Efficiency Gain
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                <div className="h-2 w-full bg-[#e5e2e1] rounded-full overflow-hidden">
                  <div className="h-full w-[85%] kinetic-gradient" />
                </div>
                <div className="h-2 w-full bg-[#e5e2e1] rounded-full overflow-hidden">
                  <div className="h-full w-[60%] kinetic-gradient" />
                </div>
                <div className="h-2 w-full bg-[#e5e2e1] rounded-full overflow-hidden">
                  <div className="h-full w-[95%] kinetic-gradient" />
                </div>
              </div>

              {/* Bottom pill */}
              <div className="bg-[#e5e2e1] p-4 rounded-full flex items-center gap-4">
                <span className="material-symbols-outlined text-[#FF1E41]">
                  analytics
                </span>
                <span className="font-headline font-bold text-sm tracking-tight text-[#1c1b1b]">
                  AI PREDICTIVE SCALING ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Decorative slash */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FF1E41]/10 slash-mask -rotate-12 blur-sm" />
        </div>
      </div>
    </section>
  )
}

/* ─── CORE CAPABILITIES BENTO ────────────────────────────────────── */

function CapabilitiesSection() {
  return (
    <section className="py-32 px-8 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-[#1c1b1b] mb-4">
            Core Capabilities
          </h2>
          <div className="h-1 w-24 kinetic-gradient" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* AI Integration – wide */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-[#fcf9f8] border border-[#d8c2c1]/30 p-10 glass-panel">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span
                className="material-symbols-outlined text-[120px] text-[#FF1E41]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>
            <div className="relative z-10 max-w-md">
              <span className="material-symbols-outlined text-[#FF1E41] text-4xl mb-6 block">
                memory
              </span>
              <h3 className="font-headline text-3xl font-bold text-[#1c1b1b] mb-4">
                AI Integration
              </h3>
              <p className="text-[#5e3f3e] leading-relaxed text-lg mb-8">
                Deploy bespoke Large Language Models and predictive neural
                networks into your existing stack. We move you from automation
                to autonomous intelligence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-[#1c1b1b]">
                  <span className="material-symbols-outlined text-[#FF1E41] text-lg">
                    check_circle
                  </span>
                  Custom LLM Fine-tuning
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#1c1b1b]">
                  <span className="material-symbols-outlined text-[#FF1E41] text-lg">
                    check_circle
                  </span>
                  Computer Vision Solutions
                </li>
              </ul>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-[#FF1E41] font-headline font-black tracking-tight group-hover:translate-x-2 transition-transform"
              >
                EXPLORE AI{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Web Development */}
          <div className="md:col-span-4 group rounded-3xl bg-[#eae7e7] p-8 hover:bg-[#e5e2e1] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#fcf9f8] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[#FF1E41] text-3xl">
                  public
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#1c1b1b] mb-3">
                Web Development
              </h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">
                High-performance, SEO-optimized web architectures built for
                global scale. Next-gen frameworks for next-gen results.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#d8c2c1]/30 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#5e3f3e]">
                Frameworks
              </span>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF1E41]/40" />
                <span className="w-2 h-2 rounded-full bg-[#FF1E41]/60" />
                <span className="w-2 h-2 rounded-full bg-[#FF1E41]" />
              </div>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="md:col-span-4 group rounded-3xl bg-[#eae7e7] p-8 hover:bg-[#e5e2e1] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#fcf9f8] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[#FF1E41] text-3xl">
                  smartphone
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#1c1b1b] mb-3">
                Mobile Apps
              </h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">
                Intuitive iOS and Android experiences designed with kinetic
                motion principles and seamless performance.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#d8c2c1]/30">
              <span className="text-xs font-bold uppercase tracking-widest text-[#5e3f3e]">
                Native &amp; Cross-platform
              </span>
            </div>
          </div>

          {/* Enterprise Tech Solutions – wide */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-[#fcf9f8] border border-[#d8c2c1]/30 p-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="font-headline text-3xl font-bold text-[#1c1b1b] mb-4">
                  Enterprise Tech Solutions
                </h3>
                <p className="text-[#5e3f3e] leading-relaxed mb-6">
                  Modernizing legacy infrastructure with cloud-native
                  architectures and secure data pipelines for Fortune 500
                  standards.
                </p>
                <Link
                  href="/book"
                  className="bg-[#1c1b1b] text-[#fcf9f8] px-6 py-3 rounded-full font-headline font-bold text-sm hover:bg-[#FF1E41] transition-colors inline-block"
                >
                  Request Tech Audit
                </Link>
              </div>

              {/* Stats 2×2 grid */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { val: "99%", label: "Uptime" },
                  { val: "0.4s", label: "Latency" },
                  { val: "24/7", label: "Support" },
                  { val: "AES", label: "Encryption" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4 bg-[#e5e2e1] rounded-2xl text-center"
                  >
                    <div className="text-[#FF1E41] font-headline font-black text-2xl">
                      {s.val}
                    </div>
                    <div className="text-[10px] uppercase text-[#5e3f3e] font-bold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESS ────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Diagnostic",
    desc: "We analyze your current tech stack and identify performance bottlenecks.",
  },
  {
    num: "02",
    title: "Blueprint",
    desc: "Architectural mapping of AI-integrated systems for 2x scalability.",
  },
  {
    num: "03",
    title: "Deployment",
    desc: "Agile development cycles with continuous integration and testing.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "Iterative AI refinement to ensure maximum ROI and market speed.",
  },
]

function ProcessSection() {
  return (
    <section className="py-32 px-8 bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-[#1c1b1b] mb-6">
            How We Scale Your Business.
          </h2>
          <p className="text-[#5e3f3e] max-w-2xl mx-auto text-lg">
            A systematic approach to digital dominance, from initial friction to
            exponential kinetic energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#d8c2c1] -z-10" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#f7f2f1] p-8 rounded-3xl border-b-4 border-[#FF1E41]/20 hover:border-[#FF1E41] transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#e5e2e1] flex items-center justify-center font-headline font-black text-[#FF1E41] mb-6 group-hover:bg-[#FF1E41] group-hover:text-white transition-all">
                {step.num}
              </div>
              <h4 className="font-headline font-bold text-xl text-[#1c1b1b] mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-[#5e3f3e] leading-relaxed">
                {step.desc}
              </p>
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
      <div className="max-w-7xl mx-auto rounded-[3rem] p-[1px] kinetic-gradient">
        <div className="bg-[#fcf9f8] rounded-[2.95rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#FF1E41_0%,_transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-[#1c1b1b] mb-8 tracking-tighter">
              Ready for{" "}
              <span className="text-[#FF1E41] italic">Exponential</span> Growth?
            </h2>
            <p className="text-[#5e3f3e] text-lg mb-12 max-w-2xl mx-auto">
              Join the ranks of market leaders who have scaled their operations
              using Solyio&apos;s kinetic intelligence engine.
            </p>
            <Link
              href="/book"
              className="bg-[#1c1b1b] text-white px-10 py-5 rounded-full font-headline font-black text-xl hover:bg-[#FF1E41] hover:scale-105 transition-all inline-block"
            >
              Start Your Briefing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-24">
        <HeroSection />
        <CapabilitiesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
