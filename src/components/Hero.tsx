import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import imgHero from "@/assets/images/imgHero.png";
import imgHero2 from "@/assets/images/imgHero2.png";
import imgHero3 from "@/assets/images/imgHero3.png";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

const slides = [imgHero, imgHero2, imgHero3];
const SLIDE_INTERVAL = 5000; // ms per slide

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="bg-[#0f1e2e] border-b border-[#d6dadf]">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left — text content */}
          <motion.div
            className="flex flex-col gap-10 w-full lg:w-154 lg:shrink-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] tracking-[1.8px] uppercase text-[#c5a46d]">
                Glemac Engineering &amp; Manpower Services Ltd
              </p>
              <h1 className="font-['Sora',sans-serif] font-bold text-[42px] md:text-[52px] lg:text-[60px] leading-[1.15] tracking-[-1.5px] text-white">
                Engineering Excellence with Timely, Quality Service Delivery
              </h1>
            </div>

            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.75] text-white/80 max-w-131.5">
              Indigenous telecommunications, power, and engineering services
              company delivering reliable solutions across Nigeria.
            </p>

            <div className="flex flex-row gap-5 items-center flex-wrap">
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-white hover:bg-[#f0f0f0] text-[#0f1e2e] font-['Inter',sans-serif] font-semibold text-[16px] h-12 px-6 rounded-[6px] flex items-center gap-2 transition-colors duration-200 shrink-0"
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33333 8H12.6667"
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                  <path
                    d="M8 3.33333L12.6667 8L8 12.6667"
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="bg-[#0f1e2e] border-2 border-white text-white font-['Inter',sans-serif] font-semibold text-[16px] h-13 px-8 rounded-[6px] hover:bg-white/10 transition-colors duration-200 shrink-0"
              >
                View Services
              </button>
            </div>

            <p className="font-['Inter',sans-serif] font-medium text-[12px] tracking-[0.6px] text-white/70">
              RC 1550082
            </p>
          </motion.div>

          {/* Right — image slider + carousel indicators */}
          <motion.div
            className="flex flex-col gap-6 items-center w-full lg:flex-1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Slide frame */}
            <div className="relative w-full aspect-616/553 rounded-2xl overflow-hidden bg-[#0d1a27]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt={`Engineering infrastructure ${current + 1}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>

            {/* Progress bar indicators */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="relative h-2 rounded-full overflow-hidden transition-[width] duration-300 focus:outline-none"
                  style={{ width: i === current ? 120 : 80 }}
                >
                  {/* Dimmed track */}
                  <span className="absolute inset-0 bg-white/40 rounded-full" />
                  {/* Active progress fill — animates from left to right over SLIDE_INTERVAL */}
                  {i === current && (
                    <motion.span
                      key={`fill-${current}`}
                      className="absolute inset-0 bg-white rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: SLIDE_INTERVAL / 1000,
                        ease: "linear",
                      }}
                    />
                  )}
                  {/* Past slides stay fully white */}
                  {i < current && (
                    <span className="absolute inset-0 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
