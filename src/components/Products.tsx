import { FactoryIcon, FlameIcon, HomeIcon, TruckIcon } from "./icons";

const PRODUCTS = [
  {
    icon: FlameIcon,
    title: "Industrial Burner Fuel",
    description: "High-density pellets engineered for continuous industrial burners and boilers.",
  },
  {
    icon: FactoryIcon,
    title: "Commercial Oven Pellets",
    description: "Consistent, low-ash pellets for restaurants, bakeries and commercial kitchens.",
  },
  {
    icon: HomeIcon,
    title: "Household Heating",
    description: "Clean-burning pellets sized for home stoves, ovens and space heaters.",
  },
  {
    icon: TruckIcon,
    title: "Bulk Supply & Logistics",
    description: "Reliable bulk delivery and storage solutions for businesses of any scale.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 shadow-2xl shadow-brand-900/20">
              <div className="bg-grain absolute inset-0 opacity-20" />
              <svg viewBox="0 0 360 360" className="absolute inset-0 h-full w-full">
                <g transform="translate(60,60)">
                  <rect x="0" y="120" width="240" height="120" rx="14" fill="#f2f9ed" opacity="0.95" />
                  <rect x="18" y="140" width="204" height="18" rx="4" fill="#5da331" />
                  <rect x="18" y="166" width="204" height="18" rx="4" fill="#7dbd53" />
                  <rect x="18" y="192" width="204" height="18" rx="4" fill="#5da331" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <ellipse key={i} cx={30 + i * 45} cy={70} rx="16" ry="26" fill="#f2f9ed" opacity="0.9" />
                  ))}
                </g>
              </svg>
              <div className="absolute left-6 top-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg">
                <p className="font-display text-2xl font-extrabold text-brand-950">10,000+</p>
                <p className="text-xs font-medium text-brand-700/80">Tons Annual Capacity</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Our Products
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              Fuel Built for Every Burner
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-800/75 sm:text-lg">
              Climate change isn&apos;t coming. It&apos;s here. Transitioning to
              sustainable pellet fuel isn&apos;t just a choice, it&apos;s a necessity.
              We believe in powering commercial, industrial and household
              heating responsibly.
            </p>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {PRODUCTS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-950">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-800/70">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
