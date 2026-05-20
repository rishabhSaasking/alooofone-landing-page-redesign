const stats = [
  {
    value: "1 Billion+",
    label: "Calls supported",
  },
  {
    value: "99.9%",
    label: "Uptime for enterprise",
  },
  {
    value: "2.5M+",
    label: "Agents launched",
  },
  {
    value: "750K+",
    label: "Developers",
  },
  {
    value: "<500ms",
    label: "Average latency",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everyday calls. Extraordinary outcomes.
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            The numbers speak for themselves. alooofone powers voice AI at
            enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-background/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
