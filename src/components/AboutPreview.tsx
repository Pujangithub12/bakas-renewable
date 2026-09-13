import { Link } from "react-router-dom";
import teamPhoto from "../assets/team/team-photo.jpeg";
import { ArrowUpRightIcon } from "./icons";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative">
          <img
            src={teamPhoto}
            alt="The Bakas Renewable Energy team"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-brand-900/20"
          />
          <div className="absolute -bottom-8 -right-6 max-w-[220px] rounded-2xl bg-brand-600 p-6 text-white shadow-xl">
            <p className="font-display text-3xl font-extrabold">1st</p>
            <p className="mt-1 text-sm text-brand-50/90">
              Wood pellet production plant in Nepal
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
            About Our Company
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            A Team of Renewable Energy Professionals
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-800/75">
            Bakas Renewable Energy Pvt. Ltd. (BREPL) brings together a
            group of professionals working across Nepal&apos;s renewable
            energy sector. Wood pellet production is the company&apos;s
            first planned project &mdash; and since this industry has not
            yet been introduced in Nepal, BREPL will be the first to
            establish it in the country.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-800/75">
            By turning forest floor waste into clean, high-density fuel,
            our team is building a renewable alternative to fossil fuels
            for commercial, industrial and household ovens and burners.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
          >
            More About Us
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
