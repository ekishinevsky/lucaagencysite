export default function Hero() {
  const logos = ["[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]"];

  return (
    <section style={{ background: "#f9f9f6", padding: "80px 0 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          lineHeight: 1.05,
          color: "#1c1c1c",
          marginBottom: 24,
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Grow Your Brand With Video That Actually Gets Watched
        </h1>

        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: 18,
          color: "#666",
          maxWidth: 540,
          margin: "0 auto 40px",
          lineHeight: 1.7,
        }}>
          Luca Agency is a Boston-based creative studio specializing in video production, editing, and social media management built to grow your audience and turn viewers into customers.
        </p>

        <a href="#contact" style={{
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
        }}>
          Book a Discovery Call
        </a>

        {/* Auto-scrolling trusted by marquee */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 12,
            color: "#666",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            Trusted by
          </p>
          <div style={{ overflow: "hidden", width: "100%", maxWidth: 700 }}>
            <div className="marquee-track">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} style={{
                  flexShrink: 0,
                  width: 120,
                  height: 44,
                  background: "#d7d0c8",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 16,
                }}>
                  {/* TODO: Replace with <img src="/logos/client.svg" /> */}
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#999" }}>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
