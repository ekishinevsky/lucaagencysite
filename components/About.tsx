export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#fff",
        padding: "80px 0",
        borderTop: "1px solid #d7d0c8",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Photo placeholder */}
          <div
            style={{
              background: "#d7d0c8",
              borderRadius: 8,
              aspectRatio: "3 / 4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#999",
              }}
            >
              [Photo]
            </span>
          </div>

          {/* Text */}
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
              ABOUT
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 17,
                color: "#1c1c1c",
                marginBottom: 20,
              }}
            >
              Hey I&apos;m Jack founder of Mail Mosaic
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 15,
                color: "#555",
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              With years of experience helping ecommerce brands grow, I launched Mail Mosaic after seeing a common frustration: agencies that overpromise, underdeliver, and forget their clients the moment the invoice clears. At Mail Mosaic, we take the opposite approach. We go above and beyond for every brand we work with from daily communication and weekly reporting to proactive strategy and hands-on execution. You&apos;ll never feel like a ticket number here. We build email systems that drive long-term retention and serious revenue grounded in strategy, creativity, and constant iteration. Our clients don&apos;t just get results, they get a true partner in their growth. Because at the end of the day, great email marketing is like a mosaic. Every message, every flow, every customer touchpoint matters and when all the pieces come together, they create something powerful. Mail Mosaic exists to make email feel personal again both for your customers and for you.
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
              }}
            >
              Book a Consultation Call
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
