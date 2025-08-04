"use client"
import Image from "next/image";
import CubeViewer from "./components/techstackRender";
import { Typewriter } from 'react-simple-typewriter';
import Header from "./components/header";
import StaticScene from "./components/workspace";
import Contact from "./components/contactPage";
import { motion } from "framer-motion";
import Projects from "./components/projects";

const technologies = {
  "Programming Languages": [
    "C",
    "C++",
    "C#",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
  ],
  "Databases": [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ],
  "Frontend Frameworks / Libraries": [
    "React",
    "Angular",
    "Vue.js",
    "React Native",
    "Bootstrap",
    "Tailwind CSS",
  ],
  "Backend / Fullstack Frameworks": [
    "Express.js",
    "Django",
    "Flask",
  ],
  "DevOps & Cloud": [
    "Docker",
    "Kubernetes",
    "Azure",
  ],
  "Data & Analytics": [
    "Power BI",
    "Tableau",
  ],
  "Tools": [
    "Git",
    "GitHub",
    "Terminal",
    "Microsoft Office",
    "Figma",
    "Blender",
    "Next.js",
  ],
  "Machine Learning / AI": [
    "TensorFlow",
  ],
};

export default function Page() {
  return (
    <>
      <section className="w-full h-screen flex flex-col items-center bg-yelow-300 relative">
        <Header/>
        <div className="w-full h-full absolute flex items-center overflow-hidden">
          {/* Text container */}
          <div className="flex-1 flex flex-col justify-center pl-8 sm:pl-16 z-20 bg-gren-300">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-nowrap">
              Hello, I&apos;m Isaac Ndung&apos;u
            </h1>

            <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-[#dd4956]">
              <Typewriter
                words={['Software Developer', 'Full-Stack Engineer', 'Tech Enthusiast']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="text-base sm:text-lg mb-6 max-w-lg">
              I specialize in building modern, efficient web and mobile applications with clean code, great design, and excellent performance.
            </p>

            <div className="flex gap-4">
              <a
                href="/path/to/your_cv.pdf"
                download
                className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="bg-transparent border border-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black transition"
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Image container */}
          <div className="flex-1 flex justify-end  z-10 bg-[#3b3937] bg-ed-500 ">
            <Image
              src="/hero_image_fade_transparent.png"
              alt="Hero"
              className="w-auto object-contain"
              priority
              width={800} // You can control responsiveness better with width/height
              height={800}
            />
          </div>

        </div>
      </section>
    {/* what i do */}
      <section
        id="workspace"
        className="w-full flex flex-col gap-y-5 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full h-full flex gap-x-5 relative">
          <div 
            // style={{
            //   backgroundImage: "url('/0-BRIT-1_(10).jpg')",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",        
            //   backgroundPosition: "center", 
            // }}
            className="h-full w-3/5 flex cursor-pointer top-20 self-start  bg-yellw-400">
            <StaticScene/>
          </div>

          <div className="w-2/5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-200 leading-relaxed">
                With over 5 years of experience in software development and 3 years specializing in AI/ML, I bridge the
                gap between traditional programming and cutting-edge artificial intelligence. My passion lies in
                creating systems that not only work efficiently but also learn and adapt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <ul className="text-gray-200 space-y-2">
                <li>• Full-stack web development with modern frameworks</li>
                <li>• Machine learning model development and deployment</li>
                <li>• AI-powered application architecture</li>
                <li>• Data pipeline optimization and automation</li>
                <li>• Neural network design and training</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Philosophy</h3>
              <p className="text-gray-200 leading-relaxed">
                I believe in writing clean, maintainable code that scales. Every line of code should serve a purpose,
                and every AI model should solve a real problem. Technology is only as good as the problems it solves.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      <Projects/>


      {/* tech stack*/}
      <section
        id="tech-stack"
        className="w-full grid grid-cols-2 gap-5 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="col-span-2 text-center w-full ">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">Tech Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="w-full h-[90vh] flex cursor-pointer sticky top-0">
          <CubeViewer/>
        </div>

        <div className="w-full space-y-6">
          {Object.entries(technologies).map(([category, techs]) => (
            <div
              key={category}
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 text-gray-300 rounded-2xl border border-[#d6d7d4]/50 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-screen">
        <Contact/>
      </section>
  
    </>

  )
}
