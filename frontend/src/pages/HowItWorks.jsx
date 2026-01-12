import { Link, MousePointerClick, FileCheck, ArrowRight } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Copy Video URL",
      icon: <Link className="w-6 h-6" />,
      description:
        "Find your favorite video on YouTube. Copy the link directly from the address bar or the share button.",
    },
    {
      number: "02",
      title: "Paste & Process",
      icon: <MousePointerClick className="w-6 h-6" />,
      description:
        "Head over to our home page, paste the link into the magic box, and hit the download button.",
    },
    {
      number: "03",
      title: "Ready to Watch",
      icon: <FileCheck className="w-6 h-6" />,
      description:
        "Our high-speed servers process your request instantly. Your file will start downloading automatically.",
    },
  ]

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#030712] text-white overflow-hidden py-20 px-6">
      
      {/* BACKGROUND AURA */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">3-Step</span> Process
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We’ve stripped away the complexity. No accounts, no surveys—just the content you love.
          </p>
        </div>

        {/* TIMELINE STEPS */}
        <div className="relative space-y-12">
          
          {/* THE VERTICAL LINE (Visible on Desktop) */}
          <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500/50 via-slate-800 to-slate-800 hidden md:block"></div>

          {steps.map((step) => (
            <div 
              key={step.number} 
              className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              {/* STEP NUMBER & ICON */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#030712] border-2 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:shadow-red-500/40 transition-all">
                <span className="absolute -top-3 -left-3 text-xs font-black text-red-500/40 uppercase tracking-tighter">
                  STEP
                </span>
                <div className="text-red-500 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-white/10 tracking-tighter">{step.number}</span>
                    <h2 className="text-2xl font-bold group-hover:text-red-400 transition-colors">
                    {step.title}
                    </h2>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* DECORATIVE ARROW (Visible on Desktop) */}
              <div className="hidden lg:block opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <ArrowRight className="w-8 h-8 text-red-500/20" />
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 text-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                Ready to try it out?
            </button>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks