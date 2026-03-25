interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  accentColor?: string;
}

export default function ProcessStep({
  step,
  title,
  description,
  accentColor = "#1E2A5E",
}: ProcessStepProps) {
  return (
    <div className="text-center flex-1">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4"
        style={{ backgroundColor: accentColor }}
      >
        {step}
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
}
