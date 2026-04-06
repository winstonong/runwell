interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  result?: string;
  accentColor?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  result,
  accentColor = "#1E2A5E",
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="mb-4" style={{ color: accentColor }}>
        <svg className="w-8 h-8 opacity-40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4 text-base italic">&ldquo;{quote}&rdquo;</p>
      {result && (
        <p className="text-sm font-bold mb-4" style={{ color: accentColor }}>
          {result}
        </p>
      )}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: accentColor }}
        >
          {initials}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
