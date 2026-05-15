"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder — TODO: Replace with <img src="/luca-photo.jpg" ... /> */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#101010] border border-[#1e1e1e]"
          >
            {/* Gradient placeholder for photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                {/* TODO: Replace with actual photo and remove placeholder text */}
                <p className="text-[#333] text-xs tracking-widest uppercase mb-2">Photo Placeholder</p>
                <p className="text-[#222] text-sm">Replace with Luca's photo</p>
              </div>
            </div>
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff5c36] via-[#ff5c36]/30 to-transparent" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-6">About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Built in Boston.<br />Built for growth.
            </h2>
            {/* TODO: Replace with Luca's actual story */}
            <p className="text-[#666] text-base leading-relaxed mb-6">
              [Luca's story goes here — how the agency started, what drives the work, and why Boston is home base. Make it personal and specific.]
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-10">
              [A second paragraph about the team's approach, values, or what makes the work different. Keep it genuine and direct — clients connect with real people, not corporate speak.]
            </p>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#1e1e1e]">
              {/* TODO: Replace with real stats */}
              {[
                { num: "[X]+", label: "Brands Grown" },
                { num: "[X]M+", label: "Views Generated" },
                { num: "[X]+", label: "Videos Produced" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-[#f0f0f0] mb-1">{stat.num}</p>
                  <p className="text-xs text-[#555] tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
