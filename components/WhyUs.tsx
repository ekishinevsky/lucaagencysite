const rows = [
  {
    other: "Feels distant, outsourced, and hard to reach",
    us: "Feels like an in-house team, not an outsourced agency",
  },
  {
    other: "Slow, spotty communication and unclear reporting (if any)",
    us: "Daily communication + weekly/monthly KPI reporting",
  },
  {
    other: "Inconsistent campaigns, often reused or off-brand",
    us: "3–4 handcrafted campaigns weekly, built for performance and not discounts",
  },
  {
    other: "Junior-led execution with little testing or strategic input",
    us: "Founder-led strategy with proactive testing and support",
  },
  {
    other: "One-size-fits-all tactics with no real connection to your brand",
    us: "Every decision backed by data, but built around your brand voice and goals",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "#f9f9f6",
        padding: "80px 0",
        borderTop: "1px solid #d7d0c8",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
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
          WHY CHOOSE US
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#1c1c1c",
            marginBottom: 8,
            lineHeight: 1.05,
          }}
        >
          The Mail Mosaic Difference
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 16,
            color: "#666",
            marginBottom: 40,
          }}
        >
          What makes us unique:
        </p>

        {/* Comparison table */}
        <div
          style={{
            border: "1px solid #d7d0c8",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "#f0ede8",
              borderBottom: "1px solid #d7d0c8",
            }}
          >
            <div
              style={{
                padding: "14px 24px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 13,
                color: "#666",
                borderRight: "1px solid #d7d0c8",
              }}
            >
              Other Agencies
            </div>
            <div
              style={{
                padding: "14px 24px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 13,
                color: "#1c1c1c",
              }}
            >
              Mail Mosaic
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: i < rows.length - 1 ? "1px solid #d7d0c8" : "none",
                background: i % 2 === 0 ? "#fff" : "#faf9f7",
              }}
            >
              <div
                style={{
                  padding: "18px 24px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#888",
                  borderRight: "1px solid #d7d0c8",
                  lineHeight: 1.5,
                }}
              >
                {row.other}
              </div>
              <div
                style={{
                  padding: "18px 24px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#1c1c1c",
                  lineHeight: 1.5,
                }}
              >
                {row.us}
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
}
