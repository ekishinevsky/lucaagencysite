"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CARD_WIDTH = 380;
const GAP = 24;
const CARD_STEP = CARD_WIDTH + GAP; // 404px per card

const cardsData = [
  {
    bg: "#fff8f0",
    countUp: { prefix: "+", value: 30, decimals: 0, unit: "M", rest: " Views in a Single Video" },
    metric: "0 → 30M+ views in 72 hours",
    body: "This brand had a great product but zero social presence. We scripted, produced, and launched a single video that went viral across TikTok and Instagram, driving a massive wave of organic traffic and sales.",
    results: [
      "30M+ views across platforms in 72 hours",
      "400% increase in website traffic",
      "Product inventory sold out within a week",
    ],
  },
  {
    bg: "#f0f9ff",
    countUp: { prefix: "+", value: 85, decimals: 0, unit: "K", rest: " Followers in 60 Days" },
    metric: "2K → 87K followers in 60 days",
    body: "Before working with us, this brand had a stagnant following and low engagement. We rebuilt their content strategy from scratch with weekly video production and a consistent brand identity.",
    results: [
      "85K new followers across TikTok and Instagram",
      "Engagement rate jumped from 1.2% → 8.7%",
      "3 viral videos in the first 60 days",
    ],
  },
  {
    bg: "#f5f0ff",
    countUp: { prefix: "$", value: 180, decimals: 0, unit: "K", rest: " Revenue From One Campaign" },
    metric: "Single video campaign drove $180K in direct sales",
    body: "Going into a product launch, this brand needed content that converted — not just content that looked good. We created a 3-video campaign that paired storytelling with strong CTAs.",
    results: [
      "$180,000 in tracked revenue from video content",
      "6.2M total campaign views",
      "22% conversion rate on landing page traffic",
    ],
  },
  {
    bg: "#effff4",
    countUp: { prefix: "+", value: 340, decimals: 0, unit: "%", rest: " Engagement in 30 Days" },
    metric: "From ghost town to top 5% engagement rate",
    body: "When we partnered with this brand, their social media was inconsistent with no strategy. In 30 days we launched a full content calendar with professional video production.",
    results: [
      "340% increase in total engagement",
      "Content reach grew from 8K → 420K monthly",
      "Brand partnership inquiries tripled within the first month",
    ],
  },
  {
    bg: "#fff",
    countUp: { prefix: "", value: 2.4, decimals: 1, unit: "M", rest: " Views, 40K New Followers" },
    metric: "One content series changed everything",
    body: "This client wanted to establish themselves as a thought leader in their space. We developed a recurring video series that built a loyal audience and drove consistent inbound leads.",
    results: [
      "2.4M total series views in 90 days",
      "40K new highly engaged followers",
      "Inbound leads up 280% from social channels",
    ],
  },
];

// Two copies for seamless -50% loop
const track = [...cardsData, ...cardsData];

type StatProps = {
  prefix: string;
  value: number;
  decimals: number;
  unit: string;
  rest: string;
  run: boolean;
};

function AnimatedStat({ prefix, value, decimals, unit, rest, run }: StatProps) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!run || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(eased * value);
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [run, value]);

  const fmt =
    decimals === 0
      ? Math.floor(display).toLocaleString()
      : display.toFixed(decimals);

  return (
    <p
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
        color: "#1c1c1c",
        lineHeight: 1.1,
        marginBottom: 10,
      }}
    >
      {prefix}{fmt}{unit}{rest}
    </p>
  );
}

export default function CaseStudies() {
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const [snapIndex, setSnapIndex] = useState(0);
  const [counted, setCounted] = useState<Set<number>>(new Set());

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Count-up: fire when each card enters the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCounted((prev) => new Set([...prev, i]));
            obs.unobserve(el);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleArrow = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;

      if (mode === "auto") {
        // Freeze current animated position then transition to target snap
        const matrix = new DOMMatrix(window.getComputedStyle(el).transform);
        const currentX = matrix.m41;
        const rawSnap = Math.round(-currentX / CARD_STEP);
        const dataSnap =
          ((rawSnap % cardsData.length) + cardsData.length) % cardsData.length;
        const targetIndex =
          (dataSnap + dir + cardsData.length) % cardsData.length;

        el.style.animation = "none";
        el.style.transform = `translateX(${currentX}px)`;
        setMode("manual");
        setSnapIndex(targetIndex);

        // Double-rAF ensures browser paints the frozen position before transitioning
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
          (snapIndex + dir + cardsData.length) % cardsData.length;
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
      id="case-studies"
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
              Results We&apos;ve Generated for Clients
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
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          className={mode === "auto" ? "case-drift" : undefined}
          style={{
            display: "flex",
            gap: GAP,
            // paddingRight fills the trailing "gap" so -50% lands exactly on copy 2
            paddingRight: GAP,
            width: "max-content",
          }}
        >
          {track.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                flexShrink: 0,
                width: CARD_WIDTH,
                background: card.bg,
                border: "1px solid #d7d0c8",
                borderRadius: 8,
                padding: 28,
              }}
            >
              <AnimatedStat {...card.countUp} run={counted.has(i)} />
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
                    style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
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
          Book a Discovery Call
        </a>
      </div>

      <style>{`
        .case-drift {
          animation: case-scroll 55s linear infinite;
        }
        @keyframes case-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
