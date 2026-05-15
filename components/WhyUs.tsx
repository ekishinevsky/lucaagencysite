"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  "Dedicated point of contact",
  "In-house production team",
  "Strategy with every package",
  "Social media growth built-in",
  "Turnaround under 5 business days",
  "Unlimited revisions",
  "Boston-based & available same day",
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" ref={ref} className="py-40 bg-[#0C0D0B]">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">
            The Difference
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
            Why clients choose us<br />
            <em>over the alternatives.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-white/[0.07] overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/[0.07] bg-[#1C1E1A]/50">
            <div className="p-6 col-span-1" />
            <div className="p-6 border-l border-white/[0.07] text-center">
              <span className="font-[family-name:var(--font-body)] text-[10px] text-[#5A5754] tracking-[0.25em] uppercase">Others</span>
            </div>
            <div className="p-6 border-l border-white/[0.07] text-center bg-[rgba(184,150,90,0.04)]">
              <span className="font-[family-name:var(--font-body)] text-[10px] text-[#CDB07C] tracking-[0.25em] uppercase">Luca Agency</span>
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="grid grid-cols-3 border-b border-white/[0.07] last:border-b-0 hover:bg-[#1C1E1A]/30 transition-colors"
            >
              <div className="p-5 flex items-center">
                <span className="font-[family-name:var(--font-body)] text-sm text-[#9A9490]">{row}</span>
              </div>
              <div className="p-5 border-l border-white/[0.07] flex items-center justify-center">
                <span className="text-[#3a3a38] text-lg">✕</span>
              </div>
              <div className="p-5 border-l border-white/[0.07] bg-[rgba(184,150,90,0.03)] flex items-center justify-center">
                <span className="text-[#CDB07C] text-sm">✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
