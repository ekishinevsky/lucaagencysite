"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// TODO: Replace with Luca's actual client results
const results = [
  { client: "[Client Name]", industry: "E-Commerce", metric: "+340%", label: "Instagram engagement", note: "800 → 12K followers in 90 days." },
  { client: "[Client Name]", industry: "Restaurant", metric: "$180K", label: "Revenue from content", note: "One viral video drove 400+ reservations in a week." },
  { client: "[Client Name]", industry: "Fitness Brand", metric: "2.4M", label: "Views in 30 days", note: "Launch campaign across TikTok and Instagram." },
  { client: "[Client Name]", industry: "Real Estate", metric: "+62%", label: "Lead conversion", note: "Listing videos cut time-on-market by 3 weeks." },
  { client: "[Client Name]", industry: "Retail", metric: "85K", label: "New followers in 60 days", note: "Social overhaul grew the audience 10× in 2 months." },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="results" ref={ref} className="py-40 bg-[#0C0D0B] overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">Results</p>
            <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
              Numbers that<br /><em>do the talking.</em>
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} aria-label="Previous"
              className="w-11 h-11 border border-white/[0.1] text-[#5A5754] hover:border-[rgba(184,150,90,0.5)] hover:text-[#CDB07C] transition-all duration-300 flex items-center justify-center font-[family-name:var(--font-body)] text-xs">
              ←
            </button>
            <button onClick={next} aria-label="Next"
              className="w-11 h-11 border border-white/[0.1] text-[#5A5754] hover:border-[rgba(184,150,90,0.5)] hover:text-[#CDB07C] transition-all duration-300 flex items-center justify-center font-[family-name:var(--font-body)] text-xs">
              →
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div ref={emblaRef} className="overflow-hidden pl-8 md:pl-[max(2rem,calc((100vw-72rem)/2))]">
          <div className="flex gap-4 touch-pan-y">
            {results.map((r, i) => (
              <div key={i}
                className="flex-none w-[300px] md:w-[360px] bg-[#1C1E1A] border border-white/[0.07] p-10 hover:border-[rgba(184,150,90,0.25)] transition-colors duration-400">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-[family-name:var(--font-body)] text-[10px] text-[#5A5754] tracking-[0.25em] uppercase">{r.industry}</span>
                  {/* TODO: Replace with <img src="/logos/[client].svg" className="h-4 opacity-30" /> */}
                  <span className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] border border-white/[0.06] px-3 py-1 tracking-widest">{r.client}</span>
                </div>
                <p className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] mb-2"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1 }}>
                  {r.metric}
                </p>
                <p className="font-[family-name:var(--font-body)] text-[11px] text-[#CDB07C] tracking-widest uppercase mb-6">{r.label}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5754] leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
