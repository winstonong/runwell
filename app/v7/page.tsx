import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ContactForm from "@/components/shared/ContactForm";
import HubSpotEmbed from "@/components/shared/HubSpotEmbed";

const PRIMARY = "#0066CC";
const DARK = "#1a1a2e";

const mediaLogos = [
  "Forbes", "Fast Company", "Business Insider", "Inc.", "Entrepreneur", "TechCrunch",
];

const features = [
  { icon: "💰", title: "70% Cost Savings", description: "Trained professionals from $4–$8/hr. No benefits, no overhead, no office space required." },
  { icon: "⚡", title: "Hire in Under 7 Days", description: "Stop waiting months. We match you with a vetted VA in days, not weeks." },
  { icon: "🔒", title: "No Lock-In Contracts", description: "Month-to-month flexibility. Scale up, scale down, or cancel anytime. Zero penalties." },
  { icon: "🎯", title: "Pre-Vetted Talent", description: "Less than 3% of applicants pass our screening. You get the top of the talent pool." },
  { icon: "🌏", title: "Global Talent Pool", description: "Access skilled professionals across multiple time zones. Coverage when you need it." },
  { icon: "🛡️", title: "Satisfaction Guarantee", description: "Not happy with your VA? We rematch you at no cost within 30 days. No questions asked." },
];

const services = [
  "Administrative Support & Operations",
  "Email & Inbox Management",
  "Calendar & Scheduling Coordination",
  "Data Entry & CRM Management",
  "Research & Lead Generation",
  "Customer Service & Support",
  "Social Media Management",
  "Bookkeeping & Invoice Processing",
  "Travel Coordination & Booking",
  "Project Management Support",
];

const stats = [
  { value: "1,200+", label: "Businesses Served" },
  { value: "$4–$8", label: "Per Hour, All-In" },
  { value: "<7 Days", label: "Average Hiring Time" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const reviewPlatforms = [
  { name: "Google", rating: "4.9", reviews: "850+" },
  { name: "Trustpilot", rating: "4.8", reviews: "620+" },
  { name: "Clutch", rating: "4.9", reviews: "340+" },
];

const faqs = [
  { question: "How much does a virtual assistant cost?", answer: "Virtual Assistants Philippines VAs range from $4–$8 per hour depending on the role complexity and hours required. This is an all-in rate — no hidden fees, no benefits overhead, no recruiting costs. Most clients save 60–70% compared to hiring locally." },
  { question: "How fast can I hire a virtual assistant?", answer: "Most clients are matched with a vetted VA within 3–7 days. Your assistant is pre-trained on your tools and workflows before their first day, so there's no lengthy onboarding period." },
  { question: "What tasks can a virtual assistant handle?", answer: "Our VAs handle admin support, email management, calendar scheduling, data entry, CRM management, research, customer service, social media, bookkeeping, travel coordination, and project management support. If it can be done remotely, our VAs can likely handle it." },
  { question: "Is there a minimum commitment?", answer: "No long-term contracts. We recommend starting with at least 20 hours per month to see meaningful impact, but there are no minimums and no penalties for changing or canceling your plan." },
  { question: "What if my virtual assistant isn't a good fit?", answer: "We offer a 30-day satisfaction guarantee. If your VA isn't the right match, we'll rematch you at no additional cost. Most replacements are completed within 48 hours." },
  { question: "How do you vet your virtual assistants?", answer: "Our screening process has a 3% acceptance rate. We test for English proficiency, task accuracy, problem-solving ability, communication skills, and professional reliability. Every VA also completes a paid trial period before being matched with clients." },
  { question: "Can I hire for specialized roles?", answer: "Yes. Beyond general admin, we have VAs experienced in bookkeeping, social media management, customer service, executive assistance, graphic design support, and more. Tell us what you need during your consultation." },
];

export default function VariantG() {
  return (
    <>
      {/* Hero — Headline on top, form + image side by side */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-12">
          {/* Headline block — full width */}
          <div className="max-w-3xl mb-10">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: DARK }}>
              Hire top remote talent — fast
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Full-time remote staff from <strong className="text-gray-900">$4/hr</strong>. Hire in days, not months. Cancel anytime.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-4">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                4.9 Stars from 1,800+ Reviews
              </span>
            </div>
          </div>

          {/* Form + Image — side by side */}
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="md:w-[45%]">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col justify-center">
                <HubSpotEmbed containerId="hubspot-hero-form" />
                <p className="text-xs text-gray-400 mt-4 text-center">Free consultation · No commitment · Response within 24hrs</p>
              </div>
            </div>
            <div className="md:w-[55%]">
              <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden relative shadow-2xl">
                <Image src="/images/hero-v3.jpg" alt="Professional virtual assistant" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 55vw" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="border-y border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-6">As featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {mediaLogos.map((name) => (
              <span key={name} className="text-gray-300 font-heading font-bold text-lg md:text-xl tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Feature Cards — Icon-based, clean grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3" style={{ color: DARK }}>
              Why 1,200+ businesses choose Virtual Assistants Philippines
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We handle the recruiting, vetting, and training so you can start delegating in days — not months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {reviewPlatforms.map((p) => (
              <div key={p.name} className="text-center">
                <p className="font-heading font-bold text-lg text-gray-900">{p.name}</p>
                <div className="flex items-center justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{p.rating}/5 · {p.reviews} reviews</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stop Interviewing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="w-full aspect-[4/3] max-w-lg rounded-3xl overflow-hidden relative">
                <Image src="/images/hero-v2.jpg" alt="Team of professionals collaborating" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight" style={{ color: DARK }}>
                Stop interviewing. Start delegating.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Traditional hiring takes 4–8 weeks, costs thousands in recruiter fees, and still might not work out. With Virtual Assistants Philippines, you describe what you need, we match you with a pre-vetted professional, and you&apos;re delegating within days.
              </p>
              <div className="space-y-4">
                {[
                  { title: "You tell us what you need", desc: "A 15-minute call to understand your workflows, tools, and priorities." },
                  { title: "We find your perfect match", desc: "Within 3–7 days, we present a vetted VA trained on your specific requirements." },
                  { title: "You start delegating immediately", desc: "Your VA is ready from day one. No training manuals, no ramp-up period." },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: PRIMARY }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{step.title}</p>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-block px-8 py-3.5 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: PRIMARY }}>
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List — Clean two-column */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="What your virtual assistant can do" subtitle="Our VAs are trained across multiple disciplines. One person covers what used to take a whole team." titleColor={DARK} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {services.map((s) => (
              <div key={s} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800 font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#contact" className="inline-block px-8 py-3.5 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: PRIMARY }}>
              Tell Us What You Need
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Frequently asked questions" titleColor={DARK} />
          <FAQAccordion items={faqs} accentColor={PRIMARY} />
        </div>
      </section>

      {/* Final CTA — Bold, dark background */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to hire your virtual assistant?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Full-time remote staff from $4/hr. Hire in days. No contracts. No risk.
          </p>
          <a href="#contact" className="inline-block px-10 py-4 text-white font-semibold rounded-lg text-base transition-opacity hover:opacity-90" style={{ backgroundColor: PRIMARY }}>
            Get Started Today
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm accentColor={PRIMARY} heading="Let's find your perfect VA" subheading="Tell us what you need. We'll match you with a pre-vetted virtual assistant within 7 days." buttonText="Book My Free Consultation" />
    </>
  );
}
