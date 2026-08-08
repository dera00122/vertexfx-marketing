import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BG, CARD_SOFT, BORDER, GREEN, GOLD, WHITE } from "../theme";

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your real backend/email service (e.g. Formspree, an API route).
    setSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: BG, color: WHITE, fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen w-full">
      <div className="mx-auto max-w-md px-5 pb-16 pt-6 sm:max-w-2xl sm:px-10 lg:max-w-6xl lg:px-12">
        <NavBar />

        <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-xs font-semibold tracking-wider" style={{ color: GOLD }}>
              CONTACT US
            </div>
            <h1 className="font-heading mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Let's talk<br /><span style={{ color: GREEN }}>about your goals.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
              Whether you're picking a strategy or just have a question, our team
              replies within one business day.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {[
                [Mail, "support@vertexfx.com"],
                [Phone, "+234 800 000 0000"],
                [MapPin, "Enugu, Nigeria"],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                  <div style={{ borderColor: BORDER }} className="flex h-9 w-9 items-center justify-center rounded-lg border">
                    <Icon className="h-4 w-4" style={{ color: GREEN }} />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div style={{ backgroundColor: CARD_SOFT, borderColor: BORDER }} className="rounded-2xl border p-6">
              {submitted ? (
                <div className="py-10 text-center">
                  <div style={{ color: GREEN }} className="text-lg font-semibold">Message sent!</div>
                  <div className="mt-2 text-sm text-white/50">We'll get back to you within one business day.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-white/50">Full Name</label>
                    <input
                      required
                      type="text"
                      style={{ backgroundColor: "#0d0d0d", borderColor: BORDER }}
                      className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50">Email</label>
                    <input
                      required
                      type="email"
                      style={{ backgroundColor: "#0d0d0d", borderColor: BORDER }}
                      className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/30"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50">Message</label>
                    <textarea
                      required
                      rows={4}
                      style={{ backgroundColor: "#0d0d0d", borderColor: BORDER }}
                      className="mt-1.5 w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/30"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: GREEN }}
                    className="mt-2 flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-black"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}