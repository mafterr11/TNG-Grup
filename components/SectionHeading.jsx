export default function SectionHeading({ label, eyebrow, title, description, align = "left", inverse = false }) {
  const kicker = label || eyebrow;
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      {kicker && (
        <p className={`eyebrow ${inverse ? "eyebrow--light" : ""} ${align === "center" ? "justify-center" : ""}`}>{kicker}</p>
      )}
      <h2 className={`section-title ${inverse ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-lg leading-8 md:mt-6 ${inverse ? "text-white/66" : "text-ink-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
