"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    company: "DriveNation Motors",
    logo: "D",
    stat: "91%",
    statLabel: "Calls resolved without human agent",
    quote:
      "This wasn't just an incremental improvement. It fundamentally changed the economics of our support operations — while delivering a genuinely better experience to our customers.",
    author: "Marcus Chen",
    role: "VP of Operations",
    image: "/images/testimonial-1.jpg",
  },
  {
    company: "Bright & Co. Dental",
    logo: "B",
    stat: "0s",
    statLabel: "Patient wait time for answers",
    quote:
      "Our front desk team finally gets to do what they trained for — welcoming patients and supporting in-clinic care. The AI handles the phones, and patients actually prefer the instant response.",
    author: "Dr. Sarah Mitchell",
    role: "Practice Owner",
    image: "/images/testimonial-2.jpg",
  },
  {
    company: "Apex Recovery Group",
    logo: "A",
    stat: "4.8x",
    statLabel: "More accounts contacted per day",
    quote:
      "The AI contacts more accounts before 10am than our entire team used to reach in a full day. It's compliant, consistent, and it doesn't call in sick on Mondays.",
    author: "James Rodriguez",
    role: "Director of Collections",
    image: "/images/testimonial-3.jpg",
  },
  {
    company: "Vantage Sales Partners",
    logo: "V",
    stat: "73%",
    statLabel: "Fewer unqualified demos booked",
    quote:
      "My reps used to dread Mondays. Now they show up to a calendar full of warm, pre-qualified leads — and close rates have nearly tripled. The AI is the best SDR we've ever hired.",
    author: "Lisa Thompson",
    role: "Sales Director",
    image: "/images/testimonial-1.jpg",
  },
  {
    company: "Clearpath Insurance",
    logo: "C",
    stat: "89%",
    statLabel: "Renewal contact rate (up from 41%)",
    quote:
      "We were leaving money on the table every single renewal cycle. Now the AI reaches every policyholder on time, every time — and hands off to a human only when it truly matters.",
    author: "Michael Park",
    role: "Operations Manager",
    image: "/images/testimonial-2.jpg",
  },
  {
    company: "Meridian Property Group",
    logo: "M",
    stat: "100%",
    statLabel: "Calls answered — 24 hours a day",
    quote:
      "A buyer called at 10:30pm on a Saturday about a listing. The AI answered, handled all their questions, and booked a showing for Sunday morning. We closed that deal 22 days later.",
    author: "Amanda Foster",
    role: "Managing Broker",
    image: "/images/testimonial-3.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Real results from real businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how companies like yours have transformed their customer
            conversations with alooofone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/3]">
            <Image
              src={current.image}
              alt={current.author}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {current.stat}
                </div>
                <div className="text-white/80 text-sm">{current.statLabel}</div>
              </div>
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full py-2 px-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {current.logo}
              </div>
              <span className="font-medium text-sm">{current.company}</span>
            </div>
          </div>

          <div className="space-y-8">
            <Quote className="w-12 h-12 text-primary/20" />
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
              {`"${current.quote}"`}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={current.image}
                  alt={current.author}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">{current.author}</div>
                <div className="text-muted-foreground">
                  {current.role}, {current.company}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prev}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={next}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
