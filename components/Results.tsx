"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// TODO: Replace with Luca's actual client results
const results = [
  { client: "[Client Name]", industry: "E-Commerce",   metric: "+340%", label: "Instagram engagement",    note: "800 → 12K followers in 90 days." },
  { client: "[Client Name]", industry: "Restaurant",   metric: "$180K", label: "Revenue from content",    note: "One viral video drove 400+ reservations in a week." },
  { client: "[Client Name]", industry: "Fitness Brand",metric: "2.4M",  label: "Views in 30 days",        note: "Launch campaign across TikTok & Instagram." },
  { client: "[Client Name]", industry: "Real Estate",  metric: "+62%",  label: "Lead conversion rate",    note: "Video listings cut time-on-market by 3 weeks." },
  { client: "[Client Name]", industry: "Retail",       metric: "85K",   label: "New followers in 60 days",note: "Social overhaul grew the account 10× in 2 months." },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="results" ref={ref} className="py-28 bg-[#161616] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">Results</p>
            <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
              Numbers that <em>do the talking.</em>
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev}
              className="w-10 h-10 border border-white/[0.08] text-[#6B6B6B] hover:border-[rgba(201,165,90,0.5)] hover:text-[#C9A55A] transition-all duration-300 flex items-center justify-center text-sm">
              ←
            </button>
            <button onClick={next}
              className="w-10 h-10 border border-white/[0.08] text-[#6B6B6B] hover:border-[rgba(201,165,90,0.5)] hover:text-[#C9A55A] transition-all duration-300 flex items-center justify-center text-sm">
              →
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 pl-6 lg:pl-[max(1.5rem,calc((100vw-1100px)/2+2.5rem))] touch-pan-y">
            {results.map((r, i) => (
              <div key={i} className="flex-none w-[280px] md:w-[340px] bg-[#1A1A1A] border border-white/[0.06] p-8 hover:border-[rgba(201,165,90,0.2)] transition-colors duration-300">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-[family-name:var(--font-body)] text-[10px] text-[#4a4a4a] tracking-[0.22em] uppercase">{r.industry}</span>
                  {/* TODO: Replace with <img src="/logos/client.svg" className="h-4 opacity-25" /> */}
                  <span className="font-[family-name:var(--font-body)] text-[10px] text-[#333333] border border-white/[0.05] px-3 py-0.5">{r.client}</span>
                </div>
                <p className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] mb-1"
                  style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", lineHeight: 1 }}>
                  {r.metric}
                </p>
                <p className="font-[family-name:var(--font-body)] text-[11px] text-[#C9A55A] tracking-[0.18em] uppercase mb-5">{r.label}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#4a4a4a] leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
