"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const cards = [
  {
    bg: "#fff8f0",
    stat: "+30M Views in a Single Video",
    metric: "0 → 30M+ views in 72 hours",
    body: "This brand had a great product but zero social presence. We scripted, produced, and launched a single video that went viral across TikTok and Instagram, driving a massive wave of organic traffic and sales.",
    results: ["30M+ views across platforms in 72 hours", "400% increase in website traffic", "Product inventory sold out within a week"],
  },
  {
    bg: "#f0f9ff",
    stat: "+85K Followers in 60 Days",
    metric: "2K → 87K followers in 60 days",
    body: "Before working with us, this brand had a stagnant following and low engagement. We rebuilt their content strategy from scratch with weekly video production and a consistent brand identity.",
    results: ["85K new followers across TikTok and Instagram", "Engagement rate jumped from 1.2% → 8.7%", "3 viral videos in the first 60 days"],
  },
  {
    bg: "#f5f0ff",
    stat: "$180K Revenue From One Campaign",
    metric: "Single video campaign drove $180K in direct sales",
    body: "Going into a product launch, this brand needed content that converted — not just content that looked good. We created a 3-video campaign that paired storytelling with strong CTAs.",
    results: ["$180,000 in tracked revenue from video content", "6.2M total campaign views", "22% conversion rate on landing page traffic"],
  },
  {
    bg: "#effff4",
    stat: "+340% Engagement in 30 Days",
    metric: "From ghost town to top 5% engagement rate",
    body: "When we partnered with this brand, their social media was inconsistent with no strategy. In 30 days we launched a full content calendar with professional video production.",
    results: ["340% increase in total engagement", "Content reach grew from 8K → 420K monthly", "Brand partnership inquiries tripled within the first month"],
  },
  {
    bg: "#fff",
    stat: "2.4M Views, 40K New Followers",
    metric: "One content series changed everything",
    body: "This client wanted to establish themselves as a thought leader in their space. We developed a recurring video series that built a loyal audience and drove consistent inbound leads.",
    results: ["2.4M total series views in 90 days", "40K new highly engaged followers", "Inbound leads up 280% from social channels"],
  },
];

export default function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="case-studies" style={{ background: "#f9f9f6", padding: "80px 0", borderTop: "1px solid #d7d0c8", overflow: "hidden" }}>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: 12 }}>
              CASE STUDIES
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1c1c1c", lineHeight: 1.05 }}>
              Results We&apos;ve Generated for Clients
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={prev} aria-label="Previous" style={{ width: 40, height: 40, border: "1px solid #d7d0c8", background: "#fff", borderRadius: 4, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1c1c" }}>←</button>
            <button onClick={next} aria-label="Next" style={{ width: 40, height: 40, border: "1px solid #d7d0c8", background: "#fff", borderRadius: 4, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1c1c" }}>→</button>
          </div>
        </div>
      </div>

      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 16, paddingLeft: "max(24px, calc((100vw - 1100px) / 2 + 24px))", paddingRight: 24, touchAction: "pan-y" }}>
          {cards.map((card, i) => (
            <div key={i} style={{ flexShrink: 0, width: 380, background: card.bg, border: "1px solid #d7d0c8", borderRadius: 8, padding: 28 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#1c1c1c", lineHeight: 1.1, marginBottom: 10 }}>
                {card.stat}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "#444", marginBottom: 16, lineHeight: 1.4 }}>
                {card.metric}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, color: "#555", lineHeight: 1.65, marginBottom: 20 }}>
                {card.body}
              </p>
              <div style={{ borderTop: "1px solid #d7d0c8", paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {card.results.map((r, j) => (
                  <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#1c1c1c", fontWeight: 700, fontSize: 14, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 13, color: "#444", lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <a href="#contact" style={{ display: "inline-block", background: "#000", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 9999, textDecoration: "none" }}>
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
}
