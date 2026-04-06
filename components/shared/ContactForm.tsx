"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  accentColor?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
}

export default function ContactForm({
  accentColor = "#1E2A5E",
  heading = "Get a Free Consultation",
  subheading = "Tell us what you need and we'll match you with the right VA within 48 hours.",
  buttonText = "Send My Request",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
              <svg className="w-8 h-8" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600">We&apos;ve received your request and will be in touch within 24 hours to discuss your virtual assistant needs.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3" style={{ color: accentColor }}>
            {heading}
          </h2>
          <p className="text-gray-600 text-lg">{subheading}</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                id="cf-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
              <input
                id="cf-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cf-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                id="cf-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="cf-company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                id="cf-company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
                placeholder="Acme Inc."
              />
            </div>
          </div>
          <div>
            <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 mb-1">What do you need help with? *</label>
            <textarea
              id="cf-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none"
              style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
              placeholder="Tell us about the tasks you'd like to delegate, your preferred hours, and any tools you use..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 px-6 text-white font-semibold rounded-lg transition-opacity disabled:opacity-60"
            style={{ backgroundColor: accentColor }}
          >
            {status === "loading" ? "Sending..." : buttonText}
          </button>
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
          )}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Your information is secure
            </span>
            <span>•</span>
            <span>We respond within 24 hours</span>
          </div>
        </form>
      </div>
    </section>
  );
}
