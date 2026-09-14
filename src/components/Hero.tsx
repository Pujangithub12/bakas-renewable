import { Link } from "react-router-dom";
import { ArrowUpRightIcon, LeafIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="bg-cream-50 px-4 pb-16 pt-6 sm:px-6 lg:px-10">
      <div className="relative mx-auto min-h-[560px] w-full max-w-[1920px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-2xl shadow-brand-900/25 sm:min-h-[620px]">
        <div className="bg-grain absolute inset-0 opacity-20" />

        <svg
          viewBox="0 0 1200 700"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <circle cx="980" cy="150" r="90" fill="#f6ffe8" opacity="0.85" />
          <path
            d="M0 430c120-70 260-70 400-20s300 40 480-10 220-30 320 10v290H0Z"
            fill="#3a6a1f"
            opacity="0.55"
          />
          <path
            d="M0 500c150-50 320-30 460 10s280 20 420-40 220-40 320 10v220H0Z"
            fill="#2d4f1d"
            opacity="0.85"
          />
          <path
            d="M0 560c180-30 360 0 540 30s340 10 660-40v150H0Z"
            fill="#213b17"
          />
          {[120, 230, 340, 900, 1010, 1090].map((x, i) => (
            <g key={x} transform={`translate(${x} ${470 + (i % 2) * 20})`} opacity="0.9">
              <rect x="-4" y="10" width="8" height="40" fill="#213b17" />
              <circle cx="0" cy="0" r="26" fill="#3a6a1f" />
              <circle cx="-16" cy="12" r="18" fill="#345f1b" />
              <circle cx="16" cy="12" r="18" fill="#345f1b" />
            </g>
          ))}
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/25 to-brand-950/10" />

        <div className="relative flex flex-col items-center px-6 pb-28 pt-16 text-center sm:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            <LeafIcon className="h-4 w-4" />
            Clean Biomass Pellet Energy
          </span>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Clean Fuel Today,
            <br />
            Powering a{" "}
            <span className="relative inline-block text-brand-200">
              Greener Tomorrow
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-3 left-0 h-3 w-full text-brand-200 sm:-bottom-4 sm:h-4"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 15c40-12 220-12 296 2"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-brand-50/85 sm:text-base">
            Climate change isn&apos;t coming. It&apos;s here. Bakas Renewable
            Energy produces premium biomass pellets that replace fossil
            fuels in commercial, industrial and household ovens and burners.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            Get Started
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white">
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        <div className="absolute bottom-6 left-6 max-w-[220px] text-left sm:bottom-8 sm:left-8">
          <p className="text-sm font-medium leading-snug text-white/90 sm:text-base">
            Break Free From High Fuel &amp; Energy Costs
          </p>
        </div>
      </div>
    </section>
  );
}
