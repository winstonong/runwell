import Image from "next/image";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ContactForm from "@/components/shared/ContactForm";
import HubSpotEmbed from "@/components/shared/HubSpotEmbed";

const PRIMARY = "#0052CC";
const DARK = "#0B1437";

/* ─── Data ─── */

const stats = [
  { value: "3,000+", label: "Businesses Served" },
  { value: "$4–$8/hr", label: "All-In, No Hidden Fees" },
  { value: "<7 Days", label: "To Your First Hire" },
  { value: "97%", label: "Client Retention Rate" },
];

const steps = [
  { num: "01", title: "Tell us what you need", desc: "A quick 15-minute call. We learn your workflows, tools, and priorities — then do the hard work of finding your match." },
  { num: "02", title: "Meet your pre-vetted VA", desc: "Within 3–7 days we present a shortlist of candidates who've already passed our 12-step screening process." },
  { num: "03", title: "Start delegating immediately", desc: "Your VA arrives trained on your tools and ready to work. No onboarding headaches. Full support from day one." },
];

const comparison = [
  { task: "Cost per hour", us: "$4–$8", local: "$25–$45", freelancer: "$15–$30" },
  { task: "Time to hire", us: "3–7 days", local: "4–8 weeks", freelancer: "1–3 weeks" },
  { task: "Pre-vetted & trained", us: true, local: false, freelancer: false },
  { task: "Account manager", us: true, local: false, freelancer: false },
  { task: "Free replacement", us: true, local: false, freelancer: false },
  { task: "No contracts", us: true, local: false, freelancer: "Varies" },
  { task: "Backup VA", us: true, local: false, freelancer: false },
];

const services = [
  { title: "Admin & Operations", items: ["Email & inbox management", "Calendar & scheduling", "Data entry & CRM updates", "Document preparation"] },
  { title: "Finance & Bookkeeping", items: ["Invoice processing", "Expense tracking", "Bank reconciliation", "Financial reporting"] },
  { title: "Sales & Marketing", items: ["Lead generation & research", "Social media management", "Content scheduling", "CRM pipeline management"] },
  { title: "Customer Support", items: ["Email & chat support", "Order processing", "Returns & refunds", "FAQ & knowledge base"] },
];

const guarantees = [
  { icon: "shield", title: "30-Day Satisfaction Guarantee", desc: "Not the right fit? We'll rematch you at zero cost — no questions asked." },
  { icon: "refresh", title: "Free Replacement, Forever", desc: "If your VA leaves or underperforms, we replace them within 48 hours. Always free." },
  { icon: "lock", title: "No Lock-In Contracts", desc: "Month-to-month. Scale up, scale down, or cancel anytime. Zero penalties, zero guilt." },
];

const faqs = [
  { question: "How much does a virtual assistant cost?", answer: "Our VAs range from $4–$8 per hour depending on role complexity. This is an all-in rate — no hidden fees, no benefits overhead, no recruiting costs. Most clients save 60–70% compared to local hires." },
  { question: "How fast can I get started?", answer: "Most clients are matched within 3–7 days. Your VA is pre-trained on your tools and workflows before day one, so there's no lengthy onboarding period." },
  { question: "What if my VA isn't a good fit?", answer: "We offer a 30-day satisfaction guarantee. If your VA isn't the right match, we rematch you at no cost. Most replacements happen within 48 hours." },
  { question: "What tasks can a VA handle?", answer: "Admin support, email management, calendar scheduling, data entry, CRM management, research, lead generation, customer service, social media, bookkeeping, travel coordination, and project management — if it can be done remotely, our VAs can handle it." },
  { question: "Is there a minimum commitment?", answer: "No. We recommend at least 20 hours per month to see real impact, but there are no minimums and no penalties for adjusting or canceling." },
  { question: "How do you vet your VAs?", answer: "Our 12-step screening process has a 3% acceptance rate. We test English proficiency, task accuracy, problem-solving, communication, and reliability. Every VA completes a paid trial before being matched." },
  { question: "Can I hire for specialized roles?", answer: "Yes — beyond general admin, we place VAs experienced in bookkeeping, social media, customer service, executive assistance, graphic design, and more." },
];

/* ─── Icons (all with explicit width/height) ─── */
const Star = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

const CheckIcon = () => (
  <svg width={20} height={20} style={{ flexShrink: 0 }} fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg width={20} height={20} style={{ flexShrink: 0 }} fill="none" stroke="#F87171" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

const ShieldIcon = () => (
  <svg width={32} height={32} style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RefreshIcon = () => (
  <svg width={32} height={32} style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const LockIcon = () => (
  <svg width={32} height={32} style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const guaranteeIcons: Record<string, () => React.ReactElement> = { shield: ShieldIcon, refresh: RefreshIcon, lock: LockIcon };

/* ─── Page ─── */

export default function VariantG() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200">
                <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#34D399", display: "inline-block" }} />
                Hiring now — limited spots this month
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] text-white">
                Full-time remote staff<br className="hidden md:block" /> from <span style={{ color: "#60A5FA" }}>$4/hr</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Pre-vetted virtual assistants matched to your business in under 7 days. No contracts. Cancel anytime.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-1 text-sm text-blue-200/70">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} color="#FACC15" />)}
                  <span className="ml-1">4.9/5 from 1,800+ reviews</span>
                </div>
                <span className="hidden md:inline text-blue-200/30">|</span>
                <span className="text-sm text-blue-200/70">3,000+ businesses served</span>
              </div>
            </div>

            <div className="w-full lg:w-[440px] flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  FREE CONSULTATION
                </div>
                <p className="text-center text-gray-900 font-heading font-bold text-lg mb-1 mt-2">Get started in minutes</p>
                <p className="text-center text-gray-500 text-sm mb-5">Book a free call — we&apos;ll match you within 7 days</p>
                <HubSpotEmbed containerId="hubspot-hero-form" />
                <p className="text-xs text-gray-400 mt-4 text-center">No commitment required · Response within 24hrs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL PROOF BAR ════════ */}
      <section className="border-b border-gray-100 bg-white py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["Google", "Trustpilot", "Clutch"].map((name) => (
              <div key={name} className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} color="#FACC15" />)}
                </div>
                <span className="text-sm font-medium text-gray-700">{name}</span>
              </div>
            ))}
            <span className="text-xs text-gray-400 hidden md:inline">Rated #1 for outsourced staffing</span>
          </div>
        </div>
      </section>

      {/* ════════ STATS STRIP ════════ */}
      <section className="py-12 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-4xl font-bold" style={{ color: PRIMARY }}>{s.value}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ IMAGE ROW ════════ */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/hero-v1.jpg", alt: "Virtual assistant working remotely" },
              { src: "/images/admin.jpg", alt: "Administrative support" },
              { src: "/images/email.jpg", alt: "Email and communication management" },
              { src: "/images/hero-v2.jpg", alt: "Professional team collaboration" },
            ].map((img) => (
              <div key={img.src} className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold" style={{ color: DARK }}>
              Hiring a VA shouldn&apos;t be hard
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-3 max-w-xl mx-auto">Three steps. One week. That&apos;s it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.num} className="text-center space-y-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-base md:text-lg" style={{ backgroundColor: PRIMARY }}>
                  {s.num}
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-lg text-sm" style={{ backgroundColor: PRIMARY }}>
              Book Your Free Call
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ════════ COMPARISON TABLE ════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-2xl md:text-4xl font-bold" style={{ color: DARK }}>
              The smarter way to hire
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-3">See how we compare to your other options.</p>
          </div>

          {/* Desktop table */}
          <div className="v7-desktop-only bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-4 text-center text-sm font-semibold border-b border-gray-100">
              <div className="p-4 text-left text-gray-500" />
              <div className="p-4 text-white" style={{ backgroundColor: PRIMARY }}>Us</div>
              <div className="p-4 text-gray-600 bg-gray-50">Local Hire</div>
              <div className="p-4 text-gray-600 bg-gray-50">Freelancer</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.task} className={`grid grid-cols-4 text-center text-sm ${i < comparison.length - 1 ? "border-b border-gray-50" : ""}`}>
                <div className="p-4 text-left text-gray-700 font-medium">{row.task}</div>
                <div className="p-4 font-semibold" style={{ backgroundColor: `${PRIMARY}08` }}>
                  {typeof row.us === "boolean" ? (row.us ? <span className="flex justify-center"><CheckIcon /></span> : <span className="flex justify-center"><XIcon /></span>) : <span style={{ color: PRIMARY }}>{row.us}</span>}
                </div>
                <div className="p-4 text-gray-500 bg-gray-50/50">
                  {typeof row.local === "boolean" ? (row.local ? <span className="flex justify-center"><CheckIcon /></span> : <span className="flex justify-center"><XIcon /></span>) : row.local}
                </div>
                <div className="p-4 text-gray-500 bg-gray-50/50">
                  {typeof row.freelancer === "boolean" ? (row.freelancer ? <span className="flex justify-center"><CheckIcon /></span> : <span className="flex justify-center"><XIcon /></span>) : row.freelancer}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile comparison cards */}
          <div className="v7-mobile-only space-y-3">
            {comparison.map((row) => (
              <div key={row.task} className="bg-white rounded-xl border border-gray-100 p-4">
                <p className="font-semibold text-gray-900 text-sm mb-3">{row.task}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-white px-2 py-0.5 rounded" style={{ backgroundColor: PRIMARY }}>Us</span>
                    <span className="text-sm font-bold" style={{ color: PRIMARY }}>
                      {typeof row.us === "boolean" ? (row.us ? <CheckIcon /> : <XIcon />) : row.us}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Local Hire</span>
                    <span className="text-sm text-gray-500">
                      {typeof row.local === "boolean" ? (row.local ? <CheckIcon /> : <XIcon />) : row.local}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Freelancer</span>
                    <span className="text-sm text-gray-500">
                      {typeof row.freelancer === "boolean" ? (row.freelancer ? <CheckIcon /> : <XIcon />) : row.freelancer}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHAT YOUR VA CAN DO ════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-2xl md:text-4xl font-bold" style={{ color: DARK }}>
              One VA. Every task you hate doing.
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-3 max-w-xl mx-auto">Trained across multiple disciplines — so one hire replaces a whole stack of tools and freelancers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-gray-100 p-5 md:p-6">
                <h3 className="font-heading font-bold text-base mb-3" style={{ color: DARK }}>{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: PRIMARY }}>
              Tell us what you need
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ════════ IMAGE + COPY SECTION ════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1">
              <div className="w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden relative shadow-lg">
                <Image src="/images/hero-v2.jpg" alt="Virtual assistant working professionally" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="flex-1 space-y-5">
              <h2 className="font-heading text-2xl md:text-4xl font-bold leading-tight" style={{ color: DARK }}>
                Stop interviewing.<br />Start delegating.
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Traditional hiring takes 4–8 weeks and costs thousands in recruiter fees. We do the screening, vetting, and matching — you just tell us what you need.
              </p>
              <ul className="space-y-3">
                {[
                  "12-step vetting process — only 3% of applicants pass",
                  "Pre-trained on your specific tools and workflows",
                  "Dedicated account manager for ongoing support",
                  "Free replacement if it's not the right fit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-lg text-sm" style={{ backgroundColor: PRIMARY }}>
                Get Matched With a VA
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ GUARANTEES ════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-2xl md:text-4xl font-bold" style={{ color: DARK }}>Zero risk. Seriously.</h2>
            <p className="text-gray-500 text-base md:text-lg mt-3">We only win when you do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {guarantees.map((g) => {
              const Icon = guaranteeIcons[g.icon];
              return (
                <div key={g.title} className="text-center space-y-3 p-5">
                  <div style={{ width: 56, height: 56, borderRadius: 12, backgroundColor: "#EFF6FF", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon />
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-gray-900">{g.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-4xl font-bold" style={{ color: DARK }}>Frequently asked questions</h2>
          </div>
          <FAQAccordion items={faqs} accentColor={PRIMARY} />
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">Ready to get your time back?</h2>
          <p className="text-base md:text-lg text-blue-200/70 mb-8 max-w-xl mx-auto">
            Full-time remote staff from $4/hr. Matched in days, not months. No contracts, no risk.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 text-white font-semibold rounded-lg text-sm md:text-base" style={{ backgroundColor: PRIMARY }}>
            Book a Free Consultation
            <ArrowIcon size={18} />
          </a>
          <p className="text-sm text-blue-200/40 mt-4">No credit card · No commitment · Cancel anytime</p>
        </div>
      </section>

      {/* ════════ CONTACT FORM ════════ */}
      <ContactForm accentColor={PRIMARY} heading="Let's find your perfect VA" subheading="Tell us what you need. We'll match you with a pre-vetted virtual assistant within 7 days." buttonText="Book My Free Consultation" />
    </>
  );
}
