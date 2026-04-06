import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import SplitSection from "@/components/shared/SplitSection";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatsBar from "@/components/shared/StatsBar";
import FAQAccordion from "@/components/shared/FAQAccordion";
import UrgencyBanner from "@/components/shared/UrgencyBanner";
import ContactForm from "@/components/shared/ContactForm";

const CHARCOAL = "#1F2937";
const GOLD = "#D4AF37";

const services = [
  {
    title: "Calendar & Meeting Management",
    description: "Cross-timezone scheduling, conflict resolution, prep briefs for every meeting, agenda creation, and follow-up action items. Your calendar runs like clockwork without you touching it.",
    image: "/images/scheduling.jpg",
  },
  {
    title: "Travel & Logistics",
    description: "Full itinerary planning, flight and hotel booking, ground transportation, restaurant reservations, and real-time rebooking when plans change. Door-to-door coordination for every trip.",
    image: "/images/admin.jpg",
  },
  {
    title: "Communication Management",
    description: "Email triage and prioritization, draft responses in your voice, follow-up tracking, stakeholder communication, and confidential correspondence handling. Your inbox, managed.",
    image: "/images/email.jpg",
  },
  {
    title: "Meeting Preparation & Research",
    description: "Company research briefs, attendee profiles, agenda preparation, document assembly, competitive intelligence, and post-meeting action item tracking. Walk into every meeting fully prepared.",
    image: "/images/research.jpg",
  },
];

const pillars = [
  {
    title: "Discretion & Confidentiality",
    description: "Every executive VA signs an NDA. We handle sensitive information with the same care your in-house team does. Board materials, financial data, and personal matters stay private.",
  },
  {
    title: "Executive Communication Standards",
    description: "Our VAs write and communicate at an executive level. Clear, professional, concise. They represent you to board members, investors, and clients without you reviewing every message.",
  },
  {
    title: "Proactive Anticipation",
    description: "Great executive support isn't reactive. Your VA learns your patterns and preferences, anticipates needs, flags conflicts before they happen, and keeps you one step ahead.",
  },
  {
    title: "Global Time Zone Coverage",
    description: "Whether you're in New York, London, or Singapore, your VA works across your schedule. Early morning prep, late-night travel changes, weekend urgencies — all covered.",
  },
];

const stats = [
  { value: "200+", label: "Executives Supported" },
  { value: "25hrs", label: "Avg Weekly Time Saved" },
  { value: "99.2%", label: "On-Time Delivery" },
  { value: "NDA", label: "Protected" },
];

const testimonials = [
  {
    quote: "My Runwell EA manages my calendar across three time zones and preps me for every meeting with a one-page brief. I estimate she saves me 25 hours a week. At $7/hr, the ROI is absurd. My previous EA in Manhattan cost $85K a year and wasn't as thorough.",
    name: "Daniel Harrington",
    role: "CFO, Meridian Capital Group",
    result: "25 hours/week saved — replaced an $85K/yr in-house EA",
  },
  {
    quote: "I was skeptical about remote executive support at this price point. After six months, I can't imagine going back. My VA handles my travel, inbox, and meeting prep with a level of attention to detail that genuinely impressed me. She's indispensable.",
    name: "Sophia Lam",
    role: "VP Product, Crescendo Health",
    result: "6 months in — 'indispensable' to daily operations",
  },
];

const faqs = [
  { question: "What experience do your executive VAs have?", answer: "Our executive-tier VAs have 3+ years of experience supporting C-suite executives, managing complex calendars, handling confidential communications, and coordinating international travel. They're selected from our top 1% of applicants." },
  { question: "How do you handle confidential information?", answer: "Every VA signs a comprehensive NDA before starting. We follow enterprise-grade security practices and can work within your organization's existing security protocols, VPNs, and access controls." },
  { question: "Can my VA communicate directly with my team and clients?", answer: "Yes. Our executive VAs are trained in professional communication and can interact with board members, investors, clients, and internal teams on your behalf. They learn your voice and preferences." },
  { question: "What time zones do you cover?", answer: "We have VAs available across all major time zones. Whether you need someone aligned with US Eastern, European, or Asia-Pacific hours, we match accordingly. Many executives use VAs in complementary time zones for extended coverage." },
  { question: "How is this only $4–$8/hr for executive-level support?", answer: "Our VAs are based in regions with lower cost of living, but they're selected for executive-caliber skills and trained to Western business standards. You get Fortune 500-level support at a fraction of the cost because we've removed geographic markup from the equation." },
];

export default function VariantF() {
  return (
    <>
      {/* Hero — More whitespace, premium feel */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: CHARCOAL }}>
              Executive-Level Support. Without the Executive-Level Price Tag.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
              Your dedicated executive VA handles calendar management, travel coordination, meeting prep, and confidential communications — from <strong className="text-gray-800">$6–$8/hr</strong>. So you can lead, not administrate.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="Schedule a Consultation" bgColor={CHARCOAL} />
              <CTAButton text="See What's Included" variant="secondary" href="#services" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image src="/images/hero-v3.jpg" alt="Executive virtual assistant" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              <div className="absolute top-4 right-4 px-4 py-2 rounded-lg text-xs font-bold text-white z-10" style={{ backgroundColor: GOLD }}>
                Executive Tier
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={stats} bgColor={CHARCOAL} textColor="#ffffff" />

      {/* Services */}
      <section id="services">
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="What Your Executive VA Handles" subtitle="Comprehensive support across every aspect of your professional life." titleColor={CHARCOAL} />
          </div>
          {services.map((s, i) => (
            <SplitSection key={s.title} title={s.title} description={s.description} imageSrc={s.image} imagePlaceholder={s.title} reversed={i % 2 === 1} accentColor={CHARCOAL} />
          ))}
        </div>
      </section>

      {/* Quality Pillars — No emojis, premium styling */}
      <section className="py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="The Standard You Expect" subtitle="Executive support requires a different caliber of assistant. Here's what sets ours apart." titleColor={CHARCOAL} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="space-y-3">
                <div className="w-10 h-0.5 rounded" style={{ backgroundColor: GOLD }} />
                <h3 className="font-heading font-bold text-lg" style={{ color: CHARCOAL }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Trusted by Executives" titleColor={CHARCOAL} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} result={t.result} accentColor={CHARCOAL} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — Single premium card */}
      <section className="py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: CHARCOAL }}>
            Executive VA Packages
          </h2>
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 mt-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Starting at</p>
            <p className="text-5xl font-bold mb-2" style={{ color: CHARCOAL }}>$6<span className="text-lg text-gray-400">/hr</span></p>
            <p className="text-gray-500 mb-8">Every engagement is custom-tailored to your needs and schedule.</p>
            <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
              {[
                "Dedicated executive VA",
                "NDA & confidentiality agreement",
                "Cross-timezone availability",
                "Trained backup VA included",
                "Weekly performance reports",
                "30-day satisfaction guarantee",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block px-8 py-3.5 text-white font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: CHARCOAL }}>
              Schedule a Confidential Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" titleColor={CHARCOAL} />
          <FAQAccordion items={faqs} accentColor={CHARCOAL} />
        </div>
      </section>

      {/* Urgency */}
      <UrgencyBanner text="Limited availability for executive-level VAs this quarter — schedule your consultation today" bgColor={GOLD} textColor={CHARCOAL} />

      {/* Contact Form */}
      <ContactForm accentColor={CHARCOAL} heading="Schedule a Confidential Consultation" subheading="Tell us about your role and the support you need. All inquiries are handled with full discretion." buttonText="Request a Consultation" />
    </>
  );
}
