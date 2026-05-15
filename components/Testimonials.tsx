"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// TODO: Replace with Luca's actual client testimonials
const testimonials = [
  { quote: "[Client testimonial — specific, results-focused, genuine. What changed and why they'd recommend it.]", name: "[Client Name]", role: "[Title, Company]" },
  { quote: "[Second testimonial covering a different service — social media or editing.]", name: "[Client Name]", role: "[Title, Company]" },
  { quote: "[Third testimonial about the working relationship and experience.]", name: "[Client Name]", role: "[Title, Company]" },
  { quote: "[Fourth testimonial with a specific result or before/after moment.]", name: "[Client Name]", role: "[Title, Company]" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [idx, setIdx] = useState(0);

  const scrollTo = useCallback((i: number) => { emblaApi?.scrollTo(i); setIdx(i); }, [emblaApi]);

  return (
    <section id="testimonials" ref={ref} className="py-40 bg-[#111210] overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
            What clients<br /><em>say.</em>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div ref={emblaRef} className="overflow-hidden pl-8 md:pl-[max(2rem,calc((100vw-72rem)/2))]">
          <div className="flex gap-5 touch-pan-y">
            {testimonials.map((t, i) => (
              <div key={i}
                className="flex-none w-[320px] md:w-[460px] bg-[#1C1E1A] border border-white/[0.07] p-10 flex flex-col justify-between min-h-[220px]">
                <p className="font-[family-name:var(--font-display)] text-lg font-light text-[#9A9490] leading-relaxed italic mb-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  {/* TODO: Replace with <img src="/avatars/[client].jpg" className="w-9 h-9 rounded-full object-cover" /> */}
                  <div className="w-9 h-9 bg-[#111210] border border-white/[0.07] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38]">?</span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#E4DDD2]">{t.name}</p>
                    <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-8 px-8 md:px-[max(2rem,calc((100vw-72rem)/2))]">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)}
              className={`h-px rounded-none transition-all duration-400 ${idx === i ? "w-10 bg-[#CDB07C]" : "w-4 bg-[#2a2a28]"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
