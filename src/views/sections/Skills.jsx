import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Code2, Brain } from "lucide-react";

const categoryConfig = {
  Mobile: {
    icon: <span className="text-xl">📱</span>,
    glow: "rgba(99,102,241,0.2)",
    bar: "from-[#6366f1] to-[#a855f7]",
    text: "#818cf8",
    badge: "rgba(99,102,241,0.12)",
    badgeBorder: "rgba(99,102,241,0.25)",
  },
  Backend: {
    icon: <span className="text-xl">⚡</span>,
    glow: "rgba(6,182,212,0.2)",
    bar: "from-[#06b6d4] to-[#6366f1]",
    text: "#22d3ee",
    badge: "rgba(6,182,212,0.12)",
    badgeBorder: "rgba(6,182,212,0.25)",
  },
  Language: {
    icon: <span className="text-xl">💻</span>,
    glow: "rgba(168,85,247,0.2)",
    bar: "from-[#a855f7] to-[#ec4899]",
    text: "#c084fc",
    badge: "rgba(168,85,247,0.12)",
    badgeBorder: "rgba(168,85,247,0.25)",
  },
  "ML/DL": {
    icon: <span className="text-xl">🧠</span>,
    glow: "rgba(16,185,129,0.2)",
    bar: "from-[#10b981] to-[#06b6d4]",
    text: "#34d399",
    badge: "rgba(16,185,129,0.12)",
    badgeBorder: "rgba(16,185,129,0.25)",
  },
};

const SkillCard = ({ category, skills, index }) => {
  const [hovered, setHovered] = useState(false);
  const config = categoryConfig[category] || categoryConfig["Mobile"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute -inset-px rounded-[22px] pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 40px ${config.glow}, 0 16px 40px rgba(0,0,0,0.4)`
            : `0 0 0 transparent`,
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="relative overflow-hidden rounded-[22px] p-6"
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"}`,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Animated top bar */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${config.bar}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Background glow orb */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: config.glow, filter: "blur(30px)" }}
          animate={{ opacity: hovered ? 0.9 : 0.3, scale: hovered ? 1.3 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Category header */}
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: config.badge,
              border: `1px solid ${config.badgeBorder}`,
            }}
          >
            {config.icon}
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: config.text }}
            >
              {category}
            </p>
            <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
              {skills.length} technologies
            </p>
          </div>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{
                delay: index * 0.08 + i * 0.04,
                duration: 0.4,
                hover: { duration: 0.2 },
              }}
              className="px-3.5 py-1.5 rounded-xl text-sm font-medium cursor-default transition-all duration-300"
              style={{
                background: hovered ? config.badge : "rgba(255,255,255,0.05)",
                border: `1px solid ${hovered ? config.badgeBorder : "rgba(255,255,255,0.07)"}`,
                color: hovered ? config.text : "var(--fg-muted)",
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Skills = ({ skills }) => {
  if (!skills) return null;

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div
        className="glow-orb w-[500px] h-[500px] bg-[var(--accent-tertiary)] bottom-[5%] right-[-15%] opacity-[0.07]"
        style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-[var(--accent)] top-[10%] left-[-10%] opacity-[0.06]"
        style={{ animation: "pulse-glow 6s ease-in-out infinite 1.5s" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-5"
          >
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.2)",
                color: "var(--accent-tertiary)",
              }}
            >
              <Cpu size={12} />
              Expertise
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Skills & <span className="gradient-text-alt">Technologies</span>
          </h2>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Technologies I use to bring ideas to life and ship products that
            scale.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, catIdx) => (
            <SkillCard
              key={cat}
              category={cat}
              skills={skills.filter((s) => s.category === cat)}
              index={catIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
