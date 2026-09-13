type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-brand-950 px-6 py-16 text-center lg:px-10 lg:py-20">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-100">
        {eyebrow}
      </span>
      <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-100/75 sm:text-base">
          {description}
        </p>
      )}
    </section>
  );
}
