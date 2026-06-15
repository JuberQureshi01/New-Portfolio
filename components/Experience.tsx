"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaChevronDown } from "react-icons/fa";

type TabKey = "Experience" | "Education";

const experiences = [
  {
    title: "Backend Developer \u2192 Full Stack Developer",
    org: "Waplia Digital Solutions Pvt Ltd",
    date: "Dec 2025 \u2013 Present",
    points: [
      "Promoted from Backend Developer to Full Stack Developer based on ownership and contributions across frontend and backend systems.",
      "Built scalable backend APIs using Node.js, authentication systems, and maintainable architecture for production applications.",
      "Developed full-stack features using React, Next.js, PostgreSQL/MongoDB, and REST/GraphQL APIs.",
      "Improved performance using Redis caching and optimized queries, reducing response time by 60\u201380%.",
      "Developed real-time functionality using WebSockets for live updates.",
      "Contributed to CI/CD pipelines and cloud deployments using Docker and Jenkins.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    org: "Self-employed",
    date: "Jun 2025 \u2013 Dec 2025",
    points: [
      "Developed and deployed 3+ client websites and web applications using React.js, Node.js, and MongoDB.",
      "Deployed and maintained applications on Vercel, Render, and AWS, ensuring high availability and smooth production releases.",
      "Collaborated directly with clients to gather requirements, provide technical solutions, and deliver projects within deadlines.",
      "Optimized application performance through efficient database design, API optimization, and caching strategies.",
    ],
  },
  {
    title: "Cloud Computing Intern",
    org: "Learn & Build",
    date: "Jul 2024 \u2013 Aug 2024",
    points: [
      "Containerized services with Docker and automated deployments using Jenkins pipelines on AWS EC2.",
      "Built efficient CI/CD pipelines, reducing manual deployment steps by 40%.",
      "Reduced deployment time by 20 minutes per cycle through hands-on pipeline automation during the training.",
    ],
  },
];

const education = [
  {
    title: "B.Tech \u2013 Artificial Intelligence and Data Science",
    org: "Arya Institute of Engineering and Technology",
    date: "Aug 2022 \u2013 May 2026",
  },
  {
    title: "X \u2013 XII",
    org: "Ajeet Vidya Niketan Senior Secondary School",
    date: "2018 \u2013 May 2020",
  },
];

const tabs: TabKey[] = ["Experience", "Education"];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { title: string; org: string; date: string; points?: string[] };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className=" rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-3">
          {item.points ? (
            <FaBriefcase className="text-gray-400 mt-1 text-sm flex-shrink-0" />
          ) : (
            <FaGraduationCap className="text-gray-400 mt-1 text-sm flex-shrink-0" />
          )}
          <div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.org}</p>
            <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 flex-shrink-0 ml-4"
        >
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && item.points && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 border-t mx-5 pt-3 mt-0">
              <ul className="space-y-1.5">
                {item.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.2 }}
                    className="text-xs text-gray-600 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<TabKey>("Experience");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const data = activeTab === "Experience" ? experiences : education;

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.section
      id="experience"
      className="bg-white text-black py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-1">Experience</h2>
          <p className="text-sm text-gray-500">My journey so far</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex border border-black rounded-full overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-5 py-2 text-xs font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {tab === "Experience" ? (
                  <FaBriefcase />
                ) : (
                  <FaGraduationCap />
                )}
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {data.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => toggleItem(idx)}
                index={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
