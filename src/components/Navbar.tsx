import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

function GlemacLogoIcon() {
  return (
    <div className="bg-[#0f1e2e] flex items-center justify-center rounded-[8px] size-[32px] flex-shrink-0">
      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
        <g>
          <path
            d={svgPaths.p1853ca00}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p5aad740}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p8763d00}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Core Values", href: "#values" },
  { label: "Contact Us", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-[68px] md:h-[76px]">
          {/* Logo */}
          <button
            onClick={() => {
              scrollTo("#hero");
              setMobileOpen(false);
            }}
            className="flex items-center gap-[6px]"
          >
            <GlemacLogoIcon />
            <span className="font-['Domine',serif] font-bold text-[20px] tracking-[-0.5px] text-[#0f1e2e] leading-none">
              GLEMAC
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative font-['DM_Sans',sans-serif] font-medium text-[15px] pb-[2px] transition-colors duration-200 ${
                  active === link.href
                    ? "text-[#0f1e2e] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0f1e2e]"
                    : "text-[#1f2a2e] hover:text-[#0f1e2e]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Get Started CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#0f1e2e] hover:bg-[#1a2e42] text-white font-['DM_Sans',sans-serif] font-medium text-[15px] h-[40px] px-5 rounded-[4px] transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#0f1e2e] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-black/[0.08] overflow-hidden"
          >
            <nav className="flex flex-col px-8 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollTo(link.href);
                    setMobileOpen(false);
                  }}
                  className="py-3 text-left font-['DM_Sans',sans-serif] font-medium text-[15px] text-[#1f2a2e] border-b border-black/5 last:border-0 hover:text-[#0f1e2e] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollTo("#contact");
                  setMobileOpen(false);
                }}
                className="mt-3 bg-[#0f1e2e] text-white font-['DM_Sans',sans-serif] font-medium text-[15px] h-[44px] rounded-[4px]"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
