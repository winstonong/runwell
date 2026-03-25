"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-gray-900">
          Runwell
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/v1" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            For Founders
          </Link>
          <Link href="/v2" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Flexible Scaling
          </Link>
          <Link href="/v3" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Quality First
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          <Link href="/v1" onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-600">
            For Founders
          </Link>
          <Link href="/v2" onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-600">
            Flexible Scaling
          </Link>
          <Link href="/v3" onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-600">
            Quality First
          </Link>
          <a
            href="#contact"
            className="block w-full text-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
