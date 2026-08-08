import React from "react";
import { ShieldCheck, Target, Users, Globe } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD_SOFT, BORDER, GREEN, GOLD, WHITE } from "../theme";

const values = [
  { icon: ShieldCheck, title: "Trust First", desc: "Every strategy we run is built around protecting client capital before chasing returns." },
  { icon: Target, title: "Disciplined Strategy", desc: "No guesswork — our trades follow tested, data-backed forex and crypto models." },
  { icon: Users, title: "Client-Led", desc: "We build around what investors actually need: clarity, control, and consistent reporting." },
  { icon: Globe, title: "Global Access", desc: "Serving investors across 40+ countries with local payment rails and 24/7 support." },
];

export default function About() {
  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen w-full">
      <div className="mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        <div className="mt-10 max-w-2xl lg:mt-16">
          <div className="text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
            ABOUT VERTEX FX
          </div>
          <h1 className="font-heading mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Built by traders,<br />for serious investors.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-white/55">
            VertexFX was founded to close the gap between institutional-grade forex
            strategy and everyday investors. We combine professionally managed
            trading desks with a transparent, real-time dashboard — so you always
            know exactly where your money is working.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-16">
          {[
            ["25,000+", "Active Investors"],
            ["40+", "Countries Served"],
            ["$120M+", "Assets Tracked"],
            ["2019", "Founded"],
          ].map(([value, label]) => (
            <div key={label} style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }} className="rounded-xl border p-4 text-center">
              <div className="text-xl font-bold sm:text-2xl">{value}</div>
              <div className="mt-1 text-xs text-white/45">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="mb-5 text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
            OUR VALUES
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }} className="flex gap-3.5 rounded-xl border p-4">
                <div style={{ borderColor: BORDER }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <v.icon className="h-5 w-5" style={{ color: GREEN }} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white/90">{v.title}</div>
                  <div className="mt-0.5 text-xs leading-snug text-white/45">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}