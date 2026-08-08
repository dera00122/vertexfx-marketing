import React from "react";
import { Check } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD, CARD_SOFT, BORDER, GREEN, GOLD, WHITE } from "../theme";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Get familiar with the platform",
    features: ["Live market data", "Portfolio tracking", "Telegram signals (delayed)", "Email support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    desc: "For active investors",
    features: ["Everything in Starter", "Real-time Telegram signals", "Conservative & Balanced strategies", "Priority support", "TradingView charts"],
    featured: true,
  },
  {
    name: "Elite",
    price: "$99/mo",
    desc: "Full access, managed by our desk",
    features: ["Everything in Pro", "Aggressive strategy access", "Dedicated account manager", "24/7 phone support", "Custom risk limits"],
  },
];

export default function Pricing() {
  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen w-full">
      <div className="mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        <div className="mt-10 text-center lg:mt-16">
          <div className="text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
            PRICING
          </div>
          <h1 className="font-heading mx-auto mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Simple pricing for<br /><span style={{ color: GREEN }}>every kind of investor.</span>
          </h1>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              style={{ backgroundColor: p.featured ? CARD : CARD_SOFT, borderColor: p.featured ? GREEN : BORDER }}
              className="relative flex flex-col rounded-2xl border p-6"
            >
              {p.featured && (
                <div style={{ backgroundColor: GREEN, color: "#000" }} className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="text-sm font-semibold text-white/70">{p.name}</div>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <div className="mt-1 text-xs text-white/40">{p.desc}</div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: GREEN }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={{ backgroundColor: p.featured ? GREEN : "transparent", borderColor: GREEN, color: p.featured ? "#000" : GREEN }}
                className="mt-6 rounded-lg border py-2.5 text-sm font-semibold"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}