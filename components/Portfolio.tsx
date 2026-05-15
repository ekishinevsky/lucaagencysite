"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

// TODO: Replace all src, client, category with Luca's actual project videos
const projects = [
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",    client: "[Client Name]", category: "Brand Film",       cols: "md:col-span-2" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",   client: "[Client Name]", category: "Social Campaign",   cols: "md:col-span-1" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",     client: "[Client Name]", category: "Product Showcase",   cols: "md:col-span-1" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",       client: "[Client Name]", category: "Video Edit",         cols: "md:col-span-1" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",client: "[Client Name]", category: "Event Coverage",     cols: "md:col-span-2" },
];

function Card({ p, delay }: { p: typeof projects[0]; delay: number }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay }}
      className={`group relative overflow-hidden bg-[#1A1A1A] aspect-video cursor-pointer ${p.cols}`}
      onMouseEnter={() => { setOn(true); vidRef.current?.play().catch(() => {}); }}
      onMouseLeave={() => { setOn(false); if (vidRef.current) { vidRef.current.pause(); vidRef.current.currentTime = 0; } }}
    >
      <video
        ref={vidRef}
        src={p.src}
        muted loop playsInline preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${on ? "scale-105 opacity-100" : "opacity-60"}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 to-transparent transition-opacity duration-500 ${on ? "opacity-50" : "opacity-100"}`} />
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ${on ? "translate-y-0" : "translate-y-1"}`}>
        <p className="font-[family-name:var(--font-body)] text-[10px] text-[#C9A55A] tracking-[0.22em] uppercase mb-1">{p.category}</p>
        <p className="font-[family-name:var(--font-display)] text-lg font-light text-[#EDEDE8]">{p.client}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">Our Work</p>
            <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
              Hover to see <em>it come alive.</em>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#4a4a4a] max-w-[240px] leading-relaxed">
            Content built to move people, not just fill a feed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {projects.map((p, i) => <Card key={i} p={p} delay={i * 0.08} />)}
        </div>

      </div>
    </section>
  );
}
