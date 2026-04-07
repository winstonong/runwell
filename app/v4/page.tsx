import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import ProcessStep from "@/components/shared/ProcessStep";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatsBar from "@/components/shared/StatsBar";
import PricingTable from "@/components/shared/PricingTable";
import FAQAccordion from "@/components/shared/FAQAccordion";
import UrgencyBanner from "@/components/shared/UrgencyBanner";
import ContactForm from "@/components/shared/ContactForm";

const BLUE = "#2563EB";
const ORANGE = "#F97316";

const stats = [
  { value: "1,200+", label: "VAs Matched" },
  { value: "48hrs", label: "Average Match Time" },
  { value: "$4–$8", label: "All-In Hourly Rate" },
  { value: "0", label: "Long-Term Contracts" },
];

const pricingTiers = [
  {
    name: "Part-Time VA",
    price: "$4",
    unit: "/hr",
    features: [
      "Up to 20 hours/month",
      "1 dedicated assistant",
      "Admin, data entry, email",
      "Async communication",
      "48-hour matching",
    ],
    ctaText: "Hire Part-Time",
  },
  {
    name: "Full-Time VA",
    price: "$6",
    unit: "/hr",
    highlighted: true,
    features: [
      "40 hours/month",
      "1–2 dedicated assistants",
      "All services included",
      "Real-time communication",
      "Priority matching",
      "Weekly check-ins",
    ],
    ctaText: "Hire Full-Time",
  },
  {
    name: "VA Team",
    price: "$8",
    unit: "/hr",
    features: [
      "80+ hours/month",
      "Dedicated team of 2–4",
      "Specialized roles",
      "Project management support",
      "Dedicated account manager",
      "Same-day backup coverage",
    ],
    ctaText: "Build My Team",
  },
];

const services = [
  { icon: "📋", title: "Admin & Operations", description: "Document prep, filing, travel booking, vendor coordination, expense tracking" },
  { icon: "📧", title: "Email & Inbox", description: "Triage, drafting, follow-ups, newsletter management, inbox zero" },
  { icon: "📅", title: "Calendar & Scheduling", description: "Meeting coordination, reminders, conflict resolution, timezone management" },
  { icon: "📊", title: "Data Entry & CRM", description: "CRM updates, spreadsheet work, database maintenance, report generation" },
  { icon: "🔍", title: "Research & Analysis", description: "Market research, competitor analysis, lead sourcing, industry reports" },
  { icon: "📱", title: "Social Media & Content", description: "Post scheduling, comment management, basic graphics, analytics tracking" },
];

const steps = [
  { title: "Tell Us Your Needs", description: "Fill out a quick form or book a 15-minute call. Tell us the tasks, tools, and hours you need." },
  { title: "Review Your Match", description: "Within 48 hours, we present your matched VA with relevant experience and skills. Don't like the fit? We rematch free." },
  { title: "Start Delegating Today", description: "Your VA is pre-trained on your tools and workflows. Hand off tasks from day one — no lengthy onboarding." },
];

const comparison = [
  { category: "Vetting", runwell: "3% acceptance rate", upwork: "Self-reported skills", fiverr: "Self-reported skills", local: "You do interviews" },
  { category: "Matching Time", runwell: "48 hours", upwork: "Days to weeks", fiverr: "You browse profiles", local: "4–8 weeks" },
  { category: "Cost", runwell: "$4–$8/hr all-in", upwork: "$8–25/hr + fees", fiverr: "$10–30/hr + fees", local: "$18–25/hr + benefits" },
  { category: "Training", runwell: "Pre-trained on your tools", upwork: "You train them", fiverr: "You train them", local: "2–4 weeks training" },
  { category: "Backup Coverage", runwell: "Same-day backup VA", upwork: "None", fiverr: "None", local: "None" },
  { category: "Quality Guarantee", runwell: "30-day guarantee", upwork: "Dispute process", fiverr: "Dispute process", local: "None" },
];

const testimonials = [
  {
    quote: "I posted a job on Upwork and spent a week screening applicants. With Runwell, I described what I needed and had a trained VA working the next day. Should have done this from the start.",
    name: "Mike Chen",
    role: "Founder, Steelpoint Digital",
    result: "Went from job posting to working VA in 24 hours",
  },
  {
    quote: "I was paying $22/hr for a local part-time assistant who called in sick every other week. My Runwell VA costs $6/hr, never misses a day, and honestly does better work.",
    name: "Tanya Brooks",
    role: "Owner, Brooks Accounting Group",
    result: "Saved $2,800/month switching from a local hire",
  },
  {
    quote: "We needed three VAs with different skill sets for a product launch. Runwell matched all three within 48 hours and they were coordinating with each other by day two.",
    name: "Alex Rivera",
    role: "Head of Ops, Clearpath SaaS",
    result: "3 specialized VAs matched and working within 48 hours",
  },
];

const faqs = [
  { question: "How is Runwell different from Upwork or Fiverr?", answer: "On freelance marketplaces, you post a job, screen dozens of applicants, and hope for the best. With Runwell, we pre-vet every VA (3% acceptance rate), train them on your tools before day one, and provide backup coverage if they're ever unavailable. You get a managed service, not a marketplace." },
  { question: "Can I try before I commit?", answer: "Yes. Start with as few as 10 hours and see the quality for yourself. If you're not satisfied within 30 days, we'll refund your last month. No risk." },
  { question: "What if I need to replace my VA?", answer: "We rematch you at no extra cost. Most replacements are completed within 48 hours, and your new VA is briefed on your workflows before starting." },
  { question: "Do I need to provide training?", answer: "No. We handle training. Before your VA starts, we brief them on your tools, communication preferences, and standard procedures. Most clients are surprised by how little onboarding is needed." },
  { question: "Can I hire for specialized roles?", answer: "Yes. Beyond general admin, we have VAs experienced in bookkeeping support, social media management, customer service, executive assistance, and more. Tell us what you need and we'll match accordingly." },
];

export default function VariantD() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: BLUE }}>
              Hire a Pre-Vetted Virtual Assistant — Starting at $4/hr
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Skip the job posts, interviews, and training. Runwell matches you with a trained VA in 48 hours. No contracts. Cancel anytime. <strong>Just reliable help from $4–$8/hr.</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="Hire a VA Now" bgColor={ORANGE} />
              <CTAButton text="See Pricing" variant="secondary" href="#pricing" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image src="/images/hero-v1.jpg" alt="Professional virtual assistant ready to work" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={stats} bgColor={BLUE} textColor="#ffffff" />

      {/* Pricing */}
      <section id="pricing">
        <PricingTable tiers={pricingTiers} accentColor={BLUE} heading="Transparent Pricing. No Hidden Fees." subtitle="Every plan includes pre-vetting, training, backup coverage, and our 30-day satisfaction guarantee." />
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="What Your VA Can Handle" subtitle="Trained across multiple disciplines so one person covers what used to take a team." titleColor={BLUE} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} accentColor={BLUE} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Hired in 3 Steps. Working by Tomorrow." titleColor={BLUE} />
          <div className="flex flex-col md:flex-row gap-12">
            {steps.map((s, i) => (
              <ProcessStep key={s.title} step={i + 1} title={s.title} description={s.description} accentColor={BLUE} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Runwell vs. The Alternatives" subtitle="See how a managed VA service compares to freelance marketplaces and local hires." titleColor={BLUE} />
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b-2" style={{ borderColor: BLUE }}>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium"></th>
                  <th className="text-left py-3 px-4 font-bold" style={{ color: BLUE }}>Runwell</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Upwork</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Fiverr</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Local Hire</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.category} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">{row.category}</td>
                    <td className="py-3 px-4 font-semibold" style={{ color: BLUE }}>{row.runwell}</td>
                    <td className="py-3 px-4 text-gray-500">{row.upwork}</td>
                    <td className="py-3 px-4 text-gray-500">{row.fiverr}</td>
                    <td className="py-3 px-4 text-gray-500">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Why People Switch to Runwell" titleColor={BLUE} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} result={t.result} accentColor={BLUE} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" titleColor={BLUE} />
          <FAQAccordion items={faqs} accentColor={BLUE} />
        </div>
      </section>

      {/* Urgency */}
      <UrgencyBanner text="12 VAs available for immediate placement this week — claim your spot" bgColor={ORANGE} />

      {/* Contact Form */}
      <ContactForm accentColor={BLUE} heading="Hire Your Virtual Assistant Today" subheading="Tell us what you need. We'll match you with a pre-vetted VA within 48 hours." buttonText="Get Matched Now" />
    </>
  );
}
