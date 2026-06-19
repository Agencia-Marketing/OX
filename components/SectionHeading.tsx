import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-marfil" : "text-grafito";
  const introColor = tone === "light" ? "text-marfil/70" : "text-carbon/75";

  return (
    <Reveal className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-oro ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-oro" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight tracking-display sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
