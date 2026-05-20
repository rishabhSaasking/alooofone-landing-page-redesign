"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  Product: [
    { label: "Voice Agents", href: "#" },
    { label: "Analytics", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "API Reference", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Status", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "DPA", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="py-16 border-b border-background/10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {"Let's talk"}
              </h3>
              <p className="text-background/70 mb-8 max-w-md">
                Have an idea in mind — voice AI, scaling operations, or
                human-quality automation? {"Let's make it real."}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-background/70">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@alooofone.com</span>
                </div>
                <div className="flex items-center gap-3 text-background/70">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-background/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-background/5 rounded-2xl p-6 md:p-8">
              <h4 className="font-semibold mb-6">
                Have an agent deployment in mind?
              </h4>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  />
                </div>
                <Input
                  placeholder="Company (optional)"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full rounded-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 border-b border-background/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-background/80">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/60 hover:text-background transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">
              al<span className="text-primary">ooo</span>fone
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-background/60">
            <span>© 2026 alooofone labs</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">SOC 2 Type II</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">GDPR compliant</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">EU sovereignty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
