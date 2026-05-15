"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery", line: "We learn your brand, audience, and goals before anything else." },
  { num: "02", title: "Creative", line: "Scripts, concepts, and platform strategy locked in before we shoot." },
  { num: "03", title: "Production", line: "We shoot, edit, grade, and deliver — fast and polished." },
  { num: "04", title: "Growth", line: "We post, track, and optimize. Content that keeps compounding." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-40 max-w-6xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">
          How It Works
        </p>
        <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05]"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
          Simple process,<br /><em>serious results.</em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-0 border-t border-white/[0.07]">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="group border-b md:border-b-0 md:border-r border-white/[0.07] last:border-r-0 pt-10 pb-10 md:pr-8 hover:bg-[#1C1E1A]/30 transition-colors duration-400 px-6 md:px-0 md:pl-0 first:pl-0"
          >
            <span className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] tracking-[0.3em] block mb-8 group-hover:text-[#CDB07C] transition-colors duration-300">
              {s.num}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-light text-[#E4DDD2] mb-4 tracking-wide">
              {s.title}
            </h3>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5754] leading-relaxed">
              {s.line}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
