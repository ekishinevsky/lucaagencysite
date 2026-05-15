export default function FitCheck() {
  return (
    <section
      id="fit"
      style={{
        background: "#1c1c1c",
        padding: "80px 0",
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
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.05,
          }}
        >
          Are you a good fit?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 17,
            color: "#aaa",
            marginBottom: 36,
            maxWidth: 480,
            margin: "0 auto 36px",
          }}
        >
          Let&apos;s find out if we&apos;re the right match to build something great together.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#000",
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
    </section>
  );
}
