import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessStep from "@/components/shared/ProcessStep";
import TestimonialCard from "@/components/shared/TestimonialCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import PricingTable from "@/components/shared/PricingTable";
import UrgencyBanner from "@/components/shared/UrgencyBanner";
import ContactForm from "@/components/shared/ContactForm";

const FOREST = "#0D4B3B";
const TEAL = "#2EC4B6";

const pricingTiers = [
  {
    name: "Starter",
    price: "$4",
    unit: "/hr",
    features: [
      "20 hours per month",
      "1 dedicated VA",
      "Admin & data entry tasks",
      "Email & chat support",
      "48-hour onboarding",
    ],
    ctaText: "Get Started",
  },
  {
    name: "Growth",
    price: "$6",
    unit: "/hr",
    highlighted: true,
    features: [
      "40 hours per month",
      "1–2 dedicated VAs",
      "Admin + specialized tasks",
      "Email management & scheduling",
      "Priority matching",
      "Weekly check-in calls",
    ],
    ctaText: "Most Popular — Get Started",
  },
  {
    name: "Scale",
    price: "$8",
    unit: "/hr",
    features: [
      "80+ hours per month",
      "Dedicated VA team",
      "Full-service support",
      "Project management",
      "Priority matching & backup VA",
      "Dedicated account manager",
    ],
    ctaText: "Talk to Sales",
  },
];

const services = [
  { icon: "📋", title: "Admin Support", description: "Document prep, filing, travel coordination, expense tracking" },
  { icon: "📧", title: "Email Management", description: "Inbox zero, drafting, follow-ups, newsletter management" },
  { icon: "📅", title: "Scheduling", description: "Calendar management, cross-timezone coordination, reminders" },
  { icon: "📊", title: "Data Entry & CRM", description: "CRM updates, spreadsheet management, database maintenance" },
  { icon: "🔍", title: "Research", description: "Market analysis, competitor tracking, lead sourcing, reports" },
  { icon: "💬", title: "Customer Support", description: "Check-in calls, feedback collection, ticket triage, live chat" },
];

const steps = [
  { title: "Scope Your Needs", description: "Tell us what tasks are eating your time. We design a support plan around your exact workflows." },
  { title: "Meet Your VA", description: "Within 48 hours, we match you with a vetted assistant trained on your tools and industry." },
  { title: "Scale as You Grow", description: "Add hours, add VAs, or adjust your plan — no penalties, no contracts, no friction." },
];

const testimonials = [
  {
    quote: "We needed support for a product launch but couldn't justify a full-time hire. Runwell gave us exactly what we needed, for exactly as long as we needed it. When the launch was over, we scaled back. No awkward conversations.",
    name: "James Torres",
    role: "COO, LaunchPad Ventures",
    result: "Scaled from 0 to 3 VAs in under a week for launch",
  },
  {
    quote: "I started with 10 hours a month just to test it out. Now I have three VAs handling operations across two time zones. The ability to scale without any HR overhead changed how we operate.",
    name: "Priya Mehta",
    role: "Operations Director, NexGen Solutions",
    result: "Cut operational costs by 62% while increasing output",
  },
];

const faqs = [
  { question: "How quickly can I get started?", answer: "Most clients are matched with a VA within 48 hours. Your assistant will be briefed on your tools and workflows before your first working session." },
  { question: "What tools do your VAs use?", answer: "Our VAs are trained on Google Workspace, Microsoft 365, Slack, Notion, Asana, HubSpot, Salesforce, and many more. We can train on your specific stack." },
  { question: "Can I change my plan month-to-month?", answer: "Absolutely. Scale up, scale down, or pause — no long-term contracts, no penalties. Your plan adjusts to your needs." },
  { question: "What happens if my VA isn't a good fit?", answer: "We'll rematch you with a new VA at no extra cost. Our goal is a seamless working relationship, and we stand behind that with a 30-day guarantee." },
  { question: "Is there a minimum commitment?", answer: "No minimums. Start with as few as 10 hours a month. Many clients start small and scale up as they see results." },
];

export default function VariantB() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#FAF8F6" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: FOREST }}>
              Scale Your Team Without Scaling Your Payroll
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Trained virtual assistants from <strong>$4–$8/hr</strong>. Flexible hours, no contracts, no HR headaches. Scale up or down as your business needs change — from 10 hours a month to a full team.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="See Pricing" bgColor={FOREST} href="#pricing" />
              <CTAButton text="How It Works" variant="secondary" href="#how-it-works" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image src="/images/hero-v2.jpg" alt="Team of virtual assistants collaborating" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="The Real Cost of Your Next Full-Time Hire" subtitle="A single hire costs $55K+ per year before you see any results. A Runwell VA starts delivering from day one." titleColor={FOREST} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="font-heading font-bold text-xl mb-6 text-gray-400">Traditional Hire</h3>
              <ul className="space-y-4">
                {[
                  ["Salary", "$45,000+/yr"],
                  ["Benefits & Overhead", "$8,000+/yr"],
                  ["Recruiting", "4–8 weeks"],
                  ["Training", "2–4 weeks"],
                  ["If it doesn't work out?", "Start over"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between text-sm">
                    <span className="text-gray-600">{label}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: FOREST }}>
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                Runwell VA <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Recommended</span>
              </h3>
              <ul className="space-y-4">
                {[
                  ["Cost", "$4–$8/hr (all-in)"],
                  ["Overhead", "$0"],
                  ["Start Time", "Matched in 48 hours"],
                  ["Training", "Pre-trained on your tools"],
                  ["Flexibility", "Scale up or down anytime"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between text-sm">
                    <span className="text-white/70">{label}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ backgroundColor: "#E8F5F1" }}>
        <PricingTable tiers={pricingTiers} accentColor={FOREST} heading="Simple, Transparent Pricing" subtitle="No hidden fees. No long-term contracts. Cancel or change your plan anytime." />
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="One VA. Six Roles Covered." subtitle="Your Runwell VA is trained across multiple disciplines — so one person handles what used to take a whole team." titleColor={FOREST} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} accentColor={FOREST} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20" style={{ backgroundColor: "#FAF8F6" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="From Overloaded to Optimized in 3 Steps" titleColor={FOREST} />
          <div className="flex flex-col md:flex-row gap-12">
            {steps.map((s, i) => (
              <ProcessStep key={s.title} step={i + 1} title={s.title} description={s.description} accentColor={FOREST} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Trusted by Growing Teams" titleColor={FOREST} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} result={t.result} accentColor={FOREST} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F6" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" titleColor={FOREST} />
          <FAQAccordion items={faqs} accentColor={FOREST} />
        </div>
      </section>

      {/* Urgency */}
      <UrgencyBanner text="No contracts, no minimums — start with as few as 10 hours this month" bgColor={TEAL} />

      {/* Contact Form */}
      <ContactForm accentColor={FOREST} heading="Build Your Custom Support Plan" subheading="Tell us what you need and we'll design a flexible plan that fits your budget and workload." buttonText="Get My Free Quote" />
    </>
  );
}
