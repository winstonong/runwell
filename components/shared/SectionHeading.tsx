interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleColor?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  titleColor,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className="font-heading text-3xl md:text-4xl font-bold tracking-tight"
        style={titleColor ? { color: titleColor } : {}}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
