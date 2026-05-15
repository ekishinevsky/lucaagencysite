export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#333] text-xs tracking-[0.15em] uppercase font-semibold">
          {/* TODO: Replace with actual agency name */}
          Luca Agency
        </p>
        <p className="text-[#333] text-xs">
          © {new Date().getFullYear()} Luca Agency. Boston, MA.
        </p>
        <div className="flex gap-6">
          {/* TODO: Replace # with actual social links */}
          {["Instagram", "TikTok", "YouTube", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-[#333] text-xs tracking-wide hover:text-[#ff5c36] transition-colors uppercase"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
