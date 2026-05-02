"use client";

import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Website portfolio modern",
      image: "/project1.jpg",
    },
    {
      title: "Landing Page",
      desc: "Website promosi UMKM",
      image: "/project2.jpg",
    },
    {
      title: "UI Design",
      desc: "Desain aplikasi modern",
      image: "/project3.jpg",
    },
  ];

  return (
    
    <section className="px-6 md:px-20 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item.title)}
           className="cursor-pointer bg-white/5 p-4 rounded-xl border border-purple-500 
            hover:scale-105 transition 
            hover:shadow-purple-500/40 shadow-lg"
          >
            <img src={item.image} className="rounded-lg mb-3" />
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#111] p-6 rounded-xl">
            <h3 className="text-xl font-bold">{selected}</h3>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 bg-purple-600 px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}