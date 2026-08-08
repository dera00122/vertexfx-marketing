import React from "react";
import { UserPlus, Wallet, TrendingUp, LineChart } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD_SOFT, BORDER, GREEN, GOLD, WHITE } from "../theme";

const steps = [
  { icon: UserPlus, title: "Create Your Account", desc: "Sign up in minutes with your email and verify your identity — fully KYC-compliant and secure." },
  { icon: Wallet, title: "Fund Your Wallet", desc: "Deposit via bank transfer, card, or crypto. Funds are typically available within minutes." },
  { icon: TrendingUp, title: "Choose a Strategy", desc: "Pick from Conservative, Balanced, or Aggressive strategies based on your risk appetite." },
  { icon: LineChart, title: "Track & Withdraw", desc: "Monitor performance in real time from your dashboard, and withdraw profits anytime." },
];

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen w-full">
      <div className="mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        <div className="mt-10 max-w-2xl lg:mt-16">
          <div className="text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
            HOW IT WORKS
          </div>
          <h1 className="font-heading mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            From sign-up to profit<br />in <span style={{ color: GREEN }}>four simple steps.</span>
          </h1>
        </div>

        <div className="mt-14 flex flex-col gap-4 lg:mt-16">
          {steps.map((s, i) => (
            <div key={s.title} style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }} className="flex items-start gap-4 rounded-xl border p-5">
              <div className="flex flex-col items-center">
                <div style={{ backgroundColor: "rgba(200,255,0,0.1)" }} className="flex h-11 w-11 items-center justify-center rounded-full">
                  <s.icon className="h-5 w-5" style={{ color: GREEN }} />
                </div>
                {i < steps.length - 1 && <div style={{ backgroundColor: BORDER }} className="mt-2 h-full w-px flex-1" />}
              </div>
              <div className="pb-2">
                <div className="flex items-center gap-2">
                  <span style={{ color: GOLD }} className="text-xs font-bold">STEP {i + 1}</span>
                </div>
                <div className="mt-1 text-base font-semibold">{s.title}</div>
                <div className="mt-1 text-sm leading-relaxed text-white/50">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}