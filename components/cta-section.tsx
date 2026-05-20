import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, CheckCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/person-calling.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative py-16 md:py-24 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Revolutionize your call operations with alooofone
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Start building smarter conversations today. Deploy in days, not
              months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                SOC 2 Type II certified
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                EU sovereignty nodes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
