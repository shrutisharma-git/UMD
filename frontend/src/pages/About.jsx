import { Info, Code2, Cpu, AlertTriangle, Layers, Rocket } from "lucide-react"

const About = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#030712] text-white overflow-hidden py-20 px-6">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-2">
            <Info size={14} /> Our Mission
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About This <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Project</span>
          </h1>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Decorative side-gradient */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-rose-600"></div>

          <div className="space-y-10">
            {/* Mission Section */}
            <div className="flex gap-6 items-start">
              <div className="hidden sm:flex p-3 bg-red-500/10 rounded-2xl text-red-500">
                <Rocket size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">The Goal</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Universal Media Downloader is a high-performance web application designed to bridge the gap between users and their favorite content. We focus on providing a 
                  <span className="text-white font-medium"> seamless, lightweight, and efficient </span> 
                  way to archive media from supported platforms.
                </p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="flex gap-6 items-start">
              <div className="hidden sm:flex p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                <Code2 size={24} />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-bold text-white">Our Architecture</h3>
                <p className="text-slate-400 leading-relaxed">
                  Built with a modern "Fullstack JavaScript" mindset. This project prioritizes clean code and real-time feedback.
                </p>
                
                {/* TECH CHIPS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-red-500/50 transition-colors">
                    <Layers size={16} className="text-red-500" /> React (Vite)
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-red-500/50 transition-colors">
                    <Cpu size={16} className="text-red-500" /> Express.js
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-red-500/50 transition-colors">
                    <Code2 size={16} className="text-red-500" /> Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-8 flex gap-4 items-start p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-orange-200/80">
              <AlertTriangle className="shrink-0 w-6 h-6 text-orange-500" />
              <div className="text-sm leading-relaxed">
                <strong className="text-orange-500 block mb-1 uppercase tracking-wider text-xs">Legal Disclaimer:</strong>
                This tool is created for educational and personal archival purposes only. Users are strictly responsible for adhering to the Terms of Service and Copyright Policies of the respective platforms.
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER INFO */}
        <p className="text-center mt-8 text-slate-500 text-sm">
          Version 1.0.0 • Open Source Educational Project
        </p>

      </div>
    </div>
  )
}

export default About