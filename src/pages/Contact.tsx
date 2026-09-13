import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";
import { CheckIcon, FlameIcon, LeafIcon, TruckIcon } from "../components/icons";

const INFO = [
  { icon: LeafIcon, label: "Email", value: "info@bakasrenewable.com" },
  { icon: FlameIcon, label: "Phone", value: "+977 1-4XXXXXX" },
  { icon: TruckIcon, label: "Office", value: "Trade Tower, Thapathali, Kathmandu, Nepal" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Talk Clean Fuel"
        description="Tell us about your ovens, burners or heating needs and we'll put together a custom pellet supply quote."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
          <div className="space-y-6">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-3xl border border-brand-100 bg-cream-50 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-700/70">{label}</p>
                  <p className="mt-1 font-display text-base font-bold text-brand-950">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-100 bg-cream-50 p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
                  <CheckIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  Thanks for reaching out!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-brand-800/70">
                  Our team will get back to you with a custom quote shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-brand-800" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-500"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-brand-800" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-brand-800" htmlFor="need">
                    What do you need fuel for?
                  </label>
                  <select
                    id="need"
                    className="mt-2 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-500"
                  >
                    <option>Industrial burner / boiler</option>
                    <option>Commercial oven</option>
                    <option>Household heating</option>
                    <option>Bulk supply / distribution</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-brand-800" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your monthly fuel needs..."
                    className="mt-2 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-950 outline-none transition focus:border-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 sm:col-span-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-lg shadow-brand-900/5">
            <iframe
              title="Bakas Renewable Energy office location — Trade Tower, Thapathali, Kathmandu, Nepal"
              src="https://www.google.com/maps?q=Trade+Tower,+Thapathali,+Kathmandu,+Nepal&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
