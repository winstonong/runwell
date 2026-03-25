interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  bgColor?: string;
  textColor?: string;
}

export default function StatsBar({
  stats,
  bgColor = "#0B1D51",
  textColor = "#ffffff",
}: StatsBarProps) {
  return (
    <div className="rounded-2xl py-10 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold font-heading" style={{ color: textColor }}>
              {stat.value}
            </div>
            <div className="text-sm mt-1 opacity-80" style={{ color: textColor }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
