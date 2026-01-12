import { Video, Music, CheckCircle2, Clock, Monitor, HardDrive } from "lucide-react"

const Formats = () => {
  const formats = [
    {
      title: "MP4 Video",
      description: "Crystal clear video downloads with high-fidelity audio synchronization.",
      // CHANGE 1: Icon color changed to text-white for contrast
      icon: <Video className="w-7 h-7 text-white" />, 
      status: "Live",
      features: ["720p & 1080p Support", "High Bitrate Audio", "Fast Merging"],
      // CHANGE 2: Slightly deeper gradient for better white contrast
      colorClass: "from-red-600 to-rose-600 shadow-red-500/30", 
      isLive: true
    },
    {
      title: "MP3 Audio",
      description: "Pure audio extraction for your favorite music, podcasts, and speeches.",
      // CHANGE 1: Icon color changed to text-white
      icon: <Music className="w-7 h-7 text-white" />,
      status: "Coming Soon",
      features: ["320kbps Quality", "ID3 Tagging", "Album Art Support"],
      // CHANGE 2: Deeper gradient
      colorClass: "from-indigo-600 to-blue-600 shadow-indigo-500/30",
      isLive: false
    }
  ]

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#030712] text-white overflow-hidden py-20 px-6">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Formats</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            We are constantly expanding our capabilities to provide you with the best media quality possible.
          </p>
        </div>

        {/* FORMATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black/50"
            >
              {/* STATUS BADGE */}
              <div className="absolute top-6 right-6">
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  format.isLive ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-white/5 text-slate-500 border border-white/10"
                }`}>
                  {format.isLive && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>}
                  {format.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="space-y-6">
                {/* CHANGE 3: Updated container classes to use new colorClass property and added deeper shadow */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${format.colorClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {format.icon}
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">{format.title}</h2>
                  <p className="text-slate-400 leading-relaxed">
                    {format.description}
                  </p>
                </div>

                {/* FEATURE LIST */}
                <ul className="space-y-3 pt-4 border-t border-white/5">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      {format.isLive ? (
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                      ) : (
                        <Clock className="w-5 h-5 text-slate-500" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 text-slate-400 text-sm backdrop-blur-md">
             <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-red-500" /> <span className="font-medium">4K Resolution Support Coming Soon</span>
             </div>
             <div className="w-full sm:w-[1px] h-[1px] sm:h-6 bg-white/10"></div>
             <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-red-500" /> <span className="font-medium">Batch Downloading Planned</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Formats