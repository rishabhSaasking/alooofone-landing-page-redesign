export function TrustedBy() {
  const logos = [
    { name: "Stripe", width: 80 },
    { name: "Airbnb", width: 90 },
    { name: "Shopify", width: 100 },
    { name: "Slack", width: 85 },
    { name: "Notion", width: 95 },
    { name: "Linear", width: 85 },
  ]

  return (
    <section id="trusted" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-xl font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
