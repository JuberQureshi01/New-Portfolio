"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

type TabKey = "FullStack" | "Frontend";

// Project data
const projects = {
  FullStack: [
    {
      name: "WonderLust",
      url: "https://juber-project1.onrender.com/listings",
      images: [
        "/images/fullStack/project1.1.png",
        "/images/fullStack/project1.2.png",
        "/images/fullStack/project1.3.png",
        "/images/fullStack/project1.4.png",
        "/images/fullStack/project1.5.png",
      ],
      tech: ["Node.js", "Express", "MongoDB", "HTML5", "CSS", "Bootstrap"],
      description: [
        "Hotel booking platform with CRUD functionality and Google Maps integration.",
        "Implements user auth, category filtering, and secure sessions.",
        "Follows MVC architecture for clean and scalable backend.",
      ],
      repo: "https://github.com/JuberQureshi01/WonderLust",
    },
    {
      name: "BullishX",
      url: "https://bullishx.vercel.app/",
      images: [
        "/images/fullStack/bullishx1.png",
        "/images/fullStack/bullishx2.png",
        "/images/fullStack/bullishx3.png",
        "/images/fullStack/bullishx4.png",
        "/images/fullStack/bullishx5.png",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
      description: [
        "Simulates real-time stock trading with portfolio tracking.",
        "JWT-based secure auth with dynamic routes and RESTful APIs.",
        "Charts visualize stock performance and portfolio value.",
      ],
      repo: "https://github.com/JuberQureshi01/BullishX.git",
    },
    {
      name: "XSocial",
      url: "https://web-orcin-kappa.vercel.app/",
      images: [
        "/images/fullStack/xSocial1.png",
        "/images/fullStack/xSocial2.png",
        "/images/fullStack/xSocial3.png",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Tailwind CSS",
        "JWT",
      ],
      description: [
        "A full-stack Social media Platform built using Next.js for the frontend and GraphQL for API communication.",
        "Implements user authentication, tweet creation, and timeline feed with real-time updates.",
        "Backed by Apollo Server, Prisma ORM, and PostgreSQL with Tailwind CSS for modern responsive styling.",
      ],
      repo: "https://github.com/JuberQureshi01/XSocial",
    },
    {
      name: "Quickmeet",
      url: "https://quickmeet-frontend.vercel.app/",
      images: [
        "/images/fullStack/meetme1.png",
        "/images/fullStack/meetme2.png",
        "/images/fullStack/meetme3.png",
      ],
      tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "WebRTC"],
      description: [
        "Real-time video conferencing app with chat and signaling using WebRTC and Socket.IO.",
        "User authentication and room-based connections for secure peer-to-peer communication.",
        "Robust backend using Express and MongoDB for managing users and sessions.",
      ],
      repo: "https://github.com/JuberQureshi01/Quickmeet-frontend",
    },
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
      url: "https://obys-agency-kn73.onrender.com/", // replace with actual live demo link if available
      images: [
        "/images/frontend/project 2 (1).png",
        "/images/frontend/project 2 (2).png",
        "/images/frontend/project 2 (3).png",
      ], // add appropriate screenshots in your public folder
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
      repo: "https://github.com/JuberQureshi01/Obys-agency", // replace with actual GitHub repo if available
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

  return (
    <section id="projects" className="bg-white text-black py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">My Projects</h2>
        <p className="text-sm text-gray-500 mb-6">That I Worked On</p>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 overflow-hidden border border-black rounded-full w-fit mx-auto">
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
        </div>

        {/* Project Cards */}
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

      {/* Modal */}
    {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-600/50 p-4">
    <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative">
      {/* Close button */}
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
            className="text-blue-500  hover:text-blue-700 flex items-center gap-1"
          >
           <FaGithubAlt/> Repository
          </a>
        )}
        {selectedProject.url && (
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600  hover:text-green-800 flex items-center gap-1"
          >
            Live Demo <TbExternalLink/>
          </a>
        )}
      </div>

      <ul className="space-y-2 text-sm">
        {selectedProject.description.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-green-500 pt-1"><BsPatchCheckFill/></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

    </section>
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-700">
      {/* Image Slider */}
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
    </div>
  );
}
