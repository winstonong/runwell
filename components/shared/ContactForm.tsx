"use client";

import { useEffect, useRef } from "react";

interface ContactFormProps {
  accentColor?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function ContactForm({
  accentColor = "#1E2A5E",
  heading = "Get a Free Consultation",
  subheading = "Tell us what you need and we'll match you with the right VA within 48 hours.",
}: ContactFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const loadForm = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId: "8513837",
          formId: "e84c4e9d-49d9-4c00-8607-66c9b1e89067",
          region: "na1",
          target: "#hubspot-form-container",
        });
      }
    };

    // Check if script already loaded
    if (window.hbspt) {
      loadForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = loadForm;
    document.head.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-3"
            style={{ color: accentColor }}
          >
            {heading}
          </h2>
          <p className="text-gray-600 text-lg">{subheading}</p>
        </div>
        <div
          ref={containerRef}
          id="hubspot-form-container"
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
        />
      </div>
    </section>
  );
}
