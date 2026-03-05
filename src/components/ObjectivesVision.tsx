import { motion } from "motion/react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

export function ObjectivesVision() {
  return (
    <section id="objectives" className="bg-[#f6fbff] border-b border-[#d6dadf]">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:w-full">
          {/* Objectives */}
          <motion.div
            className="flex flex-col gap-10 w-full lg:w-1/2 lg:shrink-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-5">
              <div className="bg-[#0f1e2e] flex items-center justify-center size-14 shrink-0">
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                  <path
                    d={svgPaths.p1fa66600}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.33333"
                  />
                  <path
                    d={svgPaths.p190dabf0}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.33333"
                  />
                  <path
                    d={svgPaths.p2a9abe70}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.33333"
                  />
                </svg>
              </div>
              <h2 className="font-['Sora',sans-serif] font-bold text-[32px] leading-12 tracking-[-0.8px] text-[#0f1e2e]">
                Our Objectives
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className=" font-['Inter',sans-serif] font-normal text-[17px] leading-[30.6px] text-[#2b2f33]">
                Our primary objective is to deliver quality engineering services
                through the deployment of highly skilled human resources and
                state-of-the-art technology. We are committed to maintaining the
                highest safety standards while offering competitive pricing that
                delivers exceptional value to our clients.
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[30.6px] text-[#2b2f33]">
                We focus on building long-term partnerships through consistent
                performance, technical excellence, and unwavering dedication to
                client success across all our service offerings.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex flex-col gap-10 w-full lg:w-1/2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="flex items-center gap-5">
              <div className="bg-[#0f1e2e] flex items-center justify-center size-14 shrink-0">
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                  <path
                    d={svgPaths.p3cf84740}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.33333"
                  />
                  <path
                    d={svgPaths.p25c6f00}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.33333"
                  />
                </svg>
              </div>
              <h2 className="font-['Sora',sans-serif] font-bold text-[32px] leading-12 tracking-[-0.8px] text-[#0f1e2e]">
                Our Vision
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className=" font-['Inter',sans-serif] font-normal text-[17px] leading-[30.6px] text-[#2b2f33]">
                To become a globally recognized engineering services provider,
                delivering world-class solutions that set industry benchmarks.
                We envision expanding our footprint across international markets
                while maintaining our commitment to excellence and innovation.
              </p>
              <p className=" font-['Inter',sans-serif] font-normal text-[17px] leading-[30.6px] text-[#2b2f33]">
                Our vision encompasses continuous growth, technological
                advancement, and strategic partnerships that enable us to
                deliver cutting-edge engineering solutions on a global scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
