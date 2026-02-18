import { motion } from "framer-motion";

export const Skills = ({ skills }) => {
  if (!skills) return null;

  const categories = [...new Set(skills.map((s) => s.category))];

  const categoryIcons = {
    Mobile: "📱",
    Backend: "⚡",
    Language: "💻",
    "ML/DL": "🧠",
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Orb */}
      <div className="glow-orb w-[400px] h-[400px] bg-[var(--accent-tertiary)] bottom-[10%] right-[-10%] opacity-10" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">Expertise</span>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Skills & <span className="gradient-text-alt">Technologies</span>
          </h2>
          <p className="text-[var(--fg-muted)] text-lg max-w-xl">
            Technologies I use to bring ideas to life and ship products that
            scale.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              className="glass-card !rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Category Label */}
                <div className="flex items-center gap-3 md:w-48 shrink-0">
                  <span className="text-2xl">{categoryIcons[cat] || "🔧"}</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-[var(--fg-muted)]">
                    {cat}
                  </span>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-8 bg-[var(--border)]" />

                {/* Skills */}
                <div className="flex flex-wrap gap-3 flex-1">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + catIdx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-5 py-2.5 rounded-xl bg-white/5 border border-[var(--border)] 
                                   hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]
                                   text-sm font-medium transition-all cursor-default"
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
