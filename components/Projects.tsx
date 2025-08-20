// components/Projects.tsx
"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

type TabKey = "FullStack" | "Frontend";

// Project data
const projects = {
  FullStack: [
    {
      name: "StayFinder",
      url: "https://stay-finder-green.vercel.app/",
      images: [
        "/images/fullStack/StayFinder1.png",
        "/images/fullStack/StayFinder2.png",
        "/images/fullStack/StayFinder3.png",
        "/images/fullStack/StayFinder4.png",
        "/images/fullStack/StayFinder5.png",
        "/images/fullStack/StayFinder6.png",
        "/images/fullStack/StayFinder7.png",
        "/images/fullStack/StayFinder8.png",
        "/images/fullStack/StayFinder9.png",
      ],
      tech: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Axios",
        "Mapbox GL",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "Redis",
        "Google Gemini API",
      ],
      description: [
        "A feature-rich StayFinder inspired by AirBnb built with the MERN stack.",
        "Implements user authentication, dynamic search, category filtering, booking system, and reviews.",
        "Interactive maps powered by Mapbox with property location view.",
        "Property owners can create, update, and manage listings with multi-image upload to Cloudinary.",
        "AI-powered itinerary and property description generator using Google Gemini.",
        "Follows MVC architecture with advanced Low-Level Design (LLD) principles for scalability.",
      ],
      repo: "https://github.com/JuberQureshi01/StayFinder",
    },
    {
      name: "ImagineAI",
      url: "https://imagineai-eight.vercel.app/",
      images: [
        "/images/fullStack/imagineAi (1).png",
        "/images/fullStack/imagineAi (2).png",
        "/images/fullStack/imagineAi (3).png",
        "/images/fullStack/imagineAi (4).png",
        "/images/fullStack/imagineAi (5).png",
        "/images/fullStack/imagineAi (6).png",
        "/images/fullStack/imagineAi (7).png",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Fabric.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT",
        "ImageKit API",
        "Clipdrop API",
        "Razorpay",
      ],
      description: [
        "AI-powered photo editor SaaS app built from scratch with PERN stack.",
        "Features include image editing (crop, resize, filters), text styling, AI background tools, AI image generation, and project dashboard.",
        "Pro subscription model integrated with Razorpay for payments.",
        "Responsive design with advanced AI APIs (ImageKit, Clipdrop) integration.",
      ],
      repo: "https://github.com/JuberQureshi01/ImagineAi",
    },
    {
      name: "QuickTrade",
      url: "https://quicktrade.vercel.app/",
      images: [
        "/images/fullStack/bullishx1.png",
        "/images/fullStack/bullishx2.png",
        "/images/fullStack/bullishx3.png",
        "/images/fullStack/bullishx4.png",
        "/images/fullStack/bullishx5.png",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Chart.js",
      ],
      description: [
        "Real-time stock trading simulator built with the MERN stack.",
        "Buy & sell simulation with virtual currency and live portfolio tracking.",
        "Charts visualize stock performance and portfolio value.",
        "Secure authentication with JWT & bcrypt for user accounts.",
      ],
      repo: "https://github.com/JuberQureshi01/BullishX.git",
    },
    {
      name: "SocialNet",
      url: "https://social-net-zeta.vercel.app/",
      images: [
        "/images/fullStack/xSocial1.png",
        "/images/fullStack/xSocial2.png",
        "/images/fullStack/xSocial3.png",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "GraphQL",
        "Apollo Server",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Cloudinary",
        "Google OAuth",
      ],
      description: [
        "Full-stack Twitter clone with Next.js (App Router) and GraphQL API.",
        "Features include authentication (Google OAuth), tweeting, likes, comments, image uploads, and follow/unfollow system.",
        "Real-time updates with optimistic UI, infinite scroll feed, and responsive modern design.",
      ],
      repo: "https://github.com/JuberQureshi01/XSocial",
    }
  ],
  Frontend: [
    {
      name: "FilmFinder",
      url: "https://film-finder-vert.vercel.app/",
      images: [
        "/images/frontend/film1.png",
        "/images/frontend/film2.png",
        "/images/frontend/film3.png",
        "/images/frontend/film4.png",
        "/images/frontend/film5.png",
      ],
      tech: ["React", "Redux", "Tailwind CSS", "Framer Motion", "TMDb API"],
      description: [
        "Movie browsing platform using real-time data from TMDb API.",
        "Features infinite scrolling, actor bios, dynamic routing, and trailers.",
        "Responsive design with animations using Framer Motion.",
      ],
      repo: "https://github.com/JuberQureshi01/FilmFinder",
    },
    {
      name: "Obys Agency Clone",
      url: "https://obys-agency-kn73.onrender.com/",
      images: [
        "/images/frontend/project 2 (1).png",
        "/images/frontend/project 2 (2).png",
        "/images/frontend/project 2 (3).png",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "Shery.js",
        "Locomotive Scroll",
        "ScrollTrigger",
      ],
      description: [
        "Frontend clone of the Obys Agency landing page.",
        "Showcases complex animations, smooth scroll effects, and custom transitions.",
        "Built for design and animation precision using modern web animation libraries.",
      ],
      repo: "https://github.com/JuberQureshi01/Obys-agency",
    },
    {
      name: "SkinCare",
      url: "https://six-nine-assignment.vercel.app/",
      images: [
        "/images/frontend/project4 (1).png",
        "/images/frontend/project4 (2).png",
        "/images/frontend/project4 (3).png",
        "/images/frontend/project4 (4).png",
        "/images/frontend/project4 (5).png",
      ],
      tech: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
        "ScrollTrigger",
      ],
      description: [
        "Developed a responsive skincare landing page using React.js and Vite, focusing on clean UI/UX for product showcasing and brand storytelling.",
        "Integrated GSAP animations for scroll-triggered and character-based effects, enhancing interactivity and visual engagement.",
        "Implemented component-based architecture with reusable UI blocks and deployed the project live using Vercel for real-time performance testing and accessibility.",
      ],
      repo: "https://github.com/JuberQureshi01/SixNine-Assignment/tree/main",
    },
    {
      name: "Premier",
      url: "https://premier-594s.onrender.com/",
      images: [
        "/images/frontend/project 3.1.png",
        "/images/frontend/project 3.1.png",
        "/images/frontend/project 3.3.png",
      ],
      tech: ["HTML5", "CSS"],
      description: [
        "This is a frontend clone of fashion website",
        "Responsive UI with scroll-based animations and motion effects.",
        "This project is to showCase my skill using html and css",
      ],
      repo: "https://github.com/JuberQureshi01/premier",
    },
  ],
} as const;

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("FullStack");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[TabKey][number] | null
  >(null);

  const tabs: TabKey[] = ["FullStack", "Frontend"];

  const sectionVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
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
      id="projects"
      className="bg-white text-black py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 variants={titleVariants} className="text-3xl font-bold mb-2">
          My Projects
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-sm text-gray-500 mb-6"
        >
          That I Worked On
        </motion.p>

        <motion.div
          variants={titleVariants}
          className="flex justify-center mb-10 overflow-hidden border border-black rounded-full w-fit mx-auto"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              onViewMore={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-600/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <h3 className="text-xl font-bold text-center mb-4">
                {selectedProject.name}
              </h3>

              <Image
                src={selectedProject.images[0]}
                alt={selectedProject.name}
                width={500}
                height={280}
                className="rounded-md mx-auto mb-4 object-cover"
              />

              <div className="flex justify-center gap-6 mb-4">
                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                  >
                    <FaGithubAlt /> Repository
                  </a>
                )}
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 flex items-center gap-1"
                  >
                    Live Demo <TbExternalLink />
                  </a>
                )}
              </div>

              <ul className="space-y-2 text-sm">
                {selectedProject.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 pt-1">
                      <BsPatchCheckFill />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

type ProjectCardProps = {
  project: {
    name: string;
    url: string;
    images: readonly string[];
    tech: readonly string[];
    description: readonly string[];
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
