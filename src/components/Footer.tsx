import { motion } from "motion/react";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1e2e] text-white">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16 mb-12 pb-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Company */}
          <div className="flex flex-col gap-4 max-w-108.5">
            <p className="font-['Inter',sans-serif] font-semibold text-[20px] leading-7.5 text-white">
              Glemac Engineering &amp; Manpower Services Ltd
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-6.5 text-white/70">
              Indigenous telecommunications, power, and engineering services
              company delivering reliable solutions across Nigeria since 2018.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] tracking-[0.6px] text-white/40 mt-2">
              RC 1550082
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-white">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Core Values", href: "#values" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22.5px] text-white/70 hover:text-[#c5a46d] transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-white">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22.5px] text-white/70">
                7 Shaba Ojo Street
              </li>
              <li className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22.5px] text-white/70">
                Igando Lagos
              </li>
              <li>
                <a
                  href="mailto:glemacengineeringservices@gmail.com"
                  className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22.5px] text-white/70 hover:text-[#c5a46d] transition-colors break-all"
                >
                  glemacengineeringservices@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-5 text-white/50 text-center md:text-left">
            © {year} Glemac Engineering &amp; Manpower Services Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-['Inter',sans-serif] font-normal text-[14px] leading-5 text-white/50 hover:text-[#c5a46d] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-['Inter',sans-serif] font-normal text-[14px] leading-5 text-white/50 hover:text-[#c5a46d] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
