export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* TODO: Replace with actual agency name / logo */}
        <p className="font-[family-name:var(--font-display)] text-[#4a4a4a] text-lg font-light tracking-[0.18em] uppercase italic">
          Luca Agency
        </p>
        <p className="font-[family-name:var(--font-body)] text-[#333333] text-[11px] tracking-[0.15em]">
          © {new Date().getFullYear()} — Boston, MA
        </p>
        <div className="flex gap-8">
          {/* TODO: Replace # with actual social links */}
          {["Instagram", "TikTok", "YouTube"].map((s) => (
            <a key={s} href="#"
              className="font-[family-name:var(--font-body)] text-[10px] text-[#333333] hover:text-[#C9A55A] tracking-[0.18em] uppercase transition-colors duration-200">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
