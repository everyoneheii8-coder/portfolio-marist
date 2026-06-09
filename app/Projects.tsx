"use client";

import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);

  const projects = [
     {
      title: "Payroll Management System",
      desc: "Full-stack payroll management system for employee salary management, payroll calculation, and reporting.",
      image: "/payroll.jpg",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      demo: "https://drive.google.com/file/d/1MxPR4Q0jzybbCdzPXfmn7j6QZ_iij414/view?usp=sharing",
      github: "https://github.com/everyoneheii8-coder/payroll-system",
    },
    {
      title: "Personal Portfolio",
      desc: "Portfolio website dengan Next.js dan Tailwind CSS",
      image: "/portfolio.jpg",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demo: "https://portfolio-marist.vercel.app",
      github: "https://github.com/everyoneheii8-coder/portfolio-marist",
    },
    {
      title: "WEB Digital Business",
      desc: "Website untuk memenuhi kebutuhan sosial media",
      image: "/SMM.jpg",
      tech: ["Next.js", "Tailwind CSS"],
      demo: "https://digital.marist.my.id",
      github: "#",
    },
    {
      title: "SIM Website",
      desc: "Website Sistem Informasi Mahasiswa",
      image: "/SIM.jpg",
      tech: ["PHP", "MySQL", "Bootstrap"],
      demo: "#",
      github: "#",
    },
    {
      title: "Kasir Website",
      desc: "Aplikasi kasir untuk UMKM",
      image: "/kasir.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-20 py-14 md:py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item.title)}
            className="bg-white/5 p-4 rounded-xl border border-purple-500 hover:scale-105 transition hover:shadow-purple-500/40 shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-3"
            />

            <h3 className="font-bold text-lg">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              {item.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex gap-2 mt-4">
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-2 bg-purple-600 rounded-lg text-sm hover:bg-purple-700"
              >
                Live Demo
              </a>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-2 border border-purple-500 rounded-lg text-sm hover:bg-purple-500"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] p-6 rounded-xl max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {selected}
            </h3>

            <button
              onClick={() => setSelected(null)}
              className="bg-purple-600 px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}