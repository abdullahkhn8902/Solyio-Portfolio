"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
]

interface SiteNavbarProps {
  variant?: "light" | "dark"
}

export function SiteNavbar({ variant = "light" }: SiteNavbarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/services") return pathname === "/services"
    if (href === "/industries") return pathname === "/industries"
    if (href === "/portfolio")
      return pathname === "/portfolio" || pathname.startsWith("/portfolio/")
    if (href === "/about") return pathname === "/about"
    return false
  }

  const dark = variant === "dark"

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-none transition-colors ${
        dark ? "bg-[#0f0e0e]/80" : "bg-[#fcf9f8]/80"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-5 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Solyio"
            className={`h-20 ml-10 w-auto object-contain transition-transform hover:scale-105 duration-300 ${
              dark ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href)
            return (
              <Link
                key={label}
                href={href}
                className={`font-headline text-sm tracking-widest uppercase transition-all duration-300 ${
                  active
                    ? dark
                      ? "text-[#FF1E41] font-bold border-b-2 border-[#FF1E41] pb-0.5"
                      : "text-[#bb0029] font-bold border-b-2 border-[#bb0029] pb-0.5"
                    : dark
                    ? "text-white/60 hover:text-white"
                    : "text-[#1c1b1b] opacity-70 hover:opacity-100 hover:text-[#bb0029]"
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <Link
          href="/book"
          className="bg-[#FF1E41] text-white font-headline text-sm font-bold tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#bb0029] active:scale-95 transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
