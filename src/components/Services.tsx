import { motion } from "motion/react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

const services = [
  {
    title: "Telecom Infrastructure",
    description:
      "Complete telecommunications network design, installation, and maintenance solutions.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          d={svgPaths.p1cfeba00}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p16cb9240}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p230c5e00}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p29b4c980}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p281dc800}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
      </svg>
    ),
  },
  {
    title: "Electrical Engineering",
    description:
      "Comprehensive electrical systems design, installation, and power distribution services.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          d={svgPaths.p29ed4e00}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
      </svg>
    ),
  },
  {
    title: "Procurement & Logistics",
    description:
      "Strategic procurement and efficient logistics management for engineering projects.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          d={svgPaths.p44e8680}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d="M16 29.3333V16"
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p165dc700}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d="M10 5.69333L22 12.56"
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
      </svg>
    ),
  },
  {
    title: "Security Systems",
    description:
      "Advanced security infrastructure including surveillance, access control, and monitoring systems.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          d={svgPaths.p13bade00}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
      </svg>
    ),
  },
  {
    title: "Civil & Technical Construction",
    description:
      "Professional construction and technical engineering services for diverse project requirements.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          d={svgPaths.p19858380}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.pc51cfc0}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p19452e80}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p279c0600}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
      </svg>
    ),
  },
  {
    title: "Manpower Supply & Outsourcing",
    description:
      "Skilled technical and engineering personnel deployment for short and long-term engagements.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          d={svgPaths.p27a3200}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p2ee517c0}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p18f42980}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
        <path
          d={svgPaths.p37b568c0}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.66667"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white border-b border-[#d6dadf]">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-[#c5a46d] mx-auto mb-8" />
          <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.5 tracking-[-1px] text-[#0f1e2e] mb-4">
            What We Do
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#2b2f33]">
            Comprehensive engineering services across multiple sectors
          </p>
        </motion.div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white border border-[#d6dadf] p-10 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: (i % 3) * 0.08,
              }}
            >
              <div className="bg-[rgba(197,164,109,0.05)] flex items-center justify-center size-16 mb-10">
                {service.icon}
              </div>
              <h3 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-10.5 text-[#0f1e2e] mb-4">
                {service.title}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-7.5 text-[#2b2f33]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
