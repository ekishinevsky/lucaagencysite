"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "I",
    title: "Video Production",
    desc: "From concept to camera — we handle everything. Scripting, location scouting, directing, and shooting content that stops the scroll and tells your story.",
    tags: ["Brand Films", "Commercials", "Product Videos", "Event Coverage"],
  },
  {
    num: "II",
    title: "Video Editing",
    desc: "Raw footage becomes polished content. Color grading, motion graphics, sound design, and pacing that keeps viewers watching until the very last frame.",
    tags: ["Color Grading", "Motion Graphics", "Short-Form Reels", "Long-Form"],
  },
  {
    num: "III",
    title: "Social Media Management",
    desc: "Strategy, content, and growth — all handled. We build and manage your presence across platforms so you can focus on running your business.",
    tags: ["Instagram", "TikTok", "YouTube", "LinkedIn"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Full-service creative,<br />start to finish.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-0 border-t border-[#1e1e1e]">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group border-b md:border-b-0 md:border-r border-[#1e1e1e] last:border-r-0 p-8 hover:bg-[#101010] transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-10">
              <span className="text-5xl font-bold text-[#1e1e1e] group-hover:text-[#ff5c36] transition-colors duration-300 leading-none">
                {s.num}
              </span>
              <span className="text-[#333] text-xs tracking-widest uppercase">0{i + 1}</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">{s.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed mb-8">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#555] border border-[#1e1e1e] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
