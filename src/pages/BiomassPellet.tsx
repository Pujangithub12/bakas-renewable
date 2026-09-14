import { LeafIcon, RecycleIcon, TreeIcon } from "../components/icons";
import biomassPelletImg from "../assets/images/biomass-pellet.png";

const REASONS = [
  {
    icon: RecycleIcon,
    title: "Renewable Energy",
    description:
      "Pellet is made from waste materials: ply waste, corn cobs, furniture shavings, saw dust and other byproducts.",
  },
  {
    icon: LeafIcon,
    title: "Environment Friendly",
    description:
      "Our pellet has negligible sulphur emission and thus is a pollution free alternative to coal.",
  },
  {
    icon: TreeIcon,
    title: "Reduce Forest Fire",
    description:
      "We consume unwanted forest floor for raw materials of pellet, thus helps reduce the forest fire and preserve new seedlings.",
  },
];

const SPECS = [
  { label: "Calorific Value", value: "4400-5000 Kcal/kg" },
  { label: "Moisture", value: "< 10%" },
  { label: "Bulk Density", value: "650-750 kg/M3" },
  { label: "Volatile Matter", value: "80-84%" },
  { label: "Ash Content", value: "< 3%" },
  { label: "Sulphur", value: "< 1%" },
  { label: "Diameter", value: "6mm - 8mm" },
  { label: "Length", value: "5-40mm" },
  { label: "Packaging Size", value: "25 & 40kg" },
];

export default function BiomassPellet() {
  return (
    <>
      <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Products
            </span>
            <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Biomass Pellet
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-800/75 sm:text-base">
              Clean-burning, compressed fuel made from wood residues that would otherwise go to waste.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <img
              src={biomassPelletImg}
              alt="Hands holding finished biomass pellets"
              loading="lazy"
              className="aspect-[16/10] w-full max-w-lg rounded-3xl object-cover shadow-lg shadow-brand-900/10"
            />
            <p className="text-base leading-relaxed text-brand-800/75 sm:text-lg">
              Biomass pellets are made at a pelletisation plant. Here wood
              that is unsuitable for other industries, like sawmill
              residues, are brought together. The wood is chipped, screened
              for quality, heated to reduce its moisture content to below
              12%, and then converted into a fine powder before being
              pressed into pellets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Why Choose Pellets
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Why Biomass Pellets?
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
