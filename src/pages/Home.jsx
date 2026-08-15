import React from "react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  TrendingUp,
  Globe,
  Zap,
  Headphones,
  Star,
  ChevronDown,
  ChevronRight,
  Bell,
  Eye,
  Users,
  BarChart3,
  Wallet,
  UserPlus,
  X,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD, CARD_SOFT, BORDER, GREEN, GREEN_DIM, GOLD, WHITE, RED, DASHBOARD_URL } from "../theme";
import InvestorAlerts from "../components/InvestorAlerts";

const tickers = [
  { pair: "EUR/USD", value: "1.08937", change: "+0.35%", up: true },
  { pair: "GBP/USD", value: "1.26941", change: "-0.21%", up: false },
  { pair: "USD/JPY", value: "156.724", change: "+0.18%", up: true },
  { pair: "XAU/USD", value: "2,343.65", change: "+0.42%", up: true },
  { pair: "USD/CHF", value: "0.89124", change: "-0.09%", up: false },
  { pair: "AUD/USD", value: "0.66312", change: "+0.27%", up: true },
  { pair: "USD/CAD", value: "1.36284", change: "+0.14%", up: true },
  { pair: "NZD/USD", value: "0.60891", change: "-0.33%", up: false },
  { pair: "BTC/USD", value: "68,420.15", change: "+2.14%", up: true },
  { pair: "ETH/USD", value: "3,542.80", change: "+1.36%", up: true },
];

const stats = [
  { icon: Users, value: "25,000+", label: "Investors" },
  { icon: Globe, value: "40+", label: "Countries" },
  { icon: BarChart3, value: "$120M+", label: "Assets" },
  { icon: Star, value: "4.9/5", label: "Rating" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    desc: "Your funds and data are protected with top-tier encryption.",
    detail: "256-bit SSL encryption, segregated client accounts, and two-factor authentication on every login and withdrawal.",
  },
  {
    icon: Zap,
    title: "Fast Deposits",
    desc: "Instant funding via secure payment methods.",
    detail: "Deposits via card, bank transfer, or crypto land in your account in minutes, not days — no manual approval delays.",
  },
  {
    icon: TrendingUp,
    title: "Live Market Data",
    desc: "Real-time data and advanced charts for smarter decisions.",
    detail: "Streaming forex, gold, and crypto prices with candlestick charts, indicators, and historical data going back years.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    desc: "Trade major forex pairs, commodities, indices, and more.",
    detail: "Access 40+ currency pairs, precious metals, and major indices — all from a single account, no extra sign-ups.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our team is here to help you anytime, anywhere.",
    detail: "Live chat and Telegram support around the clock, plus a dedicated account manager for larger portfolios.",
  },
];

const steps = [
  { icon: UserPlus, title: "Create Account", desc: "Sign up in minutes and secure your account." },
  { icon: Wallet, title: "Fund Wallet", desc: "Deposit funds using our fast and secure methods." },
  { icon: TrendingUp, title: "Start Investing", desc: "Choose your investment strategy and grow your wealth." },
];

export default function Home() {
  const [openFeature, setOpenFeature] = React.useState(null);
  const [demoOpen, setDemoOpen] = React.useState(false);
  const phoneRef = React.useRef(null);
  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="relative min-h-screen w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Sora', system-ui, sans-serif; }
        .ticker-track {
          animation: tickerScroll 34s linear infinite;
        }
        .ticker-wrap:hover .ticker-track,
        .ticker-wrap:active .ticker-track {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        {/* TICKER STRIP — auto-scrolling marquee, pauses on hover/tap */}
        <div
          className="ticker-wrap relative mt-5 overflow-hidden lg:mt-8"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="ticker-track flex w-max gap-2">
            {[...tickers, ...tickers].map((t, i) => (
              <div
                key={`${t.pair}-${i}`}
                style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }}
                className="flex shrink-0 flex-col rounded-xl border px-3.5 py-2"
              >
                <span className="text-[11px] font-medium text-white/50">{t.pair}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-[13px] font-semibold">{t.value}</span>
                  <span style={{ color: t.up ? GREEN_DIM : RED }} className="text-[11px] font-medium">
                    {t.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
              <span>✦</span>
              SMARTER TRADING. STRONGER FUTURES.
            </div>

            <h1 className="font-heading mt-4 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Grow Your Wealth
              <br />
              Through <span style={{ color: GREEN }}>Smart</span>
              <br />
              <span style={{ color: GREEN }}>Currency Investing</span>
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
              Access professionally managed forex strategies, track your portfolio in
              real time, and invest with confidence.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => window.location.href = DASHBOARD_URL}
                style={{ backgroundColor: GREEN }}
                className="group flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-black transition-transform active:scale-95"
              >
                Start Investing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-[15px] font-medium text-white/90 transition-colors hover:border-white/30"
              >
                <Play className="h-4 w-4 fill-white" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-start gap-1.5">
                  <s.icon className="h-5 w-5" style={{ color: GOLD }} />
                  <div className="text-sm font-bold">{s.value}</div>
                  <div className="text-[10px] text-white/40">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[12, 32, 47, 25].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/64?img=${id}`}
                    alt="Investor"
                    style={{ borderColor: BG }}
                    className="h-9 w-9 rounded-full border-2 object-cover"
                  />
                ))}
              </div>
              <div className="text-xs text-white/45">Trusted by investors across multiple countries.</div>
            </div>
          </div>

          {/* GLOBE VISUAL */}
          <div
            ref={phoneRef}
            className="relative mt-14 flex min-h-[260px] justify-center overflow-hidden lg:-mx-24 lg:mt-0 lg:min-h-[420px] lg:px-24"
          >
            {/* Rotating globe video background — edges fade out so it blends into
                the page's solid background instead of showing a hard rectangle */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity: 0.35,
                WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 45%, transparent 85%)",
                maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 45%, transparent 85%)",
              }}
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/globe-poster.jpg"
            >
              <source src="/videos/globe-rotate.mp4" type="video/mp4" />
            </video>
            {/* soft dark overlay for text contrast, also faded at the edges to match */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${BG}cc 0%, ${BG}66 40%, ${BG} 100%)`,
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 95%)",
                maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 95%)",
              }}
            />
          </div>
        </div>

        {/* WHY VERTEX FX — accordion */}
        <div className="mt-16 lg:mt-20">
          <div className="mb-5 text-center text-xs font-semibold tracking-widest lg:text-left" style={{ color: GOLD }}>
            WHY VERTEX FX?
          </div>
          <div className="flex flex-col gap-2.5">
            {features.map((f, i) => {
              const isOpen = openFeature === i;
              return (
                <div
                  key={f.title}
                  style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }}
                  className="overflow-hidden rounded-xl border"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFeature(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left"
                  >
                    <div style={{ borderColor: BORDER }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                      <f.icon className="h-5 w-5" style={{ color: GREEN }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-white/90">{f.title}</div>
                      <div className="mt-0.5 text-xs leading-snug text-white/45">{f.desc}</div>
                    </div>
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "120px" : "0px" }}
                  >
                    <div style={{ borderColor: BORDER }} className="border-t px-4 py-3 pl-[3.75rem] text-xs leading-relaxed text-white/50">
                      {f.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-14 lg:mt-16">
          <div className="mb-6 text-center text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
            HOW IT WORKS
          </div>
          <div className="grid grid-cols-3 gap-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }}
                className="flex flex-col items-center gap-2 rounded-xl border px-2 py-5 text-center"
              >
                <div className="flex items-center gap-1.5">
                  <span style={{ color: GREEN_DIM }} className="text-sm font-bold">{i + 1}</span>
                  <div style={{ backgroundColor: "rgba(200,255,0,0.1)" }} className="flex h-8 w-8 items-center justify-center rounded-full">
                    <s.icon className="h-4 w-4" style={{ color: GREEN }} />
                  </div>
                </div>
                <div className="text-[13px] font-semibold">{s.title}</div>
                <div className="text-[11px] leading-snug text-white/40">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {/* WATCH DEMO MODAL */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setDemoOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: CARD, borderColor: BORDER }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border"
          >
            <button
              type="button"
              onClick={() => setDemoOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-1.5 text-white/80 hover:text-white"
              aria-label="Close demo"
            >
              <X className="h-4 w-4" />
            </button>
            {/* Swap this for your real product-tour video: <video src="/videos/demo.mp4" controls autoPlay /> */}
            <div className="flex aspect-video w-full items-center justify-center bg-black/40 text-sm text-white/40">
              Drop your demo video here (e.g. /videos/demo.mp4)
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold text-white/90">VertexFX Product Demo</div>
              <div className="mt-1 text-xs text-white/45">A 90-second walkthrough of live trading, portfolio tracking, and deposits.</div>
            </div>
          </div>
        </div>
      )}
       <InvestorAlerts />
    </div>
  );
}