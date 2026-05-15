"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  { q: "What types of businesses do you work with?",  a: "Brands of all sizes — local Boston businesses, e-commerce, fitness, restaurants, and real estate. If you need video or social growth, we can help." },
  { q: "How long does a typical project take?",       a: "Most video projects are delivered within 5–7 business days after the shoot. Social media results show within 30–60 days." },
  { q: "Do you only work in Boston?",                 a: "Boston is home base, but we travel for the right projects. Reach out and we'll figure it out." },
  { q: "What's included in social media management?", a: "Strategy, content production, scheduling, community management, and monthly performance reports. Everything." },
  { q: "Can I send my own footage for editing?",      a: "Yes. Standalone editing packages are available — color grading, motion graphics, and sound design included." },
  { q: "How do we get started?",                      a: "Book a free discovery call. No commitment — just a conversation about what you need." },
];

function Item({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="border-b border-white/[0.06]"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
        <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B] group-hover:text-[#EDEDE8] transition-colors duration-200 pr-8">
          {faq.q}
        </span>
        <span className={`text-lg flex-none transition-all duration-300 ${open ? "text-[#C9A55A] rotate-45" : "text-[#333333]"}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-[family-name:var(--font-body)] text-sm text-[#4a4a4a] leading-relaxed pb-6">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" ref={ref} className="py-28 bg-[#161616]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:sticky md:top-28"
          >
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">FAQ</p>
            <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06] mb-6"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
              Questions <em>answered.</em>
            </h2>
            <a href="#contact"
              className="font-[family-name:var(--font-body)] text-[11px] text-[#4a4a4a] hover:text-[#C9A55A] tracking-[0.18em] uppercase transition-colors duration-200">
              More questions? Get in touch →
            </a>
          </motion.div>

          <div>
            {faqs.map((f, i) => <Item key={i} faq={f} i={i} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
