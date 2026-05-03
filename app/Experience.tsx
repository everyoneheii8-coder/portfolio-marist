"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Kepala Divisi HUMAS",
    org: "HIMATIF",
    year: "2024 - 2025",
    desc: "Mengelola komunikasi organisasi, publikasi, dan relasi eksternal.",
    image: "/kadiv.jpg",
  },
  {
    title: "Ketua Pelaksana PTI",
    org: "Pekan Teknologi Informasi",
    year: "Juli 2025",
    desc: "Memimpin event teknologi skala besar dengan koordinasi tim dan sponsor.",
    image: "/ketupel pti.jpg",
  },
  {
    title: "Wakil Ketua Umum",
    org: "HIMATIF",
    year: "2025 - 2026",
    desc: "Membantu ketua dalam mengelola organisasi dan pengambilan keputusan strategis.",
    image: "/waketum.jpg",
  },
];

export default function Experience() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % experiences.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  return (
    <section id="experience" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">My Experience</h2>

      <div className="relative max-w-xl mx-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-6 rounded-2xl border border-purple-500 shadow-xl"
          >
            <img
              src={experiences[index].image}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-purple-400"
            />

            <h3 className="text-2xl font-bold">
              {experiences[index].title}
            </h3>

            <p className="text-purple-400">
              {experiences[index].org}
            </p>

            <p className="text-gray-400 text-sm">
              {experiences[index].year}
            </p>

            <p className="mt-4 text-gray-300">
              {experiences[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* BUTTON */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="px-4 py-2 bg-purple-600 rounded-full hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="px-4 py-2 bg-purple-600 rounded-full hover:scale-110 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}