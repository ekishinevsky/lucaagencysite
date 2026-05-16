"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "What types of content do you create?",
    a: "We produce brand films, product videos, social media content (Reels, TikToks, YouTube Shorts), event coverage, talking-head videos, and UGC-style ad creative. Every piece is built for the platform it lives on.",
  },
  {
    q: "How long does a video project take?",
    a: "Most projects are delivered within 5–7 business days after the shoot. For larger campaigns or same-day event coverage, timelines are discussed upfront so there are never surprises.",
  },
  {
    q: "Do you manage social media too?",
    a: "Yes. Social media management is a core service — strategy, content production, posting, caption writing, community engagement, and monthly performance reporting. We handle the whole thing.",
  },
  {
    q: "Do you work with businesses outside Boston?",
    a: "Boston is home base, but we travel for the right projects. Most of our social media management clients work with us fully remotely — location isn't a barrier.",
  },
  {
    q: "How do we get started?",
    a: "Book a free discovery call. We'll talk through your goals, current content situation, and where you want to be — no commitment, just a real conversation.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #d7d0c8" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "#1c1c1c", lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <span style={{ fontSize: 22, color: "#666", flexShrink: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s", lineHeight: 1 }}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "#555", lineHeight: 1.7, paddingBottom: 20 }}>
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
    <section id="faq" style={{ background: "#f9f9f6", padding: "80px 0", borderTop: "1px solid #d7d0c8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: 12 }}>
          FAQ
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1c1c1c", marginBottom: 40, lineHeight: 1.05 }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: 720 }}>
          {faqs.map((f, i) => <FAQItem key={i} faq={f} />)}
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="#contact" style={{ display: "inline-block", background: "#000", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 9999, textDecoration: "none" }}>
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
