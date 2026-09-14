import collection from "../assets/images/1.jpeg";
import chipping from "../assets/images/2.jpeg";
import drying from "../assets/images/factory2.jpeg";
import pelletizing from "../assets/images/roller.png";
import bagging from "../assets/images/inf.jpg";

const STEPS = [
  {
    number: "01",
    title: "Collection of Wood",
    description:
      "Transforming forest floor waste alongside discarded materials from the plywood and furniture industries into the essential raw materials for wood pellet production.",
    image: collection,
    alt: "Tractor collecting forest floor biomass waste",
  },
  {
    number: "02",
    title: "Chipping of Wood",
    description:
      "The collected wood waste and forest floor debris are chipped into small pieces, ready for the next process to reduce moisture.",
    image: chipping,
    alt: "Wood waste and machinery at the collection yard",
  },
  {
    number: "03",
    title: "Rotary Screen",
    description:
      "The chipped biomass is dried in the RFD dryer, which includes both rotary and flash drying processes to accommodate sawdust as well as wood chips.",
    image: drying,
    alt: "Rotary dryer and screening equipment inside the plant",
  },
  {
    number: "04",
    title: "Pelletization",
    description:
      "The dried wood chips are processed through pelletization using an Andritz European machine. This PLC-automated machine hammers the wood into dust, pelletizes the raw material, cools the formed pellets, and then sends them to the packaging chamber.",
    image: pelletizing,
    alt: "Pellet press machine",
  },
  {
    number: "05",
    title: "Baggage of Pellets",
    description:
      "The pellets are sieved into the required sizes and then packaged using a semi-automatic machine, with package weights varying according to the requirement: 25 kg, 30 kg, 50 kg, and even 1 ton.",
    image: bagging,
    alt: "Bakas premium biomass pellet packaging",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
            How It Works
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
            How Does It Work?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-800/75">
            From forest floor waste to bagged fuel, here&apos;s how raw
            biomass becomes a premium pellet.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg shadow-brand-900/10"
                />
                <span className="absolute -left-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 font-display text-lg font-extrabold text-white shadow-lg">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-800/75">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
