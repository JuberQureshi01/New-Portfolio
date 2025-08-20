"use client";
import { motion, Variants } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function AboutMe() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="w-full max-w-xl mx-auto text-center py-10 px-4 bg-white text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // Remove once: true
      exit="hidden" // This allows hiding when scrolling out
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-1">
        About Me
      </motion.h2>
      <motion.p variants={itemVariants} className="text-gray-600 mb-6">
        Let me introduce myself
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-4 mb-6 flex-wrap"
      >
        <div className="bg-gray-100 p-4 rounded-xl w-32 shadow-sm text-center">
          <div className="flex justify-center mb-1 text-xl text-black">
            <FiAward />
          </div>
          <p className="text-sm font-semibold">8+</p>
          <p className="text-xs text-gray-500">Projects Completed</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl w-32 shadow-sm text-center">
          <div className="flex justify-center mb-1 text-xl text-black">
            <FaLaptopCode />
          </div>
          <p className="text-sm font-semibold">2 Year Plus</p>
          <p className="text-xs text-gray-500">Hands-on Experience</p>
        </div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-sm leading-relaxed px-2 mb-6 text-gray-700"
      >
        I’m a Fullstack Developer who loves building meaningful tech solutions —
        from cloud-backed platforms to beautiful frontends. Passionate about open
        source, problem solving, and Cricket. I thrive in collaborative
        environments and always seek to learn and innovate.
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
