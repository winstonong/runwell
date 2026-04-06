import Link from "next/link";

const variants = [
  { href: "/v1", label: "A", title: "For Founders", description: "Reclaim 20+ hours a week so you can focus on growth", color: "#1E2A5E" },
  { href: "/v2", label: "B", title: "Flexible Scaling", description: "Scale your team up or down with zero commitments", color: "#0D4B3B" },
  { href: "/v3", label: "C", title: "Quality First", description: "Rigorously vetted VAs backed by our quality guarantee", color: "#0B1D51" },
  { href: "/v4", label: "D", title: "Hire a VA", description: "Pre-vetted VAs ready to start in 48 hours from $4/hr", color: "#2563EB" },
  { href: "/v5", label: "E", title: "Small Business", description: "Affordable VA support designed for small business owners", color: "#16A34A" },
  { href: "/v6", label: "F", title: "Executive Assistant", description: "Premium executive support at a fraction of the cost", color: "#1F2937" },
];

export default function Home() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">Landing Page Variants</h1>
          <p className="text-gray-500 text-lg">6 conversion-focused pages targeting different AdWords intents</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {variants.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="group block rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
            >
              <span
                className="inline-block text-xs font-bold tracking-wider uppercase mb-3 px-2.5 py-1 rounded-full text-white"
                style={{ backgroundColor: v.color }}
              >
                Variant {v.label}
              </span>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:underline">{v.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
