import PageHeader from "../components/PageHeader";
import { CommunityIcon, LeafIcon, RecycleIcon, TreeIcon } from "../components/icons";

const VALUES = [
  {
    icon: LeafIcon,
    title: "Our Mission",
    description:
      "To make clean, affordable biomass fuel the default choice for every oven and burner in the region.",
  },
  {
    icon: TreeIcon,
    title: "Our Vision",
    description:
      "A future where industries and households heat responsibly, without relying on fossil fuels.",
  },
  {
    icon: CommunityIcon,
    title: "Our People",
    description:
      "A growing team of engineers, farmers and logistics experts working across the supply chain.",
  },
  {
    icon: RecycleIcon,
    title: "Our Promise",
    description:
      "Zero-waste production, transparent sourcing, and consistent quality in every batch.",
  },
];

const STATS = [
  { value: "1st", label: "Wood pellet plant in Nepal" },
  { value: "13,500 ha", label: "Sagarnath plantation (SFDP)" },
  { value: "30,000 MT", label: "Biomass available yearly" },
  { value: "10,500 MT", label: "Planned annual pellet output" },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Bakas"
        title="Powering Industries, Responsibly"
        description="Bakas Renewable Energy Limited (BREL) is pioneering wood pellet production in Nepal, turning forest undergrowth biomass into clean fuel for commercial, industrial and household ovens and burners."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Our Story
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              Nepal&apos;s First Wood Pellet Producer
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-800/75">
            <p>
              The company has a group of professionals working in the
              renewable energy sector. Production of wood pellet is the
              first planned project of the company. Wood pellet production
              has not been introduced yet in Nepal, and BREL will be the
              first to establish this kind of industry in the country.
            </p>
            <p>
              BREL has selected undergrowth species of Sagarnath Forestry
              Development Project (SFDP). SFDP is a government-managed
              plantation in the central Terai of Nepal covering 13,500
              hectares. The undergrowth on the plantation site is the cause
              of fire hazard of Sagarnath Forest, and the forest management
              is spending a huge amount of resources to remove or control
              burn these materials every year. The green biomass to be
              removed from the project site will be 30,000 MT. Using this
              quantity of biomass, BREL has developed a proposal to
              produce biomass pellet around 10,500 MT/year.
            </p>
            <p>
              Wood pellets are fuel made from compressed biomass or sawdust
              used for burning and heating. It is a proven technology of
              renewable fuel being introduced since two decades. It is
              most popular in European countries and the United States.
              The popularity of using pellet as fuel is spreading over the
              world. The fundamental of being popular is the
              environmentally friendly renewable fuel. It is made
              from renewable resources and helps to reduce greenhouse gas
              emissions.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-brand-100 bg-cream-50 p-7 text-center"
              >
                <p className="font-display text-2xl font-extrabold text-brand-950 sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-sm text-brand-700/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              What Drives Us
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Our Mission &amp; Values
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
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
    </>
  );
}
