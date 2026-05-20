import Image from "next/image"

const useCases = [
  {
    title: "Healthcare & Dental",
    description: "Automate appointment scheduling, reminders, and patient follow-ups with HIPAA-compliant voice agents.",
    image: "/images/dental-office.jpg",
    stats: "85% reduction in no-shows",
  },
  {
    title: "Real Estate",
    description: "Qualify leads, schedule property viewings, and answer inquiries 24/7 without missing a single opportunity.",
    image: "/images/real-estate-agent.jpg",
    stats: "3x more qualified leads",
  },
  {
    title: "Customer Support",
    description: "Handle tier-1 support calls, troubleshoot common issues, and escalate complex cases seamlessly.",
    image: "/images/customer-service-team.jpg",
    stats: "91% first-call resolution",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Use Cases
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Explore One Destination at a Time
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            See how businesses across industries are transforming their customer experience with intelligent voice AI.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group overflow-hidden rounded-3xl bg-background ring-1 ring-border transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {useCase.stats}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
