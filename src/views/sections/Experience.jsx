import { motion } from "framer-motion";
import { Calendar, Briefcase, ArrowRight } from "lucide-react";

export const Experience = ({ experience }) => {
  if (!experience) return null;

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Orb */}
      <div className="glow-orb w-[400px] h-[400px] bg-[var(--accent)] top-[30%] right-[-10%] opacity-10" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">Career</span>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[var(--fg-muted)] text-lg max-w-xl">
            My path through the world of software engineering and mobile
            development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent hidden md:block" />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-6 group"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:shadow-[0_0_16px_var(--accent-glow)] transition-all duration-300 shrink-0 mt-7 z-10" />
                </div>

                {/* Card */}
                <div className="flex-1 timeline-item">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3
                        className="text-lg font-bold group-hover:text-[var(--accent-light)] transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-[var(--accent)]" />
                        <span className="text-[var(--fg-muted)] font-medium text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                      <Calendar
                        size={14}
                        className="text-[var(--accent-secondary)]"
                      />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
