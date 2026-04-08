import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight text-gray-900">
          <Image src="/images/logo-icon.svg" alt="VA" width={32} height={32} />
          Virtual Assistants Philippines
        </Link>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Get a Free Quote
        </a>
      </div>
    </nav>
  );
}
