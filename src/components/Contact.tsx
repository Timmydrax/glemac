// import { motion } from "motion/react";
// import React, { useState } from "react";
// import { CheckCircle, Loader, AlertCircle } from "lucide-react";
// import svgPaths from "@/imports/svg-vh0hpqcl1w";

// type Status = "idle" | "sending" | "success" | "error";

// export function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState<Status>("idle");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-white border-b border-[#d6dadf] overflow-hidden"
//     >
//       <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-20 lg:py-24">
//         {/* Section header */}
//         <motion.div
//           className="mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <div className="h-px w-16 bg-[#c5a46d] mx-auto mb-8" />
//           <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.5 tracking-[-1px] text-[#0f1e2e] text-center mb-4">
//             Contact Us
//           </h2>
//           <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#2b2f33] text-center">
//             Get in touch with our team to discuss your engineering needs
//           </p>
//         </motion.div>

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left — Get In Touch */}
//           <motion.div
//             className="flex flex-col gap-12 flex-1 min-w-0"
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <h3 className="font-['Inter',sans-serif] font-semibold text-[28px] leading-10.5 text-[#0f1e2e]">
//               Get In Touch
//             </h3>

//             <div className="flex flex-col gap-8">
//               {/* Address */}
//               <div className="flex items-start gap-6">
//                 <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
//                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//                     <path
//                       d={svgPaths.p41ed200}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                     <path
//                       d={svgPaths.p2c5ba380}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
//                     Office Address
//                   </p>
//                   <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[29.75px] text-[#2b2f33]">
//                     7 Shaba Ojo Street, Igando Lagos
//                   </p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-6">
//                 <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
//                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//                     <path
//                       d={svgPaths.p3ea83200}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                     <path
//                       d={svgPaths.p345286c0}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
//                     Email
//                   </p>
//                   <a
//                     href="mailto:glemacengineeringservices@gmail.com"
//                     className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33] hover:text-[#c5a46d] transition-colors break-all"
//                   >
//                     glemacengineeringservices@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-6">
//                 <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
//                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//                     <path
//                       d={svgPaths.p12f3c772}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
//                     Phone
//                   </p>
//                   <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
//                     +234 810 571 7832
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-[#d6dadf] pt-10">
//               <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5  text-[#2b2f33]">
//                 Our team is ready to assist you with your engineering and
//                 manpower service requirements. Reach out today to discuss how we
//                 can support your projects.
//               </p>
//             </div>
//           </motion.div>

//           {/* Right — Form */}
//           <motion.div
//             className="bg-[#eceff1] border border-[#d6dadf] flex-1 min-w-0"
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
//           >
//             <div className="p-5 sm:p-8 lg:p-10 h-full flex flex-col gap-8">
//               <h3 className="font-['Inter',sans-serif] font-semibold text-[28px] leading-10.5 text-[#0f1e2e]">
//                 Send us a message
//               </h3>

//               {status === "success" ? (
//                 <div className="flex flex-col items-center justify-center flex-1 py-12 text-center gap-4">
//                   <CheckCircle
//                     className="w-14 h-14 text-[#c5a46d]"
//                     strokeWidth={1.5}
//                   />
//                   <h4 className="font-['Inter',sans-serif] font-semibold text-[20px] text-[#0f1e2e]">
//                     Message Sent!
//                   </h4>
//                   <p className="font-['Inter',sans-serif] text-[15px] text-[#2b2f33] leading-[1.7] max-w-xs">
//                     Thank you for reaching out. We'll get back to you as soon as
//                     possible.
//                   </p>
//                   <button
//                     onClick={() => setStatus("idle")}
//                     className="mt-2 text-[14px] text-[#c5a46d] underline underline-offset-4 hover:text-[#b8935a] transition-colors"
//                   >
//                     Send another message
//                   </button>
//                 </div>
//               ) : (
//                 <form
//                   action="https://formsubmit.co/timmydrax@gmail.com"
//                   className="flex flex-col gap-7"
//                   method="POST"
//                 >
//                   {/* Name */}
//                   <div className="flex flex-col gap-3">
//                     <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       placeholder="Your full name"
//                       value={form.name}
//                       onChange={handleChange}
//                       className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="flex flex-col gap-3">
//                     <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       placeholder="your.email@example.com"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div className="flex flex-col gap-3">
//                     <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       required
//                       rows={4}
//                       placeholder="Tell us about your project requirements..."
//                       value={form.message}
//                       onChange={handleChange}
//                       className="bg-white border border-[#d6dadf] px-3 py-2 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors resize-none"
//                     />
//                   </div>

//                   {status === "error" && (
//                     <div className="flex items-center gap-2 text-red-600 text-[14px]">
//                       <AlertCircle className="w-4 h-4 shrink-0" />
//                       <span>
//                         Something went wrong. Please try again or email us
//                         directly.
//                       </span>
//                     </div>
//                   )}

//                   <button
//                     type="submit"
//                     disabled={status === "sending"}
//                     className="bg-[#0f1e2e] hover:bg-[#1a2e42] text-white font-['Inter',sans-serif] font-semibold text-[16px] h-12 flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-70"
//                   >
//                     {status === "sending" ? (
//                       <>
//                         <Loader className="w-4 h-4 animate-spin" />
//                         Sending…
//                       </>
//                     ) : (
//                       "Send Message"
//                     )}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "motion/react";
// import React, { useState } from "react";
// import { CheckCircle, AlertCircle } from "lucide-react";
// import svgPaths from "@/imports/svg-vh0hpqcl1w";

// type Status = "idle" | "success" | "error";

// // ─── Replace with the client's real WhatsApp number (digits only, with country code) ───
// const WHATSAPP_NUMBER = "+2348105717832";

// export function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState<Status>("idle");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//   };

//   const handleWhatsApp = () => {
//     if (!form.name || !form.email || !form.message) return;
//     const text = encodeURIComponent(
//       `Hello Glemac Engineering,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
//     );
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
//     setStatus("success");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-white border-b border-[#d6dadf] overflow-hidden"
//     >
//       <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-20 lg:py-24">
//         {/* Section header */}
//         <motion.div
//           className="mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <div className="h-px w-16 bg-[#c5a46d] mx-auto mb-8" />
//           <h2 className="font-['Sora',sans-serif] font-bold text-[40px] leading-12.5 tracking-[-1px] text-[#0f1e2e] text-center mb-4">
//             Contact Us
//           </h2>
//           <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#2b2f33] text-center">
//             Get in touch with our team to discuss your engineering needs
//           </p>
//         </motion.div>

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left — Get In Touch */}
//           <motion.div
//             className="flex flex-col gap-12 flex-1 min-w-0"
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <h3 className="font-['Inter',sans-serif] font-semibold text-[28px] leading-10.5 text-[#0f1e2e]">
//               Get In Touch
//             </h3>

//             <div className="flex flex-col gap-8">
//               {/* Address */}
//               <div className="flex items-start gap-6">
//                 <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
//                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//                     <path
//                       d={svgPaths.p41ed200}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                     <path
//                       d={svgPaths.p2c5ba380}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
//                     Office Address
//                   </p>
//                   <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[29.75px] text-[#2b2f33]">
//                     7 Shaba Ojo Street, Igando Lagos
//                   </p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-6">
//                 <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
//                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//                     <path
//                       d={svgPaths.p3ea83200}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                     <path
//                       d={svgPaths.p345286c0}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
//                     Email
//                   </p>
//                   <a
//                     href="mailto:glemacengineeringservices@gmail.com"
//                     className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33] hover:text-[#c5a46d] transition-colors break-all"
//                   >
//                     glemacengineeringservices@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-6">
//                 <div className="bg-[rgba(197,164,109,0.1)] flex items-center justify-center size-14 shrink-0">
//                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//                     <path
//                       d={svgPaths.p12f3c772}
//                       stroke="#0F1E2E"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.33333"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-6 text-[#0f1e2e] mb-2">
//                     Phone
//                   </p>
//                   <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
//                     +234 810 571 7832
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-[#d6dadf] pt-10">
//               <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
//                 Our team is ready to assist you with your engineering and
//                 manpower service requirements. Reach out today to discuss how we
//                 can support your projects.
//               </p>
//             </div>
//           </motion.div>

//           {/* Right — Form */}
//           <motion.div
//             className="bg-[#eceff1] border border-[#d6dadf] flex-1 min-w-0"
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
//           >
//             <div className="p-5 sm:p-8 lg:p-10 h-full flex flex-col gap-8">
//               <h3 className="font-['Inter',sans-serif] font-semibold text-[28px] leading-10.5 text-[#0f1e2e]">
//                 Send us a message
//               </h3>

//               {status === "success" ? (
//                 <div className="flex flex-col items-center justify-center flex-1 py-12 text-center gap-4">
//                   <CheckCircle
//                     className="w-14 h-14 text-[#c5a46d]"
//                     strokeWidth={1.5}
//                   />
//                   <h4 className="font-['Inter',sans-serif] font-semibold text-[20px] text-[#0f1e2e]">
//                     Message Sent!
//                   </h4>
//                   <p className="font-['Inter',sans-serif] text-[15px] text-[#2b2f33] leading-[1.7] max-w-xs">
//                     Thank you for reaching out. We'll get back to you as soon as
//                     possible.
//                   </p>
//                   <button
//                     onClick={() => setStatus("idle")}
//                     className="mt-2 text-[14px] text-[#c5a46d] underline underline-offset-4 hover:text-[#b8935a] transition-colors"
//                   >
//                     Send another message
//                   </button>
//                 </div>
//               ) : (
//                 <form
//                   action="https://formsubmit.co/timmydrax@gmail.com"
//                   method="POST"
//                   className="flex flex-col gap-7"
//                   onSubmit={() => setStatus("success")}
//                 >
//                   {/* Formsubmit hidden config */}
//                   <input type="hidden" name="_captcha" value="false" />
//                   <input type="hidden" name="_template" value="table" />

//                   {/* Name */}
//                   <div className="flex flex-col gap-3">
//                     <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       placeholder="Your full name"
//                       value={form.name}
//                       onChange={handleChange}
//                       className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="flex flex-col gap-3">
//                     <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       placeholder="your.email@example.com"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div className="flex flex-col gap-3">
//                     <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       required
//                       rows={4}
//                       placeholder="Tell us about your project requirements..."
//                       value={form.message}
//                       onChange={handleChange}
//                       className="bg-white border border-[#d6dadf] px-3 py-2 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors resize-none"
//                     />
//                   </div>

//                   {status === "error" && (
//                     <div className="flex items-center gap-2 text-red-600 text-[14px]">
//                       <AlertCircle className="w-4 h-4 shrink-0" />
//                       <span>
//                         Something went wrong. Please try again or email us
//                         directly.
//                       </span>
//                     </div>
//                   )}

//                   {/* Action buttons */}
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     {/* WhatsApp */}
//                     <button
//                       type="button"
//                       onClick={handleWhatsApp}
//                       className="flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-['Inter',sans-serif] font-semibold text-[15px] h-12 flex items-center justify-center gap-2 transition-colors duration-200"
//                     >
//                       {/* WhatsApp icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                       </svg>
//                       WhatsApp
//                     </button>

//                     {/* Email via formsubmit */}
//                     <button
//                       type="submit"
//                       className="flex-1 bg-[#0f1e2e] hover:bg-[#1a2e42] text-white font-['Inter',sans-serif] font-semibold text-[15px] h-12 flex items-center justify-center gap-2 transition-colors duration-200"
//                     >
//                       {/* Email icon */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <rect width="20" height="16" x="2" y="4" rx="2" />
//                         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                       </svg>
//                       Send Email
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import svgPaths from "@/imports/svg-vh0hpqcl1w";

const WHATSAPP_NUMBER = "2349036716225"; // digits only, no + or spaces

type Status = "idle" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleWhatsApp = () => {
    const f = formRef.current;
    if (!f) return;

    const name = (
      f.elements.namedItem("name") as HTMLInputElement
    ).value.trim();
    const email = (
      f.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const message = (
      f.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    if (!name || !email || !message) {
      f.reportValidity(); // triggers native browser validation UI
      return;
    }

    const text = encodeURIComponent(
      `Hello Glemac Engineering, my name is ${name}. ${message}. You can reach me back at ${email}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setStatus("success");
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
                    +234 903 671 6225
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d6dadf] pt-10">
              <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-7.5 text-[#2b2f33]">
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
                <form
                  ref={formRef}
                  action="https://formsubmit.co/timmydrax@gmail.com"
                  method="POST"
                  className="flex flex-col gap-7"
                >
                  {/* Formsubmit config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name — uncontrolled */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
                    />
                  </div>

                  {/* Email — uncontrolled */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="bg-white border border-[#d6dadf] h-12 px-3 font-['Inter',sans-serif] text-[14px] text-[#0f1e2e] placeholder:text-[#717182] outline-none focus:border-[#c5a46d] transition-colors"
                    />
                  </div>

                  {/* Message — uncontrolled */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#0f1e2e]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
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

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* WhatsApp — reads form via ref, does NOT submit */}
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="py-2 rounded flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-['Inter',sans-serif] font-semibold text-[15px] h-12 flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </button>

                    {/* Email — native form POST to formsubmit.co */}
                    <button
                      type="submit"
                      className="py-2 rounded flex-1 bg-[#0f1e2e] hover:bg-[#1a2e42] text-white font-['Inter',sans-serif] font-semibold text-[15px] h-12 flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Send Email
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
