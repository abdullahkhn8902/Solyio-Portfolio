import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

/* ─── DATA ────────────────────────────────────────────────────────── */

const GALLERY_IMG_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_xWM1ptGvm-SVdM7oyerPQxfPdzKSkgGeEAtgFmykoS-LB3C-idwVcDDHXbY-V8GAjIx5aflJ743pm0AsB6MPwqC0ha7UYdeUGWkyGNBDj0S-uqNxe3_TXaHubEprDj_oF3IeHVFTMaNJ6_M8VG1-OLJc1y2OyJDvuUWsO6IkW71x_y3VDNTxpveaDYVUI3CKiZuDxP-Ozm1hM4QgCQjF1dLg1dHZSP_URrByDriacK35yepQHj7A3O_EuQy15gaYdOxPoE7d4a-c"
const GALLERY_IMG_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIa77YU__qCZWacppYoW4yPpMgQ1jJjnQ2El-iQwiVtthCZsNOJIpCy17sYqM3p_ZzyA7Fbyo-jz7xQLOqw3NaDLszL6VzzvJheXaJGtENwK0yRDHsBX4HueZSF90M0Yi1jXnnU9d7pzggup3C9DXqollSvY7Opi2XIRxalYgv_3989NBP_p2Pot4-zo-_a5vi-WjXCuV1Ku9PKKNx-kzlrhCFeoVTph8uEJxAiJshvcjtGJ7kkNBXESabX5TgF9eD4oxAmYarKlUd"
const CHALLENGE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfeD-5jpfbL5cbUpBd4oGwma1m5YVVIHDk6FsRFVp8MOUkWoAXXYtdIwm2ifu1cRiZcTMXIy986w8XpcIpiKB1kVsa-e0amor6S1BzDq9cle-zYR-woLv9K9EQLNMrlh-IHMopoA_dnD1vDz2ze3in93vAuS-NjHOsxAxJqQ9FDybDS0rYhmP-tmFKQndlt4JMkx237jep3FdvhME4Hle3xp6pph0oL-j5WXTmXu-LiklLOhfo_J_WRCpMaqswQpWYXpsveiqHKKZr"

interface Tile {
  value: string
  label: string
  bg: string
  valueCls: string
  labelCls: string
}

interface CaseStudy {
  name: string
  category: string
  tagline: string
  thumbnail: string
  heroMetrics: { value: string; label: string }[]
  quote: { text: string; author: string }
  challenge: {
    title: string
    tagline: string
    cards: { icon: string; title: string; description: string }[]
  }
  solution: {
    title: string
    tagline: string
    cards: { n: string; title: string; description: string; cta: string }[]
  }
  outcomes: {
    title: string
    description: string
    bullets: { title: string; description: string }[]
    tiles: Tile[]
  }
  gallery: { title: string; description: string }
}

const caseStudies: Record<string, CaseStudy> = {
  expertaiq: {
    name: "ExpertAIQ",
    category: "SaaS · Analytics",
    tagline:
      "How we built an AI research engine that eliminates manual data analysis — cutting research time by 80% and unlocking instant business intelligence.",
    thumbnail: "/ExpertAIQ.png",
    heroMetrics: [
      { value: "+80%", label: "Research Efficiency" },
      { value: "15+", label: "Integrated Sources" },
    ],
    quote: {
      text: "The most significant leap in our team's intelligence capability.",
      author: "Head of Research, ExpertAIQ",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Manual research pipelines were consuming 80% of analyst time on low-value aggregation tasks.",
      cards: [
        {
          icon: "manage_search",
          title: "Data Fragmentation",
          description:
            "Research teams spent 12+ hours weekly aggregating data from 15 disconnected platforms with no unified intelligence layer or single source of truth.",
        },
        {
          icon: "trending_down",
          title: "Delayed Decisions",
          description:
            "Critical business decisions were delayed by days while analysts manually processed and cross-referenced reports, creating costly strategic blind spots.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a multi-source neural aggregation layer that transforms raw data into instant, actionable business intelligence.",
      cards: [
        {
          n: "01",
          title: "Neural Analysis Layer",
          description:
            "Proprietary AI engine that ingests 15+ data sources simultaneously and generates natural-language insights in under 2 seconds.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Data Mesh Connector",
          description:
            "Distributed integration fabric that unifies fragmented data pipelines into a single, coherent intelligence network accessible in real-time.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Report Automation",
          description:
            "Automated reporting suite that generates comprehensive analysis reports and delivers them via Slack and email on a custom schedule.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "The deployment of ExpertAIQ fundamentally shifted research workflows from reactive data collection to proactive predictive intelligence.",
      bullets: [
        {
          title: "80% Time Reclaimed",
          description:
            "Analysts redirected from manual data collection to high-value strategic interpretation and decision-making.",
        },
        {
          title: "Real-time Intelligence",
          description:
            "Decision-makers now receive live data insights instead of 48-hour-delayed static reports.",
        },
      ],
      tiles: [
        { value: "+80%", label: "Time Saved", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "500+", label: "Monthly Reports", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "15+", label: "Data Sources", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "2s", label: "Query Response", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "ExpertAIQ isn't just a dashboard; it's the foundation for the next decade of intelligent business analytics and strategic foresight.",
    },
  },

  robomarketer: {
    name: "RoboMarketer",
    category: "SaaS · Marketing",
    tagline:
      "How we engineered an autonomous marketing AI that 10x'd content output and drove 285% average ROAS — without adding a single headcount.",
    thumbnail: "/RoboMarketer.png",
    heroMetrics: [
      { value: "10x", label: "Content Output" },
      { value: "285%", label: "Campaign ROI" },
    ],
    quote: {
      text: "Our content production multiplied while our team stayed the same size.",
      author: "CMO, RoboMarketer",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Content bottlenecks were killing campaign velocity and capping growth at a fraction of potential.",
      cards: [
        {
          icon: "hourglass_empty",
          title: "Slow Content Pipeline",
          description:
            "Marketing teams spent 40+ hours weekly producing content manually, creating a severe bottleneck that delayed campaign launches and reduced competitive agility.",
        },
        {
          icon: "analytics",
          title: "Underperforming Campaigns",
          description:
            "Without predictive optimization, ad campaigns were adjusted reactively — days after wasted spend had already accumulated across channels.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We built an autonomous content-to-campaign pipeline that creates, optimizes, and deploys marketing at machine speed.",
      cards: [
        {
          n: "01",
          title: "AI Content Engine",
          description:
            "GPT-4 powered generation layer that produces on-brand blogs, social posts, and email copy at 10x the speed of human writers, with A/B variant generation built in.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Campaign Optimizer",
          description:
            "Real-time bid management and creative testing engine that continuously reallocates budget toward top-performing ad variants across all major platforms.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Multi-Channel Mesh",
          description:
            "Unified orchestration layer that synchronizes content and campaigns across email, social, paid, and SEO from a single intelligent control plane.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "RoboMarketer transformed marketing from a cost center into a predictable, scalable growth engine with measurable returns.",
      bullets: [
        {
          title: "10x Content Velocity",
          description:
            "The team now publishes 10x more high-quality content with zero additional headcount or agency spend.",
        },
        {
          title: "285% Average ROAS",
          description:
            "AI-optimized campaigns consistently outperform human-managed counterparts by 3x across every channel.",
        },
      ],
      tiles: [
        { value: "10x", label: "Content Output", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "285%", label: "Campaign ROI", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "40h", label: "Saved Weekly", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "94%", label: "Accuracy Rate", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "RoboMarketer isn't just a content tool; it's the autonomous marketing intelligence layer that compounds competitive advantage over time.",
    },
  },

  cashads: {
    name: "CashAds",
    category: "Advertising · E-commerce",
    tagline:
      "How we deployed an AI-driven ad optimization engine that improved ROAS by 35% and cut cost per acquisition by 42% across $2M+ in monthly spend.",
    thumbnail: "/Cashads.png",
    heroMetrics: [
      { value: "+35%", label: "ROAS Improvement" },
      { value: "−42%", label: "CPA Reduction" },
    ],
    quote: {
      text: "We recaptured millions in wasted ad spend within the first quarter.",
      author: "Growth Director, CashAds",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Reactive bid management was silently burning budget while leaving high-intent conversions on the table.",
      cards: [
        {
          icon: "money_off",
          title: "Wasted Ad Spend",
          description:
            "Manual bid adjustments were made days after performance data arrived — by then, tens of thousands in budget had already been misallocated to underperforming audiences.",
        },
        {
          icon: "image_not_supported",
          title: "Creative Fatigue",
          description:
            "Ad creatives went stale without systematic testing, causing audience engagement to steadily decline and cost-per-click to surge across campaigns.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a neural bidding and creative intelligence layer that optimizes every dollar in real-time, 24/7.",
      cards: [
        {
          n: "01",
          title: "AI Bidding Engine",
          description:
            "Real-time bid optimization engine that adjusts keyword and audience bids every 15 minutes using predictive signals — not lagging 7-day averages.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Creative Optimizer",
          description:
            "Automated creative testing framework that runs continuous multivariate experiments and retires underperforming variants before they drain budget.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Budget Allocator",
          description:
            "Intelligent cross-channel budget reallocation system that shifts spend toward the highest-performing platforms in real-time based on live ROAS signals.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "CashAds transformed ad management from a manual guessing game into a precision-engineered profit machine with compounding returns.",
      bullets: [
        {
          title: "$2M+ Monthly Spend Managed",
          description:
            "The AI engine now autonomously manages over $2M in monthly ad budget with greater accuracy than any human team.",
        },
        {
          title: "42% CPA Reduction",
          description:
            "Cost per acquisition dropped dramatically as the system continuously eliminated inefficient spend pathways.",
        },
      ],
      tiles: [
        { value: "+35%", label: "ROAS Gain", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "−42%", label: "CPA Drop", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "$2M+", label: "Managed Monthly", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "15m", label: "Optimization Cycle", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "CashAds isn't just an ad manager; it's the autonomous profit engine that makes every advertising dollar work harder than the last.",
    },
  },

  "healthtrack-ai": {
    name: "PriceSmurf",
    category: "Healthcare · SaaS",
    tagline:
      "How we built an AI patient engagement platform that reduced appointment no-shows by 60% and tripled patient interactions for a leading healthcare clinic.",
    thumbnail: "/PriceSmurf.png",
    heroMetrics: [
      { value: "−60%", label: "No-show Rate" },
      { value: "3x", label: "Patient Engagement" },
    ],
    quote: {
      text: "This platform transformed how we connect with and retain our patients.",
      author: "Operations Director, Healthcare Clinic",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Appointment no-shows and disengaged patients were costing the clinic tens of thousands in lost revenue weekly.",
      cards: [
        {
          icon: "event_busy",
          title: "High No-show Rate",
          description:
            "Without intelligent reminders, up to 30% of scheduled appointments went unattended — creating staffing waste and revenue gaps that compounded daily.",
        },
        {
          icon: "person_off",
          title: "Patient Disengagement",
          description:
            "Generic communication strategies failed to resonate with patients, leading to poor health outcomes and low retention that threatened long-term practice viability.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a personalized patient intelligence layer that communicates with each patient at the right moment with the right message.",
      cards: [
        {
          n: "01",
          title: "Smart Scheduling AI",
          description:
            "Predictive appointment engine that analyzes patient history to identify high-risk no-show slots and automatically triggers personalized re-engagement sequences.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Reminder Intelligence",
          description:
            "Multi-channel reminder system (SMS, email, in-app) powered by behavioral AI that selects the optimal channel, timing, and message tone for each individual patient.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "EHR Integration Layer",
          description:
            "Secure integration fabric that connects with existing Electronic Health Record systems to provide seamless, context-aware patient communication.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "PriceSmurf transformed patient management from a reactive call-center operation into a proactive, AI-driven care engagement platform.",
      bullets: [
        {
          title: "60% No-show Reduction",
          description:
            "Intelligent reminders and re-engagement sequences dramatically reduced wasted appointment slots and recovered lost revenue.",
        },
        {
          title: "3x Patient Interactions",
          description:
            "Personalized AI communication tripled meaningful patient touchpoints, driving better health outcomes and retention.",
        },
      ],
      tiles: [
        { value: "−60%", label: "No-shows", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "3x", label: "Engagement", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "25h", label: "Saved Weekly", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "98%", label: "Msg Delivery", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "PriceSmurf isn't just a scheduling tool; it's the patient intelligence layer that makes every clinic interaction more effective than the last.",
    },
  },

  upgrr: {
    name: "Upgrr",
    category: "SaaS · Growth",
    tagline:
      "How we engineered a personalized growth platform that tripled user retention and automated the entire user upgrade journey through predictive AI.",
    thumbnail: "/upgrr.png",
    heroMetrics: [
      { value: "+3x", label: "User Retention" },
      { value: "+50%", label: "Upgrade Velocity" },
    ],
    quote: {
      text: "Upgrr turned our churn problem into our greatest growth advantage.",
      author: "CEO, Upgrr",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "High churn and low upgrade rates were silently eroding a promising SaaS product's growth trajectory.",
      cards: [
        {
          icon: "person_remove",
          title: "Invisible Churn",
          description:
            "Users were silently disengaging without triggering any alerts, and by the time manual follow-ups occurred, the window for re-engagement had already closed.",
        },
        {
          icon: "upgrade",
          title: "Stalled Upgrades",
          description:
            "Generic in-app messaging failed to connect the right premium features to the right users at the right moment, leaving a massive conversion gap unexploited.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a behavioral prediction layer that identifies upgrade and churn signals before they materialize — and acts on them automatically.",
      cards: [
        {
          n: "01",
          title: "Churn Prediction Engine",
          description:
            "Real-time behavioral AI that scores every user's churn probability daily and automatically triggers personalized re-engagement sequences before they disengage.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Upgrade Intelligence",
          description:
            "Contextual upgrade prompt system that analyzes each user's usage patterns and surfaces the most relevant premium feature at the highest-intent moment.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Growth Analytics",
          description:
            "Live dashboard providing product and growth teams with instant cohort-level retention insights, upgrade funnel analysis, and revenue impact forecasts.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "Upgrr's AI layer transformed user lifecycle management from a reactive support function into a proactive, revenue-compounding growth engine.",
      bullets: [
        {
          title: "3x Retention Improvement",
          description:
            "Proactive AI intervention caught at-risk users weeks before they churned, tripling 90-day retention rates.",
        },
        {
          title: "50% Faster Upgrades",
          description:
            "Contextual upgrade prompts accelerated the freemium-to-paid conversion journey by identifying and acting on intent signals in real-time.",
        },
      ],
      tiles: [
        { value: "+3x", label: "Retention", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "+50%", label: "Upgrade Speed", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "92%", label: "Prediction Acc.", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "0", label: "Manual Chases", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "Upgrr isn't just a retention tool; it's the growth intelligence layer that turns every user interaction into a compounding revenue signal.",
    },
  },
}

type SlugKey = keyof typeof caseStudies

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies[slug as SlugKey]
  if (!cs) return { title: "Case Study Not Found - Solyio" }
  return {
    title: `${cs.name} Case Study | Solyio`,
    description: cs.tagline,
    alternates: { canonical: `https://solyio.com/portfolio/${slug}` },
  }
}

/* ─── PAGE ────────────────────────────────────────────────────────── */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = caseStudies[slug as SlugKey]
  if (!cs) notFound()

  return (
    <div className="font-body bg-white text-black antialiased">
      <SiteNavbar />

      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-32 px-8 md:px-12 max-w-screen-2xl mx-auto">
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 30%, rgba(255,30,65,0.08) 0%, rgba(255,255,255,0) 70%)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Left */}
            <div className="lg:col-span-6 mb-16 lg:mb-0">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[#FF1E41]" />
                <span className="text-[#FF1E41] font-bold tracking-[0.3em] text-xs uppercase">
                  Case Study · {cs.category}
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10 text-black">
                {cs.name.includes(" ") ? (
                  <>
                    {cs.name.split(" ")[0]} <br />
                    <span className="text-[#FF1E41]">{cs.name.split(" ").slice(1).join(" ")}</span>
                  </>
                ) : (
                  <span className="text-[#FF1E41]">{cs.name}</span>
                )}
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 max-w-xl leading-relaxed font-light mb-12">
                {cs.tagline}
              </p>

              <div className="flex flex-wrap gap-12">
                {cs.heroMetrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-5xl font-bold text-black mb-2">{m.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF1E41]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: circular image + spinning rings + quote */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[500px]">
                {/* Circular image */}
                <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.thumbnail}
                    alt={cs.name}
                    className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Spinning rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#FF1E41]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#FF1E41]/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                {/* Quote card */}
                <div className="absolute -bottom-10 -right-4 md:right-0 bg-white p-8 rounded-[2rem] shadow-2xl max-w-[260px] z-20 border border-zinc-50">
                  <span
                    className="material-symbols-outlined text-[#FF1E41] mb-4 text-3xl block"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    format_quote
                  </span>
                  <p className="font-medium italic text-xl leading-tight mb-6">
                    &ldquo;{cs.quote.text}&rdquo;
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                    — {cs.quote.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGE ──────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-zinc-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Sticky sidebar */}
              <div className="lg:col-span-4 lg:pr-20">
                <div className="lg:sticky lg:top-40">
                  <span className="text-[#FF1E41] font-bold tracking-widest text-xs uppercase mb-6 block">
                    01 / CONTEXT
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 text-black">
                    {cs.challenge.title}
                  </h2>
                  <p className="text-zinc-500 font-light text-lg leading-relaxed">
                    {cs.challenge.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 space-y-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {cs.challenge.cards.map((card) => (
                    <div key={card.title} className="space-y-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100">
                        <span className="material-symbols-outlined text-[#FF1E41]">
                          {card.icon}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight text-black">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Dashboard image */}
                <div className="rounded-[2.5rem] overflow-hidden bg-white shadow-2xl p-4 border border-zinc-100 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CHALLENGE_IMG}
                    alt="Dashboard"
                    className="w-full h-auto rounded-[2rem] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTION ───────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            {/* Centered header */}
            <div className="mb-32 text-center max-w-4xl mx-auto">
              <span className="inline-block text-[#FF1E41] font-bold tracking-[0.3em] text-[10px] uppercase mb-8">
                02 / ARCHITECTURE
              </span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] text-black">
                {cs.solution.title}
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                {cs.solution.tagline}
              </p>
            </div>

            {/* 3 architecture cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
              {cs.solution.cards.map((card) => (
                <div
                  key={card.n}
                  className="group relative p-12 bg-zinc-50 rounded-[3rem] hover:bg-black transition-all duration-700"
                >
                  <div className="mb-12">
                    <span className="text-zinc-300 group-hover:text-[#FF1E41] transition-colors text-6xl font-black opacity-20 group-hover:opacity-100">
                      {card.n}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold mb-6 text-black group-hover:text-white transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-zinc-500 group-hover:text-zinc-400 mb-12 leading-relaxed transition-colors">
                    {card.description}
                  </p>
                  <button className="flex items-center gap-4 text-[#FF1E41] font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                    {card.cta}{" "}
                    <span className="material-symbols-outlined text-sm">east</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Dark CTA banner */}
            <div className="relative overflow-hidden bg-black rounded-[4rem] p-16 md:p-24 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                    Ready to implement a{" "}
                    <br />
                    <span className="text-[#FF1E41] italic">
                      {cs.solution.cards[0].title}?
                    </span>
                  </h3>
                  <p className="text-xl text-zinc-400 font-light">
                    Schedule a technical consultation with our architecture team to explore potential impact.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex justify-end mt-4 lg:mt-0">
                  <Link
                    href="/book"
                    className="inline-block bg-[#FF1E41] text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#FF1E41]/20"
                  >
                    Scale Your Business
                  </Link>
                </div>
              </div>
              {/* BG decor */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF1E41]/20 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── OUTCOMES ───────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-white overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left */}
              <div className="lg:col-span-5 mb-24 lg:mb-0 lg:pr-12">
                <span className="text-[#FF1E41] font-bold tracking-widest text-xs uppercase mb-8 block">
                  03 / OUTCOMES
                </span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12 text-black">
                  Business
                  <br />
                  Impact
                </h2>
                <p className="text-xl text-zinc-500 leading-relaxed font-light mb-16">
                  {cs.outcomes.description}
                </p>
                <div className="space-y-12">
                  {cs.outcomes.bullets.map((b) => (
                    <div key={b.title} className="flex items-start gap-8">
                      <div className="w-2 h-2 rounded-full bg-[#FF1E41] mt-3 shrink-0" />
                      <div>
                        <h5 className="text-2xl font-bold mb-3 tracking-tight text-black">
                          {b.title}
                        </h5>
                        <p className="text-zinc-500 font-light leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: 2×2 stat tiles */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  {cs.outcomes.tiles.map((tile) => (
                    <div
                      key={tile.label}
                      className={`${tile.bg} aspect-[1.1] rounded-[3rem] flex flex-col items-center justify-center p-12 text-center group hover:scale-[1.02] transition-transform`}
                    >
                      <div
                        className={`text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-none group-hover:scale-110 transition-transform ${tile.valueCls}`}
                      >
                        {tile.value}
                      </div>
                      <div
                        className={`text-xs font-bold uppercase tracking-[0.3em] mt-4 ${tile.labelCls}`}
                      >
                        {tile.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ────────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-zinc-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Large image */}
              <div className="md:col-span-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GALLERY_IMG_1}
                  alt="Gallery"
                  className="w-full h-[600px] object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                />
              </div>

              {/* Small image + white card */}
              <div className="md:col-span-5 space-y-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GALLERY_IMG_2}
                  alt="Gallery"
                  className="w-full h-[280px] object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
                />
                <div className="bg-white p-16 rounded-[3rem] flex flex-col justify-center min-h-[280px] border border-zinc-100">
                  <h3 className="text-3xl font-bold mb-6 tracking-tight text-black">
                    {cs.gallery.title}
                  </h3>
                  <p className="text-zinc-500 font-light mb-10 leading-relaxed">
                    {cs.gallery.description}
                  </p>
                  <Link
                    href="/book"
                    className="inline-block bg-black text-white py-5 px-10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF1E41] transition-all w-fit"
                  >
                    Book Technical Deep Dive
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
