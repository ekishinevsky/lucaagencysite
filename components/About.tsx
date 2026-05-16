export default function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #d7d0c8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">

          {/* TODO: Replace with Luca's actual photo */}
          <div style={{ background: "#d7d0c8", borderRadius: 8, aspectRatio: "3 / 4", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#999" }}>[Photo]</span>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: 12 }}>
              ABOUT
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 17, color: "#1c1c1c", marginBottom: 20 }}>
              Hey, I&apos;m Luca — founder of Luca Agency
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 24 }}>
              With years of hands-on experience in social media and content creation, I started Luca Agency after watching brands consistently leave growth on the table — not because their product wasn&apos;t great, but because their content wasn&apos;t doing it justice.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 24 }}>
              Our team has helped pages rack up over 30 million views on a single video, grown accounts from zero to tens of thousands of engaged followers, and built content engines that keep working long after we hit publish. We&apos;re not an agency that sends you a report and disappears — we&apos;re in it with you, every step of the way.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 32 }}>
              Based in Boston. Built for brands that are serious about growing. If you want a team that treats your business like their own — you&apos;re in the right place.
            </p>
            <a href="#contact" style={{ display: "inline-block", background: "#000", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 9999, textDecoration: "none" }}>
              Book a Discovery Call
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
