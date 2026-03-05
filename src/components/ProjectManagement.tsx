import { motion } from "motion/react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

const phases = [
  {
    label: "Planning",
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44">
        <path
          d={svgPaths.p331ec200}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d={svgPaths.p28372b80}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M22 20.1667H29.3333"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M22 29.3333H29.3333"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M14.6667 20.1667H14.685"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M14.6667 29.3333H14.685"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
      </svg>
    ),
  },
  {
    label: "Design",
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44">
        <path
          d={svgPaths.p1665bd60}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M26.5833 22.9167L30.25 19.25"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M21.0833 17.4167L24.75 13.75"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M15.5833 11.9167L19.25 8.25"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M32.0833 28.4167L35.75 24.75"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
      </svg>
    ),
  },
  {
    label: "Procurement",
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44">
        <path
          d={svgPaths.p3d8a3600}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d={svgPaths.p2d990c00}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d={svgPaths.p359c2d00}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
      </svg>
    ),
  },
  {
    label: "Construction",
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44">
        <path
          d={svgPaths.p15e6d400}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d={svgPaths.p1df3d300}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M14.6667 11H14.685"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M29.3333 11H29.3517"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M22 11H22.0183"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M22 18.3333H22.0183"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M22 25.6667H22.0183"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M29.3333 18.3333H29.3517"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M29.3333 25.6667H29.3517"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M14.6667 18.3333H14.685"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
        <path
          d="M14.6667 25.6667H14.685"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.66667"
        />
      </svg>
    ),
  },
];

export function ProjectManagement() {
  return (
    <section
      id="project-management"
      className="bg-[#f6fbff] border-b border-[#d6dadf]"
    >
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-[#c5a46d] mx-auto mb-8" />
          <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.50 tracking-[-1px] text-[#0f1e2e]">
            Project Management
          </h2>
        </motion.div>

        {/* Body */}
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
          <motion.p
            className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.8] text-[#2b2f33] text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Our structured project execution approach encompasses comprehensive
            planning, innovative design, strategic procurement, and precision
            construction. Each project is led by our experienced management
            team, ensuring seamless coordination, quality control, and timely
            delivery. We leverage proven methodologies and industry best
            practices to manage complex engineering projects from conception to
            completion.
          </motion.p>

          {/* Phases */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full pt-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.1 + 0.2,
                }}
              >
                <div className="relative w-full flex justify-center">
                  <div className="bg-[#0f1e2e] flex items-center justify-center size-24">
                    {phase.icon}
                  </div>
                </div>
                <p className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#0f1e2e] text-center">
                  {phase.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
