"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            AI Voice Agents
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Talk Smarter,
            <br />
            <span className="text-muted-foreground">Connect Further.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Elevate your customer conversations with intelligent voice AI that takes you further, faster, and with unmatched ease.
          </p>
          
          {/* CTA Button */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-secondary"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Floating Product Mockup */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Decorative elements */}
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          
          {/* Main product image container */}
          <div className="relative rounded-3xl bg-card p-3 shadow-2xl shadow-black/5 ring-1 ring-border">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-dashboard.jpg"
                alt="alooofone AI Voice Agent Dashboard"
                width={1200}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-8 top-1/4 hidden rounded-2xl bg-card p-4 shadow-xl ring-1 ring-border lg:block">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <Image
                  src="/images/testimonial-1.jpg"
                  alt="User"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full ring-2 ring-card object-cover"
                />
                <Image
                  src="/images/testimonial-2.jpg"
                  alt="User"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full ring-2 ring-card object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">Experience Voice AI</p>
                <p className="text-xs text-muted-foreground">Simplified Just for You</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-8 bottom-1/4 hidden rounded-2xl bg-card p-4 shadow-xl ring-1 ring-border lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <span className="text-lg">01/08</span>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full border border-border p-1.5 transition-colors hover:bg-secondary">
                  <ArrowDown className="h-3 w-3 rotate-90" />
                </button>
                <button className="rounded-full border border-border p-1.5 transition-colors hover:bg-secondary">
                  <ArrowDown className="h-3 w-3 -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#trusted" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
