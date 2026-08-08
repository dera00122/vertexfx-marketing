import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { GREEN, BORDER, NAV_ITEMS } from "../theme";

export default function Footer() {
  return (
    <footer className="mt-20 border-t pt-10" style={{ borderColor: BORDER }}>
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
              <path d="M2 4 L15 26 L28 4 L20 4 L15 14 L10 4 Z" fill={GREEN} />
            </svg>
            <span className="font-heading text-sm font-bold text-white">
              VERTEX <span style={{ color: GREEN }}>FX</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/40">
            Smarter trading, stronger futures. Professionally managed forex and
            crypto strategies for investors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-xs text-white/50 sm:grid-cols-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="mt-10 flex flex-col items-center justify-between gap-3 border-t py-6 text-[11px] text-white/35 sm:flex-row"
        style={{ borderColor: BORDER }}
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
          Investing involves risk. Returns are not guaranteed. Please invest responsibly.
        </div>
        <div>© {new Date().getFullYear()} VertexFX. All rights reserved.</div>
      </div>
    </footer>
  );
}