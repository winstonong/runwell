interface UrgencyBannerProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

export default function UrgencyBanner({
  text,
  bgColor = "#F97316",
  textColor = "#ffffff",
}: UrgencyBannerProps) {
  return (
    <div
      className="py-3 px-6 text-center text-sm font-semibold"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </div>
  );
}
