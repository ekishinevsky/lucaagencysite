"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "Dedicated point of contact", us: true, them: false },
  { label: "In-house production team", us: true, them: false },
  { label: "Strategy included with every package", us: true, them: false },
  { label: "Social media growth built-in", us: true, them: false },
  { label: "Turnaround under 5 business days", us: true, them: false },
  { label: "Unlimited revision rounds", us: true, them: false },
  { label: "Boston-based, available same day", us: true, them: false },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">The Difference</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Why clients choose us over the alternatives.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-[#1e1e1e] rounded-2xl overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 bg-[#101010] border-b border-[#1e1e1e]">
            <div className="p-5 col-span-1" />
            <div className="p-5 border-l border-[#1e1e1e] text-center">
              <span className="text-xs text-[#555] tracking-widest uppercase">Other Agencies</span>
            </div>
            <div className="p-5 border-l border-[#1e1e1e] bg-[#ff5c36]/5 text-center">
              <span className="text-xs text-[#ff5c36] tracking-widest uppercase font-semibold">Luca Agency</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-[#1e1e1e] last:border-b-0 hover:bg-[#101010] transition-colors`}
            >
              <div className="p-5 flex items-center">
                <span className="text-sm text-[#888]">{row.label}</span>
              </div>
              <div className="p-5 border-l border-[#1e1e1e] flex items-center justify-center">
                {row.them ? (
                  <Check color="#888" />
                ) : (
                  <X />
                )}
              </div>
              <div className="p-5 border-l border-[#1e1e1e] bg-[#ff5c36]/5 flex items-center justify-center">
                {row.us ? <Check color="#ff5c36" /> : <X />}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Check({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8.5" stroke={color} strokeOpacity="0.3" />
      <path d="M5.5 9L7.5 11L12.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function X() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8.5" stroke="#333" />
      <path d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
