import { FlickeringGrid } from "./ui/flickering-grid";

export default function FitCheck() {
  return (
    <section id="fit" style={{ background: "#1c1c1c", padding: "80px 0", position: "relative" }}>

      {/* Subtle flickering grid on dark bg */}
      <FlickeringGrid
        color="#ffffff"
        maxOpacity={0.045}
        flickerChance={0.08}
        squareSize={3}
        gridGap={7}
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, white 10%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, white 10%, transparent 75%)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "#fff", marginBottom: 16, lineHeight: 1.05 }}>
          Ready to grow your brand with video?
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 17, color: "#aaa", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Let&apos;s find out if we&apos;re the right fit to take your content — and your audience — to the next level.
        </p>
        <a href="#contact" style={{ display: "inline-block", background: "#fff", color: "#000", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 9999, textDecoration: "none" }}>
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
}
