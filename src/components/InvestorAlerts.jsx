import React from "react";
import { GREEN, CARD, BORDER } from "../theme";

const alerts = [
    { name: "Ahmed", country: "Saudi Arabia", flag: "🇸🇦", amount: "$2,500" },
    { name: "Chidi", country: "Nigeria", flag: "🇳🇬", amount: "$1,200" },
    { name: "Fatima", country: "UAE", flag: "🇦🇪", amount: "$5,000" },
    { name: "James", country: "United Kingdom", flag: "🇬🇧", amount: "$3,800" },
    { name: "Amara", country: "Ghana", flag: "🇬🇭", amount: "$900" },
    { name: "Youssef", country: "Egypt", flag: "🇪🇬", amount: "$4,100" },
    { name: "Priya", country: "India", flag: "🇮🇳", amount: "$1,750" },
    { name: "Kwame", country: "South Africa", flag: "🇿🇦", amount: "$2,900" },
    { name: "Omar", country: "Qatar", flag: "🇶🇦", amount: "$6,200" },
    { name: "Elena", country: "Spain", flag: "🇪🇸", amount: "$1,450" },
    { name: "Musa", country: "Kenya", flag: "🇰🇪", amount: "$800" },
    { name: "Sara", country: "Kuwait", flag: "🇰🇼", amount: "$3,300" },
    { name: "Liam", country: "Canada", flag: "🇨🇦", amount: "$2,100" },
    { name: "Ngozi", country: "Nigeria", flag: "🇳🇬", amount: "$1,900" },
    { name: "Hassan", country: "Jordan", flag: "🇯🇴", amount: "$2,750" },
    { name: "Marie", country: "France", flag: "🇫🇷", amount: "$4,600" },
    { name: "Ibrahim", country: "Oman", flag: "🇴🇲", amount: "$5,500" },
    { name: "Aisha", country: "Morocco", flag: "🇲🇦", amount: "$1,300" },
    { name: "David", country: "United States", flag: "🇺🇸", amount: "$7,000" },
    { name: "Zainab", country: "Bahrain", flag: "🇧🇭", amount: "$2,400" },
    { name: "Kofi", country: "Ghana", flag: "🇬🇭", amount: "$1,050" },
    { name: "Layla", country: "Lebanon", flag: "🇱🇧", amount: "$3,900" },
    { name: "Chen", country: "Singapore", flag: "🇸🇬", amount: "$6,800" },
    { name: "Adaeze", country: "Nigeria", flag: "🇳🇬", amount: "$2,200" },
    { name: "Tariq", country: "Pakistan", flag: "🇵🇰", amount: "$1,600" },
    { name: "Sophia", country: "Germany", flag: "🇩🇪", amount: "$3,150" },
    { name: "Emeka", country: "Nigeria", flag: "🇳🇬", amount: "$4,800" },
    { name: "Nadia", country: "Algeria", flag: "🇩🇿", amount: "$1,850" },
    { name: "Ravi", country: "India", flag: "🇮🇳", amount: "$2,650" },
    { name: "Grace", country: "Kenya", flag: "🇰🇪", amount: "$1,400" },
  ];

export default function InvestorAlerts() {
  const [current, setCurrent] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const indexRef = React.useRef(0);

  React.useEffect(() => {
    function showNext() {
      setCurrent(alerts[indexRef.current % alerts.length]);
      indexRef.current += 1;
      setVisible(true);

      setTimeout(() => setVisible(false), 5000);
    }

    const firstDelay = setTimeout(showNext, 3000);
    const interval = setInterval(showNext, 8000);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-40 max-w-[280px] transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{ backgroundColor: CARD, borderColor: BORDER }}
        className="flex items-center gap-3 rounded-xl border p-3 shadow-2xl"
      >
        <span className="text-2xl">{current.flag}</span>
        <div className="text-xs leading-snug text-white/80">
          <span className="font-semibold text-white">{current.name}</span> from{" "}
          {current.country} just invested{" "}
          <span style={{ color: GREEN }} className="font-semibold">
            {current.amount}
          </span>
        </div>
      </div>
    </div>
  );
}