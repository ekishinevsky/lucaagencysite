const rows = [
  {
    other: "Generic content that blends into the feed",
    us: "Video built to stop the scroll and drive real action",
  },
  {
    other: "Slow turnarounds with no clear timeline",
    us: "Delivery within 5–7 business days, every time",
  },
  {
    other: "No real strategy — just execution",
    us: "Social media strategy included with every package",
  },
  {
    other: "Junior editors you never speak to",
    us: "Founder-led creative with a dedicated in-house team",
  },
  {
    other: "Same template recycled for every client",
    us: "Every video crafted for your brand voice and audience",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#f9f9f6", padding: "80px 0", borderTop: "1px solid #d7d0c8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: 12 }}>
          WHY CHOOSE US
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1c1c1c", marginBottom: 8, lineHeight: 1.05 }}>
          The Luca Agency Difference
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 16, color: "#666", marginBottom: 40 }}>
          What makes us different:
        </p>

        <div style={{ border: "1px solid #d7d0c8", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#f0ede8", borderBottom: "1px solid #d7d0c8" }}>
            <div style={{ padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "#666", borderRight: "1px solid #d7d0c8" }}>
              Other Agencies
            </div>
            <div style={{ padding: "14px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "#1c1c1c" }}>
              Luca Agency
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < rows.length - 1 ? "1px solid #d7d0c8" : "none", background: i % 2 === 0 ? "#fff" : "#faf9f7" }}>
              <div style={{ padding: "18px 24px", fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, color: "#888", borderRight: "1px solid #d7d0c8", lineHeight: 1.5 }}>
                {row.other}
              </div>
              <div style={{ padding: "18px 24px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, color: "#1c1c1c", lineHeight: 1.5 }}>
                {row.us}
              </div>
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
