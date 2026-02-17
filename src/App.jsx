import { usePortfolioViewModel } from "./viewmodels/usePortfolioViewModel";
import { Navbar } from "./views/components/Navbar";
import { Hero } from "./views/sections/Hero";
import { Projects } from "./views/sections/Projects";
import { Skills } from "./views/sections/Skills";
import { Experience } from "./views/sections/Experience";
import { Contact } from "./views/sections/Contact";
import { CustomCursor } from "./views/components/CustomCursor";
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
      <CustomCursor />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full"
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

            <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm">
              <div className="container">
                <p>
                  © {new Date().getFullYear()} Avinash Magar. Built with React &
                  Framer Motion.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
