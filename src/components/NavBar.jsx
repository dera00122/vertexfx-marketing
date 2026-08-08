import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GREEN, BORDER, NAV_ITEMS, DASHBOARD_URL } from "../theme";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className="sticky top-0 z-30 -mx-5 flex items-center justify-between px-5 py-2 sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12"
        style={{ backgroundColor: "rgba(7,7,7,0.97)" }}
      >
        <Link to="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
            <path d="M2 4 L15 26 L28 4 L20 4 L15 14 L10 4 Z" fill={GREEN} />
          </svg>
          <div className="leading-none">
            <div className="font-heading text-base font-bold tracking-tight text-white">
              VERTEX <span style={{ color: GREEN }}>FX</span>
            </div>
            <div className="text-[9px] tracking-[0.2em] text-white/40">SMART INVESTING</div>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="relative z-30 rounded-lg p-2 text-white/70 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden items-center gap-8 text-sm text-white/55 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={location.pathname === item.to ? { color: GREEN } : undefined}
              className="hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`${DASHBOARD_URL}/login`} className="rounded-lg border border-white/15 px-5 py-2 text-sm font-medium text-white">
            Login
          </a>
          <a href={`${DASHBOARD_URL}/signup`} style={{ backgroundColor: GREEN }} className="rounded-lg px-5 py-2 text-sm font-semibold text-black">
            Sign Up
          </a>
        </div>
      </header>

      {/* MOBILE MENU — fixed slide-in drawer with backdrop */}
      <div className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? "" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ backgroundColor: "rgba(0,0,0,0.65)", opacity: menuOpen ? 1 : 0 }}
        />
        <div
          className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col transition-transform duration-300 ease-in-out"
          style={{
            backgroundColor: "#0d0d0d",
            borderLeft: `1px solid ${BORDER}`,
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex items-center justify-between px-4 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <span className="text-sm font-semibold text-white/90">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-1.5 text-white/60 hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto p-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                style={location.pathname === item.to ? { color: GREEN } : undefined}
                className="rounded-lg px-3 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 p-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <a href={`${DASHBOARD_URL}/login`} className="flex-1 rounded-lg border border-white/15 py-2.5 text-center text-sm font-medium text-white">
              Login
            </a>
            <a href={`${DASHBOARD_URL}/signup`} style={{ backgroundColor: GREEN }} className="flex-1 rounded-lg py-2.5 text-center text-sm font-semibold text-black">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}