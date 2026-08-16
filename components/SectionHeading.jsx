export default function SectionHeading({ label, eyebrow, title, description, align = "left", inverse = false }) {
  const kicker = label || eyebrow;
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      {kicker && <p className={`page-label ${inverse ? "!text-white/60" : ""}`}>{kicker}</p>}
      <h2 className={`section-title ${inverse ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-lg leading-8 md:mt-5 ${inverse ? "text-white/68" : "text-ink-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
