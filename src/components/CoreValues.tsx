import { motion } from "motion/react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

const values = [
  {
    title: "Professional Excellence",
    description: "Commitment to the highest standards in every project",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path
          d={svgPaths.p16af0320}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d={svgPaths.p2f66b600}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Ethical conduct and transparency in all operations",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path
          d={svgPaths.pf3c7c00}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M13.5 16.5L18 21L33 6"
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Teamwork",
    description: "Collaborative approach to achieve superior results",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path
          d={svgPaths.p568b200}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d={svgPaths.pcac1600}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d={svgPaths.p16e25080}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "Client-centered focus in service delivery",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path
          d={svgPaths.p12177900}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Staff Development & Growth",
    description: "Investing in our team's continuous advancement",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path
          d={svgPaths.p29260510}
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M24 10.5H33V19.5"
          stroke="#0F1E2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    ),
  },
];

export function CoreValues() {
  return (
    <section id="values" className="bg-white border-b border-[#d6dadf]">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-7 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-[#c5a46d]" />
          <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.5 tracking-[-1px] text-[#0f1e2e] text-center">
            Core Values
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#2b2f33] text-center">
            The principles that guide our operations and define our culture
          </p>
        </motion.div>

        {/* Values row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="relative bg-[#eceff1] border border-[#d6dadf] flex items-center justify-center size-20">
                {value.icon}
              </div>
              <div className="text-center flex flex-col gap-3">
                <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-5 text-[#0f1e2e]">
                  {value.title}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23.8px] text-[#2b2f33]">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
