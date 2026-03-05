import { motion } from "motion/react";
import imgAbout from "@/assets/images/imgAbout.png";

export function About() {
  return (
    <section id="about" className="bg-white border-b border-[#d6dadf]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[95px] items-center">
          {/* Image */}
          <motion.div
            className="w-full lg:w-[561px] lg:flex-shrink-0 aspect-[561/426] rounded-[12px] overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={imgAbout}
              alt="Engineering team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col gap-0 w-full lg:w-[489px] lg:flex-shrink-0"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative mb-8">
              <div className="h-[1px] w-16 bg-[#c5a46d] mb-8" />
              <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-[50px] tracking-[-1px] text-[#0f1e2e]">
                Who We Are
              </h2>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.8] text-[#2b2f33]">
              Glemac Engineering &amp; Manpower Services Ltd is a dynamic
              indigenous engineering company incorporated in 2018. We operate
              across telecommunications, electronics, and power sectors,
              delivering comprehensive engineering solutions throughout Nigeria.
              Our approach centers on client satisfaction through quality
              service delivery, technical expertise, and unwavering commitment
              to excellence in every project we undertake.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
