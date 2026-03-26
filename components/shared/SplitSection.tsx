import Image from "next/image";

interface SplitSectionProps {
  title: string;
  description: string;
  imagePlaceholder?: string;
  imageSrc?: string;
  reversed?: boolean;
  accentColor?: string;
  bgColor?: string;
}

export default function SplitSection({
  title,
  description,
  imagePlaceholder = "Image",
  imageSrc,
  reversed = false,
  accentColor = "#1E2A5E",
  bgColor,
}: SplitSectionProps) {
  return (
    <div
      className={`py-16 ${bgColor ? "" : ""}`}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12`}
      >
        <div className="flex-1 space-y-4">
          <h3
            className="font-heading text-2xl font-bold"
            style={{ color: accentColor }}
          >
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
        </div>
        <div className="flex-1">
          {imageSrc ? (
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div
              className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center text-white text-lg font-medium"
              style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            >
              {imagePlaceholder}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
