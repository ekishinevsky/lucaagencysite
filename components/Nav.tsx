"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#111210]/90 backdrop-blur-lg border-b border-white/[0.05]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 h-[70px] flex items-center justify-between">
          {/* TODO: swap text for <img src="/logo.svg" className="h-7" /> */}
          <a href="#" className="font-[family-name:var(--font-display)] text-[#E4DDD2] text-xl font-light tracking-[0.2em] uppercase">
            Luca Agency
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.label} href={l.href}
                className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5754] hover:text-[#E4DDD2] tracking-[0.2em] uppercase transition-colors duration-300">
                {l.label}
              </a>
            ))}
            <a href="#contact"
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase border border-[rgba(184,150,90,0.4)] text-[#CDB07C] hover:bg-[#CDB07C] hover:text-[#111210] px-6 py-2.5 transition-all duration-300">
              Book a Call
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-1" aria-label="Menu">
            <span className={`block w-5 h-px bg-[#E4DDD2] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#E4DDD2] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#E4DDD2] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0C0D0B]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] text-4xl font-light text-[#E4DDD2] tracking-wider italic">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-body)] text-xs tracking-[0.2em] uppercase border border-[rgba(184,150,90,0.4)] text-[#CDB07C] px-8 py-3 mt-4">
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
