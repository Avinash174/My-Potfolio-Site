import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";

export const Hero = ({ profile }) => {
  if (!profile) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div
        className="glow-orb w-[500px] h-[500px] bg-[var(--accent)] top-[-10%] left-[-10%] opacity-20"
        style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-[var(--accent-secondary)] bottom-[10%] right-[-5%] opacity-15"
        style={{ animation: "pulse-glow 5s ease-in-out infinite 1s" }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] bg-[var(--accent-tertiary)] top-[50%] left-[40%] opacity-10"
        style={{ animation: "pulse-glow 6s ease-in-out infinite 2s" }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-[var(--fg-muted)]">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            I craft <span className="gradient-text">premium</span>
            <br />
            mobile experiences
            <span className="text-[var(--accent)]">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--fg-muted)] mb-12 max-w-xl leading-relaxed"
          >
            Hi, I'm{" "}
            <span className="text-[var(--fg)] font-semibold">
              {profile.name}
            </span>
            — a developer building scalable mobile systems at the intersection
            of
            <span className="text-[var(--accent-light)]">
              {" "}
              clean architecture
            </span>{" "}
            and
            <span className="text-[var(--accent-secondary)]">
              {" "}
              AI innovation
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-20"
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a href="#contact" className="btn-outline">
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "12+", label: "Projects Shipped" },
              { value: "5+", label: "Happy Clients" },
              { value: "∞", label: "Lines of Code" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card !p-5 !rounded-2xl text-center group cursor-default"
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-1 gradient-text"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--fg-muted)] uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
