import { NavLink } from "react-router-dom"
import { Play } from "lucide-react"
import { useState } from "react";
// import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [userCount] = useState(Math.floor(Math.random() * (1420 - 1200 + 1) + 1200));
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-indigo-500/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        
        {/* LOGO SECTION */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-rose-600 shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all">
            <Play className="h-5 w-5 text-white fill-white/20" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Uni<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Downloader</span>
          </span>
        </NavLink>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2">
            {[
              { name: "Home", path: "/" },
              { name: "Formats", path: "/formats" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "About", path: "/about" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-red-400 bg-red-400/10 shadow-[0_0_15px_rgba(248,113,113,0.1)]"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-5 pl-5 border-l border-slate-800">
            {/* <ThemeToggle /> */}
            {/* <button className="relative group overflow-hidden px-6 py-2.5 text-sm font-bold text-white rounded-xl transition-all">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-rose-600 group-hover:from-red-500 group-hover:to-rose-500 transition-all"></span>
              <span className="relative">Get Started</span>
            </button> */}

            <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl shadow-inner">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-5 h-5 rounded-full border-2 border-white dark:border-[#030712] bg-slate-300 dark:bg-slate-700 overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-tighter text-slate-600 dark:text-slate-400">
                <span className="text-red-500 animate-pulse">●</span> {userCount} Users Active
              </span>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar