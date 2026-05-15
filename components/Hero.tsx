"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      {/* TODO: Replace src with Luca's hero reel */}
      <video
        ref={videoRef}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0B] via-[#0C0D0B]/30 to-transparent" />
      <div className="absolute inset-0 bg-[#0C0D0B]/25" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#9A9490] tracking-[0.3em] uppercase mb-8">
            Boston-Based Creative Agency
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-light leading-[1.02] tracking-[-0.01em] text-[#E4DDD2] mb-10"
            style={{ fontSize: "clamp(3.2rem, 7vw, 6.5rem)" }}>
            We make your brand<br />
            <em className="text-[#CDB07C] not-italic">impossible</em> to ignore.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="#portfolio"
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase bg-[#CDB07C] text-[#111210] px-8 py-4 hover:bg-[#E4DDD2] transition-colors duration-300">
              See Our Work
            </a>
            <a href="#contact"
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase border border-white/10 text-[#9A9490] px-8 py-4 hover:border-[rgba(184,150,90,0.4)] hover:text-[#CDB07C] transition-all duration-300">
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }}
        className="absolute bottom-0 right-16 w-px h-24 bg-gradient-to-b from-transparent via-[#5A5754] to-transparent"
      />
    </section>
  );
}
