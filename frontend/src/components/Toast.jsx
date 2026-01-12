import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, X, Info } from "lucide-react";

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message && !isVisible) { // Add !isVisible check here
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, isVisible, onClose]); // Add isVisible to dependency array
  
  if (!message) return null;

  const styles = {
    success: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      shadow: "shadow-emerald-500/10"
    },
    error: {
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      text: "text-red-400",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      shadow: "shadow-red-500/10"
    },
    info: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      icon: <Info className="w-5 h-5 text-blue-500" />,
      shadow: "shadow-blue-500/10"
    }
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div
      className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className={`
        flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl
        ${currentStyle.bg} ${currentStyle.border} ${currentStyle.shadow}
      `}>
        <div className="flex-shrink-0">
          {currentStyle.icon}
        </div>
        
        <p className={`text-sm font-semibold tracking-wide ${currentStyle.text}`}>
          {message}
        </p>

        <button 
          onClick={() => setIsVisible(false)}
          className="ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;