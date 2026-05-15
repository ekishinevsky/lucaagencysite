"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "I",
    title: "Video Production",
    line: "Concept to camera. We script, direct, and shoot content that commands attention.",
    tags: ["Brand Films", "Commercials", "Product Videos", "Event Coverage"],
  },
  {
    num: "II",
    title: "Video Editing",
    line: "Raw footage refined. Color grading, motion graphics, and pacing that keeps eyes glued.",
    tags: ["Color Grading", "Motion Graphics", "Reels", "Long-Form"],
  },
  {
    num: "III",
    title: "Social Media",
    line: "Strategy, content, growth. We run your presence so you can run your business.",
    tags: ["Instagram", "TikTok", "YouTube", "LinkedIn"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="py-28 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06]"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
            Full-service creative, <em>start to finish.</em>
          </h2>
        </motion.div>

        <div className="border-t border-white/[0.06]">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-10 border-b border-white/[0.06] py-10 hover:bg-[#161616] px-3 -mx-3 transition-colors duration-300"
            >
              <span className="font-[family-name:var(--font-display)] text-2xl font-light text-[#333333] group-hover:text-[#C9A55A] transition-colors duration-300 italic">
                {s.num}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light text-[#EDEDE8] self-center">
                {s.title}
              </h3>
              <div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B] mb-5 leading-relaxed">{s.line}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="font-[family-name:var(--font-body)] text-[10px] text-[#4a4a4a] border border-white/[0.06] px-3 py-1 tracking-[0.15em] uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
