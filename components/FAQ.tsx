"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with brands of all sizes — from local Boston businesses and restaurants to e-commerce brands, fitness companies, and real estate agencies. If you need video content or a stronger social media presence, we can help.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most video projects are delivered within 5–7 business days after the shoot. Social media management is ongoing and starts showing meaningful results within the first 30–60 days.",
  },
  {
    q: "Do you only shoot in Boston?",
    a: "Boston is our home base, but we travel for the right projects. Reach out and let us know where you're located — we'll figure it out.",
  },
  {
    q: "What's included in social media management?",
    a: "Content strategy, video/photo production, caption writing, scheduling, community management, and monthly performance reporting. We handle everything so you don't have to.",
  },
  {
    q: "Can I provide my own footage for editing?",
    a: "Absolutely. If you have raw footage you want polished, we offer standalone editing packages including color grading, motion graphics, and sound design.",
  },
  {
    q: "How do we get started?",
    a: "Book a free discovery call and we'll talk through your goals, timeline, and budget. No commitment required — just a conversation.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-[#1e1e1e]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[#f0f0f0] text-base font-medium group-hover:text-[#ff5c36] transition-colors pr-8">
          {faq.q}
        </span>
        <span
          className={`text-[#555] text-lg flex-none transition-transform duration-300 ${
            open ? "rotate-45 text-[#ff5c36]" : ""
          }`}
        >
          +
        </span>
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
            <p className="pb-6 text-[#555] text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-28"
        >
          <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Questions<br />answered.
          </h2>
          <p className="text-[#555] text-sm leading-relaxed mb-8">
            Anything else on your mind? Book a call and we&apos;ll walk through it together.
          </p>
          <a
            href="#contact"
            className="inline-block text-sm border border-[#1e1e1e] text-[#888] hover:border-[#ff5c36] hover:text-[#ff5c36] px-6 py-3 rounded-full transition-colors"
          >
            Get in Touch →
          </a>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
