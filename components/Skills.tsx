// components/Skills.tsx
"use client";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { BsPatchCheck } from "react-icons/bs";
import { useRef } from "react";

// Define the structure of a skill item
interface Skill {
  name: string;
  level: string;
}

// Define the structure for all skills categorized
type SkillsData = {
  [key: string]: Skill[];
};

// A reusable component for each skill card with its own scroll animation
const SkillCard = ({
  category,
  items,
}: {
  category: string;
  items: Skill[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animate as it enters and leaves the viewport
  });

  // Create a smoother, spring-like opacity and scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="bg-white border rounded-xl shadow-sm p-6 text-left h-fit"
    >
      <h3 className="text-lg font-semibold mb-4 text-center">{category}</h3>
      <ul className="grid grid-cols-2 gap-4">
        {items.map((skill, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1">
              <BsPatchCheck />
            </span>
            <div>
              <p className="font-medium text-sm">{skill.name}</p>
              <p className="text-xs text-gray-500">{skill.level}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Skills() {
  const skills: SkillsData = {
    Frontend: [
      { name: "ReactJS", level: "Advanced" },
      { name: "NextJS", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "Material UI", level: "Intermediate" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "Redux Toolkit", level: "Intermediate" },
      { name: "GSAP / Locomotive Scroll", level: "Intermediate" },
    ],
    Backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "ExpressJS", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "REST API", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "WebSocket", level: "Basic" },
      { name: "Redis", level: "Basic" },
    ],
    Cloud: [
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Basic" },
      { name: "Jenkins", level: "Basic" },
      { name: "Linux", level: "Intermediate" },
    ],
    Other: [
      { name: "Java", level: "Advance" },
      { name: "DSA", level: "Advance" },
      { name: "C++", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "JWT", level: "Intermediate" },
    ],
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="bg-white text-black py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 variants={titleVariants} className="text-3xl font-bold mb-1">
          My Skills
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-sm text-gray-500 mb-10"
        >
          Things I know
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
