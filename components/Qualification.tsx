"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

// Define project type
type TabKey = "Education" | "Experience";

// Qualification data
const qualifications = { 
  Education: [
    {
      title: "B.Tech - Artificial Intelligence and Data Science",
      org: "Arya Institute of Engineering and Technology",
      date: "Aug 2022 – May 2026"
    },
     {
      title: "X - Xll",
      org: "Ajeet Vidya Niketan Senior Secondary School",
      date: "2018 – May 2020"
    }
  ],
  Experience: [
    {
      title: "Cloud Computing Intern",
      org: "Learn & Build",
      date: "July 2024 – August 2024"
    },
     {
      title: " Python Progamming",
      org: "Learn & Build",
      date: "August 2023"
    }
  ]
} as const;


export default function Qualifications() {
  const [activeTab, setActiveTab] = useState<TabKey>("Education");
  const tabs: TabKey[] = ["Education", "Experience"];

  return (
    <section id="education" className="bg-white text-black  py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Qualifications</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">My Journey</p>

        {/* Tabs */}
        <div className="flex justify-center gap-4  mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer border rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-black text-white ":"bg-white text-black border-gray-300"
              }`}
            >
              {tab === "Education" ? <FaGraduationCap /> : <FaBriefcase />} {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
          {qualifications[activeTab].map((item, idx) => (
            <div key={idx} className="mb-10 relative w-full flex justify-between items-center">
              {activeTab === "Education" ? (
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.org}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">📅 {item.date}</p>
                </div>
              ) : (
                <div className="w-1/2 pl-8">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.org}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">📅 {item.date}</p>
                </div>
              )}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
