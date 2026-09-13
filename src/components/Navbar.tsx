import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./icons";
import bakasLogo from "../assets/bakas-logo/bakas-logo.webp";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Why Us", to: "/why-us" },
  { label: "Products", to: "/products" },
  { label: "Process", to: "/process" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={bakasLogo} alt="Bakas Renewable Energy" className="h-9 w-auto" />
          <span className="hidden border-l border-brand-200 pl-3 text-[11px] font-medium uppercase leading-tight tracking-[0.15em] text-brand-600 sm:inline">
            Renewable
            <br />
            Energy Limited
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-brand-600 ${
                  isActive ? "text-brand-600" : "text-brand-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700 lg:inline-block"
        >
          Contact
        </NavLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-700 lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-cream-50 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-brand-50 ${
                    isActive ? "bg-brand-50 text-brand-600" : "text-brand-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
