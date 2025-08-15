// components/Contact.tsx
"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_lse73ll",
        "template_qqp39sf",
        formRef.current!,
        "bbXk3jInFwWyWSOQV"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error("Email send error:", error.text);
        }
      );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="bg-white text-black py-16 px-4 md:px-8 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 mt-2">I'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Options */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Email */}
            <div className="p-6 rounded-xl border shadow-sm">
              <div className="text-xl font-semibold flex items-center gap-2">
                <FiMail /> Email
              </div>
              <p className="mt-2 text-gray-700">juberq001@gmail.com</p>
              <a
                href="mailto:juberq001@gmail.com"
                className="text-blue-500 mt-1 inline-block"
              >
                Write Me →
              </a>
            </div>

            {/* GitHub */}
            <div className="p-6 rounded-xl border shadow-sm">
              <div className="text-xl font-semibold flex items-center gap-2">
                <FiGithub /> GitHub
              </div>
              <p className="mt-2 text-gray-700">github.com/JuberQureshi01</p>
              <a
                href="https://github.com/JuberQureshi01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-1 inline-block"
              >
                Visit →
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-xl border shadow-sm">
              <div className="text-xl font-semibold flex items-center gap-2">
                <FiLinkedin /> LinkedIn
              </div>
              <p className="mt-2 text-gray-700">linkedin.com/in/JuberQureshi</p>
              <a
                href="https://www.linkedin.com/in/JuberQureshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-1 inline-block"
              >
                Connect →
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                name="user_name"
                type="text"
                required
                placeholder="Insert your name"
                className="w-full border rounded-md px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="Insert your email"
                className="w-full border rounded-md px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your message"
                className="w-full border rounded-md px-4 py-3"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black cursor-pointer text-white px-6 py-3 rounded-md hover:bg-gray-800 transition flex items-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"} 📩
            </button>

            {success && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
