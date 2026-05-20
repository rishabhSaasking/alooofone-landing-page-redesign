"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    company: "DriveNation Motors",
    stat: "91%",
    statLabel: "Calls resolved without human agent",
    quote: "This wasn&apos;t just an incremental improvement. It fundamentally changed the economics of our support operations — while delivering a genuinely better experience to our customers.",
    author: "Marcus Chen",
    role: "VP of Operations",
    image: "/images/testimonial-1.jpg",
  },
  {
    company: "Bright & Co. Dental",
    stat: "0s",
    statLabel: "Patient wait time for answers",
    quote: "Our front desk team finally gets to do what they trained for — welcoming patients and supporting in-clinic care. The AI handles the phones, and patients actually prefer the instant response.",
    author: "Dr. Sarah Mitchell",
    role: "Practice Owner",
    image: "/images/testimonial-2.jpg",
  },
  {
    company: "Meridian Property",
    stat: "100%",
    statLabel: "Calls answered — 24 hours a day",
    quote: "A buyer called at 10:30pm on a Saturday about a listing. The AI answered, handled all their questions, and booked a showing for Sunday morning. We closed that deal 22 days later.",
    author: "Amanda Foster",
    role: "Managing Broker",
    image: "/images/testimonial-3.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Real results from real businesses
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={current.image}
                alt={current.author}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white">
                  <div className="text-5xl font-semibold">{current.stat}</div>
                  <div className="mt-2 text-white/80">{current.statLabel}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-8 text-6xl text-border">&ldquo;</div>
              <blockquote className="-mt-8 text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
                {current.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={current.image}
                  alt={current.author}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{current.author}</div>
                  <div className="text-muted-foreground">{current.role}, {current.company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center gap-4">
                <button
                  onClick={prev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
