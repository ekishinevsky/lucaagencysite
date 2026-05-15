"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "How is Mail Mosaic different?",
    a: "We operate as a true extension of your team. Unlike typical agencies, we offer founder-led strategy, daily communication, and hands-on execution — not templates and interns.",
  },
  {
    q: "What does Mail Mosaic actually do?",
    a: "We manage your full email & SMS marketing: flows, campaigns, list segmentation, deliverability, and reporting. Everything from strategy to execution.",
  },
  {
    q: "What kind of results can I expect?",
    a: "Most clients see meaningful revenue lift within the first 30 days. Results vary by brand, but our case studies show consistent 2–5x returns on investment.",
  },
  {
    q: "How often do you send campaigns?",
    a: "Typically 3–4 per week, adjusted based on your list size, segment health, and seasonal strategy.",
  },
  {
    q: "How involved do I need to be?",
    a: "Minimal. We handle the strategy, writing, design, and execution. We just need your brand assets and approvals.",
  },
];

function FAQItem({ faq, i }: { faq: (typeof faqs)[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #d7d0c8",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 15,
            color: "#1c1c1c",
            lineHeight: 1.4,
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            fontSize: 22,
            color: "#666",
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 15,
                color: "#555",
                lineHeight: 1.7,
                paddingBottom: 20,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{
        background: "#f9f9f6",
        padding: "80px 0",
        borderTop: "1px solid #d7d0c8",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
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
          FAQ
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#1c1c1c",
            marginBottom: 40,
            lineHeight: 1.05,
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div style={{ maxWidth: 720 }}>
          {faqs.map((f, i) => (
            <FAQItem key={i} faq={f} i={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 40 }}>
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
    </section>
  );
}
