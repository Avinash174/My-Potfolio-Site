import { motion } from "framer-motion";

export const Skills = ({ skills }) => {
  if (!skills) return null;

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Powering the <span className="gradient-text">Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-lg mx-auto"
          >
            My specialized technology stack focused on high-performance mobile
            and AI systems.
          </motion.p>
        </div>

        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={cat} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 border-l-2 border-emerald-500 pl-4"
              >
                {cat}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                      }}
                      className="glass p-5 flex items-center justify-between group transition-all"
                    >
                      <span className="font-bold text-sm text-zinc-300 group-hover:text-white">
                        {skill.name}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-emerald-500 transition-colors"></div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
