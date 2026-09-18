export default function SectionHeading({ kicker, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <div className={`mb-4 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <span className="text-sm font-medium text-primary">{kicker}</span>
        </div>
      )}
      <h2 className="text-3xl font-medium leading-[1.15] text-text-main sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>
      )}
    </div>
  );
}
