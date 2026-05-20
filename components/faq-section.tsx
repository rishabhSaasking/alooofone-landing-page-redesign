"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an AI voice agent?",
    answer:
      "An AI voice agent is a sophisticated software that can have natural, human-like phone conversations with your customers. It uses advanced speech recognition and natural language processing to understand caller intent and respond appropriately, just like a skilled human agent would.",
  },
  {
    question: "How do alooofone voice agents work?",
    answer:
      "Our agents use state-of-the-art language models combined with voice synthesis to handle calls. When a call comes in, the AI processes the speech in real-time, understands the context and intent, and generates natural responses. It can access your business systems to look up information, schedule appointments, or take actions — all while maintaining a natural conversation flow.",
  },
  {
    question: "How quickly can I go live?",
    answer:
      "Most businesses can deploy their first voice agent within days, not months. Our platform provides pre-built templates and intuitive configuration tools. For complex custom implementations, our team provides hands-on support to ensure successful deployment.",
  },
  {
    question: "Can I connect to my existing phone system?",
    answer:
      "Yes! alooofone integrates with all major telephony providers and phone systems. We support SIP trunking, cloud PBX systems, and can work with your existing phone numbers. Our team will help ensure a seamless integration with your current infrastructure.",
  },
  {
    question: "What languages are supported?",
    answer:
      "alooofone currently supports 30+ languages with native-quality voice synthesis. This includes English, Spanish, French, German, Portuguese, Mandarin, Japanese, and many more. Our agents can even switch languages mid-conversation when needed.",
  },
  {
    question: "Is alooofone GDPR compliant?",
    answer:
      "Absolutely. We are SOC 2 Type II certified, GDPR compliant, and offer EU sovereignty options with data processing entirely within the European Union. We take data privacy and security extremely seriously and can provide detailed compliance documentation upon request.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting started with alooofone.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
