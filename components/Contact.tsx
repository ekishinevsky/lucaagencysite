"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to a form backend (e.g. Formspree, Resend, or a Next.js API route)
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#ff5c36] text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-3xl">
            LET&apos;S BUILD<br />SOMETHING<br />
            <span className="text-[#ff5c36]">GREAT.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[#555] text-base leading-relaxed mb-10 max-w-sm">
              Whether you have a specific project in mind or you&apos;re just exploring what&apos;s possible —
              reach out. We&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-[#444] tracking-widest uppercase mb-1">Based In</p>
                <p className="text-[#888] text-sm">Boston, MA</p>
              </div>
              <div>
                {/* TODO: Replace with Luca's actual email */}
                <p className="text-xs text-[#444] tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:hello@lucaagency.com" className="text-[#888] text-sm hover:text-[#ff5c36] transition-colors">
                  hello@lucaagency.com
                </a>
              </div>
              <div>
                {/* TODO: Replace with Luca's actual Instagram handle */}
                <p className="text-xs text-[#444] tracking-widest uppercase mb-1">Instagram</p>
                <a href="#" className="text-[#888] text-sm hover:text-[#ff5c36] transition-colors">
                  @lucaagency
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {submitted ? (
              <div className="h-full flex items-center">
                <div>
                  <p className="text-3xl font-bold text-[#f0f0f0] mb-3">Got it. 👋</p>
                  <p className="text-[#555] text-sm">We&apos;ll be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#444] tracking-widest uppercase mb-2">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-[#101010] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#ff5c36] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#444] tracking-widest uppercase mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-[#101010] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#ff5c36] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#444] tracking-widest uppercase mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    className="w-full bg-[#101010] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#ff5c36] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#444] tracking-widest uppercase mb-2">What do you need?</label>
                  <select className="w-full bg-[#101010] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#888] focus:outline-none focus:border-[#ff5c36] transition-colors">
                    <option value="">Select a service</option>
                    <option>Video Production</option>
                    <option>Video Editing</option>
                    <option>Social Media Management</option>
                    <option>Full Package</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#444] tracking-widest uppercase mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#101010] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#ff5c36] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ff5c36] text-[#080808] font-semibold py-4 rounded-full hover:bg-[#ff7a5a] transition-colors text-sm tracking-wide uppercase"
                >
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
