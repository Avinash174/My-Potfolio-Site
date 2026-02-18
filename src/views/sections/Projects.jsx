import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export const Projects = ({ projects }) => {
  if (!projects) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Orb */}
      <div className="glow-orb w-[500px] h-[500px] bg-[var(--accent-secondary)] top-[20%] left-[-15%] opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">Portfolio</span>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--fg-muted)] text-lg max-w-xl">
            A curated collection of projects that showcase my expertise in
            mobile development and AI systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card !p-0 group"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden rounded-t-[24px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.links?.source && project.links.source !== "#" && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl glass text-white hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.links?.caseStudy &&
                    project.links.caseStudy !== "#" && (
                      <a
                        href={project.links.caseStudy}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl glass text-white hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1 group-hover:text-[var(--accent-light)] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--fg-muted)]">
                      {project.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                </div>

                <p className="text-sm text-[var(--fg-muted)] mb-5 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
