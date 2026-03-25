import Link from "next/link";

interface CTAButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  bgColor?: string;
  hoverColor?: string;
}

export default function CTAButton({
  text,
  href = "#contact",
  variant = "primary",
  className = "",
  bgColor,
  hoverColor,
}: CTAButtonProps) {
  const base = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full transition-all duration-200 cursor-pointer";
  const primary = bgColor
    ? `text-white ${className}`
    : "bg-gray-900 text-white hover:bg-gray-800";
  const secondary = "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300";

  const style = bgColor
    ? { backgroundColor: bgColor, ...(hoverColor ? {} : {}) }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${variant === "primary" ? primary : secondary} ${className}`}
      style={style}
    >
      {text}
    </Link>
  );
}
