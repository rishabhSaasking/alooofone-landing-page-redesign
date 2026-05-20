import { Phone, Clock, BarChart3, Shield, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Natural Conversations",
    description: "Voice AI that sounds genuinely human, with natural pauses, tone variations, and contextual responses.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer call. Your AI agents work around the clock, handling inquiries instantly.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track call metrics, sentiment analysis, and conversion rates with comprehensive dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your data and conversations are always protected.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Go live in minutes, not months. Our no-code builder makes setup effortless.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Serve global customers in 30+ languages with native-level fluency and cultural awareness.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to scale conversations
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Powerful features designed to help you build, deploy, and manage voice AI agents that deliver exceptional customer experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-8 ring-1 ring-border transition-all hover:shadow-lg hover:ring-accent/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
