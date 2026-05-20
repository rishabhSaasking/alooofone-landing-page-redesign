export function LogoCloud() {
  const logos = [
    "Motorola",
    "Capsule",
    "Caribou",
    "Grab",
    "Lenovo",
    "Anker",
    "Stripe",
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-muted-foreground/60 font-semibold text-lg tracking-wide hover:text-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
