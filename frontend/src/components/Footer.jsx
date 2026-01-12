import { NavLink } from "react-router-dom";
import { Play, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030712] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* BRAND COLUMN */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-rose-600 shadow-lg shadow-red-500/20">
              <Play className="h-4 w-4 text-white fill-white/20" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">UniDownloader</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            A premium, high-speed solution for archiving your favorite digital content safely and efficiently.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Platform</h4>
            <nav className="flex flex-col gap-2">
              <NavLink to="/" className="text-slate-500 hover:text-red-400 text-sm transition-colors">Home</NavLink>
              <NavLink to="/formats" className="text-slate-500 hover:text-red-400 text-sm transition-colors">Formats</NavLink>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Support</h4>
            <nav className="flex flex-col gap-2">
              <NavLink to="/how-it-works" className="text-slate-500 hover:text-red-400 text-sm transition-colors">Guide</NavLink>
              <NavLink to="/about" className="text-slate-500 hover:text-red-400 text-sm transition-colors">About</NavLink>
            </nav>
          </div>
        </div>

        {/* SOCIAL & NEWSLETTER */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"><Github size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"><Mail size={18} /></a>
          </div>
          <p className="text-[10px] text-slate-600 pt-4 uppercase tracking-[0.2em]">
            © 2026 Universal Media Downloader
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;