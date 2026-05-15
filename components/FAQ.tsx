"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  { q: "What types of businesses do you work with?", a: "Brands of all sizes — local Boston businesses, e-commerce, fitness, restaurants, and real estate. If you need video or social growth, we can help." },
  { q: "How long does a typical project take?", a: "Most video projects are delivered within 5–7 business days after the shoot. Social media results show within 30–60 days." },
  { q: "Do you only work in Boston?", a: "Boston is home base, but we travel for the right projects. Reach out and we'll figure it out." },
  { q: "What's included in social media management?", a: "Strategy, content production, scheduling, community management, and monthly performance reports. Everything." },
  { q: "Can I send my own footage for editing?", a: "Yes. Standalone editing packages are available — color grading, motion graphics, and sound design included." },
  { q: "How do we get started?", a: "Book a free discovery call. No commitment — just a conversation about what you need." },
];

function Item({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className="border-b border-white/[0.07]"
    >
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group">
        <span className="font-[family-name:var(--font-body)] text-sm text-[#9A9490] group-hover:text-[#E4DDD2] transition-colors duration-300 pr-8">
          {faq.q}
        </span>
        <span className={`text-[#5A5754] text-xl flex-none transition-all duration-300 ${open ? "rotate-45 text-[#CDB07C]" : ""}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5754] leading-relaxed pb-7">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-40 max-w-6xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:sticky md:top-28"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">FAQ</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
            Questions<br /><em>answered.</em>
          </h2>
          <a href="#contact"
            className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] hover:text-[#CDB07C] tracking-[0.2em] uppercase transition-colors duration-300">
            Still have questions? Get in touch →
          </a>
        </motion.div>

        <div>
          {faqs.map((f, i) => <Item key={i} faq={f} i={i} />)}
        </div>
      </div>
    </section>
  );
}
