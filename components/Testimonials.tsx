"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// TODO: Replace with Luca's actual client testimonials
const testimonials = [
  {
    quote: "[Client testimonial goes here — what they noticed, what changed, and why they'd recommend working with Luca. Keep it specific and results-focused.]",
    name: "[Client Name]",
    role: "[Title, Company]",
    initials: "CL",
  },
  {
    quote: "[A second testimonial from a different type of client — ideally covering a different service like social media management or video editing.]",
    name: "[Client Name]",
    role: "[Title, Company]",
    initials: "CL",
  },
  {
    quote: "[A third testimonial that speaks to the working relationship, communication, and experience — not just the deliverable.]",
    name: "[Client Name]",
    role: "[Title, Company]",
    initials: "CL",
  },
  {
    quote: "[A fourth testimonial highlighting a specific result, number, or before/after that shows real impact from the work.]",
    name: "[Client Name]",
    role: "[Title, Company]",
    initials: "CL",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What clients say.
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div ref={emblaRef} className="overflow-hidden pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]">
          <div className="flex gap-5 touch-pan-y">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-none w-[340px] md:w-[480px] bg-[#101010] border border-[#1e1e1e] rounded-2xl p-8 flex flex-col justify-between min-h-[240px]"
              >
                <p className="text-[#888] text-sm leading-relaxed mb-8 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  {/* TODO: Replace with <img src="/avatars/[client].jpg" className="w-10 h-10 rounded-full object-cover" /> */}
                  <div className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center">
                    <span className="text-xs text-[#555] font-mono">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f0f0f0]">{t.name}</p>
                    <p className="text-xs text-[#555]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-8 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-[2px] rounded-full transition-all duration-300 ${
                selectedIndex === i ? "w-8 bg-[#ff5c36]" : "w-3 bg-[#333]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
