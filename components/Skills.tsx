import { BsPatchCheck } from "react-icons/bs";

export default function Skills() {
  const skills = {
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
      { name: "GSAP / Locomotive Scroll", level: "Intermediate" }
    ],
    Backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "ExpressJS", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "REST API", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "WebSocket", level: "Basic" }
    ],
    Cloud: [
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Basic" },
      { name: "Jenkins", level: "Basic" },
      { name: "Linux", level: "Intermediate" }
    ],
    Other: [
      { name: "Java", level: "Advance" },
      { name: "DSA", level: "Advance" },
      { name: "C++", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "JWT", level: "Intermediate" },
    ]
  };

  return (
    <section id="skills" className="bg-white text-black py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-1">My Skills</h2>
        <p className="text-sm text-gray-500 mb-10">Things I know</p>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white border rounded-xl shadow-sm p-6 text-left h-fit"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">{category}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {items.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1"><BsPatchCheck/></span>
                    <div>
                      <p className="font-medium text-sm">{skill.name}</p>
                      <p className="text-xs text-gray-500">{skill.level}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
