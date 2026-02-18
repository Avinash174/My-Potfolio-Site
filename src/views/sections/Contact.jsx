import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Sparkles,
  ArrowUpRight,
  Copy,
  CheckCheck,
} from "lucide-react";
import { useState } from "react";

export const Contact = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  if (!profile) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const socials = [
    {
      icon: Github,
      href: profile.github,
      label: "GitHub",
      handle: "@Avinash174",
      color: "#6e5494",
      desc: "Open source & projects",
    },
    {
      icon: Linkedin,
      href: profile.linkedin,
      label: "LinkedIn",
      handle: "Avinash Magar",
      color: "#0077b5",
      desc: "Professional network",
    },
    {
      icon: Mail,
      href: `mailto:${profile.email}`,
      label: "Email",
      handle: profile.email,
      color: "#ea4335",
      desc: "Direct conversation",
    },
  ];

  return (
    <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
      {/* ─── Ambient Background ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, var(--accent-secondary) 40%, transparent 70%)",
          }}
        />
        {/* Floating orbs */}
        <div
          className="glow-orb w-[350px] h-[350px] bg-[var(--accent)] -top-[10%] right-[5%] opacity-15"
          style={{ animation: "pulse-glow 5s ease-in-out infinite" }}
        />
        <div
          className="glow-orb w-[250px] h-[250px] bg-[var(--accent-secondary)] bottom-[5%] left-[5%] opacity-10"
          style={{ animation: "pulse-glow 6s ease-in-out infinite 1s" }}
        />
        <div
          className="glow-orb w-[180px] h-[180px] bg-[var(--accent-tertiary)] top-[30%] left-[15%] opacity-8"
          style={{ animation: "pulse-glow 7s ease-in-out infinite 2s" }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          {/* ─── Section Badge ─── */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium text-[var(--accent-light)]">
              <Sparkles size={14} className="text-[var(--accent-secondary)]" />
              Available for opportunities
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
            </span>
          </motion.div>

          {/* ─── Headline ─── */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's build
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">something</span>
              {/* Underline accent */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            <span className="gradient-text-alt">great.</span>
          </motion.h2>

          {/* ─── Subtext ─── */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--fg-muted)] mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always excited to connect with fellow developers, startups, and
            teams building impactful{" "}
            <span className="text-[var(--accent-light)] font-medium">
              mobile
            </span>{" "}
            &{" "}
            <span className="text-[var(--accent-secondary)] font-medium">
              AI
            </span>{" "}
            products.
          </motion.p>

          {/* ─── Primary CTA ─── */}
          <motion.div variants={itemVariants} className="mb-20">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-semibold text-white overflow-hidden transition-shadow duration-500"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                boxShadow: "0 8px 40px rgba(99, 102, 241, 0.3)",
              }}
            >
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-secondary), var(--accent-tertiary))",
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Send size={20} />
                <span>Get In Touch</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </motion.a>

            {/* Copy email mini-button */}
            <div className="mt-5">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--accent-light)] transition-colors group/copy"
              >
                {copied ? (
                  <>
                    <CheckCheck size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy
                      size={14}
                      className="group-hover/copy:text-[var(--accent-light)]"
                    />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* ─── Social Cards ─── */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="group relative glass-card !p-6 text-left cursor-pointer"
              >
                {/* Hover glow bar at top */}
                <div
                  className="absolute top-0 left-[15%] right-[15%] h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${social.color}, transparent)`,
                    boxShadow: `0 0 20px ${social.color}40`,
                  }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${social.color}15`,
                      border: `1px solid ${social.color}25`,
                    }}
                  >
                    <social.icon
                      size={22}
                      className="transition-colors duration-300"
                      style={{ color: `${social.color}` }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-sm font-bold text-[var(--fg)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {social.label}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                    <p className="text-xs text-[var(--fg-muted)] truncate">
                      {social.desc}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ─── Decorative Divider ─── */}
          <motion.div
            variants={itemVariants}
            className="mt-24 pt-10 border-t border-[var(--border)]"
          >
            <p className="text-sm text-[var(--fg-muted)]">
              Designed & crafted with <span className="text-red-400">♥</span> by{" "}
              <span className="gradient-text font-semibold">Avinash Magar</span>
            </p>
            <p className="text-xs text-[var(--fg-muted)] mt-2 opacity-60">
              Built with React, Framer Motion & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
