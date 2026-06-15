"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineServer,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineLanguage,
} from "react-icons/hi2";

type SkillGroup = {
  category: string;
  icon: React.ReactNode;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: <HiOutlineCodeBracket className="text-2xl" />,
    items: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <HiOutlineServer className="text-2xl" />,
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    category: "Databases",
    icon: <HiOutlineCircleStack className="text-2xl" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    icon: <HiOutlineCloud className="text-2xl" />,
    items: ["Docker", "AWS", "Jenkins", "Linux"],
  },
  {
    category: "Languages",
    icon: <HiOutlineLanguage className="text-2xl" />,
    items: ["JavaScript", "TypeScript", "Java"],
  },
];

function SkillCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className="bg-white border rounded-xl shadow-sm p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-5 border-b pb-3">
        <span className="text-gray-600 group-hover:text-black group-hover:scale-110 transition-all duration-300">
          {group.icon}
        </span>
        <h3 className="text-base font-semibold">{group.category}</h3>
      </div>
      <ul className="space-y-2.5">
        {group.items.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i, duration: 0.3 }}
            className="text-sm text-gray-700 flex items-center gap-2 group/skill"
          >
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover/skill:bg-black group-hover/skill:scale-125 transition-all duration-200" />
            <span className="group-hover/skill:translate-x-1 transition-transform duration-200">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      style={{ opacity: bgOpacity }}
      className="bg-white text-black py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-1">Technical Skills</h2>
          <p className="text-sm text-gray-500 mb-10">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {skillGroups.map((group, idx) => (
            <SkillCard key={group.category} group={group} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
