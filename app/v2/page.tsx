import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessStep from "@/components/shared/ProcessStep";
import TestimonialCard from "@/components/shared/TestimonialCard";
import FAQAccordion from "@/components/shared/FAQAccordion";

const FOREST = "#0D4B3B";
const TEAL = "#2EC4B6";

const comparisonData = {
  traditional: [
    { label: "Salary", value: "$45K+" },
    { label: "Benefits", value: "$8K+" },
    { label: "Recruiting", value: "4–8 weeks" },
    { label: "Training", value: "2–4 weeks" },
    { label: "Risk", value: "What if it doesn't work out?" },
  ],
  runwell: [
    { label: "Cost", value: "Flexible hourly/monthly" },
    { label: "Benefits", value: "No overhead" },
    { label: "Start Time", value: "Matched in 48 hours" },
    { label: "Training", value: "Pre-trained on core tools" },
    { label: "Flexibility", value: "Scale up or down anytime" },
  ],
};

const services = [
  { icon: "📋", title: "Admin Support", description: "Document prep, filing, travel coordination" },
  { icon: "📧", title: "Email Management", description: "Inbox zero strategies, drafting, follow-ups" },
  { icon: "📅", title: "Scheduling", description: "Calendar management, meeting coordination, reminders" },
  { icon: "📊", title: "Data Entry", description: "CRM updates, spreadsheet management, database maintenance" },
  { icon: "🔍", title: "Research", description: "Market analysis, competitor tracking, lead sourcing" },
  { icon: "💬", title: "Customer Follow-up", description: "Check-in calls, feedback collection, ticket triage" },
];

const steps = [
  { title: "Scope Your Needs", description: "Tell us what tasks are eating your time. We design a support plan." },
  { title: "Meet Your VA", description: "We match you with a vetted assistant who knows your tools." },
  { title: "Scale as You Grow", description: "Add hours, add assistants, or adjust — no penalties, no friction." },
];

const testimonials = [
  {
    quote: "We needed support for a product launch but couldn't justify a hire. Runwell gave us exactly what we needed for exactly as long as we needed it.",
    name: "James T.",
    role: "COO, LaunchPad Ventures",
  },
  {
    quote: "I started with 10 hours a month. Now I have three VAs across two time zones. Scaling was seamless.",
    name: "Priya M.",
    role: "Operations Director, NexGen",
  },
];

const faqs = [
  { question: "How quickly can I get started?", answer: "Most clients are matched with a VA within 48 hours. Your assistant will be briefed on your tools and workflows before your first working session." },
  { question: "What tools do your VAs use?", answer: "Our VAs are trained on common productivity tools including Google Workspace, Microsoft 365, Slack, Notion, Asana, HubSpot, and many more. We can train on your specific stack." },
  { question: "Can I change my plan month-to-month?", answer: "Absolutely. Scale up, scale down, or pause — no long-term contracts, no penalties. Your plan adjusts to your needs." },
  { question: "What happens if my VA isn't a good fit?", answer: "We'll rematch you with a new VA at no extra cost. Our goal is a seamless working relationship, and we stand behind that." },
];

export default function VariantB() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#FAF8F6" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: FOREST }}
            >
              Grow Your Team Without Growing Your Payroll
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Runwell gives you trained virtual assistants on demand — flexible
              hours, no contracts, no HR headaches. Scale up or down as your
              business needs change.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="See Flexible Plans" bgColor={FOREST} />
              <CTAButton text="How It Works" variant="secondary" href="#how-it-works" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image
                src="/images/hero-v2.jpg"
                alt="Team of virtual assistants collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="The Hidden Cost of Your Next Full-Time Hire"
            subtitle="Compare the traditional hiring process with the Runwell approach."
            titleColor={FOREST}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="font-heading font-bold text-xl mb-6 text-gray-400">
                Traditional Hire
              </h3>
              <ul className="space-y-4">
                {comparisonData.traditional.map((item) => (
                  <li key={item.label} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Runwell */}
            <div
              className="rounded-2xl p-8 text-white"
              style={{ backgroundColor: FOREST }}
            >
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                Runwell VA <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Recommended</span>
              </h3>
              <ul className="space-y-4">
                {comparisonData.runwell.map((item) => (
                  <li key={item.label} className="flex justify-between text-sm">
                    <span className="text-white/70">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <CTAButton text="Start Flexible" bgColor={TEAL} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: "#E8F5F1" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="One Assistant. Five Roles Covered."
            subtitle="Your Runwell VA handles a wide range of tasks so you don't have to."
            titleColor={FOREST}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                accentColor={FOREST}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="From Overloaded to Optimized in 3 Steps"
            titleColor={FOREST}
          />
          <div className="flex flex-col md:flex-row gap-12">
            {steps.map((s, i) => (
              <ProcessStep
                key={s.title}
                step={i + 1}
                title={s.title}
                description={s.description}
                accentColor={FOREST}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton text="Get Your Custom Plan" bgColor={FOREST} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F6" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Trusted by Growing Teams" titleColor={FOREST} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                accentColor={FOREST}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            titleColor={FOREST}
          />
          <FAQAccordion items={faqs} accentColor={FOREST} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: FOREST }}>
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Flexible Support That Grows With You
          </h2>
          <p className="text-lg text-white/80 mb-8">
            No contracts. No minimums. Just reliable help when you need it.
          </p>
          <CTAButton text="Get Started Today" bgColor={TEAL} />
        </div>
      </section>
    </>
  );
}
