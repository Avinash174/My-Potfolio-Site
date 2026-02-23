import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin, Sparkles } from "lucide-react";

const expColors = [
  {
    glow: "rgba(99,102,241,0.2)",
    dot: "#6366f1",
    text: "#818cf8",
    badge: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.3)",
  },
  {
    glow: "rgba(168,85,247,0.2)",
    dot: "#a855f7",
    text: "#c084fc",
    badge: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.3)",
  },
  {
    glow: "rgba(6,182,212,0.2)",
    dot: "#06b6d4",
    text: "#22d3ee",
    badge: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
  },
  {
    glow: "rgba(16,185,129,0.2)",
    dot: "#10b981",
    text: "#34d399",
    badge: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.3)",
  },
];

const ExperienceCard = ({ exp, index, isLast }) => {
  const [hovered, setHovered] = useState(false);
  const color = expColors[index % expColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex gap-6 group"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Timeline column */}
      <div className="hidden md:flex flex-col items-center">
        {/* Dot */}
        <motion.div
          className="relative mt-7 z-10 shrink-0"
          animate={{ scale: hovered ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ping ring */}
          {hovered && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: color.dot }}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
          <div
            className="w-3.5 h-3.5 rounded-full border-2 transition-all duration-300"
            style={{
              background: hovered ? color.dot : "var(--bg)",
              borderColor: color.dot,
              boxShadow: hovered ? `0 0 16px ${color.glow}` : "none",
            }}
          />
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: `linear-gradient(to bottom, ${color.dot}60, transparent)`,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-8">
        <motion.div
          className="relative overflow-hidden rounded-[20px] p-5 md:p-6"
          animate={{ y: hovered ? -3 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? color.border : "rgba(255,255,255,0.06)"}`,
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            boxShadow: hovered ? `0 8px 40px ${color.glow}` : "none",
            transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* Animated left accent bar */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
            style={{ background: color.dot }}
            animate={{ opacity: hovered ? 1 : 0.3, scaleY: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          />

          {/* Background glow */}
          <motion.div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
            style={{ background: color.glow, filter: "blur(30px)" }}
            animate={{ opacity: hovered ? 0.8 : 0.2 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative z-10 pl-2">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                {/* Role */}
                <motion.h3
                  className="text-base md:text-lg font-bold mb-1.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: hovered ? color.text : "var(--fg)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {exp.role}
                </motion.h3>

                {/* Company */}
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{
                      background: color.badge,
                      border: `1px solid ${color.border}`,
                      color: color.text,
                    }}
                  >
                    <Briefcase size={11} />
                    {exp.company}
                  </div>
                </div>
              </div>

              {/* Period */}
              <div
                className="flex items-center gap-1.5 text-xs font-medium shrink-0 px-3 py-1.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "var(--fg-muted)",
                }}
              >
                <Calendar size={12} style={{ color: color.text }} />
                {exp.period}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Experience = ({ experience }) => {
  if (!experience) return null;

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div
        className="glow-orb w-[500px] h-[500px] bg-[var(--accent)] top-[20%] right-[-15%] opacity-[0.07]"
        style={{ animation: "pulse-glow 7s ease-in-out infinite" }}
      />
      <div
        className="glow-orb w-[350px] h-[350px] bg-[var(--accent-secondary)] bottom-[10%] left-[-10%] opacity-[0.06]"
        style={{ animation: "pulse-glow 9s ease-in-out infinite 2s" }}
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
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "var(--accent-light)",
              }}
            >
              <Sparkles size={12} />
              Career
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            My path through the world of software engineering and mobile
            development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
