interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  accentColor?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  accentColor = "#1E2A5E",
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
        style={{ backgroundColor: `${accentColor}10` }}
      >
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
