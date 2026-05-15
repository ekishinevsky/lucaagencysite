"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background video — TODO: Replace src with Luca's hero reel */}
      <video
        ref={videoRef}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-6">
            Boston-Based Creative Agency
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl mb-8">
            WE MAKE YOUR{" "}
            <span className="text-[#ff5c36]">BRAND</span>
            <br />
            IMPOSSIBLE TO
            <br />
            IGNORE.
          </h1>
          <p className="text-[#888] text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Video production, editing, and social media management — built to
            grow your audience and convert viewers into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="bg-[#ff5c36] text-[#080808] font-semibold px-8 py-4 rounded-full hover:bg-[#ff7a5a] transition-colors text-sm tracking-wide uppercase"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="border border-[#333] text-[#f0f0f0] px-8 py-4 rounded-full hover:border-[#f0f0f0] transition-colors text-sm tracking-wide uppercase"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#555] text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#555] to-transparent"
        />
      </motion.div>
    </section>
  );
}
