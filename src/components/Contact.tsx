import { motion } from "motion/react";
import React, { useState } from "react";
import { CheckCircle, Loader, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS setup — replace the 3 placeholder values below with your real keys.
// 1. Sign up at https://www.emailjs.com (free plan)
// 2. Connect a Gmail service → copy the Service ID
// 3. Create a template with variables: {{from_name}}, {{from_email}}, {{phone}},
//    {{message}} — set "To Email" to timmydrax@gmail.com
// 4. Copy your Public Key from Account → API Keys
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_bqcthbo";
const EMAILJS_TEMPLATE_ID = "template_gypeeee";
const EMAILJS_PUBLIC_KEY = "hZRszAPHszojZUM9c";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const configured =
      EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

    if (!configured) {
      // Fallback: open mailto
      const subject = encodeURIComponent(
        `Enquiry from ${form.name} – Glemac Engineering`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
      );
      window.open(`mailto:timmydrax@gmail.com?subject=${subject}&body=${body}`);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "timmydrax@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white border-b border-[#d6dadf] overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-20 lg:py-24">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-[#c5a46d] mx-auto mb-8" />
          <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.5 tracking-[-1px] text-[#0f1e2e] text-center mb-4">
            Contact Us
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#2b2f33] text-center">
            Get in touch with our team to discuss your engineering needs
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left — Get In Touch */}
          <motion.div
            className="flex flex-col gap-12 flex-1 min-w-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="font-['Inter',sans-serif] font-semibold text-[28px] leading-10.5 text-[#0f1e2e]">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-8">
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                    <path
                      d={svgPaths.p41ed200}
                      stroke="#0F1E2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.33333"
                    />
                    <path
                      d={svgPaths.p2c5ba380}
                      stroke="#0F1E2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.33333"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
                    Office Address
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[29.75px] text-[#2b2f33]">
                    7 Shaba Ojo Street, Igando Lagos
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                    <path
                      d={svgPaths.p3ea83200}
                      stroke="#0F1E2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.33333"
                    />
                    <path
                      d={svgPaths.p345286c0}
                      stroke="#0F1E2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.33333"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:glemacengineeringservices@gmail.com"
                    className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33] hover:text-[#c5a46d] transition-colors break-all"
                  >
                    glemacengineeringservices@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                    <path
                      d={svgPaths.p12f3c772}
                      stroke="#0F1E2E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.33333"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
                    Phone
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
                    +234 XXX XXX XXXX
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
                    +234 XXX XXX XXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d6dadf] pt-10">
              <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5  text-[#2b2f33]">
                Our team is ready to assist you with your engineering and
                manpower service requirements. Reach out today to discuss how we
                can support your projects.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="bg-[#eceff1] border border-[#d6dadf] flex-1 min-w-0"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="p-5 sm:p-8 lg:p-10 h-full flex flex-col gap-8">
              <h3 className="font-['Inter',sans-serif] font-semibold text-[28px] leading-10.5 text-[#0f1e2e]">
                Send us a message
              </h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center flex-1 py-12 text-center gap-4">
                  <CheckCircle
                    className="w-14 h-14 text-[#c5a46d]"
                    strokeWidth={1.5}
                  />
                  <h4 className="font-['Inter',sans-serif] font-semibold text-[20px] text-[#0f1e2e]">
                    Message Sent!
                  </h4>
                  <p className="font-['Inter',sans-serif] text-[15px] text-[#2b2f33] leading-[1.7] max-w-xs">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-[14px] text-[#c5a46d] underline underline-offset-4 hover:text-[#b8935a] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  {/* Name */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className="bg-white border border-[#d6dadf] px-3 py-2 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-[14px]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>
                        Something went wrong. Please try again or email us
                        directly.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-[#0f1e2e] hover:bg-[#1a2e42] text-white font-['Inter',sans-serif] font-semibold text-[16px] h-12 flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
