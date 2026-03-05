import { motion } from "motion/react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

export function OurTeam() {
  return (
    <section id="team" className="bg-white border-b border-[#d6dadf]">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-[#c5a46d]" />
          <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.50 tracking-[-1px] text-[#0f1e2e] text-center">
            Our Team
          </h2>
        </motion.div>

        {/* Content max-width centered */}
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Management */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-16 mb-6">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path
                    d={svgPaths.p1bddf080}
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.66667"
                  />
                  <path
                    d={svgPaths.p28e98400}
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.66667"
                  />
                </svg>
              </div>
              <h3 className="font-['Inter',sans-serif] font-semibold text-[24px] leading-7.5 text-[#0f1e2e] mb-4">
                Management Team
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
                Our leadership comprises seasoned professionals with extensive
                industry experience in engineering, project management, and
                business operations. Their strategic vision and operational
                expertise drive our company's growth and service excellence.
              </p>
            </motion.div>

            {/* Technical */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-16 mb-6">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path
                    d={svgPaths.p14076f00}
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.66667"
                  />
                  <path
                    d="M29.3333 13.3333V21.3333"
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.66667"
                  />
                  <path
                    d={svgPaths.p3858b240}
                    stroke="#0F1E2E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.66667"
                  />
                </svg>
              </div>
              <h3 className="font-['Inter',sans-serif] font-semibold text-[24px] leading-7.5 text-[#0f1e2e] mb-4">
                Technical Expertise
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
                We maintain a comprehensive database of highly skilled technical
                personnel across various engineering disciplines. Our team
                includes certified engineers, technicians, and specialists
                capable of executing complex projects with precision.
              </p>
            </motion.div>
          </div>

          {/* Note box */}
          <motion.div
            className="bg-[#eceff1] border border-[#d6dadf] p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[30.6px] text-[#2b2f33] text-center">
              Our human resources infrastructure enables us to deploy qualified
              professionals rapidly, ensuring project continuity and maintaining
              the highest technical standards. We invest continuously in staff
              training and development to stay ahead of industry innovations and
              emerging technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
