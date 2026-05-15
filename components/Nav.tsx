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
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/[0.06]" : ""
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          {/* TODO: swap with <img src="/logo.svg" className="h-7" /> */}
          <a href="#" className="font-[family-name:var(--font-display)] text-[#EDEDE8] text-xl font-light tracking-[0.18em] uppercase">
            Luca Agency
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a key={l.label} href={l.href}
                className="font-[family-name:var(--font-body)] text-[11px] text-[#6B6B6B] hover:text-[#EDEDE8] tracking-[0.18em] uppercase transition-colors duration-200">
                {l.label}
              </a>
            ))}
            <a href="#contact"
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] uppercase border border-[rgba(201,165,90,0.5)] text-[#C9A55A] hover:bg-[#C9A55A] hover:text-[#0D0D0D] px-5 py-2 transition-all duration-300">
              Book a Call
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-[5px]">
            <span className={`block w-5 h-px bg-[#EDEDE8] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#EDEDE8] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#EDEDE8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col items-center justify-center gap-10 md:hidden">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] text-4xl font-light text-[#EDEDE8] tracking-wide italic">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] uppercase border border-[rgba(201,165,90,0.5)] text-[#C9A55A] px-8 py-3 mt-4">
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
