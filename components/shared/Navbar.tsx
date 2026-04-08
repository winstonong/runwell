import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold tracking-tight text-gray-900 min-w-0">
          <Image src="/images/logo-icon.svg" alt="VA" width={28} height={28} className="flex-shrink-0" />
          <span className="text-base md:text-2xl truncate">Virtual Assistants Philippines</span>
        </Link>
        <a
          href="#contact"
          className="flex-shrink-0 inline-flex items-center px-3 md:px-5 py-2 md:py-2.5 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          Get a Free Quote
        </a>
      </div>
    </nav>
  );
}
