import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/person-phone-call.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative px-8 py-20 text-center md:px-16 md:py-28">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to transform your customer conversations?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
              Start building smarter conversations today. Deploy in days, not months.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-card px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-card/90"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Contact Sales
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
                SOC 2 Type II certified
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
                GDPR compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
