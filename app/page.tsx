import Link from "next/link";
import Image from "next/image";

const variants = [
  {
    href: "/v1",
    label: "Variant A",
    title: "Reclaim Your Time",
    description:
      "Focused on founder productivity — stop doing $15/hr work on a $500/hr schedule.",
    color: "#1E2A5E",
    accent: "#F5A623",
    image: "/images/hero-v1.jpg",
  },
  {
    href: "/v2",
    label: "Variant B",
    title: "Scale Without Overhead",
    description:
      "Focused on flexible scaling — grow your team without growing your payroll.",
    color: "#0D4B3B",
    accent: "#2EC4B6",
    image: "/images/hero-v2.jpg",
  },
  {
    href: "/v3",
    label: "Variant C",
    title: "Reliable & Accurate",
    description:
      "Focused on quality and trust — virtual assistants you can actually rely on.",
    color: "#0B1D51",
    accent: "#C9A84C",
    image: "/images/hero-v3.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            Virtual Assistants That Keep Things Running Well
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trained virtual assistants from $4–$8/hr. Explore three
            approaches to how Runwell can help with admin support, email
            management, scheduling, data entry, and research.
          </p>
        </div>
      </section>

      {/* Variant cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {variants.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group block rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <span
                    className="inline-block text-xs font-semibold tracking-wider uppercase mb-3 px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${v.color}10`,
                      color: v.color,
                    }}
                  >
                    {v.label}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:underline">
                    {v.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {v.description}
                  </p>
                  <span
                    className="inline-flex items-center text-sm font-semibold"
                    style={{ color: v.color }}
                  >
                    View landing page
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
