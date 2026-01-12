import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center h-9 w-16 px-1 bg-slate-800/50 border border-white/10 rounded-full transition-all hover:border-red-500/30 overflow-hidden shadow-inner group"
      aria-label="Toggle Theme"
    >
      {/* Moving Circle */}
      <div className={`
        absolute h-7 w-7 rounded-full bg-gradient-to-tr from-red-500 to-rose-600 shadow-lg shadow-red-500/40
        transition-all duration-500 transform flex items-center justify-center
        ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}
      `}>
        {theme === 'dark' ? (
          <Moon size={14} className="text-white fill-white/20" />
        ) : (
          <Sun size={14} className="text-white" />
        )}
      </div>

      {/* Background Icons */}
      <div className="w-full flex justify-between px-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
        <Sun size={12} className="text-white" />
        <Moon size={12} className="text-white" />
      </div>
    </button>
  );
};

export default ThemeToggle;