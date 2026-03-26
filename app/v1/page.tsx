import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import SplitSection from "@/components/shared/SplitSection";
import ProcessStep from "@/components/shared/ProcessStep";
import TestimonialCard from "@/components/shared/TestimonialCard";

const ACCENT = "#1E2A5E";
const AMBER = "#F5A623";

const painPoints = [
  {
    icon: "📬",
    title: "Inbox Overload",
    description:
      "You spend 2+ hours a day on emails that don't generate revenue.",
  },
  {
    icon: "📅",
    title: "Calendar Chaos",
    description: "Scheduling meetings eats into your deep work time.",
  },
  {
    icon: "📊",
    title: "Data Drudgery",
    description: "Manual data entry and research tasks pile up every week.",
  },
];

const services = [
  {
    title: "Admin Support",
    description:
      "From document formatting to travel booking, your VA handles the operational details that keep your business running smoothly.",
    placeholder: "Admin Support",
    image: "/images/admin.jpg",
  },
  {
    title: "Email Management",
    description:
      "Triage, draft responses, flag priorities. Your inbox becomes a tool again, not a time sink.",
    placeholder: "Email Management",
    image: "/images/email.jpg",
  },
  {
    title: "Scheduling & Calendar",
    description:
      "Your VA coordinates meetings across time zones, sends reminders, and protects your focus blocks.",
    placeholder: "Scheduling",
    image: "/images/scheduling.jpg",
  },
  {
    title: "Research & Data Entry",
    description:
      "Market research, CRM updates, spreadsheet management — done accurately, done fast.",
    placeholder: "Research & Data",
    image: "/images/research.jpg",
  },
];

const steps = [
  {
    title: "Tell Us What You Need",
    description:
      "Book a free call. We learn your workflows and priorities.",
  },
  {
    title: "We Match Your VA",
    description:
      "We pair you with a trained assistant who fits your style and industry.",
  },
  {
    title: "Start Delegating",
    description:
      "Your VA integrates into your tools and starts handling tasks from day one.",
  },
];

const testimonials = [
  {
    quote:
      "I went from 60-hour weeks to 40. My VA handles everything I used to do between meetings.",
    name: "Sarah K.",
    role: "Founder, Bloom Digital",
  },
  {
    quote:
      "I finally have mornings to think strategically instead of triaging my inbox.",
    name: "Marcus R.",
    role: "CEO, Skyline Consulting",
  },
];

export default function VariantA() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: ACCENT }}
            >
              Stop Doing $15/hr Work on a $500/hr Schedule
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Runwell virtual assistants handle your admin, email, scheduling,
              and data entry — starting at just $4–$8/hr — so you can focus on
              the work that actually moves the needle.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="Get Your Time Back" bgColor={AMBER} />
              <CTAButton text="See How It Works" variant="secondary" href="#how-it-works" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image
                src="/images/hero-v1.jpg"
                alt="Virtual assistant at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="You Didn't Start a Business to Manage Inboxes"
            subtitle="These time sinks are stealing hours from the work that actually grows your business."
            titleColor={ACCENT}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "#F0EDF6" }}
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2 text-gray-900">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services (alternating splits) */}
      <section style={{ backgroundColor: "#FAFAF7" }}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Hand Off the Busywork. Keep the Control."
              titleColor={ACCENT}
            />
          </div>
          {services.map((s, i) => (
            <SplitSection
              key={s.title}
              title={s.title}
              description={s.description}
              imageSrc={s.image}
              imagePlaceholder={s.placeholder}
              reversed={i % 2 === 1}
              accentColor={ACCENT}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Up and Running in 48 Hours"
            subtitle="Getting started with your virtual assistant is simple."
            titleColor={ACCENT}
          />
          <div className="flex flex-col md:flex-row gap-12">
            {steps.map((s, i) => (
              <ProcessStep
                key={s.title}
                step={i + 1}
                title={s.title}
                description={s.description}
                accentColor={ACCENT}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton text="Book Your Free Consultation" bgColor={AMBER} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#F0EDF6" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Founders Who Got Their Time Back"
            titleColor={ACCENT}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                accentColor={ACCENT}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: ACCENT }}
          >
            Your To-Do List Won&apos;t Shrink Itself
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Starting at $4–$8/hr, a Runwell VA can give you back 20+ hours
            a week. Book a free consultation today.
          </p>
          <CTAButton text="Reclaim Your Calendar" bgColor={AMBER} />
        </div>
      </section>
    </>
  );
}
