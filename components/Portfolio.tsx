"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  { label: "Brand Film", sub: "Full production shoot" },
  { label: "Product Reel", sub: "30-sec social cut" },
  { label: "Social Campaign", sub: "Multi-platform series" },
  { label: "Event Coverage", sub: "Same-day delivery" },
  { label: "Talking Head", sub: "Founder-led content" },
  { label: "UGC-Style Ad", sub: "Paid social creative" },
];

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" style={{ background: "#f9f9f6", padding: "80px 0", borderTop: "1px solid #d7d0c8", overflow: "hidden" }}>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 8 }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: 12 }}>
              PORTFOLIO
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1c1c1c", lineHeight: 1.05 }}>
              See What Our Work Looks Like
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={prev} aria-label="Previous" style={{ width: 40, height: 40, border: "1px solid #d7d0c8", background: "#fff", borderRadius: 4, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1c1c" }}>←</button>
            <button onClick={next} aria-label="Next" style={{ width: 40, height: 40, border: "1px solid #d7d0c8", background: "#fff", borderRadius: 4, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1c1c" }}>→</button>
          </div>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, color: "#888" }}>
          {/* TODO: Replace placeholders with Luca's actual video thumbnails */}
          Drag to browse — real project videos coming soon
        </p>
      </div>

      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 16, paddingLeft: "max(24px, calc((100vw - 1100px) / 2 + 24px))", paddingRight: 24, touchAction: "pan-y" }}>
          {items.map((item, n) => (
            <div key={n} style={{ flexShrink: 0, width: 280, height: 500, background: "#d7d0c8", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: 20, border: "1px solid #c8c1b8" }}>
              {/* TODO: Replace with <video autoPlay muted loop playsInline src="/work/video.mp4" style={{...}} /> */}
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "#555", marginBottom: 4 }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#888" }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
