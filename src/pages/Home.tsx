import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import CallToAction from "../components/CallToAction";
import { ArrowUpRightIcon, FactoryIcon, FlameIcon, TreeIcon } from "../components/icons";

const TEASERS = [
  {
    icon: TreeIcon,
    title: "Why Sustainability Matters",
    description: "See how clean biomass fuel cuts emissions and protects ecosystems.",
    to: "/why-us",
  },
  {
    icon: FlameIcon,
    title: "Our Products",
    description: "Pellets engineered for commercial, industrial and household use.",
    to: "/products/biomass-pellet",
  },
  {
    icon: FactoryIcon,
    title: "Our Process",
    description: "From raw biomass to delivered fuel: how we produce every pellet.",
    to: "/process",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Explore Bakas
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Everything You Need to Know
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {TEASERS.map(({ icon: Icon, title, description, to }) => (
              <Link
                key={to}
                to={to}
                className="group rounded-3xl border border-brand-100 bg-cream-50 p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white transition group-hover:bg-brand-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-brand-950">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-800/70">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction buttonLabel="Contact" />
    </>
  );
}
