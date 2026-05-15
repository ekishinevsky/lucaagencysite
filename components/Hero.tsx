"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* TODO: Replace src with Luca's hero reel */}
      <video
        ref={videoRef}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
      <div className="absolute inset-0 bg-[#0D0D0D]/20" />

      <div className="relative z-10 w-full">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-6">
              Boston-Based Creative Agency
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.04] mb-10"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)" }}>
              We make your brand<br />
              <em className="text-[#C9A55A]">impossible</em> to ignore.
            </h1>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio"
                className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] uppercase bg-[#C9A55A] text-[#0D0D0D] px-8 py-3.5 hover:bg-[#EDEDE8] transition-colors duration-300">
                See Our Work
              </a>
              <a href="#contact"
                className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] uppercase border border-white/10 text-[#6B6B6B] px-8 py-3.5 hover:border-[rgba(201,165,90,0.4)] hover:text-[#C9A55A] transition-all duration-300">
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
