"use client";

import { motion, Variants } from "framer-motion";
import { FiAward, FiTarget, FiCode, FiFolder } from "react-icons/fi";

const achievements = [
  {
    icon: <FiAward className="text-2xl" />,
    title: "Full Stack Developer",
    subtitle: "Waplia Digital Solutions",
  },
  {
    icon: <FiTarget className="text-2xl" />,
    title: "SIH 2024 Finalist",
    subtitle: "Smart India Hackathon - Selected Team",
  },
  {
    icon: <FiCode className="text-2xl" />,
    title: "500+ DSA Problems",
    subtitle: "Solved across platforms",
  },
  {
    icon: <FiFolder className="text-2xl" />,
    title: "8+ Production Projects",
    subtitle: "Built and deployed",
  },
];

export default function Achievements() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="achievements"
      className="bg-white text-black py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-1">
          Achievements
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-500 mb-10"
        >
          Milestones & recognition
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-3 text-black">{item.icon}</div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
