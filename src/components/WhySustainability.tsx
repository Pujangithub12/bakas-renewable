import { LeafIcon, TreeIcon, CommunityIcon, RecycleIcon } from "./icons";
import briquettePileImg from "../assets/images/briquette-pile.jpeg";
import factoryWorkerImg from "../assets/images/factory-worker.jpeg";
import rawWoodWasteImg from "../assets/images/raw-wood-waste.jpeg";
import chippedBiomassImg from "../assets/images/chipped-biomass.jpeg";
import baggedPelletsImg from "../assets/images/bagged-pellets.jpeg";

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

        
        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative h-80 overflow-hidden rounded-[2rem] bg-brand-100 shadow-lg shadow-brand-900/10 sm:h-96 lg:col-span-8 lg:h-auto">
            <img
              src={briquettePileImg}
              alt="Freshly produced Bakas biomass fuel briquettes"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Straight Off the Press
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                Every batch of Bakas fuel starts here- fresh, dense and
                ready to burn.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-brand-950 p-8 sm:p-10 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-800 text-brand-200">
                <LeafIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Reducing Carbon Emissions
              </h3>
            </div>
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              Cleaner combustion, not just cleaner marketing.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-brand-50/80 sm:text-base">
              Our pellets burn cleaner than coal and firewood, cutting
              greenhouse gas and soot output from ovens and burners, a
              fuel that closes the carbon loop instead of extending it.
            </p>
          </div>
        </div>

        
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 p-8 sm:p-10 lg:col-span-5">
            <div className="bg-grain absolute inset-0 opacity-20" />
            <h3 className="relative font-display text-lg font-bold text-white">
              Protecting Natural Ecosystems
            </h3>
            <div className="relative mt-8 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <TreeIcon className="h-5 w-5" />
              </span>
            </div>
            <p className="relative mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              Forests don&apos;t have to burn for us to have fuel.
            </p>
            <p className="relative mt-5 text-sm leading-relaxed text-brand-50/85 sm:text-base">
              Our pellets are made from forest floor waste and offcuts from
              the plywood and furniture industries- material that used
              to be a fire hazard, now turned into usable fuel instead of
              added pressure on standing forests.
            </p>
          </div>

          <div className="relative h-72 overflow-hidden rounded-[2rem] bg-brand-100 shadow-lg shadow-brand-900/10 sm:h-80 lg:col-span-7 lg:h-auto">
            <img
              src={rawWoodWasteImg}
              alt="Pile of forest floor waste and wood offcuts"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Before It Becomes Fuel
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                Forest floor waste and offcuts, collected and staged for
                processing.
              </p>
            </div>
          </div>
        </div>

        
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative h-80 overflow-hidden rounded-[2rem] bg-brand-100 shadow-lg shadow-brand-900/10 sm:h-96 lg:col-span-8 lg:h-auto">
            <img
              src={factoryWorkerImg}
              alt="Workers at the Bakas production facility"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Where the Work Happens
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                Our production facility, running on local hands from sourcing
                to shipping.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 sm:p-10 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <CommunityIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Empowering Communities
              </h3>
            </div>
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              Growth that stays in the district it's made in.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
              We create local jobs in sourcing, production and logistics,
              while keeping energy costs affordable for the businesses and
              households we supply.
            </p>
          </div>
        </div>

        
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-brand-800 p-8 sm:p-10 lg:col-span-5">
            <div className="bg-grain absolute inset-0 opacity-20" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <RecycleIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Zero-Waste Production
              </h3>
            </div>
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
              src={baggedPelletsImg}
              alt="Finished Bakas fuel bagged and ready to ship"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to Ship
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                Finished fuel, bagged, weighed and staged for delivery.
              </p>
            </div>
          </div>
        </div>

      
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative h-80 overflow-hidden rounded-[2rem] bg-brand-100 shadow-lg shadow-brand-900/10 sm:h-96 lg:col-span-8 lg:h-auto">
            <img
              src={chippedBiomassImg}
              alt="Chipped biomass ready for drying"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Chipped and Drying
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-50/85 sm:text-base">
                Raw biomass reduced down, on its way to the dryer before
                pelletizing.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-8 sm:p-10 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <TreeIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Sourced Responsibly
              </h3>
            </div>
            <div className="mt-8">
              <p className="font-display text-5xl font-extrabold text-white sm:text-6xl">
                13,500 ha
              </p>
              <p className="mt-2 text-sm font-medium text-brand-50/80">
                Sagarnath plantation feeding our supply chain
              </p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base">
              Our biomass comes through the Sagarnath Forestry Development
              Project, Nepal's first managed forestry plantation-
              so what we collect is waste and offcuts, not standing timber.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}