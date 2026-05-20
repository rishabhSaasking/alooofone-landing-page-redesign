import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
