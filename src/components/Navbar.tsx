import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./icons";
import bakasLogo from "../assets/bakas-logo/bakas-logo.webp";

const LINKS = [
  { label: "Process", to: "/process" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "FAQs", to: "/faqs" },
];

const PRODUCT_LINKS = [
  { label: "Biomass Pellet", to: "/products/biomass-pellet" },
  { label: "Biomass Briquette", to: "/products/biomass-briquette" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();
  const isProductsActive = location.pathname.startsWith("/products");

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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-brand-600 ${
                isActive ? "text-brand-600" : "text-brand-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-brand-600 ${
                isActive ? "text-brand-600" : "text-brand-800"
              }`
            }
          >
            Why Us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition hover:text-brand-600 ${
                isProductsActive ? "text-brand-600" : "text-brand-800"
              }`}
            >
              Products
              <svg viewBox="0 0 12 8" className="h-2.5 w-2.5 fill-current">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-52 rounded-2xl border border-brand-100 bg-white p-2 shadow-xl shadow-brand-900/10">
                  {PRODUCT_LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-600 ${
                          isActive ? "bg-brand-50 text-brand-600" : "text-brand-800"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
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
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-brand-50 ${
                  isActive ? "bg-brand-50 text-brand-600" : "text-brand-800"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/why-us"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-brand-50 ${
                  isActive ? "bg-brand-50 text-brand-600" : "text-brand-800"
                }`
              }
            >
              Why Us
            </NavLink>

            <button
              type="button"
              onClick={() => setMobileProductsOpen((v) => !v)}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium hover:bg-brand-50 ${
                isProductsActive ? "bg-brand-50 text-brand-600" : "text-brand-800"
              }`}
            >
              Products
              <svg
                viewBox="0 0 12 8"
                className={`h-2.5 w-2.5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-brand-100 pl-3">
                {PRODUCT_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-medium hover:bg-brand-50 ${
                        isActive ? "bg-brand-50 text-brand-600" : "text-brand-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}

            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
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
