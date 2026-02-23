import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Eye,
} from "lucide-react";

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const accentColors = [
  {
    glow: "rgba(99,102,241,0.25)",
    bar: "from-[#6366f1] to-[#a855f7]",
    badge: "rgba(99,102,241,0.15)",
    text: "#818cf8",
  },
  {
    glow: "rgba(168,85,247,0.25)",
    bar: "from-[#a855f7] to-[#ec4899]",
    badge: "rgba(168,85,247,0.15)",
    text: "#c084fc",
  },
  {
    glow: "rgba(6,182,212,0.25)",
    bar: "from-[#06b6d4] to-[#6366f1]",
    badge: "rgba(6,182,212,0.15)",
    text: "#22d3ee",
  },
  {
    glow: "rgba(236,72,153,0.25)",
    bar: "from-[#ec4899] to-[#a855f7]",
    badge: "rgba(236,72,153,0.15)",
    text: "#f472b6",
  },
  {
    glow: "rgba(16,185,129,0.25)",
    bar: "from-[#10b981] to-[#06b6d4]",
    badge: "rgba(16,185,129,0.15)",
    text: "#34d399",
  },
  {
    glow: "rgba(245,158,11,0.25)",
    bar: "from-[#f59e0b] to-[#ef4444]",
    badge: "rgba(245,158,11,0.15)",
    text: "#fbbf24",
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      {/* Outer glow on hover */}
      <motion.div
        className="absolute -inset-px rounded-[28px] pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 60px ${accent.glow}, 0 20px 60px rgba(0,0,0,0.5)`
            : `0 0 0px transparent, 0 8px 32px rgba(0,0,0,0.4)`,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Card */}
      <motion.div
        className="relative overflow-hidden rounded-[28px] h-full"
        animate={{
          y: hovered ? -6 : 0,
          rotateX: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: hovered
            ? `1px solid rgba(255,255,255,0.12)`
            : `1px solid rgba(255,255,255,0.06)`,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Animated top gradient bar */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.bar} z-20`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Shimmer sweep on hover */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: hovered ? "200% 0" : "-100% 0" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Inner top-left glow orb */}
        <motion.div
          className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: accent.glow, filter: "blur(40px)" }}
          animate={{ opacity: hovered ? 0.8 : 0.2, scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Image overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,10,15,0.1) 0%, rgba(10,10,15,0.7) 100%)",
            }}
          />

          {/* Colored tint overlay on hover */}
          <motion.div
            className="absolute inset-0"
            style={{ background: accent.glow }}
            animate={{ opacity: hovered ? 0.3 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Action buttons */}
          <motion.div
            className="absolute top-3 right-3 flex gap-2 z-10"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -8 }}
            transition={{ duration: 0.3, delay: hovered ? 0.1 : 0 }}
          >
            {project.links?.source && project.links.source !== "#" && (
              <a
                href={project.links.source}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Github size={13} />
                Code
              </a>
            )}
            {project.links?.caseStudy && project.links.caseStudy !== "#" && (
              <a
                href={project.links.caseStudy}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Eye size={13} />
                Live
              </a>
            )}
          </motion.div>

          {/* Index number badge */}
          <div
            className="absolute bottom-3 left-3 text-xs font-bold px-2 py-0.5 rounded-lg"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: accent.text,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <motion.h3
                className="text-lg font-bold leading-tight mb-0.5"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: hovered ? accent.text : "var(--fg)",
                  transition: "color 0.3s ease",
                }}
              >
                {project.title}
              </motion.h3>
              <p
                className="text-xs font-medium"
                style={{ color: accent.text, opacity: 0.8 }}
              >
                {project.subtitle}
              </p>
            </div>
            <motion.div
              animate={{
                x: hovered ? 3 : 0,
                y: hovered ? -3 : 0,
                color: hovered ? accent.text : "var(--fg-muted)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--fg-muted)", lineHeight: "1.6" }}
          >
            {project.description}
          </p>

          {/* Divider */}
          <motion.div
            className="mb-4"
            style={{
              height: "1px",
              background: hovered
                ? `linear-gradient(90deg, ${accent.glow}, transparent)`
                : "rgba(255,255,255,0.05)",
              transition: "background 0.4s ease",
            }}
          />

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="text-xs font-medium px-2.5 py-1 rounded-lg"
                style={{
                  background: hovered ? accent.badge : "rgba(255,255,255,0.05)",
                  border: `1px solid ${hovered ? `${accent.text}40` : "rgba(255,255,255,0.07)"}`,
                  color: hovered ? accent.text : "var(--fg-muted)",
                  transition: "all 0.3s ease",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = ({ projects }) => {
  if (!projects) return null;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div
        className="glow-orb w-[600px] h-[600px] bg-[var(--accent-secondary)] top-[10%] left-[-20%] opacity-[0.07]"
        style={{ animation: "pulse-glow 7s ease-in-out infinite" }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] bg-[var(--accent-tertiary)] bottom-[10%] right-[-15%] opacity-[0.06]"
        style={{ animation: "pulse-glow 9s ease-in-out infinite 2s" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
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
              Portfolio
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            A curated collection of real-world projects — from mobile apps to
            IoT systems and ML models.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Avinash174"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 group"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
              e.currentTarget.style.color = "var(--accent-light)";
              e.currentTarget.style.background = "rgba(99,102,241,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "var(--fg-muted)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <Github size={16} />
            View all on GitHub
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
