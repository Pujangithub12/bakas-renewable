import { Link } from "react-router-dom";
import bakasLogo from "../assets/bakas-logo/bakas-logo.webp";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Why Us", to: "/why-us" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Industrial Fuel", to: "/products" },
      { label: "Commercial Pellets", to: "/products" },
      { label: "Household Heating", to: "/products" },
      { label: "Bulk Supply", to: "/products" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sustainability", to: "/why-us" },
      { label: "Process", to: "/process" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={bakasLogo} alt="Bakas Renewable Energy" className="h-9 w-auto" />
              <span className="border-l border-white/20 pl-3 text-[11px] font-medium uppercase leading-tight tracking-[0.15em] text-brand-200">
                Renewable
                <br />
                Energy Limited
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-100/70">
              Producing clean-burning biomass pellets for commercial,
              industrial and household ovens and burners. Sustainable
              heat for a greener tomorrow.
            </p>
            <div className="mt-6 space-y-1 text-sm text-brand-100/70">
              <p>bakas.nepal@gmail.com</p>
              <p>+977 9743926775 </p>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-200">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-brand-100/70 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-brand-100/60 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bakas Renewable Energy Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
