import { usePortfolioViewModel } from "./viewmodels/usePortfolioViewModel";
import { Navbar } from "./views/components/Navbar";
import { Hero } from "./views/sections/Hero";
import { Projects } from "./views/sections/Projects";
import { Skills } from "./views/sections/Skills";
import { Experience } from "./views/sections/Experience";
import { Contact } from "./views/sections/Contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const {
    loading,
    isDarkMode,
    toggleTheme,
    profile,
    skills,
    projects,
    experience,
  } = usePortfolioViewModel();

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col items-center justify-center gap-6 transition-colors duration-300"
          >
            {/* Animated Logo */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="gradient-text">AM</span>
              <span className="text-[var(--fg-muted)]">.</span>
            </motion.div>
            {/* Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main>
              <Hero profile={profile} />
              <Projects projects={projects} />
              <Skills skills={skills} />
              <Experience experience={experience} />
              <Contact profile={profile} />
            </main>

            {/* Footer is integrated into Contact section */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
