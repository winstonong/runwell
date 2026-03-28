import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-gray-900">
          Runwell
        </Link>
      </div>
    </nav>
  );
}
