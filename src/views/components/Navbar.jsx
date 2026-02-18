import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

export const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#top"
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="gradient-text">AM</span>
            <span className="text-[var(--fg-muted)]">.</span>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Projects", "Skills", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Avinash174"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-white/5 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-magar-1ba853168"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-white/5 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-[var(--fg-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
