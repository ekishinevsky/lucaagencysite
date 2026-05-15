"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="py-28 bg-[#161616]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo placeholder — TODO: Replace entire div with <img src="/luca.jpg" className="w-full aspect-[3/4] object-cover" /> */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden border border-white/[0.06]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]" />
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#C9A55A]/40 via-[#C9A55A]/10 to-transparent" />
            <p className="absolute bottom-6 left-6 font-[family-name:var(--font-body)] text-[10px] text-[#2a2a2a] tracking-[0.2em] uppercase">
              {/* TODO: Remove when photo is added */}
              Photo placeholder
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">About</p>
            <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06] mb-8"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
              Built in Boston. <em>Built for growth.</em>
            </h2>

            {/* TODO: Replace with Luca's actual story */}
            <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B] leading-relaxed mb-4">
              [Luca&apos;s story — how the agency started and what drives the work.]
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B] leading-relaxed mb-12">
              [What makes the approach different. Keep it genuine and direct.]
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
              {/* TODO: Replace [X] with real numbers */}
              {[
                { num: "[X]+",  label: "Brands" },
                { num: "[X]M+", label: "Views" },
                { num: "[X]+",  label: "Videos" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] text-3xl mb-1">{s.num}</p>
                  <p className="font-[family-name:var(--font-body)] text-[10px] text-[#4a4a4a] tracking-[0.22em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
