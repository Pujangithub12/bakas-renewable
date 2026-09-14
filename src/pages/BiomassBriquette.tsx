import { CheckIcon, FlameIcon, TreeIcon } from "../components/icons";
import briquettePileImg from "../assets/images/briquette-pile.jpeg";

const REASONS = [
  {
    icon: FlameIcon,
    title: "Green Coal",
    description:
      "Our briquettes comprise waste biomass (ply waste, corncobs, saw dust) converted to high quality fuel. The green way to fire your furnace and boilers.",
  },
  {
    icon: TreeIcon,
    title: "Replacement for Wood",
    description:
      "Our briquettes are the correct replacement: easy storage, no extra chipping, high density and available all seasons.",
  },
  {
    icon: CheckIcon,
    title: "Cost Efficient",
    description: "Our briquettes save your boiler fuel by 30-40%.",
  },
];

const SPECS = [
  { label: "Gross Calorific Value (GCV)", value: "4000+ Kcal/kg" },
  { label: "Moisture", value: "< 14%" },
  { label: "Density", value: "800 kg/M3" },
  { label: "Ash Content", value: "< 6%" },
  { label: "Size", value: "90mm" },
  { label: "Packaging Size", value: "25-27 kg" },
];

export default function BiomassBriquette() {
  return (
    <>
      <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Products
            </span>
            <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Biomass Briquette
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-800/75 sm:text-base">
              High-density, energy-concentrated fuel compressed from organic waste materials.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <img
              src={briquettePileImg}
              alt="Freshly produced Bakas biomass fuel briquettes"
              loading="lazy"
              className="aspect-[16/10] w-full max-w-lg rounded-3xl object-cover shadow-lg shadow-brand-900/10"
            />
            <p className="text-base leading-relaxed text-brand-800/75 sm:text-lg">
              Biomass briquettes are a form of biofuel derived from
              compressed organic matter. They can be made from various types
              of biomass, including agricultural residues, wood waste,
              paper, and other plant-based materials. The briquetting
              process converts low bulk density biomass into high-density
              and energy-concentrated fuel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Why Choose Briquettes
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Why Biomass Briquette?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-brand-100 bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-brand-950">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-800/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Specifications
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Product Specifications
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-brand-100">
            {SPECS.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between gap-4 px-6 py-4 text-sm sm:px-8 sm:text-base ${
                  index % 2 === 0 ? "bg-cream-50" : "bg-white"
                }`}
              >
                <span className="font-medium text-brand-800">{spec.label}</span>
                <span className="font-display font-bold text-brand-950">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
