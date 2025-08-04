"use client"

import { ExternalLink, Github } from "lucide-react"

// const projects = [
//   {
//     title: "AI-Powered Code Assistant",
//     description:
//       "A VS Code extension that uses machine learning to provide intelligent code suggestions and bug detection.",
//     tech: ["TypeScript", "Python", "TensorFlow", "VS Code API"],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Neural Network Visualizer",
//     description:
//       "Interactive web application for visualizing and understanding neural network architectures and training processes.",
//     tech: ["React", "Three.js", "Python", "FastAPI"],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Smart Document Processor",
//     description:
//       "RAG-based system for intelligent document analysis and question-answering using large language models.",
//     tech: ["Next.js", "LangChain", "OpenAI", "Pinecone"],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Real-time Sentiment Analyzer",
//     description: "Live sentiment analysis dashboard for social media feeds with custom-trained BERT models.",
//     tech: ["React", "Node.js", "PyTorch", "WebSocket"],
//     github: "#",
//     demo: "#",
//   },
// ]

const projects = [
    {
    title: "SmartFuel",
    description:
      "Automated petrol station system with real-time sales, faster payments, and live inventory tracking for improved efficiency and accuracy.",
    tech: ["next.js", "node.js", "MongoDb", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "AfyaSpere",
    description:
      "AI-powered healthcare app for health tracking, symptom analysis, appointment booking, and instant chats with registered doctors.",
    tech: ["React React Native", "Python", "Docker", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI-Powered Code Assistant",
    description:
      "A VS Code extension that uses machine learning to provide intelligent code suggestions and bug detection.",
    tech: ["TypeScript", "Python", "TensorFlow", "VS Code API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Interactive web application for visualizing and understanding neural network architectures and training processes.",
    tech: ["React", "Three.js", "Python", "FastAPI"],
    github: "#",
    demo: "#"
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-[#9e9e9e] max-w-3xl mx-auto">
            A showcase of my work in software development and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-[#565656]/20 rounded-3xl border border-[#565656] overflow-hidden hover:bg-[#565656]/30 hover:shadow-2xl hover:shadow-[#fba92c]/10 transition-all duration-300 group"
            >
              {/* 3D Demo Placeholder */}
              <div className="h-48 bg-[#565656]/30 flex items-center justify-center border-b border-[#565656]">
                {/* 
                3D Project Demo or UI Screen Model Placeholder
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Suspense fallback={null}>
                    <Model url={`/models/project-${index + 1}.glb`} />
                  </Suspense>
                  <OrbitControls enableZoom={false} />
                </Canvas>
                */}
                <div className="text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <p className="text-[#9e9e9e] text-sm">3D Project Demo</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#fba92c] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#9e9e9e] mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-[#565656] text-[#9e9e9e] rounded-full border border-[#565656]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-[#565656] text-white rounded-2xl hover:bg-[#9e9e9e] transition-all duration-300 border border-[#565656]"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#fba92c] to-orange-500 text-black rounded-2xl hover:shadow-lg hover:shadow-[#fba92c]/25 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
