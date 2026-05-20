const steps = [
  {
    number: "01",
    title: "Design Your Agent",
    description: "Use our intuitive builder to create conversation flows, define personas, and set up custom responses tailored to your business.",
  },
  {
    number: "02",
    title: "Connect & Configure",
    description: "Integrate with your existing phone systems, CRM, and calendars. Configure routing rules and business hours.",
  },
  {
    number: "03",
    title: "Test & Refine",
    description: "Run test calls, review transcripts, and fine-tune your agent&apos;s responses until they&apos;re perfect.",
  },
  {
    number: "04",
    title: "Go Live",
    description: "Deploy your agent and start handling real customer calls. Monitor performance with real-time analytics.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From setup to success in four simple steps
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Get your AI voice agents up and running quickly with our streamlined onboarding process.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl bg-card p-8 ring-1 ring-border"
              >
                <div className="mb-6">
                  <span className="text-5xl font-light text-border">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-primary p-10 text-primary-foreground">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-4xl font-semibold">1B+</div>
              <div className="mt-2 text-sm text-primary-foreground/80">Minutes of calls handled</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">99.9%</div>
              <div className="mt-2 text-sm text-primary-foreground/80">Uptime guaranteed</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">500+</div>
              <div className="mt-2 text-sm text-primary-foreground/80">Enterprise customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
