"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const cards = [
  {
    bg: "#fff8f0",
    stat: "$325,000 Added in 60 Days",
    metric: "26% → 41% of total brand revenue from email",
    body: "This brand had solid traffic but wasn't leveraging email at scale. In just 60 days, we rebuilt their email engine and nearly doubled monthly email revenue through optimized flows and targeted campaigns.",
    results: [
      "$730,484 in 60 days directly from email",
      "79% lift in attributed email revenue",
      "41% of total brand revenue now comes from email",
    ],
  },
  {
    bg: "#f0f9ff",
    stat: "+$75,000 per month in 30 Days",
    metric: "4% to nearly 50% of brand revenue from email",
    body: "Before working with us, this brand had traffic and sales but almost no email revenue. In just 30 days, we built their lifecycle engine from scratch, launched campaigns, and scaled flows.",
    results: [
      "$81,000/month directly from email",
      "Email revenue jumped from 4% → 49% of total brand revenue",
      "100% growth driven by automated flows + campaigns",
    ],
  },
  {
    bg: "#f5f0ff",
    stat: "+$72,000 IN EMAIL REVENUE IN 30 DAYS",
    metric: "21% → 52% of total brand revenue from email",
    body: "Going into Black Friday, this brand had solid fundamentals but was leaving revenue on the table. Email was active, yet under-leveraged, with no coordinated campaign strategy to support peak-season demand.",
    results: [
      "$108,238 in email-attributed revenue in 30 days",
      "+199% increase in email revenue month over month",
      "Email contribution grew from 21% → 52% of total brand revenue",
    ],
  },
  {
    bg: "#effff4",
    stat: "+$61,000 Per Month in 30 days",
    metric: "From $0 to $61,000/month from email in 30 days",
    body: "When we partnered with this brand, their backend was nonexistent: no flows, no list segmentation, no lifecycle strategy. In just 30 days, we launched high-converting flows.",
    results: [
      "$61,000/month in email revenue",
      "100% of that from flows without campaigns",
      "Fully custom welcome, abandonment, post-purchase, and other high-converting flows",
    ],
  },
  {
    bg: "#fff",
    stat: "+$22,500 IN EMAIL REVENUE IN 90 DAYS",
    metric: "20% → 33% of total brand revenue from email",
    body: "Before working with us, this brand's email program was generating revenue, but growth had stalled and performance was split evenly between campaigns and flows.",
    results: [
      "Email-attributed revenue increased from $22,583 → $45,076",
      "99% increase in email revenue period over period",
      "Clear ownership established between campaigns vs flows",
    ],
  },
];

export default function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="case-studies"
      style={{
        background: "#f9f9f6",
        padding: "80px 0",
        borderTop: "1px solid #d7d0c8",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#666",
                marginBottom: 12,
              }}
            >
              CASE STUDIES
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#1c1c1c",
                lineHeight: 1.05,
              }}
            >
              See What Results We Generated Lately
            </h2>
          </div>
          {/* Carousel arrows */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                width: 40,
                height: 40,
                border: "1px solid #d7d0c8",
                background: "#fff",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1c1c1c",
              }}
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              style={{
                width: 40,
                height: 40,
                border: "1px solid #d7d0c8",
                background: "#fff",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1c1c1c",
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Embla carousel */}
      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: 16,
            paddingLeft: "max(24px, calc((100vw - 1100px) / 2 + 24px))",
            paddingRight: 24,
            touchAction: "pan-y",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 380,
                background: card.bg,
                border: "1px solid #d7d0c8",
                borderRadius: 8,
                padding: 28,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  color: "#1c1c1c",
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                {card.stat}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "#444",
                  marginBottom: 16,
                  lineHeight: 1.4,
                }}
              >
                {card.metric}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                {card.body}
              </p>
              <div
                style={{
                  borderTop: "1px solid #d7d0c8",
                  paddingTop: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {card.results.map((r, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#1c1c1c",
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                        fontSize: 13,
                        color: "#444",
                        lineHeight: 1.5,
                      }}
                    >
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "#000",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 15,
            padding: "14px 32px",
            borderRadius: 9999,
            textDecoration: "none",
          }}
        >
          Book a Consultation Call
        </a>
      </div>
    </section>
  );
}
