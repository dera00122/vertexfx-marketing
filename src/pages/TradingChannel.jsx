import React from "react";
import { Send, Bell, TrendingUp, Users } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD_SOFT, BORDER, GREEN, GREEN_DIM, GOLD, WHITE } from "../theme";

const signals = [
  { pair: "EUR/USD", action: "BUY", price: "1.08937", time: "2 min ago" },
  { pair: "XAU/USD", action: "BUY", price: "2,343.65", time: "18 min ago" },
  { pair: "GBP/USD", action: "SELL", price: "1.26941", time: "1 hr ago" },
];

export default function TradingChannel() {
  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen w-full">
      <div className="mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
              TRADING CHANNEL
            </div>
            <h1 className="font-heading mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Live signals,<br /><span style={{ color: GREEN }}>straight to Telegram.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
              Get real-time buy/sell alerts from our trading desk the moment they fire —
              no dashboard refresh required. Every signal includes entry, target, and
              stop-loss levels.
            </p>
            <button style={{ backgroundColor: GREEN }} className="mt-7 flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-black">
              <Send className="h-4 w-4" />
              Join Telegram Channel
            </button>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/40">
              <Users className="h-3.5 w-3.5" />
              12,400+ traders subscribed
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div style={{ backgroundColor: "#0d0d0d", borderColor: BORDER }} className="rounded-2xl border p-4">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-white/60">
                <Bell className="h-4 w-4" style={{ color: GREEN }} />
                Recent Signals
              </div>
              <div className="flex flex-col gap-2.5">
                {signals.map((s) => (
                  <div key={s.pair + s.time} style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }} className="flex items-center justify-between rounded-xl border px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold">{s.pair}</div>
                      <div className="text-[11px] text-white/40">{s.time}</div>
                    </div>
                    <div className="text-right">
                      <div style={{ color: s.action === "BUY" ? GREEN_DIM : "#f87171" }} className="flex items-center justify-end gap-1 text-xs font-bold">
                        <TrendingUp className="h-3 w-3" /> {s.action}
                      </div>
                      <div className="text-xs text-white/60">{s.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}