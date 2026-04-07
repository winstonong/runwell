"use client";

import { useEffect, useRef } from "react";

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

interface HubSpotEmbedProps {
  containerId?: string;
  className?: string;
}

export default function HubSpotEmbed({
  containerId = "hubspot-hero-form",
  className = "",
}: HubSpotEmbedProps) {
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
          target: `#${containerId}`,
        });
      }
    };

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
  }, [containerId]);

  return (
    <div
      ref={containerRef}
      id={containerId}
      className={className}
    />
  );
}
