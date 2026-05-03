"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Projects from "./Projects";
import Experience from "./Experience"; 

export default function Home() {
  return (
    
    <main className="bg-[#0a0a0f] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex gap-6 z-50 border border-purple-500">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#education" className="hover:text-purple-400">Education</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </nav>

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(#1f1f2e_1px,transparent_1px),linear-gradient(to_right,#1f1f2e_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* HERO */}
      {/* BACKGROUND CODE ELEMENT */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* SYMBOL 1 */}
        <div className="absolute top-20 left-10 text-purple-500 opacity-20 text-6xl animate-pulse">
          {"</>"}
        </div>

        {/* SYMBOL 2 */}
        <div className="absolute bottom-20 right-10 text-blue-500 opacity-20 text-5xl animate-bounce">
          {"{}"}
        </div>

        {/* SYMBOL 3 */}
        <div className="absolute top-1/2 left-1/3 text-purple-400 opacity-10 text-7xl">
          {"<>"}
        </div>

      </div>
      <section id="home" className="relative px-6 md:px-20 py-32 flex flex-col md:flex-row items-center justify-between">

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 
          bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
            Marist Zaimah
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            HAY! I'M MARIST
          </h1>

          {/* TYPING */}
          <div className="text-2xl md:text-3xl mt-4 text-purple-400">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "UI Designer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

         <p className="mt-5 text-gray-300 max-w-lg">
          Web developer dari Gresik dengan fokus pada desain modern,
          interaktif, dan user-friendly.
        </p>

        {/* BUTTON GROUP */}
        <div className="mt-8 flex gap-4 flex-wrap">

          {/* DOWNLOAD CV */}
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-full 
            bg-gradient-to-r from-purple-500 to-blue-500 
            hover:scale-105 transition 
            shadow-lg shadow-purple-500/30"
          >
            Download CV
          </a>

          {/* HIRE ME */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-full 
            border border-purple-500 
            hover:bg-purple-500 hover:text-white 
            transition"
          >
            Hire Me
          </a>

</div>
        </motion.div>

        {/* ICON FLOAT */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-10 md:mt-0 bg-purple-500/20 backdrop-blur-md p-10 rounded-3xl text-6xl shadow-lg shadow-purple-500/50"
        >
          💻
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-10 items-center">

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src="/profile.jpg" className="rounded-2xl border border-purple-500 shadow-lg shadow-purple-500/30" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl font-bold mb-4">About Me 👋</h2>

          <p className="text-gray-300">
            Nama saya Marist Zaimah, lahir 10 Februari 2004 dan tinggal di Gresik.
            Saya memiliki passion dalam web development dengan desain modern
            dan interaktif.
          </p>

          <div className="flex gap-6 mt-6">

  <a 
    href="#projects" 
    className="bg-white/10 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
  >
    <p className="text-xl font-bold text-purple-400">5+</p>
    <p>Projects</p>
  </a>

  <a 
    href="#experience" 
    className="bg-white/10 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
  >
    <p className="text-xl font-bold text-purple-400">1+</p>
    <p>Experience</p>
  </a>

</div>
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 md:px-20 py-20 relative">

  <h2 className="text-4xl font-bold text-center mb-16">
    My Academic Journey
  </h2>

  <div className="relative border-l-2 border-purple-500 ml-4 space-y-12">

    {/* ITEM 1 */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="ml-6"
    >
      <div className="absolute -left-[9px] w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>

      <p className="text-gray-400">SD</p>
      <h3 className="text-lg font-bold">SDN Manyarejo</h3>
    </motion.div>

    {/* ITEM 2 */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="ml-6"
    >
      <div className="absolute -left-[9px] w-4 h-4 bg-purple-500 rounded-full"></div>

      <p className="text-gray-400">SMP</p>
      <h3 className="text-lg font-bold">SMPN 1 Manyar</h3>
    </motion.div>

    {/* ITEM 3 */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="ml-6"
    >
      <div className="absolute -left-[9px] w-4 h-4 bg-purple-500 rounded-full"></div>

      <p className="text-gray-400">SMA</p>
      <h3 className="text-lg font-bold">SMA NU 1 Gresik</h3>
    </motion.div>

    {/* ITEM 4 (UNIVERSITAS) */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="ml-6"
    >
      <div className="absolute -left-[9px] w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500"></div>

      <p className="text-gray-400">2023 - Sekarang</p>
      <h3 className="text-lg font-bold">
        Universitas Muhammadiyah Gresik
      </h3>
      <p className="text-sm text-gray-400">
        Teknik Informatika
      </p>
    </motion.div>

  </div>
      </section>
      {/* EXPERIENCE */}
      <Experience />
      <Projects />

  {/* SKILLS */}
<section className="px-6 md:px-20 py-20 overflow-hidden">

  <h2 className="text-4xl font-bold text-center mb-12">
    My Skills
  </h2>

  <div className="overflow-hidden">

    <div className="flex gap-6 whitespace-nowrap animate-marquee">

      <div className="skill">HTML</div>
      <div className="skill">CSS</div>
      <div className="skill">JavaScript</div>
      <div className="skill">React</div>
      <div className="skill">Tailwind</div>
      <div className="skill">Next.js</div>

      {/* DUPLIKAT BIAR SMOOTH */}
      <div className="skill">HTML</div>
      <div className="skill">CSS</div>
      <div className="skill">JavaScript</div>
      <div className="skill">React</div>
      <div className="skill">Tailwind</div>
      <div className="skill">Next.js</div>

    </div>

  </div>

  <style jsx>{`
    .skill {
      padding: 16px 30px;
      border: 1px solid #a855f7;
      border-radius: 12px;
      background: rgba(255,255,255,0.05);
      transition: 0.3s;
      font-weight: 500;
    }

    .skill:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px #a855f7;
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-marquee {
      animation: marquee 15s linear infinite;
    }
  `}</style>

</section>

{/* SERVICES */}
<section className="px-6 md:px-20 py-20 text-center">

  <h2 className="text-4xl font-bold mb-16">
    What I Do
  </h2>

  <div className="flex flex-wrap justify-center gap-10">

    {/* ITEM */}
    <div className="relative group w-60 h-60">

      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-110 transition"></div>

      <div className="relative bg-white/10 backdrop-blur-lg border border-purple-500 
      rounded-full w-full h-full flex flex-col items-center justify-center 
      hover:scale-105 transition shadow-lg">

        <h3 className="font-bold text-lg">Web Design</h3>
        <p className="text-gray-400 text-sm mt-2 text-center px-4">
          Modern & aesthetic website design
        </p>

      </div>

    </div>

    {/* ITEM */}
    <div className="relative group w-60 h-60">

      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-110 transition"></div>

      <div className="relative bg-white/10 backdrop-blur-lg border border-purple-500 
      rounded-full w-full h-full flex flex-col items-center justify-center 
      hover:scale-105 transition shadow-lg">

        <h3 className="font-bold text-lg">Frontend Dev</h3>
        <p className="text-gray-400 text-sm mt-2 text-center px-4">
          Responsive & fast website
        </p>

      </div>

    </div>

    {/* ITEM */}
    <div className="relative group w-60 h-60">

      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-110 transition"></div>

      <div className="relative bg-white/10 backdrop-blur-lg border border-purple-500 
      rounded-full w-full h-full flex flex-col items-center justify-center 
      hover:scale-105 transition shadow-lg">

        <h3 className="font-bold text-lg">UI/UX</h3>
        <p className="text-gray-400 text-sm mt-2 text-center px-4">
          User-friendly interface
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-300 mb-6">
          Hubungi saya melalui platform berikut:
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a href="https://wa.me/6287851853393" target="_blank">
            <button className="bg-green-500 px-6 py-3 rounded-full hover:scale-110 transition">
              WhatsApp
            </button>
          </a>

          <a href="https://instagram.com/maristtzz" target="_blank">
            <button className="bg-pink-500 px-6 py-3 rounded-full hover:scale-110 transition">
              Instagram
            </button>
          </a>

          <a href="https://tiktok.com/@maristaja_" target="_blank">
            <button className="bg-black px-6 py-3 rounded-full hover:scale-110 transition">
              TikTok
            </button>
          </a>

        </div>
      </section>

    </main>
  );
}