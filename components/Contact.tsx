"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] tracking-[0.28em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#EDEDE8] leading-[1.02]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}>
            Let&apos;s build<br />something <em className="text-[#C9A55A]">great.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-[family-name:var(--font-body)] text-sm text-[#4a4a4a] leading-relaxed mb-12 max-w-sm">
              Have a project in mind or just exploring — reach out. We reply within 24 hours.
            </p>
            <div className="space-y-7">
              <div>
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[#333333] tracking-[0.28em] uppercase mb-1">Based In</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B]">Boston, MA</p>
              </div>
              <div>
                {/* TODO: Replace with Luca's email */}
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[#333333] tracking-[0.28em] uppercase mb-1">Email</p>
                <a href="mailto:hello@lucaagency.com" className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B] hover:text-[#C9A55A] transition-colors duration-200">
                  hello@lucaagency.com
                </a>
              </div>
              <div>
                {/* TODO: Replace with Luca's Instagram */}
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[#333333] tracking-[0.28em] uppercase mb-1">Instagram</p>
                <a href="#" className="font-[family-name:var(--font-body)] text-sm text-[#6B6B6B] hover:text-[#C9A55A] transition-colors duration-200">
                  @lucaagency
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex items-center">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-light text-[#EDEDE8] italic mb-2">Got it.</p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#4a4a4a]">We&apos;ll be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              /* TODO: Wire up to Formspree, Resend, or a Next.js API route */
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#333333] tracking-[0.22em] uppercase mb-2">Name</label>
                    <input type="text" required placeholder="Your name"
                      className="w-full bg-[#161616] border border-white/[0.06] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#EDEDE8] placeholder-[#2a2a2a] focus:outline-none focus:border-[rgba(201,165,90,0.4)] transition-colors" />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#333333] tracking-[0.22em] uppercase mb-2">Email</label>
                    <input type="email" required placeholder="you@company.com"
                      className="w-full bg-[#161616] border border-white/[0.06] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#EDEDE8] placeholder-[#2a2a2a] focus:outline-none focus:border-[rgba(201,165,90,0.4)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#333333] tracking-[0.22em] uppercase mb-2">Service</label>
                  <select className="w-full bg-[#161616] border border-white/[0.06] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#4a4a4a] focus:outline-none focus:border-[rgba(201,165,90,0.4)] transition-colors">
                    <option>Select a service</option>
                    <option>Video Production</option>
                    <option>Video Editing</option>
                    <option>Social Media Management</option>
                    <option>Full Package</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#333333] tracking-[0.22em] uppercase mb-2">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your project..."
                    className="w-full bg-[#161616] border border-white/[0.06] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#EDEDE8] placeholder-[#2a2a2a] focus:outline-none focus:border-[rgba(201,165,90,0.4)] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#C9A55A] text-[#0D0D0D] font-[family-name:var(--font-body)] text-[11px] tracking-[0.22em] uppercase py-4 hover:bg-[#EDEDE8] transition-colors duration-300">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
