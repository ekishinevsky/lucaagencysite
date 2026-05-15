"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery",   line: "We learn your brand, audience, and goals before anything else." },
  { num: "02", title: "Creative",    line: "Scripts, concepts, and platform strategy locked in before we shoot." },
  { num: "03", title: "Production",  line: "We shoot, edit, grade, and deliver — fast and polished." },
  { num: "04", title: "Growth",      line: "We post, track, and optimise. Content that keeps compounding." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="py-28 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">How It Works</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06]"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
            Simple process, <em>serious results.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/[0.06]">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group pt-10 pb-10 pr-8 border-b sm:border-b-0 border-r-0 lg:border-r border-white/[0.06] last:border-r-0 hover:bg-[#161616] px-3 -mx-3 lg:mx-0 lg:px-0 lg:pr-8 transition-colors duration-300"
            >
              <span className="font-[family-name:var(--font-body)] text-[10px] text-[#333333] tracking-[0.25em] block mb-8 group-hover:text-[#C9A55A] transition-colors duration-300">
                {s.num}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light text-[#EDEDE8] mb-3">
                {s.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4a4a4a] leading-relaxed">
                {s.line}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
