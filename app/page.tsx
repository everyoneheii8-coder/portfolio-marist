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
            <button className="bg-green-500 px-6 py-3 rounded-full hover:scale-110 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
          </a>

          <a href="https://instagram.com/maristtzz" target="_blank">
            <button className="bg-pink-500 px-6 py-3 rounded-full hover:scale-110 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.566c-.726.28-1.34.638-1.956 1.254C1.51 2.436 1.152 3.05.872 3.776c-.264.693-.446 1.502-.5 2.708C.314 7.69.3 8.09.3 11.711c0 3.621.014 4.021.067 5.227.054 1.206.236 2.015.5 2.708.228.772.586 1.34 1.202 1.956.616.616 1.184.974 1.956 1.202.693.264 1.502.446 2.708.5C7.69 23.686 8.09 23.7 11.711 23.7c3.621 0 4.021-.014 5.227-.067 1.206-.054 2.015-.236 2.708-.5.772-.228 1.34-.586 1.956-1.202.616-.616.974-1.184 1.202-1.956.264-.693.446-1.502.5-2.708.053-1.206.067-1.606.067-5.227 0-3.621-.014-4.021-.067-5.227-.054-1.206-.236-2.015-.5-2.708-.228-.772-.586-1.34-1.202-1.956-.616-.616-1.184-.974-1.956-1.202C19.948.446 19.139.264 18.433.5 17.227.054 16.827.04 13.206.04c-3.621 0-4.021.014-5.227.067C6.773.12 5.964.302 5.271.566c.726-.28 1.34-.638 1.956-1.254C7.843.638 8.411.28 9.183.016c.693-.264 1.502-.446 2.708-.5C8.09.014 8.49 0 12.111 0h.906zM11.711 5.4c-3.621 0-6.561 2.94-6.561 6.561s2.94 6.561 6.561 6.561 6.561-2.94 6.561-6.561-2.94-6.561-6.561-6.561zm0 10.846c-2.34 0-4.241-1.901-4.241-4.241s1.901-4.241 4.241-4.241 4.241 1.901 4.241 4.241-1.901 4.241-4.241 4.241zm6.406-11.846c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
              </svg>
            </button>
          </a>

          <a href="https://tiktok.com/@maristaja_" target="_blank">
            <button className="bg-black px-6 py-3 rounded-full hover:scale-110 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </button>
          </a>

        </div>
      </section>

    </main>
  );
}