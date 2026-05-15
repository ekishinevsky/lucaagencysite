"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// TODO: Replace placeholders with Luca's actual client results and case studies
const results = [
  {
    client: "[Client Name]",
    industry: "E-Commerce",
    metric: "+340%",
    metricLabel: "Instagram engagement",
    detail: "Went from 800 to 12K followers in 90 days with a weekly short-form video strategy.",
  },
  {
    client: "[Client Name]",
    industry: "Restaurant",
    metric: "$180K",
    metricLabel: "Revenue attributed to content",
    detail: "A single viral video drove over 400 reservations in the first week after posting.",
  },
  {
    client: "[Client Name]",
    industry: "Fitness Brand",
    metric: "2.4M",
    metricLabel: "Views in 30 days",
    detail: "Product launch campaign across TikTok and Instagram generated 2.4M organic views.",
  },
  {
    client: "[Client Name]",
    industry: "Real Estate",
    metric: "+62%",
    metricLabel: "Lead conversion rate",
    detail: "Property listing videos increased inbound leads and cut time-on-market by 3 weeks.",
  },
  {
    client: "[Client Name]",
    industry: "Retail",
    metric: "85K",
    metricLabel: "New followers in 60 days",
    detail: "Social media overhaul with consistent video content grew the audience 10x in two months.",
  },
];

export default function Results() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="results" ref={sectionRef} className="py-28 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">Results</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Numbers that<br />do the talking.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#888] hover:border-[#ff5c36] hover:text-[#ff5c36] transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#888] hover:border-[#ff5c36] hover:text-[#ff5c36] transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div ref={emblaRef} className="overflow-hidden pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]">
          <div className="flex gap-4 touch-pan-y">
            {results.map((r, i) => (
              <div
                key={i}
                className="flex-none w-[320px] md:w-[380px] bg-[#101010] border border-[#1e1e1e] rounded-2xl p-8 hover:border-[#ff5c36]/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs text-[#444] tracking-widest uppercase">{r.industry}</span>
                  {/* TODO: Replace with <img src="/logos/[client].svg" className="h-5 opacity-40" /> */}
                  <span className="text-xs text-[#333] border border-[#1e1e1e] px-3 py-1 rounded-full">
                    {r.client}
                  </span>
                </div>
                <p className="text-5xl font-bold tracking-tight text-[#f0f0f0] mb-2">{r.metric}</p>
                <p className="text-[#ff5c36] text-sm mb-6">{r.metricLabel}</p>
                <p className="text-[#555] text-sm leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
