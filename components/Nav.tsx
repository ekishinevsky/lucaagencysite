"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Why Us?", href: "#why-us" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: scrolled ? "1px solid #d7d0c8" : "1px solid transparent",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            letterSpacing: "0.04em",
            color: "#1c1c1c",
            textDecoration: "none",
          }}
        >
          LUCA AGENCY
        </a>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 14,
                color: "#1c1c1c",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="nav-cta-desktop"
          style={{
            background: "#000",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 13,
            padding: "10px 20px",
            borderRadius: 9999,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Book a Discovery Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 24, height: 2, background: "#1c1c1c", marginBottom: 5 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1c1c1c", marginBottom: 5 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1c1c1c" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #d7d0c8",
            padding: "16px 24px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 15,
                color: "#1c1c1c",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid #f0ede8",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              marginTop: 16,
              background: "#000",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 13,
              padding: "10px 20px",
              borderRadius: 9999,
              textDecoration: "none",
            }}
          >
            Book a Discovery Call
          </a>
        </div>
      )}

      <style>{`
        .nav-links-desktop { display: flex; gap: 28px; align-items: center; }
        .nav-cta-desktop { display: inline-block; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
