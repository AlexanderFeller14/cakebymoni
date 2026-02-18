type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-berry">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-cocoa md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-cocoa/80">{text}</p>
    </div>
  );
}
