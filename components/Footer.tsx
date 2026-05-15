export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* TODO: Replace with actual agency name */}
        <p className="font-[family-name:var(--font-display)] text-[#5A5754] text-lg font-light tracking-[0.2em] uppercase italic">
          Luca Agency
        </p>
        <p className="font-[family-name:var(--font-body)] text-[#3a3a38] text-[11px] tracking-widest">
          © {new Date().getFullYear()} — Boston, MA
        </p>
        <div className="flex gap-8">
          {/* TODO: Replace # with Luca's actual social links */}
          {["Instagram", "TikTok", "YouTube"].map((s) => (
            <a key={s} href="#"
              className="font-[family-name:var(--font-body)] text-[10px] text-[#3a3a38] hover:text-[#CDB07C] tracking-[0.2em] uppercase transition-colors duration-300">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
