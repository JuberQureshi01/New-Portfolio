"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectCardProps = {
  project: {
    name: string;
    url: string;
    images:string[];
    tech: string[];
    description: string[];
    repo: string;
  };
  onViewMore: () => void;
};

function ProjectCard({ project, onViewMore }: ProjectCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-700"
    >
      <div className="relative w-full overflow-hidden h-[170px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {project.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.name} Slide ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {new URL(project.url).hostname}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 text-xs px-2 py-1 rounded-full text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={onViewMore}
          className="text-blue-500 cursor-pointer hover:underline text-sm"
        >
          View More →
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
