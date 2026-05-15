export default function Hero() {
  return (
    <section
      style={{
        background: "#f9f9f6",
        padding: "80px 0 64px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            lineHeight: 1.05,
            color: "#1c1c1c",
            marginBottom: 24,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Unlock $30K to $200K+ Revenue Growth with High-Impact Email Marketing
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 18,
            color: "#666",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          At Mail Mosaic, we&apos;re piecing together your retention revenue through smart, data-driven email marketing.
        </p>

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
            marginBottom: 56,
          }}
        >
          Book a Consultation Call
        </a>

        {/* Trusted by logos */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 12,
              color: "#666",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Trusted by
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  width: 120,
                  height: 44,
                  background: "#d7d0c8",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    color: "#999",
                  }}
                >
                  [Logo]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
