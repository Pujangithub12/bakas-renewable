import { useState } from "react";

const FAQS = [
  {
    q: "What is used to make wood pellets?",
    a: "Pellets are 100% natural and are made from sawdust and forest undergrowth species. They have no additives, chemicals, or perfumes added in the process.",
  },
  {
    q: "What are the benefits of pellets vs. wood?",
    a: "You don't have to chop wood! They are much cheaper than propane. It's easier to start a fire with pellets because they're dryer than wood. They don't have bark or frozen ants on them. They are simple to use. They are sold nationwide. You won't have an aching back from chopping wood and pellets are better for the environment!",
  },
  {
    q: "How big are the pellets?",
    a: "They are approximately 1 ½ millimeter long and 6 mm and 8 mm in diameter. They are smooth to the touch and virtually dust-free.",
  },
  {
    q: "What makes them stick together if you don't use additives or plastics?",
    a: "Good question. Lignin (which is a natural binding agent from the tree itself) combined with the high pressure from the pellet mill as the pellet is pushed through the mill, holds the pellets together.",
  },
  {
    q: "Where can I buy the pellets?",
    a: "Our pellets are sold nationwide. Please contact us to find a store near you.",
  },
  {
    q: "Where should I store the pellets?",
    a: "Store them in a dry area, and since they are packaged in convenient 25 kg bags you may stack them several feet high so you won't need a great deal of storage space.",
  },
  {
    q: "What is the actual process of making pellets?",
    a: "The mixture of sawdust and forest undergrowth is kept in a dry enclosed building then it is placed into and fed to a screening and hammer mill process to ensure consistent sawdust for our drying process. We then convey the sawdust to the dryer to remove any unneeded moisture and then to the pellet mills to be formed into pellets. Once the pellets are formed they are cooled down and screened prior to going into the bag. The bags are then stacked by our robot 50 bags to a pallet, then a pallet cover and shrink wrap is added to help protect the product from the weather.",
  },
  {
    q: "Can I put them in my regular wood stove?",
    a: "Unfortunately, no. You will need a wood pellet stove. The pellet stove is also already available in our company.",
  },
  {
    q: "Do I need a chimney for my pellet stove?",
    a: "No. Since the pellets are so efficient, the stoves do not need a chimney. All you need to do is vent them outdoors with a 4\" pipe through an outside wall. So, choose the room you congregate in, place the stove in that room, and enjoy the ease and warmth of pellet heat! You'll also enjoy watching the flames, and the fact that there is very little ash to clean.",
  },
  {
    q: "Have you tested them?",
    a: "Absolutely! BREPL is a pellet manufacturer that actually has an in-house testing lab. To confirm our results, we send our product to a third-party laboratory too. We pride ourselves on providing quality and environmentally friendly products.",
  },
  {
    q: "Where is BREPL located?",
    a: "BREPL's head office is located in Trade Tower, Thapathali, Kathmandu.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
            FAQs
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-brand-100 rounded-3xl border border-brand-100">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                >
                  <span className="font-display text-base font-bold text-brand-950 sm:text-lg">
                    {item.q}
                  </span>
                  <svg
                    viewBox="0 0 12 8"
                    className={`h-3 w-3 shrink-0 text-brand-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-brand-800/75 sm:px-8 sm:text-base">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
