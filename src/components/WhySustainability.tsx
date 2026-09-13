import { CommunityIcon, LeafIcon, RecycleIcon, TreeIcon } from "./icons";

const REASONS = [
  {
    icon: RecycleIcon,
    title: "Reducing Carbon Emissions",
    description:
      "Our pellets burn cleaner than coal and firewood, cutting greenhouse gas output from ovens and burners.",
  },
  {
    icon: TreeIcon,
    title: "Protecting Natural Ecosystems",
    description:
      "Made from agricultural and wood waste, our fuel reduces pressure on forests instead of adding to it.",
  },
  {
    icon: CommunityIcon,
    title: "Empowering Communities",
    description:
      "We create local jobs in sourcing, production and logistics while keeping energy costs affordable.",
  },
  {
    icon: LeafIcon,
    title: "Zero-Waste Production",
    description:
      "Every part of the biomass input is used, turning agricultural residue into consistent, high-density fuel.",
  },
];

export default function WhySustainability() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Why It Matters
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
            Why Sustainability Matters
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-800/75 sm:text-lg">
            The climate can&apos;t wait &mdash; switching to clean biomass fuel isn&apos;t
            just an option, it&apos;s a necessity. We believe in powering
            industries and homes responsibly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-brand-100 bg-cream-50 p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white transition group-hover:bg-brand-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-brand-950">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-brand-800/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
