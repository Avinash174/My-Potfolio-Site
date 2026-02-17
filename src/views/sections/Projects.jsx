import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export const Projects = ({ projects }) => {
  if (!projects) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4"
            >
              Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Crafting Digital <br />
              <span className="gradient-text">Masterpieces</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-lg max-w-xs"
          >
            Turning complex problems into elegant, scalable solutions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="glass p-5 group flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                  {project.links.source && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.source}
                      className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.links.caseStudy}
                    className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={24} />
                  </motion.a>
                </div>
              </div>

              <div className="flex-1 flex flex-col px-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-1 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-bold text-zinc-500">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:border-emerald-500/30 group-hover:text-zinc-200 transition-all"
                    >
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
