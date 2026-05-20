"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Headphones, TrendingUp, Dumbbell, Utensils } from "lucide-react";

const agents = [
  {
    id: "appointment",
    name: "Appointment Setter",
    description: "Schedule meetings and manage calendars with natural conversation.",
    icon: Calendar,
    image: "/images/demo-person-1.jpg",
  },
  {
    id: "customer-service",
    name: "Customer Service",
    description: "Handle inquiries, resolve issues, and ensure customer satisfaction.",
    icon: Headphones,
    image: "/images/demo-person-2.jpg",
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification",
    description: "Identify and qualify leads to fill your sales pipeline.",
    icon: TrendingUp,
    image: "/images/demo-person-3.jpg",
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness",
    description: "Manage memberships, class bookings, and member inquiries.",
    icon: Dumbbell,
    image: "/images/demo-person-1.jpg",
  },
  {
    id: "restaurant",
    name: "Restaurant & Food",
    description: "Take orders, handle reservations, and answer menu questions.",
    icon: Utensils,
    image: "/images/demo-person-2.jpg",
  },
];

export function LiveDemoSection() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Live Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Experience our voice AI in action
          </h2>
          <p className="text-lg text-muted-foreground">
            Select an agent type and try it yourself. See how natural and
            helpful our AI conversations really are.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold mb-4">Choose an Agent</h3>
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  selectedAgent.id === agent.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedAgent.id === agent.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <agent.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {agent.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src={selectedAgent.image}
                  alt={selectedAgent.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Ready to connect</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{selectedAgent.name}</h3>
                  <p className="text-white/80 text-sm">{selectedAgent.description}</p>
                </div>
              </div>
              <div className="p-6">
                <Button size="lg" className="w-full rounded-full gap-2">
                  <Phone className="w-5 h-5" />
                  Start Demo Call
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  No sign-up required. Try it free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
