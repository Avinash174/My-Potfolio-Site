import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

export const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12"
      style={{
        background: "rgba(5, 5, 5, 0.1)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold font-heading gradient-text"
        >
          AM
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["About", "Projects", "Skills", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-emerald-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="https://github.com/Avinash174"
            target="_blank"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.header>
  );
};
