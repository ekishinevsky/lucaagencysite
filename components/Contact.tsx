"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
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
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
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
              GET IN TOUCH
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                color: "#1c1c1c",
                marginBottom: 20,
                lineHeight: 1.05,
              }}
            >
              Book a Consultation Call
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 15,
                color: "#555",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 400,
              }}
            >
              Ready to unlock serious email revenue? Book a free consultation call and let&apos;s talk about your brand, your goals, and exactly how Mail Mosaic can help.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 14,
                color: "#888",
                lineHeight: 1.6,
              }}
            >
              No pressure. No commitments. Just a real conversation about what&apos;s possible.
            </p>
          </div>

          {/* Right — Contact form */}
          <div>
            {sent ? (
              <div
                style={{
                  padding: 40,
                  background: "#f9f9f6",
                  border: "1px solid #d7d0c8",
                  borderRadius: 8,
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "#1c1c1c",
                    marginBottom: 12,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "#666",
                  }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#444",
                      marginBottom: 6,
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d7d0c8",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#1c1c1c",
                      background: "#fff",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#444",
                      marginBottom: 6,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@brand.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d7d0c8",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#1c1c1c",
                      background: "#fff",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#444",
                      marginBottom: 6,
                    }}
                  >
                    Brand / Website
                  </label>
                  <input
                    type="text"
                    placeholder="yourbrand.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d7d0c8",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#1c1c1c",
                      background: "#fff",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#444",
                      marginBottom: 6,
                    }}
                  >
                    Monthly Revenue (approximate)
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d7d0c8",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#555",
                      background: "#fff",
                      outline: "none",
                    }}
                  >
                    <option value="">Select range</option>
                    <option>Under $10K/mo</option>
                    <option>$10K–$50K/mo</option>
                    <option>$50K–$200K/mo</option>
                    <option>$200K+/mo</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#444",
                      marginBottom: 6,
                    }}
                  >
                    Anything else?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a bit about your email program today..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d7d0c8",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#1c1c1c",
                      background: "#fff",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: "#000",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: 15,
                    padding: "14px 32px",
                    borderRadius: 9999,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
