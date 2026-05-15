"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-40 bg-[#0C0D0B]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Photo — TODO: Replace with <img src="/luca.jpg" className="w-full h-full object-cover" /> */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] bg-[#1C1E1A] border border-white/[0.07] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1E1A] via-[#161714] to-[#0C0D0B]" />
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#CDB07C]/30 via-[#CDB07C]/10 to-transparent" />
            <div className="absolute bottom-8 left-8">
              {/* TODO: Remove this placeholder text when photo is added */}
              <p className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] tracking-[0.2em] uppercase">Photo placeholder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-8">
              About
            </p>
            <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05] mb-10"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
              Built in Boston.<br /><em>Built for growth.</em>
            </h2>

            {/* TODO: Replace with Luca's actual story */}
            <p className="font-[family-name:var(--font-body)] text-sm text-[#9A9490] leading-relaxed mb-5">
              [Luca's story — how the agency started and what drives the work.]
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#9A9490] leading-relaxed mb-14">
              [What makes the approach different. Keep it genuine and direct.]
            </p>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.07]">
              {/* TODO: Replace with real stats */}
              {[
                { num: "[X]+", label: "Brands" },
                { num: "[X]M+", label: "Views" },
                { num: "[X]+", label: "Videos" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] text-4xl mb-1">{s.num}</p>
                  <p className="font-[family-name:var(--font-body)] text-[10px] text-[#5A5754] tracking-[0.25em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
