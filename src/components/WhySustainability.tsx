import { TreeIcon } from "./icons";

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
          <p className="mt-4 text-base leading-relaxed text-brand-800/75">
            The climate can't wait- switching to clean biomass fuel
            isn't just an option, it's a necessity. Here's what
            changes when a burner runs on pellets instead of firewood, diesel
            or coal.
          </p>
        </div>

        {/* Row 1 */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative h-80 overflow-hidden rounded-[2rem] bg-brand-100 shadow-lg shadow-brand-900/10 sm:h-96 lg:col-span-8 lg:h-auto">
            <img
              src="#"
              alt="Bakas biomass pellets in a burner"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Reducing Carbon Emissions
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                Our pellets burn cleaner than coal and firewood, cutting
                greenhouse gas and soot output from ovens and burners,
                a fuel that closes the carbon loop instead of extending it.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-brand-950 p-8 sm:p-10 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-800 text-brand-200">
                <TreeIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Protecting Natural Ecosystems
              </h3>
            </div>
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              Forests don't have to burn for us to have fuel.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-brand-50/80 sm:text-base">
              Our pellets are made from forest floor waste and offcuts from
              the plywood and furniture industries-  material that used
              to be a fire hazard, now turned into usable fuel instead of
              added pressure on standing forests.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 p-8 sm:p-10 lg:col-span-5">
            <div className="bg-grain absolute inset-0 opacity-20" />
            <h3 className="relative font-display text-lg font-bold text-white">
              Zero-Waste Production
            </h3>
            <div className="relative mt-8">
              <p className="font-display text-5xl font-extrabold text-white sm:text-6xl">
                100%
              </p>
              <p className="mt-2 text-sm font-medium text-brand-50/80">
                of collected biomass used
              </p>
            </div>
            <p className="relative mt-6 text-sm leading-relaxed text-brand-50/85 sm:text-base">
              What would otherwise be discarded residue becomes a consistent,
              high-density fuel, nothing collected goes to landfill or
              open burning.
            </p>
          </div>

          <div className="relative h-72 overflow-hidden rounded-[2rem] bg-brand-100 shadow-lg shadow-brand-900/10 sm:h-80 lg:col-span-7 lg:h-auto">
            <img
              src="#"
              alt="Local workers in the Bakas"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Empowering Communities
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                We create local jobs in sourcing, production and logistics,
                while keeping energy costs affordable for the businesses and
                households we supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}