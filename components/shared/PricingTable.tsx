interface PricingTier {
  name: string;
  price: string;
  unit: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
  accentColor?: string;
  heading?: string;
  subtitle?: string;
}

export default function PricingTable({
  tiers,
  accentColor = "#0D4B3B",
  heading = "Simple, Transparent Pricing",
  subtitle,
}: PricingTableProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3" style={{ color: accentColor }}>
            {heading}
          </h2>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "text-white shadow-xl scale-[1.03] relative"
                  : "bg-white border border-gray-200"
              }`}
              style={tier.highlighted ? { backgroundColor: accentColor } : undefined}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-xs font-bold px-4 py-1 rounded-full" style={{ color: accentColor }}>
                  Most Popular
                </span>
              )}
              <h3 className={`font-heading text-lg font-bold mb-1 ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlighted ? "text-white/70" : "text-gray-500"}`}>
                  {tier.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.highlighted ? "text-white/90" : "text-gray-600"}`}>
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-white" : ""}`} style={!tier.highlighted ? { color: accentColor } : undefined} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                  tier.highlighted
                    ? "bg-white"
                    : "text-white"
                }`}
                style={
                  tier.highlighted
                    ? { color: accentColor }
                    : { backgroundColor: accentColor }
                }
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
