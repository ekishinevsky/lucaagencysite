const phases = [
  {
    phase: "Phase 1 — Discover",
    days: "Days 1–7",
    body: "We learn your brand inside and out before anything is created.",
    bullets: [
      "Brand & audience deep dive",
      "Competitor content analysis",
      "Platform audit (Instagram, TikTok, YouTube)",
      "Build your custom 30-day content roadmap",
    ],
  },
  {
    phase: "Phase 2 — Create",
    days: "Days 7–30",
    body: "We show up, shoot, and produce content that stands out.",
    bullets: [
      "Script writing & creative direction",
      "On-location or studio production",
      "Professional video editing & color grade",
      "Platform-optimized delivery (Reels, TikToks, Shorts)",
    ],
  },
  {
    phase: "Phase 3 — Launch",
    days: "Days 30–45",
    body: "Content goes live with a strategy designed to grow.",
    bullets: [
      "Scheduled posting across all platforms",
      "Caption writing & hashtag strategy",
      "Community management & engagement",
      "Performance tracking from day one",
    ],
  },
  {
    phase: "Phase 4 — Scale",
    days: "Days 45+",
    body: "We double down on what works and keep pushing the numbers.",
    bullets: [
      "Weekly content performance reviews",
      "A/B testing formats, hooks, and CTAs",
      "Monthly strategy shifts based on data",
      "Ongoing production to keep the feed alive",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#f9f9f6", padding: "80px 0", borderTop: "1px solid #d7d0c8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: 12 }}>
          HOW WE WORK
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1c1c1c", marginBottom: 8, lineHeight: 1.05 }}>
          The GROW Method
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 16, color: "#666", marginBottom: 48, maxWidth: 560 }}>
          Our 4-phase system for producing, launching, and scaling video content for brands that want real growth.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {phases.map((p, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #d7d0c8", borderRadius: 8, padding: 24 }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, color: "#888", marginBottom: 4, letterSpacing: "0.05em" }}>
                {p.days}
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "#1c1c1c", marginBottom: 10, lineHeight: 1.2 }}>
                {p.phase}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, color: "#555", marginBottom: 16, lineHeight: 1.55 }}>
                {p.body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 13, color: "#444", lineHeight: 1.5 }}>
                    <span style={{ color: "#1c1c1c", fontWeight: 700, flexShrink: 0 }}>—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#contact" style={{ display: "inline-block", background: "#000", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 9999, textDecoration: "none" }}>
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
