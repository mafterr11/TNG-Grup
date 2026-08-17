export default function Marquee({ items = [], variant = "dark", duration = 36, className = "" }) {
  const dark = variant === "dark";
  return (
    <div className={`relative overflow-hidden py-5 md:py-6 ${dark ? "bg-[#0c0e0f] text-white" : "bg-white text-ink"} ${className}`} aria-hidden="true">
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? "true" : undefined}>
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center whitespace-nowrap">
                <span className="px-7 font-display text-xl font-medium tracking-[-.01em] md:px-9 md:text-2xl">{item}</span>
                <span className={`h-2 w-2 shrink-0 rotate-45 ${dark ? "bg-accent-bright" : "bg-accent"}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
