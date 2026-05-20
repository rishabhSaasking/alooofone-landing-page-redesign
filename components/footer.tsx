import Link from "next/link"

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
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Left Side - Brand & Contact */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-semibold">alooofone</span>
            </Link>
            <p className="mt-6 max-w-sm text-primary-foreground/70 leading-relaxed">
              AI voice agents that sound human. Build, deploy, and scale intelligent conversations for your business.
            </p>
            <div className="mt-8 space-y-3 text-sm text-primary-foreground/70">
              <p>hello@alooofone.com</p>
              <p>San Francisco, CA</p>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-sm font-semibold text-primary-foreground/80">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
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

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 py-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © 2026 alooofone labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <span>SOC 2 Type II</span>
            <span>GDPR</span>
            <span>HIPAA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
