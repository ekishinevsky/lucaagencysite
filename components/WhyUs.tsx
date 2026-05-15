"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  "Dedicated point of contact",
  "In-house production team",
  "Strategy included every package",
  "Social media growth built-in",
  "Turnaround under 5 business days",
  "Unlimited revisions",
  "Boston-based, available same day",
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" ref={ref} className="py-28 bg-[#161616]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">
            The Difference
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06]"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
            Why clients choose us <em>over the alternatives.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="border border-white/[0.06] overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_120px_140px] bg-[#1A1A1A]">
            <div className="py-4 px-6" />
            <div className="py-4 px-4 border-l border-white/[0.06] text-center">
              <span className="font-[family-name:var(--font-body)] text-[10px] text-[#4a4a4a] tracking-[0.22em] uppercase">Others</span>
            </div>
            <div className="py-4 px-4 border-l border-white/[0.06] bg-[rgba(201,165,90,0.05)] text-center">
              <span className="font-[family-name:var(--font-body)] text-[10px] text-[#C9A55A] tracking-[0.22em] uppercase">Luca Agency</span>
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="grid grid-cols-[1fr_120px_140px] border-t border-white/[0.06] hover:bg-[#1A1A1A] transition-colors"
            >
              <div className="py-4 px-6">
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B]">{row}</span>
              </div>
              <div className="py-4 px-4 border-l border-white/[0.06] flex items-center justify-center">
                <span className="text-[#333333]">✕</span>
              </div>
              <div className="py-4 px-4 border-l border-white/[0.06] bg-[rgba(201,165,90,0.04)] flex items-center justify-center">
                <span className="text-[#C9A55A] text-sm">✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
