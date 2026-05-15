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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-40 max-w-6xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">
          What We Do
        </p>
        <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05]"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
          Full-service creative,<br />
          <em>start to finish.</em>
        </h2>
      </motion.div>

      <div className="border-t border-white/[0.07]">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group border-b border-white/[0.07] py-12 grid grid-cols-12 gap-8 hover:bg-[#1C1E1A]/40 px-4 -mx-4 transition-colors duration-400 cursor-default"
          >
            <div className="col-span-1 pt-1">
              <span className="font-[family-name:var(--font-display)] text-lg font-light text-[#5A5754] group-hover:text-[#CDB07C] transition-colors duration-300 italic">
                {s.num}
              </span>
            </div>
            <div className="col-span-11 md:col-span-4">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-light text-[#E4DDD2] tracking-wide">
                {s.title}
              </h3>
            </div>
            <div className="col-span-11 md:col-span-4 md:col-start-6">
              <p className="font-[family-name:var(--font-body)] text-sm text-[#9A9490] leading-relaxed mb-5">{s.line}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="font-[family-name:var(--font-body)] text-[10px] text-[#5A5754] border border-white/[0.07] px-3 py-1 tracking-widest uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
