import React from "react";
import { TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD, CARD_SOFT, BORDER, GREEN, GREEN_DIM, GOLD, WHITE } from "../theme";

const strategies = [
  {
    icon: Shield,
    name: "Conservative Growth",
    risk: "Low Risk",
    target: "6–10% / year",
    desc: "Capital-preserving forex positions across major pairs, rebalanced weekly. Built for investors prioritizing stability.",
  },
  {
    icon: TrendingUp,
    name: "Balanced Portfolio",
    risk: "Medium Risk",
    target: "12–20% / year",
    desc: "A mix of forex, gold, and blue-chip crypto positions. Our most popular strategy for long-term investors.",
    featured: true,
  },
  {
    icon: Zap,
    name: "Aggressive Trading",
    risk: "High Risk",
    target: "25%+ / year",
    desc: "Active day-trading across volatile pairs and crypto. Higher potential returns with higher drawdown risk.",
  },
];

export default function InvestStrategies() {
  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen w-full">
      <div className="mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        <div className="mt-10 max-w-2xl lg:mt-16">
          <div className="text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
            INVEST STRATEGIES
          </div>
          <h1 className="font-heading mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Pick a strategy that<br /><span style={{ color: GREEN }}>matches your risk.</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-white/55">
            Every VertexFX strategy is professionally managed and fully transparent —
            track every position in real time from your dashboard.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {strategies.map((s) => (
            <div
              key={s.name}
              style={{
                backgroundColor: s.featured ? CARD : CARD_SOFT,
                borderColor: s.featured ? GREEN : BORDER,
              }}
              className="relative flex flex-col rounded-2xl border p-6"
            >
              {s.featured && (
                <div style={{ backgroundColor: GREEN, color: "#000" }} className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold">
                  MOST POPULAR
                </div>
              )}
              <div style={{ borderColor: BORDER }} className="flex h-11 w-11 items-center justify-center rounded-lg border">
                <s.icon className="h-5 w-5" style={{ color: GREEN }} />
              </div>
              <div className="mt-4 text-lg font-bold">{s.name}</div>
              <div className="mt-1 text-xs font-medium text-white/40">{s.risk}</div>
              <div className="mt-3 text-2xl font-extrabold" style={{ color: GREEN_DIM }}>
                {s.target}
              </div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/50">{s.desc}</p>
              <button
                style={{ backgroundColor: s.featured ? GREEN : "transparent", borderColor: GREEN, color: s.featured ? "#000" : GREEN }}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-semibold"
              >
                Choose Strategy <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}