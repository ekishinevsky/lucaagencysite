"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

// TODO: Replace src, client, and category with Luca's actual project videos
const projects = [
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", client: "[Client Name]", category: "Brand Film", span: "col-span-2" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", client: "[Client Name]", category: "Social Campaign", span: "col-span-1" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", client: "[Client Name]", category: "Product Showcase", span: "col-span-1" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", client: "[Client Name]", category: "Video Editing", span: "col-span-1" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", client: "[Client Name]", category: "Event Coverage", span: "col-span-2" },
];

function VideoCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-[#1C1E1A] aspect-video cursor-pointer ${p.span}`}
      onMouseEnter={() => { setActive(true); videoRef.current?.play().catch(() => {}); }}
      onMouseLeave={() => { setActive(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
    >
      <video
        ref={videoRef}
        src={p.src}
        muted loop playsInline preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${active ? "scale-105 opacity-100" : "scale-100 opacity-70"}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0C0D0B] via-transparent to-transparent transition-opacity duration-500 ${active ? "opacity-60" : "opacity-100"}`} />
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-400 ${active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"}`}>
        <p className="font-[family-name:var(--font-body)] text-[10px] text-[#CDB07C] tracking-[0.25em] uppercase mb-1">{p.category}</p>
        <p className="font-[family-name:var(--font-display)] text-lg font-light text-[#E4DDD2]">{p.client}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 max-w-6xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">Our Work</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
            Hover to see<br />
            <em>it come alive.</em>
          </h2>
        </div>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5754] max-w-[260px] leading-relaxed">
          Every project built around one goal — content that moves people to act.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-3">
        {projects.map((p, i) => <VideoCard key={i} p={p} delay={i * 0.1} />)}
      </div>
    </section>
  );
}
