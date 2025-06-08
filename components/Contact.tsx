'use client';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

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
        'service_lse73ll',
        'template_qqp39sf',
        formRef.current!,
        'bbXk3jInFwWyWSOQV'
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error('Email send error:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-white text-black py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 mt-2">I'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Options */}
          <div className="space-y-6">
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
                className="text-blue-500 mt-1 inline-block"
              >
                Connect →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
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
              {loading ? 'Sending...' : 'Send Message'} 📩
            </button>

            {success && <p className="text-green-600">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
