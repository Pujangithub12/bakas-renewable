import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "./icons";

type CallToActionProps = {
  buttonLabel?: string;
};

export default function CallToAction({ buttonLabel = "Get a Quote" }: CallToActionProps) {
  return (
    <section className="px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-8 py-14 text-center shadow-2xl shadow-brand-900/20 sm:px-16">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to Switch to Clean Biomass Fuel?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-50/80">
          Get a custom quote for your commercial, industrial or household
          heating needs &mdash; delivered reliably, burned cleanly.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
        >
          {buttonLabel}
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
