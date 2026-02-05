"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Kirim data ke API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon.",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset status setelah 5 detik
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 5000);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="contact"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/neon.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#030014]/80 to-[#030014]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="Welcome-box py-2 px-3 sm:py-3 sm:px-4 border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md opacity-90 mb-6 sm:mb-8 mx-auto w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="text-[#b49bff] mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="Welcome-text text-sm sm:text-base font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Work Together
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        {/* Form Container */}
        <div className="relative backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#7042f861] bg-[#0300145e] p-4 sm:p-6 lg:p-8 shadow-lg shadow-[#2A0E61]/50">
          {/* Decorative corner elements */}
          <div className="absolute -top-1 -left-1 w-4 h-4 sm:w-6 sm:h-6">
            <div className="w-full h-full border border-transparent border-t-purple-500 border-l-cyan-500 rounded-full"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6">
            <div className="w-full h-full border border-transparent border-t-purple-500 border-r-cyan-500 rounded-full"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 sm:w-6 sm:h-6">
            <div className="w-full h-full border border-transparent border-b-purple-500 border-l-cyan-500 rounded-full"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6">
            <div className="w-full h-full border border-transparent border-b-purple-500 border-r-cyan-500 rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Your Name <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="relative w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="John Doe"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Email Address <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="relative w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="john@example.com"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Subject <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="relative w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Project Inquiry"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Message <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="relative w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  disabled={status === "loading"}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`text-center text-sm mt-4 ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </form>

          {/* Alternative Contact Info */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#7042f830]">
            <p className="text-gray-400 text-center text-sm sm:text-base mb-4">
              Or contact me directly at:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span>kustoroterbatas@gmail.com</span>
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a.75.75 0 00-1.06 1.06l.46.46a9.768 9.768 0 01-2.294 3.045 9.77 9.77 0 01-3.046 2.294l-.46-.46a.75.75 0 00-1.06 1.06l.46.46a8.25 8.25 0 01-11.672-8.214l.46.46a.75.75 0 001.06-1.06l-.46-.46a8.25 8.25 0 018.214-11.672l.46.46a.75.75 0 001.06-1.06l-.46-.46z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
