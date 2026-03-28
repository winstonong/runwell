import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatsBar from "@/components/shared/StatsBar";

const NAVY = "#0B1D51";
const GOLD = "#C9A84C";

const painPoints = [
  {
    icon: "⏰",
    title: "Missed Deadlines",
    description:
      "Freelancers disappear. Agencies rotate your staff. You end up doing the work yourself.",
  },
  {
    icon: "❌",
    title: "Sloppy Work",
    description:
      "Typos in client emails. Wrong data in spreadsheets. Mistakes that cost you credibility.",
  },
  {
    icon: "🤷",
    title: "Zero Accountability",
    description:
      "No process. No QA. No one to call when things go wrong.",
  },
];

const pillars = [
  {
    icon: "🔍",
    title: "Rigorous Vetting",
    description:
      "Less than 3% of applicants make it through our screening process. We test for accuracy, communication, and problem-solving.",
  },
  {
    icon: "🎓",
    title: "Custom Training",
    description:
      "Every VA is trained on your specific tools, workflows, and brand voice before day one.",
  },
  {
    icon: "✅",
    title: "Dedicated QA",
    description:
      "Weekly quality reviews. Error tracking. Continuous improvement built into every engagement.",
  },
  {
    icon: "🔄",
    title: "Your Backup Plan",
    description:
      "If your VA is unavailable, a trained backup steps in immediately. No gaps, no excuses.",
  },
];

const services = [
  { name: "Admin Support", metric: "99.5% accuracy" },
  { name: "Email Management", metric: "< 2hr response" },
  { name: "Calendar & Scheduling", metric: "Zero conflicts" },
  { name: "Data Entry & CRM", metric: "99.8% accuracy" },
  { name: "Research & Analysis", metric: "On-time delivery" },
];

const stats = [
  { value: "98.7%", label: "Task Accuracy" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "<2hr", label: "Avg Response Time" },
  { value: "97%", label: "Retention Rate" },
];

export default function VariantC() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: NAVY }}
            >
              Vetted Virtual Assistants From $4–$8/hr You Can Actually Rely On
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Every Runwell VA is rigorously screened, trained to your standards,
              and backed by our quality guarantee — all for just $4–$8 per hour.
              No more chasing freelancers or fixing mistakes.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="Meet Our Standard" bgColor={NAVY} />
              <CTAButton text="See Our Process" variant="secondary" href="#quality" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image
                src="/images/hero-v3.jpg"
                alt="Professional virtual assistant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white z-10"
                style={{ backgroundColor: GOLD }}
              >
                Quality Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="$4–$8/hr Shouldn't Mean Cutting Corners"
            subtitle="Most cheap VAs deliver cheap work. Runwell is different. Here's what bad outsourcing looks like — and why we built the opposite."
            titleColor={NAVY}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
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

      {/* Quality Pillars */}
      <section id="quality" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="How We Guarantee Quality"
            subtitle="Four pillars that separate Runwell from every other VA service."
            titleColor={NAVY}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 border-2 hover:shadow-md transition-shadow"
                style={{ borderColor: `${NAVY}15` }}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: NAVY }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with accuracy badges */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Precision Support Across Every Task"
            titleColor={NAVY}
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {services.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100"
              >
                <span className="font-medium text-gray-900">{s.name}</span>
                <span
                  className="text-sm font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${GOLD}20`, color: GOLD }}
                >
                  {s.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <StatsBar stats={stats} bgColor={NAVY} textColor="#ffffff" />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Why Teams Trust Runwell" titleColor={NAVY} />
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              quote="After two bad experiences with freelance VAs, I was skeptical. My Runwell VA has been flawless for 14 months. Not a single missed task."
              name="David L."
              role="Managing Director, Apex Partners"
              accentColor={NAVY}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: NAVY }}
          >
            $4–$8/hr Virtual Assistants. Quality You Can Count On.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a call to see how Runwell&apos;s vetted assistants deliver
            work you never have to double-check — at a fraction of the cost.
          </p>
          <CTAButton text="Book a Quality Consultation" bgColor={GOLD} />
        </div>
      </section>
    </>
  );
}
