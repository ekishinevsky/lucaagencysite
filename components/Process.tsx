"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your brand, goals, and audience. Then we build a content strategy designed to grow your presence and drive real results.",
  },
  {
    num: "02",
    title: "Creative Development",
    desc: "Scripts, shot lists, visual concepts, and platform strategy all come together before a single camera rolls. No guesswork on set.",
  },
  {
    num: "03",
    title: "Production & Editing",
    desc: "We shoot, edit, color grade, and deliver polished content — fast. Every piece is optimized for the platform it will live on.",
  },
  {
    num: "04",
    title: "Launch & Growth",
    desc: "We post, monitor, analyze, and iterate. Your content doesn't just go live — it gets managed to maximize reach and engagement over time.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Simple process,<br />serious results.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`group p-10 border-[#1e1e1e] hover:bg-[#101010] transition-colors duration-300
              ${i === 0 ? "border-b border-r" : ""}
              ${i === 1 ? "border-b" : ""}
              ${i === 2 ? "border-r" : ""}
            `}
          >
            <div className="flex items-start gap-6">
              <span className="text-xs text-[#333] tracking-widest font-mono mt-1 group-hover:text-[#ff5c36] transition-colors">
                {step.num}
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
