"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-40 bg-[#0C0D0B]">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] tracking-[0.3em] uppercase mb-6">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-[#E4DDD2] leading-[1.02]"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Let&apos;s build<br />something<br /><em className="text-[#CDB07C]">great.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5754] leading-relaxed mb-14 max-w-sm">
              Have a project in mind or just exploring what&apos;s possible — reach out. We reply within 24 hours.
            </p>
            <div className="space-y-8">
              <div>
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] tracking-[0.3em] uppercase mb-2">Based In</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#9A9490]">Boston, MA</p>
              </div>
              <div>
                {/* TODO: Replace with Luca's email */}
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] tracking-[0.3em] uppercase mb-2">Email</p>
                <a href="mailto:hello@lucaagency.com"
                  className="font-[family-name:var(--font-body)] text-sm text-[#9A9490] hover:text-[#CDB07C] transition-colors duration-300">
                  hello@lucaagency.com
                </a>
              </div>
              <div>
                {/* TODO: Replace with Luca's Instagram */}
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] tracking-[0.3em] uppercase mb-2">Instagram</p>
                <a href="#"
                  className="font-[family-name:var(--font-body)] text-sm text-[#9A9490] hover:text-[#CDB07C] transition-colors duration-300">
                  @lucaagency
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {sent ? (
              <div className="h-full flex items-center">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl font-light text-[#E4DDD2] mb-3 italic">Got it.</p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5754]">We&apos;ll be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                {/* TODO: Wire up to Formspree, Resend, or a Next.js API route for actual email delivery */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#3a3a38] tracking-[0.25em] uppercase mb-2">Name</label>
                    <input type="text" required placeholder="Your name"
                      className="w-full bg-[#1C1E1A] border border-white/[0.07] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#E4DDD2] placeholder-[#2a2a28] focus:outline-none focus:border-[rgba(184,150,90,0.4)] transition-colors" />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#3a3a38] tracking-[0.25em] uppercase mb-2">Email</label>
                    <input type="email" required placeholder="you@company.com"
                      className="w-full bg-[#1C1E1A] border border-white/[0.07] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#E4DDD2] placeholder-[#2a2a28] focus:outline-none focus:border-[rgba(184,150,90,0.4)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#3a3a38] tracking-[0.25em] uppercase mb-2">Service</label>
                  <select className="w-full bg-[#1C1E1A] border border-white/[0.07] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#5A5754] focus:outline-none focus:border-[rgba(184,150,90,0.4)] transition-colors">
                    <option>Select a service</option>
                    <option>Video Production</option>
                    <option>Video Editing</option>
                    <option>Social Media Management</option>
                    <option>Full Package</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="font-[family-name:var(--font-body)] block text-[10px] text-[#3a3a38] tracking-[0.25em] uppercase mb-2">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your project..."
                    className="w-full bg-[#1C1E1A] border border-white/[0.07] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#E4DDD2] placeholder-[#2a2a28] focus:outline-none focus:border-[rgba(184,150,90,0.4)] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#CDB07C] text-[#111210] font-[family-name:var(--font-body)] text-[11px] tracking-[0.25em] uppercase py-4 hover:bg-[#E4DDD2] transition-colors duration-300">
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
