import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import SplitSection from "@/components/shared/SplitSection";
import ProcessStep from "@/components/shared/ProcessStep";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatsBar from "@/components/shared/StatsBar";
import FAQAccordion from "@/components/shared/FAQAccordion";
import UrgencyBanner from "@/components/shared/UrgencyBanner";
import ContactForm from "@/components/shared/ContactForm";

const ACCENT = "#1E2A5E";
const AMBER = "#F5A623";

const painPoints = [
  {
    icon: "📬",
    title: "Inbox Overload",
    description: "You spend 2+ hours a day on emails that don't generate revenue. That's 500+ hours a year lost.",
  },
  {
    icon: "📅",
    title: "Calendar Chaos",
    description: "Scheduling, rescheduling, time zone math — it all eats into the deep work that actually grows your business.",
  },
  {
    icon: "📊",
    title: "Data Drudgery",
    description: "CRM updates, spreadsheet cleanup, research tasks — they pile up every week and you're the one stuck doing them.",
  },
];

const services = [
  {
    title: "Admin Support",
    description: "Document formatting, travel booking, expense tracking, vendor coordination. Your VA handles the operational details so your business runs without you being the bottleneck.",
    image: "/images/admin.jpg",
  },
  {
    title: "Email Management",
    description: "Inbox triage, draft responses, follow-up scheduling, newsletter management. Your inbox becomes a tool again — not a 3-hour daily time sink.",
    image: "/images/email.jpg",
  },
  {
    title: "Scheduling & Calendar",
    description: "Cross-timezone coordination, meeting prep, agenda creation, conflict resolution. Your VA protects your focus time and makes sure nothing falls through the cracks.",
    image: "/images/scheduling.jpg",
  },
  {
    title: "Research & Data Entry",
    description: "Market research, competitor analysis, CRM updates, lead sourcing, spreadsheet management. Accurate, fast, and done by someone who actually enjoys it.",
    image: "/images/research.jpg",
  },
];

const steps = [
  { title: "Tell Us What You Need", description: "Book a free 15-minute call. We learn your workflows, tools, and priorities." },
  { title: "We Match Your VA", description: "Within 48 hours, we pair you with a trained assistant who fits your industry and working style." },
  { title: "Start Delegating", description: "Your VA integrates into your existing tools and starts handling tasks from day one. No training period." },
];

const testimonials = [
  {
    quote: "I went from 60-hour weeks to 42. My Runwell VA handles my entire inbox, schedules all my meetings, and preps me for every call. It's like having a chief of staff for $6/hr.",
    name: "Sarah Kessler",
    role: "Founder & CEO, Bloom Digital Agency",
    result: "Cut weekly hours from 60 to 42 in the first month",
  },
  {
    quote: "I used to spend my mornings triaging emails and booking meetings. Now my VA handles all of that before I even sit down. I finally have time to think strategically.",
    name: "Marcus Reeves",
    role: "CEO, Skyline Consulting Group",
    result: "Reclaimed 3 hours every morning for strategic work",
  },
  {
    quote: "My VA paid for herself in the first week. She handles my calendar, inbox, and all my travel booking while I focus on closing deals. Best business decision I've made this year.",
    name: "Jennifer Okafor",
    role: "Founder, NovaBrand Studios",
    result: "Saved $4,200/mo vs. a local executive assistant",
  },
];

const stats = [
  { value: "500+", label: "Founders Served" },
  { value: "20hrs", label: "Avg Weekly Time Saved" },
  { value: "48hr", label: "Onboarding Time" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const faqs = [
  { question: "How quickly can I get started?", answer: "Most founders are matched with a VA within 48 hours. Your assistant comes pre-briefed on your tools and workflows, so there's no lengthy training period." },
  { question: "What if my VA isn't a good fit?", answer: "We'll rematch you with a new VA at no extra cost. Our 30-day satisfaction guarantee means you're never stuck with the wrong person." },
  { question: "What tools do your VAs work with?", answer: "Our VAs are trained on Google Workspace, Microsoft 365, Slack, Notion, Asana, HubSpot, Salesforce, and dozens more. If you use it, we can support it." },
  { question: "Do I need to commit to a certain number of hours?", answer: "No minimums. Start with 10 hours a month or 40 hours a week — whatever fits your needs. Scale up or down anytime with no penalties." },
  { question: "How is this different from hiring on Upwork or Fiverr?", answer: "Every Runwell VA is pre-vetted (less than 3% acceptance rate), trained on your workflows before day one, and backed by our quality guarantee. No job posts, no screening resumes, no trial-and-error." },
];

export default function VariantA() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: ACCENT }}>
              Stop Doing $15/hr Tasks on Your $500/hr Time
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Runwell matches you with a trained virtual assistant in 48 hours — from just <strong>$4–$8/hr</strong>. They handle your admin, email, scheduling, and research so you can focus on the work that actually moves the needle.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="Get Your Time Back" bgColor={AMBER} />
              <CTAButton text="See How It Works" variant="secondary" href="#how-it-works" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image src="/images/hero-v1.jpg" alt="Virtual assistant at work" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={stats} bgColor={ACCENT} textColor="#ffffff" />

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="You Didn't Start a Business to Manage Inboxes" subtitle="These time sinks are costing you thousands every month in lost productivity." titleColor={ACCENT} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div key={p.title} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#F0EDF6" }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#FAFAF7" }}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Hand Off the Busywork. Keep the Control." subtitle="Your VA works inside your existing tools — Slack, Gmail, Notion, HubSpot, whatever you use." titleColor={ACCENT} />
          </div>
          {services.map((s, i) => (
            <SplitSection key={s.title} title={s.title} description={s.description} imageSrc={s.image} imagePlaceholder={s.title} reversed={i % 2 === 1} accentColor={ACCENT} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Up and Running in 48 Hours" subtitle="No lengthy hiring process. No training manuals. Just results." titleColor={ACCENT} />
          <div className="flex flex-col md:flex-row gap-12">
            {steps.map((s, i) => (
              <ProcessStep key={s.title} step={i + 1} title={s.title} description={s.description} accentColor={ACCENT} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#F0EDF6" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Founders Who Got Their Time Back" titleColor={ACCENT} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} result={t.result} accentColor={ACCENT} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" titleColor={ACCENT} />
          <FAQAccordion items={faqs} accentColor={ACCENT} />
        </div>
      </section>

      {/* Urgency */}
      <UrgencyBanner text="Only 7 onboarding spots left for April — book your free consultation today" bgColor={AMBER} />

      {/* Contact Form */}
      <ContactForm accentColor={ACCENT} heading="Get Your Time Back" subheading="Book a free consultation. We'll match you with a trained VA in 48 hours." buttonText="Request My Free Consultation" />
    </>
  );
}
