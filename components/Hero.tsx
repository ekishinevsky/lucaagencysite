export default function Hero() {
  // Two copies — animating to -50% always lands at the start of copy 2, seamless loop
  const logos = ["[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]"];
  const track = [...logos, ...logos];

  return (
    <section style={{ background: "#f9f9f6", padding: "80px 0 0" }}>
      {/* Centered hero content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center", paddingBottom: 56 }}>
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
          Build Your Brand Presence and Increase Your Return on Content
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
          Luca Agency produces video content and manages social media for brands that want to grow their audience and drive real revenue — not just views.
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
        }}>
          Book a Discovery Call
        </a>
      </div>

      {/* Full-width trusted by marquee — lives outside the centered container */}
      <div style={{ borderTop: "1px solid #d7d0c8", borderBottom: "1px solid #d7d0c8", padding: "20px 0", overflow: "hidden", width: "100%" }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: 11,
          color: "#aaa",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 16,
        }}>
          Trusted by
        </p>
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div className="marquee-track">
            {track.map((_, i) => (
              <div key={i} style={{
                flexShrink: 0,
                width: 130,
                height: 44,
                background: "#d7d0c8",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}>
                {/* TODO: Replace div with <img src="/logos/client-name.svg" alt="Client" style={{height: 24, opacity: 0.5}} /> */}
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#999" }}>[Logo]</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-left 25s linear infinite;
        }
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
