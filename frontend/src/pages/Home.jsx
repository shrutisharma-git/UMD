import { useState } from "react"
import { Download, Loader2, Shield, Zap, Globe, Play, ArrowRight, ChevronLeft } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

const Home = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [progress, setProgress] = useState(0)

  // --- AUDIO LOGIC ---
  const playSound = (src) => {
    const audio = new Audio(src);
    audio.volume = 0.4;
    audio.play().catch(err => console.log("Audio blocked:", err));
  };

  const handleStartApp = () => {
    playSound("/click.wav"); // Play sound on page transition
    setIsStarted(true);
  };

  const handleDownload = async () => {
    if (!url) return;
    
    playSound("/click.wav"); // Play sound when download starts
    setLoading(true);
    setProgress(0);
    setStatus("Connecting to Secure Server...");
    
    // Simulation steps
    await new Promise(r => setTimeout(r, 1200));
    setStatus("Extracting Media Streams...");
    setProgress(35);
    
    await new Promise(r => setTimeout(r, 1000));
    setStatus("Optimizing for MP4...");
    setProgress(72);
    
    await new Promise(r => setTimeout(r, 1200));
    setStatus("Finalizing Download...");
    setProgress(98);
    
    await new Promise(r => setTimeout(r, 1500));
    
    // --- ERROR PHASE ---
    playSound("/error.mp3"); // Play alert sound on error
    setLoading(false);
    setProgress(0);
    setStatus("");
    setUrl(""); 
    
    toast.error("Server is currently at capacity. Please try again later.", {
        position: 'bottom-center'
    });
  };

  // --- VIEW 1: LANDING PAGE ---
  if (!isStarted) {
    return (
      <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#030712] overflow-hidden px-4">
        <Toaster />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150p h-150p bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl animate-in fade-in zoom-in duration-500">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          MEDIA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 underline decoration-red-500/20">WITHOUT LIMITS.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
          The internet’s most sophisticated extraction engine. Bypass restrictions, 
          ignore the noise, and claim your content in <span className="text-red-500 font-bold">4K original quality.</span>
        </p>
          <button 
            onClick={handleStartApp} // Updated to use sound logic
            className="group flex items-center gap-3 px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)] mx-auto"
          >
            GET STARTED FREE
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    )
  }

  // --- VIEW 2: FUNCTIONAL DOWNLOADER PAGE ---
  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-[#030712] flex flex-col items-center py-12 px-4 animate-in slide-in-from-right duration-500">
      <Toaster />
      
      {/* Navigation Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-12">
        <button 
          onClick={() => { playSound("/click.mp3"); setIsStarted(false); }}
          className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-bold transition-colors"
        >
          <ChevronLeft size={20} /> Back to Home
        </button>
        <div className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-600 text-[10px] font-black uppercase tracking-widest">
            Extraction Engine v2.0
        </div>
      </div>

      <div className="w-full max-w-2xl space-y-12">
        {/* DOWNLOADER CARD */}
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all">
          <h2 className="text-2xl  text-red-600 font-bold mb-6 text-center">Enter Video URL</h2>
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Play className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
            </div>
            <input
              type="text"
              autoFocus
              placeholder="Paste YouTube link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
            />
          </div>

          <button
            onClick={handleDownload}
            disabled={!url || loading}
            className="group relative w-full mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-[1px] transition-all disabled:opacity-50"
          >
            <div className="flex h-14 items-center justify-center gap-2 rounded-[15px] bg-white dark:bg-[#030712] transition-all group-hover:bg-transparent">
              {loading ? <Loader2 className="w-5 h-5 animate-spin text-red-600 dark:text-white" /> : <Download className="w-5 h-5 text-red-600 dark:text-white" />}
              <span className="font-bold uppercase text-sm text-red-600 dark:text-white">
                {loading ? "Processing..." : "Download MP4"}
              </span>
            </div>
          </button>

          {/* PROGRESS UI */}
          {loading && (
            <div className="mt-8 space-y-3 animate-in fade-in slide-in-from-top-4">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-tighter">
                <span className="animate-pulse">{status}</span>
                <span className="text-red-500">{progress}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2.5 overflow-hidden border border-slate-200 dark:border-white/5">
                <div 
                  className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-[length:200%_auto] h-full transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* BENTO FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <Zap className="text-amber-500" />, title: "Turbo", desc: "10x faster extraction." },
            { icon: <Shield className="text-emerald-500" />, title: "Secure", desc: "No data is stored." },
            { icon: <Globe className="text-blue-500" />, title: "Global", desc: "Universal support." }
          ].map((feature, i) => (
            <div key={i} className="p-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-center hover:border-red-500/50 transition-colors">
              <div className="flex justify-center mb-3">{feature.icon}</div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-1">{feature.title}</h3>
              <p className="text-[10px] text-slate-500 leading-tight">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-auto pt-12 text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
        Engine Status: Online • Restricted Demo
      </footer>
    </div>
  )
}

export default Home


// import { useState } from "react"
// import { Download, Loader2, Shield, Zap, Globe, Play } from "lucide-react"
// import Toast from "../components/Toast"
// import toast, { Toaster } from "react-hot-toast"

// const Home = () => {
//   const [url, setUrl] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [status, setStatus] = useState("")
//   const [progress, setProgress] = useState(0)

//   const playClick = () => {
//     const audio = new Audio("/click.wav"); // Path from public folder
//     audio.volume = 0.5; // Set volume to 50%
//     audio.play();
//   };

//   const playError = () => {
//     const audio = new Audio("/error.mp3");
//     audio.volume = 0.4;
//     audio.play();
//   };

//   const handleDownload = async () => {
//     if (!url) return;

//     playClick();
  
//     setLoading(true);
//     setProgress(0);
//     setStatus("Connecting to Secure Server...");
  
//     // Phase 1: Analyzing (0% to 30%)
//     await new Promise(r => setTimeout(r, 1500));
//     setStatus("Extracting Media Streams...");
//     setProgress(32);
  
//     // Phase 2: Downloading (30% to 95%)
//     await new Promise(r => setTimeout(r, 1000));
//     setStatus("Optimizing for MP4...");
//     setProgress(68);
    
//     await new Promise(r => setTimeout(r, 1200));
//     setStatus("Finalizing Download...");
//     setProgress(94);
  
//     // Phase 3: The "Polite" Error
//     await new Promise(r => setTimeout(r, 1500));
    
//     playError();
//     setLoading(false);
//     setProgress(0);
//     setStatus("");
//     setUrl("");
    
//     toast.error("Server is currently at capacity. Please try again later.", {
//       duration: 4000,
//       position: "bottom-right",
//       style: {
//         background: "#333",
//         color: "#fff",
//         borderRadius: "12px",
//       },
//     });
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden flex flex-col items-center justify-center px-4 transition-colors duration-300">
//       <Toaster
//         toastOptions={{
//           className: 'dark:bg-slate-800 dark:text-white bg-white text-slate-900',
//           style: {
//             borderRadius: '16px',
//             border: '1px solid rgba(255,255,255,0.1)',
//           },
//         }}
//       />
//       {/* BACKGROUND ANIMATED BLOBS */}
//       <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/10 dark:bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-rose-500/10 dark:bg-rose-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

//       <div className="relative z-10 w-full max-w-4xl text-center space-y-8 flex flex-col items-center">
        
//         {/* HERO SECTION */}
//         <div className="space-y-4">
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
//             Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Any Video</span> <br />
//             In Seconds.
//           </h1>
//           <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-lg mx-auto">
//             The fastest, most secure way to save your favorite YouTube content.
//           </p>
//         </div>

//         {/* DOWNLOADER CARD */}
//         <div className="w-full max-w-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-xl transition-all">
//           <div className="relative group">
//             <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
//               <Play className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
//             </div>
//             <input
//               type="text"
//               placeholder="Paste your YouTube link here..."
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
//             />
//           </div>

//           <button
//             onClick={handleDownload}
//             disabled={!url || loading}
//             className="group relative w-full mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 p-[1px] transition-all hover:shadow-lg disabled:opacity-50"
//           >
//             <div className="flex h-14 items-center justify-center gap-2 rounded-[15px] bg-white dark:bg-[#030712] transition-all group-hover:bg-transparent">
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin text-red-600 dark:text-white" />
//                   <span className="font-bold tracking-wide uppercase text-sm text-red-600 dark:text-white">Processing...</span>
//                 </>
//               ) : (
//                 <>
//                   <Download className="w-5 h-5 text-red-600 dark:text-white" />
//                   <span className="font-bold tracking-wide uppercase text-sm text-red-600 dark:text-white">Download MP4</span>
//                 </>
//               )}
//             </div>
//           </button>

//           {/* PROGRESS UI */}
//           {loading && (
//             <div className="mt-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-500">
//               <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
//                 <span className="italic">{status}</span>
//                 <span className="text-red-500">{progress}%</span>
//               </div>
              
//               <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden border border-slate-200 dark:border-white/5">
//                 <div 
//                   className="bg-gradient-to-r from-red-600 to-rose-500 h-full transition-all duration-700 ease-in-out"
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div>
//               <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
//                 Secure Tunnel Active
//               </p>
//             </div>
//           )}
//         </div>

//         {/* BENTO FEATURES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-12">
//           {[
//             { 
//               icon: <Zap className="text-amber-500" />, 
//               title: "Turbo Speed", 
//               desc: "Multi-threaded extraction for 10x faster processing.",
//               color: "hover:border-amber-500/50"
//             },
//             { 
//               icon: <Shield className="text-emerald-500" />, 
//               title: "Secure Tunnel", 
//               desc: "End-to-end encrypted streams. No data is ever stored.",
//               color: "hover:border-emerald-500/50"
//             },
//             { 
//               icon: <Globe className="text-blue-500" />, 
//               title: "Global Access", 
//               desc: "Support for 100+ regions and restricted content bypass.",
//               color: "hover:border-blue-500/50"
//             }
//           ].map((feature, i) => (
//             <div key={i} className={`group p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl transition-all duration-300 ${feature.color} hover:shadow-lg hover:-translate-y-1 text-left`}>
//               <div className="w-10 h-10 mb-4 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
//                 {feature.icon}
//               </div>
//               <h3 className="text-sm font-bold mb-2 tracking-tight">{feature.title}</h3>
//               <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Home