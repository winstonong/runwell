import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatsBar from "@/components/shared/StatsBar";
import FAQAccordion from "@/components/shared/FAQAccordion";
import UrgencyBanner from "@/components/shared/UrgencyBanner";
import ContactForm from "@/components/shared/ContactForm";

const NAVY = "#0B1D51";
const GOLD = "#C9A84C";

const painPoints = [
  {
    icon: "⏰",
    title: "Missed Deadlines",
    description: "Freelancers disappear mid-project. Agencies rotate your staff without telling you. You end up doing the work yourself.",
  },
  {
    icon: "❌",
    title: "Sloppy Work",
    description: "Typos in client emails. Wrong data in spreadsheets. Mistakes that cost you credibility and clients.",
  },
  {
    icon: "🤷",
    title: "Zero Accountability",
    description: "No QA process. No error tracking. No one to call when things go wrong. Just excuses.",
  },
];

const pillars = [
  {
    icon: "🔍",
    title: "Rigorous Vetting",
    description: "Less than 3% of applicants make it through our screening. We test for accuracy, communication, problem-solving, and reliability under pressure.",
  },
  {
    icon: "🎓",
    title: "Custom Training",
    description: "Every VA is trained on your specific tools, workflows, and brand voice before they handle a single task. No generic onboarding.",
  },
  {
    icon: "✅",
    title: "Dedicated QA",
    description: "Weekly quality reviews. Error tracking. Performance metrics. Continuous improvement built into every engagement.",
  },
  {
    icon: "🔄",
    title: "Backup Coverage",
    description: "If your VA is unavailable, a trained backup steps in the same day. No gaps, no excuses, no dropped balls.",
  },
];

const services = [
  { name: "Admin Support", metric: "99.5% accuracy" },
  { name: "Email Management", metric: "< 2hr response time" },
  { name: "Calendar & Scheduling", metric: "Zero conflicts" },
  { name: "Data Entry & CRM", metric: "99.8% accuracy" },
  { name: "Research & Analysis", metric: "On-time delivery" },
];

const stats = [
  { value: "98.7%", label: "Task Accuracy" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "<2hr", label: "Avg Response Time" },
  { value: "97%", label: "Client Retention Rate" },
];

const testimonials = [
  {
    quote: "After two bad experiences with freelance VAs, I was skeptical. My Runwell VA has been flawless for 14 months. Not a single missed task, not a single error in client-facing work. The quality difference is night and day.",
    name: "David Liu",
    role: "Managing Director, Apex Partners",
    result: "14 months, zero missed tasks, zero errors",
  },
  {
    quote: "We tried three different VA services before Runwell. Two had accuracy problems, one ghosted us mid-project. Runwell's vetting process actually works — our VA is more reliable than some of our full-time staff.",
    name: "Rachel Whitfield",
    role: "VP Operations, Trident Legal",
    result: "99.7% task accuracy over 8 months",
  },
];

const faqs = [
  { question: "How do you vet your virtual assistants?", answer: "Our screening process has a 3% acceptance rate. We test for English proficiency, task accuracy, problem-solving, communication skills, and reliability. Every VA also completes a paid trial period before being matched with clients." },
  { question: "What happens if quality drops?", answer: "Every engagement includes weekly quality reviews and error tracking. If performance dips below our standards, we address it immediately. If it can't be resolved, we rematch you at no cost." },
  { question: "Can I see quality metrics for my VA?", answer: "Yes. Every client receives monthly performance reports including task completion rates, accuracy scores, and response times." },
  { question: "What if my VA is sick or on leave?", answer: "Every primary VA has a trained backup who is briefed on your workflows. Coverage kicks in the same day — you'll barely notice the switch." },
  { question: "How does pricing work for quality-focused VAs?", answer: "Our VAs range from $4–$8/hr depending on specialization and hours. The quality guarantee, QA process, and backup coverage are included at every tier — no premium add-ons." },
];

export default function VariantC() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: NAVY }}>
              Virtual Assistants You Never Have to Double-Check
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Every Runwell VA is rigorously vetted, trained to your standards, and backed by our quality guarantee — all from just <strong>$4–$8/hr</strong>. No more chasing freelancers or fixing their mistakes.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="See Our Quality Standard" bgColor={NAVY} href="#quality" />
              <CTAButton text="Get a Free Consultation" variant="secondary" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image src="/images/hero-v3.jpg" alt="Professional virtual assistant" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" priority />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white z-10" style={{ backgroundColor: GOLD }}>
                Quality Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={stats} bgColor={NAVY} textColor="#ffffff" />

      {/* Pain Points */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="If You've Been Burned by Bad Outsourcing, You're Not Alone" subtitle="These are the three most common complaints we hear from clients who switched to Runwell." titleColor={NAVY} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section id="quality" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="How We Guarantee Quality at $4–$8/hr" subtitle="Four pillars that separate Runwell from every other VA service." titleColor={NAVY} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl p-6 border-2 hover:shadow-md transition-shadow" style={{ borderColor: `${NAVY}15` }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: NAVY }}>{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with metrics */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Precision Support Across Every Task" subtitle="Real metrics from real client engagements." titleColor={NAVY} />
          <div className="max-w-2xl mx-auto space-y-4">
            {services.map((s) => (
              <div key={s.name} className="flex items-center justify-between bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
                <span className="font-medium text-gray-900">{s.name}</span>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${GOLD}20`, color: GOLD }}>{s.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Why Teams Trust Runwell" titleColor={NAVY} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} result={t.result} accentColor={NAVY} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" titleColor={NAVY} />
          <FAQAccordion items={faqs} accentColor={NAVY} />
        </div>
      </section>

      {/* Urgency */}
      <UrgencyBanner text="Our VAs maintain a 98.7% accuracy rate — experience the difference with a free consultation" bgColor={GOLD} textColor="#0B1D51" />

      {/* Contact Form */}
      <ContactForm accentColor={NAVY} heading="Experience the Runwell Quality Standard" subheading="Book a free consultation and see why teams switch to Runwell after trying other VA services." buttonText="Book My Free Consultation" />
    </>
  );
}
