"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// TODO: Replace with Luca's actual client testimonials
const testimonials = [
  { quote: "[Client testimonial — specific, results-focused. What changed and why they'd recommend it.]", name: "[Client Name]", role: "[Title, Company]" },
  { quote: "[Second testimonial covering a different service — social media or editing.]",                name: "[Client Name]", role: "[Title, Company]" },
  { quote: "[Third testimonial about the working relationship and experience.]",                          name: "[Client Name]", role: "[Title, Company]" },
  { quote: "[Fourth testimonial with a specific result or before/after moment.]",                        name: "[Client Name]", role: "[Title, Company]" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [idx, setIdx] = useState(0);

  const scrollTo = useCallback((i: number) => { emblaApi?.scrollTo(i); setIdx(i); }, [emblaApi]);

  return (
    <section id="testimonials" ref={ref} className="py-28 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">Testimonials</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.06]"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
            What clients <em>say.</em>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 pl-6 lg:pl-[max(1.5rem,calc((100vw-1100px)/2+2.5rem))] touch-pan-y">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-none w-[300px] md:w-[440px] bg-[#161616] border border-white/[0.06] p-8 flex flex-col justify-between min-h-[200px]">
                <p className="font-[family-name:var(--font-display)] text-base font-light text-[#6B6B6B] leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  {/* TODO: Replace with <img src="/avatars/client.jpg" className="w-8 h-8 object-cover" /> */}
                  <div className="w-8 h-8 bg-[#1A1A1A] border border-white/[0.06] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-body)] text-[9px] text-[#333333]">?</span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#EDEDE8]">{t.name}</p>
                    <p className="font-[family-name:var(--font-body)] text-[11px] text-[#4a4a4a]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-8 pl-6 lg:pl-[max(1.5rem,calc((100vw-1100px)/2+2.5rem))]">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)}
              className={`h-px transition-all duration-300 ${idx === i ? "w-10 bg-[#C9A55A]" : "w-4 bg-[#2a2a2a]"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
