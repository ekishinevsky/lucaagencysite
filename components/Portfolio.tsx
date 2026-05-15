"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// TODO: Replace src, client, and category with Luca's actual project videos
const projects = [
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    client: "[Client Name]",
    category: "Brand Film",
    size: "large",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    client: "[Client Name]",
    category: "Social Media Campaign",
    size: "small",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    client: "[Client Name]",
    category: "Product Showcase",
    size: "small",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    client: "[Client Name]",
    category: "Video Editing",
    size: "small",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    client: "[Client Name]",
    category: "Event Coverage",
    size: "small",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    client: "[Client Name]",
    category: "Brand Campaign",
    size: "large",
  },
];

function VideoCard({ project, delay }: { project: (typeof projects)[0]; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={`group relative overflow-hidden rounded-xl bg-[#101010] cursor-pointer ${
        project.size === "large" ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={project.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay — fades on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent transition-opacity duration-500 ${
          hovered ? "opacity-60" : "opacity-100"
        }`}
      />

      {/* Project info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[#ff5c36] text-xs tracking-widest uppercase mb-1">{project.category}</p>
        <p className="text-[#f0f0f0] font-semibold text-lg tracking-tight">{project.client}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hover to see<br />it come alive.
          </h2>
        </div>
        <p className="text-[#555] text-sm max-w-xs leading-relaxed">
          Every project is built around one goal — content that actually moves people to act.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <VideoCard key={i} project={p} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
