const links = [
  { label: "Why Us?", href: "#why-us" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid #d7d0c8",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            letterSpacing: "0.04em",
            color: "#1c1c1c",
            textDecoration: "none",
          }}
        >
          MAIL MOSAIC
        </a>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 24px",
            justifyContent: "center",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 13,
                color: "#666",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 13,
            color: "#999",
          }}
        >
          © Copyright 2025 Mail Mosaic
        </p>
      </div>
    </footer>
  );
}
