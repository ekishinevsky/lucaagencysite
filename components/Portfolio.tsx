"use client";

import { useCallback, useRef, useState } from "react";

const CARD_WIDTH = 280;
const CARD_HEIGHT = 500;
const GAP = 24;
const CARD_STEP = CARD_WIDTH + GAP; // 304px

const itemsData = [
  { label: "Brand Film", sub: "Full production shoot" },
  { label: "Product Reel", sub: "30-sec social cut" },
  { label: "Social Campaign", sub: "Multi-platform series" },
  { label: "Event Coverage", sub: "Same-day delivery" },
  { label: "Talking Head", sub: "Founder-led content" },
  { label: "UGC-Style Ad", sub: "Paid social creative" },
];

// Two copies for seamless -50% loop
const track = [...itemsData, ...itemsData];

export default function Portfolio() {
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const [snapIndex, setSnapIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleArrow = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;

      if (mode === "auto") {
        const matrix = new DOMMatrix(window.getComputedStyle(el).transform);
        const currentX = matrix.m41;
        const rawSnap = Math.round(-currentX / CARD_STEP);
        const dataSnap =
          ((rawSnap % itemsData.length) + itemsData.length) % itemsData.length;
        const targetIndex =
          (dataSnap + dir + itemsData.length) % itemsData.length;

        el.style.animation = "none";
        el.style.transform = `translateX(${currentX}px)`;
        setMode("manual");
        setSnapIndex(targetIndex);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!trackRef.current) return;
            trackRef.current.style.transition =
              "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)";
            trackRef.current.style.transform = `translateX(${
              -targetIndex * CARD_STEP
            }px)`;
          });
        });
      } else {
        const targetIndex =
          (snapIndex + dir + itemsData.length) % itemsData.length;
        el.style.transition =
          "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)";
        el.style.transform = `translateX(${-targetIndex * CARD_STEP}px)`;
        setSnapIndex(targetIndex);
      }
    },
    [mode, snapIndex]
  );

  const prev = useCallback(() => handleArrow(-1), [handleArrow]);
  const next = useCallback(() => handleArrow(1), [handleArrow]);

  return (
    <section
      id="portfolio"
      style={{
        background: "#f9f9f6",
        padding: "80px 0",
        borderTop: "1px solid #d7d0c8",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 8,
          }}
        >
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
              PORTFOLIO
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#1c1c1c",
                lineHeight: 1.05,
              }}
            >
              See What Our Work Looks Like
            </h2>
          </div>
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
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 14,
            color: "#888",
          }}
        >
          Real project videos coming soon
        </p>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          className={mode === "auto" ? "portfolio-drift" : undefined}
          style={{
            display: "flex",
            gap: GAP,
            paddingRight: GAP,
            width: "max-content",
          }}
        >
          {track.map((item, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                background: "#d7d0c8",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: 20,
                border: "1px solid #c8c1b8",
              }}
            >
              {/* TODO: Replace with <video autoPlay muted loop playsInline src="/work/video.mp4" /> */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#555",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "#888",
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-drift {
          animation: portfolio-scroll 50s linear infinite;
        }
        @keyframes portfolio-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
