import Image from "next/image";
import { Phone, UserCircle, Settings, Megaphone, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Universal Call Handling",
    description:
      "Every inbound call answered instantly — no queues, no hold music, no missed opportunities.",
  },
  {
    icon: UserCircle,
    title: "Context-Aware Personas",
    description:
      "Role-trained agents that understand your business and adapt to each conversation.",
  },
  {
    icon: Settings,
    title: "Custom Playbooks",
    description:
      "Your policies, your guardrails — followed automatically on every single call.",
  },
  {
    icon: Megaphone,
    title: "Smart Outbound",
    description:
      "Proactive outreach that qualifies leads and keeps your calendar full.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Never miss a call again. Your AI agents work around the clock, every day.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Speak to customers in their language with natural, fluent conversations.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Everything you need to scale customer conversations
          </h2>
          <p className="text-lg text-muted-foreground">
            From universal call receiving to high-stakes outbound scheduling —
            our voice agents handle every conversation professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-4">Built to Scale</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ship better agents, faster
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Configure your conversation flows, test with real scenarios, and
              deploy in minutes. Vapi handles the infrastructure so you can go
              from prompt to production fast.
            </p>
            <ul className="space-y-4">
              {[
                "Build, test, and deploy in minutes",
                "Real-time analytics and monitoring",
                "Seamless CRM integrations",
                "Enterprise-grade security",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-support.jpg"
                alt="Team collaborating on voice AI"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
