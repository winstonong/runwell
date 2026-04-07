import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import SplitSection from "@/components/shared/SplitSection";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatsBar from "@/components/shared/StatsBar";
import FAQAccordion from "@/components/shared/FAQAccordion";
import UrgencyBanner from "@/components/shared/UrgencyBanner";
import ContactForm from "@/components/shared/ContactForm";

const GREEN = "#16A34A";
const CORAL = "#E11D48";

const painPoints = [
  {
    icon: "🎩",
    title: "Wearing Too Many Hats",
    description: "You're the CEO, the admin, the bookkeeper, and the customer service rep. Something always falls through the cracks.",
  },
  {
    icon: "💸",
    title: "Missing Revenue Opportunities",
    description: "Every hour you spend on admin is an hour you're not spending on sales, marketing, or client work that actually generates revenue.",
  },
  {
    icon: "🔧",
    title: "Working IN Your Business, Not ON It",
    description: "You started a business to build something — not to answer emails and update spreadsheets. But here you are.",
  },
];

const useCases = [
  {
    title: "Bookkeeping & Invoicing",
    description: "Your VA handles invoice creation, receipt organization, expense categorization, payment follow-ups, and bank statement reconciliation. You stay on top of your finances without spending Saturday afternoons on QuickBooks.",
    image: "/images/admin.jpg",
  },
  {
    title: "Customer Service & Follow-Ups",
    description: "Email responses, review management, appointment confirmations, follow-up sequences, and complaint resolution. Your customers get fast, professional service — even when you're busy with a client.",
    image: "/images/email.jpg",
  },
  {
    title: "Social Media & Marketing",
    description: "Post scheduling, comment responses, DM management, basic Canva graphics, and monthly analytics reports. Stay visible and consistent without it becoming another full-time job.",
    image: "/images/scheduling.jpg",
  },
  {
    title: "General Admin & Operations",
    description: "Appointment scheduling, document preparation, data entry, CRM updates, vendor coordination, and travel booking. The tasks that keep your business running but don't need your expertise.",
    image: "/images/research.jpg",
  },
];

const stats = [
  { value: "500+", label: "Small Businesses Served" },
  { value: "22hrs", label: "Avg Weekly Time Saved" },
  { value: "3x", label: "Faster Than Hiring Locally" },
  { value: "30-day", label: "Satisfaction Guarantee" },
];

const testimonials = [
  {
    quote: "I run a dental practice with two locations. I was spending 15 hours a week on scheduling, insurance follow-ups, and patient communications. My VA Philippines VA took all of that off my plate for $480/month. I can actually focus on my patients now.",
    name: "Dr. Amanda Chen",
    role: "Owner, Brightside Dental Care",
    result: "Saved 15 hrs/week — $480/mo vs $3,200/mo for a local admin",
  },
  {
    quote: "As a solo realtor, I was drowning in paperwork and missing follow-ups with leads. My VA handles all my CRM updates, drip campaigns, and appointment scheduling. I closed 40% more deals last quarter just from better follow-up alone.",
    name: "Carlos Gutierrez",
    role: "Broker, Compass Real Estate",
    result: "40% more deals closed from better lead follow-up",
  },
  {
    quote: "I run an e-commerce store on Shopify. My VA handles customer service emails, product listing updates, inventory tracking, and social media. I went from working 70 hours a week to about 45 — and revenue went up because I could focus on product sourcing.",
    name: "Lisa Tran",
    role: "Founder, Lunar & Co.",
    result: "Revenue up 28% while cutting work hours from 70 to 45/week",
  },
];

const faqs = [
  { question: "I'm a small business — can I really afford a VA?", answer: "A VA Philippines VA costs $4–$8/hr. That's $320–$640/month for 20 hours/week. Compare that to a local part-time hire at $18–25/hr ($1,440–$2,000/month) plus benefits and management overhead. Most small business owners save 60–75% with VA Philippines." },
  { question: "Will they understand my industry?", answer: "We match VAs based on relevant experience. We have VAs who've supported dental practices, law firms, real estate agents, e-commerce stores, restaurants, and dozens of other industries. We'll match you with someone who already knows the basics of your field." },
  { question: "What about data security?", answer: "All VA Philippines VAs sign NDAs and data handling agreements. We follow industry-standard security practices and can work within your existing security tools and protocols." },
  { question: "Can I start with just a few hours?", answer: "Yes. No minimums. Many small business owners start with 10–20 hours a month to test the waters, then scale up as they see the impact. You only pay for the hours you use." },
  { question: "What if I don't know what to delegate?", answer: "That's completely normal. We do a free workflow audit during onboarding to identify the tasks taking up your time and the best candidates for delegation. Most business owners are surprised by how much they can hand off." },
];

export default function VariantE() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F0FDF4" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: GREEN }}>
              The Small Business Owner&apos;s Secret Weapon
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Stop wearing every hat. A trained virtual assistant handles your admin, emails, bookkeeping, and customer service for <strong>less than $8/hr</strong> — so you can focus on what you started your business to do.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton text="See What a VA Can Do" bgColor={GREEN} />
              <CTAButton text="View Pricing" variant="secondary" href="#roi" />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden relative">
              <Image src="/images/hero-v2.jpg" alt="Small business owner working with virtual assistant" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Sound Familiar?" subtitle="Every small business owner hits this wall. The question is whether you push through alone or get help." titleColor={GREEN} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div key={p.title} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#F0FDF4" }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ backgroundColor: "#FAFAF7" }}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="What Your VA Actually Does All Day" subtitle="Real tasks. Real results. Here's how VA Philippines VAs support small businesses like yours." titleColor={GREEN} />
          </div>
          {useCases.map((u, i) => (
            <SplitSection key={u.title} title={u.title} description={u.description} imageSrc={u.image} imagePlaceholder={u.title} reversed={i % 2 === 1} accentColor={GREEN} />
          ))}
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="The Math Speaks for Itself" subtitle="See what you're actually spending on tasks a $6/hr VA could handle." titleColor={GREEN} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
              <h3 className="font-heading font-bold text-xl mb-4 text-red-800">Without a VA</h3>
              <ul className="space-y-3 text-sm text-red-700">
                <li className="flex justify-between"><span>Your time on admin (15 hrs/wk @ $75/hr)</span><span className="font-bold">$1,125/wk</span></li>
                <li className="flex justify-between"><span>Missed revenue from lost focus</span><span className="font-bold">Incalculable</span></li>
                <li className="flex justify-between"><span>Burnout, stress, no time off</span><span className="font-bold">Priceless</span></li>
                <li className="flex justify-between border-t border-red-200 pt-3"><span className="font-bold">Monthly cost of doing it yourself</span><span className="font-bold">$4,500+</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 p-8" style={{ borderColor: GREEN, backgroundColor: "#F0FDF4" }}>
              <h3 className="font-heading font-bold text-xl mb-4" style={{ color: GREEN }}>With a VA Philippines VA</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#166534" }}>
                <li className="flex justify-between"><span>VA handles 15 hrs/wk of admin</span><span className="font-bold">$360/mo</span></li>
                <li className="flex justify-between"><span>You reinvest 15 hrs/wk in revenue work</span><span className="font-bold">+$4,500/mo</span></li>
                <li className="flex justify-between"><span>Less stress, better work-life balance</span><span className="font-bold">Priceless</span></li>
                <li className="flex justify-between border-t pt-3" style={{ borderColor: `${GREEN}30` }}><span className="font-bold">Monthly cost with VA Philippines</span><span className="font-bold">$360–$640</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={stats} bgColor={GREEN} textColor="#ffffff" />

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Small Business Owners Who Took the Leap" titleColor={GREEN} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} result={t.result} accentColor={GREEN} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F0FDF4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" titleColor={GREEN} />
          <FAQAccordion items={faqs} accentColor={GREEN} />
        </div>
      </section>

      {/* Urgency */}
      <UrgencyBanner text="Book this week and get your first week of onboarding free ($200 value)" bgColor={GREEN} />

      {/* Contact Form */}
      <ContactForm accentColor={GREEN} heading="Let Us Take Work Off Your Plate" subheading="Tell us about your business and the tasks eating your time. We'll show you exactly how a VA can help." buttonText="Get My Free Consultation" />
    </>
  );
}
