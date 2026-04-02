import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Solyio | Kinetic Intelligence",
  description:
    "We don't just build software. We architect living systems that evolve, learn, and accelerate human potential through precise AI integration.",
  alternates: { canonical: "https://solyio.com/about" },
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="min-h-[820px] flex flex-col justify-center px-8 md:px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-8">
          <span className="text-[#FF1E41] font-label text-sm tracking-[0.2em] uppercase mb-6 block">
            Our Manifesto
          </span>
          <h1 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] mb-8 text-[#1c1b1b]">
            Engineering the Next Era of{" "}
            <span className="text-[#FF1E41]">Kinetic Intelligence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5e3f3e] max-w-2xl leading-relaxed">
            We don't just build software. We architect living systems that evolve,
            learn, and accelerate human potential through precise AI integration.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 self-end mt-12 md:mt-0">
          <div className="aspect-square bg-[#f0eded] rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1E41]/20 to-transparent z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIfX9biaAE_BfPBlqUR0QHaA7EId2EpD27_asPG0MpftRBKJcsD0Kk4aj7FeHnMJmJQXKde9IcFY2ea6_OgjWWbWB0-CybiGB3YcDc2VB6zybZbbwQySH26bl-zZcc1ytQvBjCLq4I_R9X8uq__PhydXmX2Bltq-peCOka0iHK_ZToSOZ9ADd8bYnV8v2BFA6vqF78v08V2p9dbQn7g8p8pFMmrweRKj5g2lRXXufrMwFpXzKDG6_EtyFKK93k97oXO4dJQZlMDPml"
              alt="Neural network visualization"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── STORY ──────────────────────────────────────────────────────── */

function StorySection() {
  return (
    <section className="py-32 bg-[#f6f3f2]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Text */}
          <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
            <h2 className="text-4xl font-headline font-bold tracking-tight mb-8 text-[#1c1b1b]">
              Our Story
            </h2>
            <div className="space-y-6 text-[#5e3f3e] leading-relaxed text-lg">
              <p>
                Solyio began as a high-performance software house, dedicated to
                crafting the world's most resilient web architectures. We obsessed
                over every line of code, every millisecond of latency.
              </p>
              <p>
                As the neural revolution dawned, we pivoted. We realized that
                static software was no longer enough. The world needed kinetic
                intelligence — software that breathes, adapts, and anticipates.
              </p>
              <p>
                Today, we stand as an AI powerhouse, merging technical rigor with
                visionary data science to create tools that feel like extensions of
                the human mind.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="bg-[#e5e2e1] p-6 rounded-2xl flex-1">
                <span className="text-3xl font-headline font-bold text-[#FF1E41] block mb-2">
                  2014
                </span>
                <span className="text-sm uppercase tracking-widest font-bold text-[#5e3f3e]">
                  The Blueprint
                </span>
              </div>
              <div className="bg-[#FF1E41] p-6 rounded-2xl flex-1">
                <span className="text-3xl font-headline font-bold text-white block mb-2">
                  2024
                </span>
                <span className="text-sm uppercase tracking-widest font-bold text-white/80">
                  AI Synthesis
                </span>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="col-span-12 md:col-start-7 md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden mt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhTrbcf0DfWyHXhLy0SA4uCp1i9d4KVoLMjM9jy82ZKzTNcpx1bk_feXL_0doFJgfLNygqBOlZKceh_SBRDkKsPBRtNMOX1dHjXETGtip4vgCzPBCX4tQVKig58knfYfqEma9sGRxekA0X7CP-ICL_i67pmbpHpe-cV956Ya01RniOZjk96K9PtsjGjzfzwAvYyvZ_E_Hpid1c3guVVkndmT05mbcuGmUl4ZroNUZlQYMywhnCYxPYDtFQo-9bfkXi-Xzfqy_TLX2b"
                  alt="Server infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxtCFFSiXx7OBvKpaImjKRBTcGE4q9HbMW2QaTt2i9Gf3YmY6OxqARZa3Lko5ncwtHlzCayr5ndSeCuiUcmJ1kdCxUS47LiqALvh6GF9MMVeckciT7JKZSfHtrUYt8eqywvLf3yYDDTbL-Jv9slXX6r-bVPXc9WELQTVRXRdTzIYarUSfZ-yykzVGRKgEynExXQ3A-9aroXcXMV4PHijYExge7rdAE_PrDf_e2H10SDd1WqW-mPIYbTSNTL4EsgSk_JOs1UzQ-Bc3o"
                  alt="Robot arm in lab"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CORE STACK ─────────────────────────────────────────────────── */

function StackSection() {
  return (
    <section className="py-32 px-8 md:px-16 max-w-[1440px] mx-auto">
      <div className="text-center mb-20">
        <span className="text-[#FF1E41] text-sm tracking-[0.2em] uppercase mb-4 block font-bold">
          The Neural Engine
        </span>
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-[#1c1b1b]">
          Our Core Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LLM Card — wide */}
        <div className="md:col-span-2 bg-white p-12 rounded-3xl border border-[#e8bcbb]/20 group hover:shadow-xl transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="material-symbols-outlined text-[#FF1E41] text-4xl mb-6 block">
                psychology
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4 text-[#1c1b1b]">
                Advanced LLM Orchestration
              </h3>
              <p className="text-[#5e3f3e] max-w-md">
                Deploying custom-tuned Large Language Models for enterprise
                automation and creative reasoning.
              </p>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#5e3f3e] bg-[#f0eded] px-4 py-2 rounded-full shrink-0 ml-4">
              Primary Node
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Fine-Tuning", "RAG Architectures", "Context Optimization"].map((tag) => (
              <span
                key={tag}
                className="bg-[#f0eded] px-6 py-2 rounded-full text-sm font-medium text-[#1c1b1b]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Computer Vision */}
        <div className="bg-[#FF1E41] text-white p-12 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-4xl mb-6 block">
              visibility
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4">
              Computer Vision
            </h3>
            <p className="text-white/80">
              Real-time spatial awareness and object detection for edge computing.
            </p>
          </div>
          <div className="h-24 w-full bg-white/10 rounded-xl overflow-hidden mt-8">
            <div className="h-full bg-white/20 w-3/4" />
          </div>
        </div>

        {/* Web & Mobile */}
        <div className="bg-[#eae7e7] p-12 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-[#1c1b1b] text-4xl mb-6 block">
              devices
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4 text-[#1c1b1b]">
              Web &amp; Mobile
            </h3>
            <p className="text-[#5e3f3e]">
              High-performance React &amp; Flutter ecosystems with AI-first UX.
            </p>
          </div>
          <ul className="mt-8 space-y-3 font-medium text-[#1c1b1b]">
            {["Next.js Expertise", "Cross-platform Native", "Real-time Sync"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF1E41] rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Predictive Analytics — wide */}
        <div className="md:col-span-2 bg-white p-12 rounded-3xl border border-[#e8bcbb]/20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="material-symbols-outlined text-[#FF1E41] text-4xl mb-6 block">
                query_stats
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4 text-[#1c1b1b]">
                Predictive Analytics
              </h3>
              <p className="text-[#5e3f3e]">
                Transforming historical data into actionable foresight with custom
                forecasting engines.
              </p>
            </div>
            <div className="flex-1 w-full grid grid-cols-6 gap-2 items-end h-32">
              {[
                "bg-[#FF1E41]/20 h-1/2",
                "bg-[#FF1E41]/40 h-3/4",
                "bg-[#FF1E41]/60 h-2/3",
                "bg-[#FF1E41]/80 h-full",
                "bg-[#FF1E41] h-5/6",
                "bg-[#bb0029] h-3/4",
              ].map((cls, i) => (
                <div key={i} className={`${cls} rounded-t-sm`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TEAM ───────────────────────────────────────────────────────── */

const TEAM = [
  {
    name: "Dr. Aris Vane",
    role: "Chief AI Architect",
    bio: "Pioneer in neural decentralization and formerly lead of speculative research at Nexus Labs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZOpJmKC-7Y_gOQGZ9IwkVxmkSgOX2wj-b4ss_8jS-EZpsndk2CvfpKJO_O2gSNzzdrFyECMQ9AdIbHv-TnvewuMyoIqSKuJLteWGjmD4HeQsr4A58J4a7kiX1FL_RmcSRQIlgOhnBZmlr9YCCgjVtkUNbSf5_INvlBgiouJ7JoFH5EiLZx2QjUIz8mlr4IoSMMUnvjS7HxtX9e31kCBBd-AjhcOg--RaJoOu9uBWhKUbTxMOJN8tp6GgX0NiR6mmmB1lgg3_LVb2",
  },
  {
    name: "Elena Moretti",
    role: "Head of Kinetic Strategy",
    bio: "Ex-product lead at global fintechs, focusing on the bridge between machine logic and human utility.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_F3zj0BMmCKdWjvkcwK_XtCyhSC5Jh_k6ygyWn1k7psoRnbURnCTDrwNAfLK6y7i9uQwz9_sj-K_uyhs74MsB-wxU9HUJ0FPioFhfvn3J4V9xBoY374dCr0sGBIXM0o1H3mnsasFGF9ShF6TtcQ7zzcNEboIfkOv_58NtV60DD7jtDsk_DWX0H_1Alc6Ppk66sCTTedBkYFfuyiIy2mNvR3lXPtBPuHJMSiaZUZOa9d0rejPsPPR9RUJzjfZ-9gTVyFbOAHGEPzB",
  },
  {
    name: "Marcus Thorne",
    role: "VP of Infrastructure",
    bio: "Veteran systems engineer obsessed with creating 'Ghost-in-the-Machine' level zero-latency architectures.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQla7UqaYsWIJJ-sz7AHr7LSly9-W0j_88gJbFnzdLOnWahv_rjMeSd1hirUvsxDmvbBZl5sKxC--FaWYP0Agt1CFwqpuFTgRYzwq6eBZr7y0Yy4jB3YkAA7NXj5Io7_Plv8M0i0KRXPITq2knL0FKpBCQUd00_fh8uxCIzSpuuUm0Q50x6q_W4UMPNw1lYzdorx3VEsIA119HK_Sl503SHrxqo8QITbX34If9LRNKWnfGWnlz2Egp3hhLKDlJvd4DuSYGN4xO8qoB",
  },
]

function TeamSection() {
  return (
    <section className="py-32 bg-[#f6f3f2]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#FF1E41] text-sm tracking-[0.2em] uppercase mb-4 block font-bold">
              The Architects
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-[#1c1b1b]">
              Visionary Engineering
            </h2>
          </div>
          <p className="text-[#5e3f3e] text-lg">
            Led by explorers at the intersection of Silicon and Soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-6 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[#FF1E41]">link</span>
                </div>
              </div>
              <h4 className="text-2xl font-headline font-bold mb-1 text-[#1c1b1b]">
                {member.name}
              </h4>
              <p className="text-[#FF1E41] text-xs uppercase tracking-widest mb-4 font-bold">
                {member.role}
              </p>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">{member.bio}</p>
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
    <section className="py-40 px-8">
      <div className="max-w-[1000px] mx-auto bg-[#FF1E41] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-8 relative z-10">
          Ready to build the future?
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto relative z-10">
          Start your transformation today with a comprehensive AI strategy session.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
          <Link
            href="/book"
            className="bg-white text-[#FF1E41] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl"
          >
            Initialize Your Strategy
          </Link>
          <Link
            href="/book"
            className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-24">
        <HeroSection />
        <StorySection />
        <StackSection />
        <TeamSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
