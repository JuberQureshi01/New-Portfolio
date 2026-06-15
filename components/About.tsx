"use client";
import { motion, Variants } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function AboutMe() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="w-full max-w-xl mx-auto text-center py-10 px-4 bg-white text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-1">
        About Me
      </motion.h2>
      <motion.p variants={itemVariants} className="text-gray-600 mb-6">
        A quick overview
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-sm leading-relaxed px-2  text-gray-700"
      >
        Full Stack Developer with experience building scalable web applications,
        REST/GraphQL APIs, real-time systems, and cloud-deployed solutions.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-sm leading-relaxed px-2 mb-6 text-gray-700"
      >
        I specialize in JavaScript/TypeScript ecosystems and enjoy solving
        complex problems across frontend and backend systems.
      </motion.p>

      <motion.a
        variants={itemVariants}
        href="/Juber Resume.pdf"
        download
        className="m-auto gap-2.5 w-fit flex items-center mt-4 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition duration-200"
      >
        Download Resume <IoDocumentTextOutline />
      </motion.a>
    </motion.section>
  );
}
