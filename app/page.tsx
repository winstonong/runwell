import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-heading text-2xl font-bold text-gray-900">
          Landing Page Variants
        </h1>
        <ul className="space-y-3 text-lg">
          <li>
            <Link href="/v1" className="text-blue-600 hover:underline">
              Variant A — For Founders
            </Link>
          </li>
          <li>
            <Link href="/v2" className="text-blue-600 hover:underline">
              Variant B — Flexible Scaling
            </Link>
          </li>
          <li>
            <Link href="/v3" className="text-blue-600 hover:underline">
              Variant C — Quality First
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
